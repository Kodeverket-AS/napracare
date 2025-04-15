"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(
  () => import("@/components/map/map").then((element) => element.Map),
  {
    ssr: false,
  }
);

export function Map() {
  return <DynamicMap />;
}
