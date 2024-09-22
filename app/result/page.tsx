"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import businessman from "@/images/businessman.jpg";
import tired from "@/images/employee.jpeg";
import moderate from "@/images/moderate.jpg";

function Result() {
  const params = useSearchParams();
  const score = Number(params.get("score"));

  if (score > 10) {
    return (
      <div className="flex flex-col items-center p-5 gap-3 bg-green-400 h-screen">
        <p className="text-3xl">Your score is {params.get("score")}</p>
        <p className="text-xl">You are safe</p>
        <Image
          className="w-64 object-cover rounded-md border-2 border-green-600"
          src={businessman}
          alt="A guy smiling"
          width={1000}
        />
      </div>
    );
  } else if (score < 10 && score > 5) {
    return (
      <div className="flex flex-col items-center p-5 gap-3 bg-orange-400 h-screen">
        <p className="text-3xl">Your score is {params.get("score")}</p>
        <p className="text-xl">You are moderately fine.</p>
        <Image
          className="w-64 object-cover rounded-md border-2 border-green-600"
          src={moderate}
          alt="A guy smiling"
          width={1000}
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center p-5 gap-3 bg-red-400 h-screen">
        <p className="text-3xl">Your score is {params.get("score")}</p>
        <p className="text-xl text-center">
          Your mental health is important. If you&apos;re experiencing
          challenges, we encourage you to seek professional medical support.
          <br /> Prioritizing your well-being is a crucial step toward a
          healthier and more fulfilling life.
        </p>
        <Image
          className="w-64 object-cover rounded-md border-2 border-green-600 mt-5"
          src={tired}
          alt="A guy smiling"
          width={1000}
        />
      </div>
    );
  }
}

export default function Results() {
  return (
    <Suspense>
      <Result />
    </Suspense>
  );
}
