"use client";
import dynamic from "next/dynamic";
export const DynamicMap = dynamic(() => import("./Map"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export function NextMap() {
  return <DynamicMap />;
}
