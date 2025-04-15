"use client";
import dynamic from "next/dynamic";
const DynamicMap = dynamic(() => import("./Map.jsx"), {
  ssr: false,
});

export default function NextjsMap() {
  return <DynamicMap />;
}
