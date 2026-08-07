import React from "react";
import dayjs from "dayjs";

const Copyright = () => {
  const currYear = dayjs().format("YYYY");
  return (
    <footer className="w-full p-2.5 text-[10px] text-center text-(--txt-sec)">
      Copyright &copy; {currYear} Md. Al Baki Akon. All rights reserved.
    </footer>
  );
};

export default Copyright;
