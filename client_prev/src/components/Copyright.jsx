import React from "react";
import dayjs from "dayjs";
import { Copyright as CopyrightIcon } from "lucide-react";

const Copyright = () => {
  const currYear = dayjs().format("YYYY");
  return (
    <footer className="w-full p-2.5 text-[10px] text-center text-(--txt-sec) select-none">
      <span className="inline-flex items-center whitespace-nowrap">
        Copyright
        <CopyrightIcon strokeWidth={2} className="inline w-2.5 h-2.5 text-(--txt-sec) relative bottom-px mx-1.25 shrink-0" />
      </span>
      {currYear} Md. Al Baki Akon. All rights reserved.
    </footer>
  );
};

export default Copyright;