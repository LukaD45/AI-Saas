"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("aeb4f2f2-fc4b-4650-a7eb-9cfb722fc95c");
  }, []);

  return null;
};
