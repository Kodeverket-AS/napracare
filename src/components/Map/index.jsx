"use client";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/Map/Map.tsx"), {
  ssr: false,
});
