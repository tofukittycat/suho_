import React from "react";

import CharmAdditionForm from "@/components/charmAddition/CharmAdditionForm";
import CharmImageAdditon from "@/components/charmAddition/CharmImageAdditon";
import CharmNameAddition from "@/components/charmAddition/CharmNameAddition";

export default function page() {
  return (
    <>
      <CharmNameAddition />
      <CharmImageAdditon />
    </>
  );
}
