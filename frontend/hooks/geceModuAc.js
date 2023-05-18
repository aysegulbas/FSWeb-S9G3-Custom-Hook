import { useState } from "react";
import uselocalStorageKullan from "./localStorageKullan";

function geceModuAc() {
  const [geceModular, setGeceModular] = uselocalStorageKullan(
    "geceModu",
    false
  );

  return [geceModular, setGeceModular];
}

export default geceModuAc;
