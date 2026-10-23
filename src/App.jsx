import { useState } from "react";
import { motion } from "motion/react";


import Star from "./assets/icon-star.svg";

import Button from "./components/Button";
import Thankyou from "./components/Thankyou";







function App() {

  const [currentValue, setCurrentValue] = useState("");

  const buttonHandler = (e) => {
    setCurrentValue(e)
  }

  const validHandler = (e) => {
    console.log("visible");
  }



  return (
    <>
      <div className="relative flex flex-col gap-20 justify-center items-center h-full">
        <article className="flex flex-col font-overpass rounded-xl gap-5 p-5 text-white bg-linear-to-b from-grey-925 to-grey-950 w-75 sm:w-100 md:w-150 lg:w-200">
          <img className="w-5" src={Star} alt="icon-star"></img>
          <h1 className="font-bold text-xl">How did we do?</h1>
          <p className="text-grey-500">Please let us know how we dit with your support request? All feedback is appreciated to help us improve our offering!</p>
          <ul className="flex justify-center gap-5">
            <Button onClick={() => buttonHandler({ value })} value={1} />
            <Button onClick={() => buttonHandler({ value })} value={2} />
            <Button onClick={() => buttonHandler({ value })} value={3} />
            <Button onClick={() => buttonHandler({ value })} value={4} />
            <Button onClick={() => buttonHandler({ value })} value={5} />
          </ul>
          <button onClick={validHandler} className="flex justify-center bg-orange p-3 rounded-full text-grey-950 cursor-pointer transition duration-300 hover:bg-white hover:text-grey-900">Submit</button>
        </article>
      </div>

    </>
  );
}

export default App;