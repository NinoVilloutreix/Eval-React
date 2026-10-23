import { useEffect, useState } from "react";
import ThanksImage from "../assets/illustration-thank-you.svg";

export default function Thankyou({ visible }) {
    return (
        < article className="flex absolute top-0 left-0 flex-col items-center font-overpass rounded-xl gap-5 p-5 text-white bg-linear-to-b from-grey-925 to-grey-950 w-75 sm:w-100 md:w-100 lg:w-150" >
            <img className="w-50" src={ThanksImage} alt="Thanks"></img>
            <h3 className="text-center flex justify-center bg-grey-900 p-3 rounded-full text-orange">You selected 4 out of 5</h3>
            <h2 className="text-center font-bold text-xl">Thank you!</h2>
            <p className="text-center text-grey-500">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </article >
    );
}