// import { ReadlineParser, SerialPortMock } from "serialport";

// const path = "/dev/example";
// SerialPortMock.binding.createPort(path);
// const port = new SerialPortMock({ path, baudRate: 9600 });
// port.write("ROBOT POWER ON");
// const parser = new ReadlineParser();

// port.on("open", () => {
//   port.port.emitData("PORT ON");
// });

// port.pipe(parser);
// port.on("data", console.log);

// ----------------------------------------------------------------------

const { MockBinding } = require("@serialport/binding-mock");
const { SerialPortStream } = require("@serialport/stream");
const { ReadlineParser } = require("@serialport/parser-readline");

// Create a port and enable the echo and recording.
MockBinding.createPort("/dev/ROBOT", { echo: true, record: true });
const port = new SerialPortStream({
  binding: MockBinding,
  path: "/dev/ROBOT",
  baudRate: 14400,
});

/* Add some action for incoming data. For example,
 ** print each incoming line in uppercase */
const parser = new ReadlineParser();
port.pipe(parser).on("data", (line) => {
  console.log(line.toUpperCase());
});

// wait for port to open...
port.on("open", () => {
  // ...then test by simulating incoming data
  setInterval(() => {
    for (let i = 0; i < 5; i++) {
      port.port.emitData("Hello, world!");
    }
    port.port.emitData("\n");
  }, 5000);
});

/* Expected output:
HELLO, WORLD!
*/
