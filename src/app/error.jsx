"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Something went wrong!</h1>
      <p className="text-lg mt-2 max-w-5xl mx-auto px-4">
        {error.message || "An unexpected error occurred."}
      </p>
      <div className="mt-6 space-x-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-500 rounded-md text-white hover:bg-blue-600"
        >
          Try Again
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-gray-700 rounded-md text-white hover:bg-gray-800"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
