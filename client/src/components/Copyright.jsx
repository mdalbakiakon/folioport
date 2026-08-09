import React from "react";
import dayjs from "dayjs";
import { Copyright as CopyrightIcon } from "lucide-react";

const Copyright = () => {
  const currYear = dayjs().format("YYYY");
  return (
    <footer className="w-full flex justify-center items-center p-2.5 text-[10px] text-center text-(--txt-sec)">
      Copyright <CopyrightIcon strokeWidth={2} className="inline-block w-2.5 h-2.5 text-(--txt-sec) relative bottom-px mx-1.25" /> {currYear} Md. Al Baki Akon. All rights reserved.
    </footer>
  );
};

export default Copyright;