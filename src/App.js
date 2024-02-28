// import "./App.css";
// import Header from "./components/header";
// import Speed from "./components/speed";
// import Footer from "./components/footer";
// import { useAccelerationEffect, useKeyPressEffect } from "./hooks/effects";

// const App = () => {
//   useAccelerationEffect();
//   useKeyPressEffect();

//   return (
//     <div className="flex flex-col justify-between items-center text-center w-[800px] h-[480px] p-10 bg-black text-white ">
//       <Header />
//       <Speed />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [gpioState, setGpioState] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://raspberry-pi-ip:3001/api/gpio-state"
        );
        setGpioState(response.data.state);
      } catch (error) {
        console.error("Error fetching GPIO state:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>GPIO State: {gpioState}</h1>
    </div>
  );
}

export default App;
