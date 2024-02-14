import { useEffect, useState } from "react";
import { TiBatteryHigh } from "react-icons/ti";
import "./App.css";

function App() {
  const [energy, setEnergy] = useState(75); // 0 - 100
  const [IMD, setIMD] = useState(0); // 0 - off, 1 - good, 2 - error
  const [PCC, setPCC] = useState(0);
  const [speed, setSpeed] = useState(0); // 0 - 80

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress, true);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "1") {
      setIMD((curr) => (curr + 1) % 3);
    }
    if (e.key === "2") {
      setPCC((curr) => (curr + 1) % 3);
    }
    if (e.key === " ") {
      setSpeed((curr) => curr + 1);
      setEnergy((curr) => curr - 0.05);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center text-center w-[800px] h-[480px] p-10 bg-black text-white ">
      {/* header */}
      <div className="flex flex-row justify-between items-center w-fit gap-8">
        <div className="flex flex-row justify-center items-center gap-2">
          <p className="">IMD</p>
          <div
            className={`w-2 h-2 rounded-full ${
              IMD == 0
                ? "bg-gray-600"
                : IMD == 1
                ? "bg-green-500"
                : "bg-red-600"
            }`}
          ></div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <p className="">PCC</p>
          <div
            className={`w-2 h-2 rounded-full ${
              PCC == 0
                ? "bg-gray-600"
                : PCC == 1
                ? "bg-green-500"
                : "bg-red-600"
            }`}
          ></div>
        </div>
        <div>
          <p className="">60.4 A</p>
        </div>
      </div>
      {/* speed */}
      <div className="relative flex flex-col gap-5 border-solid border-2 rounded-full w-60 h-60 justify-center items-center">
        {/* <div className="absolute"> */}
        <p className="absolute left-2 text-xs text-center z-10">0</p>
        <p className="absolute left-[34px] top-[44px] text-xs text-center z-10">
          20
        </p>
        <p className="absolute left-[108px] top-[6px] text-xs text-center z-10">
          40
        </p>
        <p className="absolute right-[34px] top-[44px] text-xs text-center z-10">
          60
        </p>
        <p className="absolute right-2 text-xs text-center z-10">80</p>
        {/* <div className="absolute left-0 bg-green-200 w-1 h-1 border-l-1 border-solid border-transparent"></div> */}
        <div className="w-full h-full">
          <div className="needle z-0 drop-shadow-[0_0px_4px_#00FFF7]"></div>
        </div>
        <div className="absolute flex flex-row items-end">
          <p className="text-6xl font-bold">{speed}</p>
          <p className="text-base">mph</p>
        </div>
      </div>
      {/* footer */}
      <div className="flex flex-col justify-between w-fit">
        {/* energy bar */}
        <div className="w-80 h-1 bg-[#00FFF7] bg-opacity-20 ">
          <div
            className="h-1 bg-[#00FFF7] drop-shadow-[0_0px_8px_#00FFF7] shadow-cyan-400"
            style={{ width: `${(energy / 100) * 320}px` }}
          ></div>
        </div>
        {/* status numbers */}
        <div className="flex flex-row justify-between py-1">
          <div className="flex flex-row justify-center items-center gap-1">
            <TiBatteryHigh size={30} color="white" />
            <p>96%</p>
          </div>
          <p>100.1 V</p>
        </div>
      </div>
    </div>
  );
}

export default App;
