"use client";
import { BarLoader } from "react-spinners";
import React from "react";

const Loading = () => {
  return (
    <div>
      <BarLoader className="mt-4" width={"100%"} color="#9333ea" />
    </div>
  );
};

export default Loading;
