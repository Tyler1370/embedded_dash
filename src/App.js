import "./App.css";
import Header from "./components/header";
import Speed from "./components/speed";
import Footer from "./components/footer";
import { useAccelerationEffect, useKeyPressEffect } from "./hooks/effects";

const App = () => {
  useAccelerationEffect();
  useKeyPressEffect();

  return (
    <div className="flex flex-col justify-between items-center text-center w-[800px] h-[480px] p-10 bg-black text-white ">
      <Header />
      <Speed />
      <Footer />
    </div>
  );
};

export default App;
