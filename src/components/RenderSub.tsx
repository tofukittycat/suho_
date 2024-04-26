import React from "react";

import Logo from "../../public/imgs/big_logo.svg";

export default function RenderSub() {
  return (
    <div className="flex h-screen max-w-[30rem] flex-col content-between py-10">
      <div className="">
        <Logo />
      </div>
    </div>
  );
}
