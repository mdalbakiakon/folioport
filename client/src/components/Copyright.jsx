import React from "react";
import dayjs from "dayjs";

const Copyright = () => {
  const currYear = dayjs().format("YYYY");
  return (
    <footer className="w-full py-5 text-center text-sm text-(--txt-sec)">
      Copyright &copy; {currYear} Md. Al Baki Akon. All rights reserved.
    </footer>
  );
};

export default Copyright;
