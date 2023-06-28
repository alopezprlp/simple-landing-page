"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h2>Something went wrong!</h2>
      <button className="bg-red-500 p-6 text-white" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
