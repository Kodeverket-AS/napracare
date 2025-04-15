"use client";
import dynamic from "next/dynamic";
const DynamicMap = dynamic(() => import("./Map.jsx"), {
  ssr: false,
});

export function NextjsMap() {
  return <DynamicMap />;
}
