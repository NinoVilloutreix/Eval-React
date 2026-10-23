import { useEffect, useState } from "react";

export default function Button({ value }) {




  return (
    <li className="flex bg-grey-900 w-12 h-12 rounded-full justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-grey-900">
      {value}
    </li>
  );
}
