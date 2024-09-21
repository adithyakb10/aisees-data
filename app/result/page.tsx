"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import businessman from "@/images/businessman.jpg";

export default function Result() {
  const params = useSearchParams();
  const score = Number(params.get("score"));

  if (score > 10)
    return (
      <div className="flex flex-col items-center p-5 gap-3 bg-green-400 h-screen">
        <p className="text-2xl">Your score is {params.get("score")}</p>
        <p className="text-2xl">You are safe</p>
        <Image
          className="w-64 object-cover rounded-md border-2 border-green-600"
          src={businessman}
          alt="A guy smiling"
          width={1000}
        />
      </div>
    );
}
