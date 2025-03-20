"use client";

import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Oops! Page not found.</p>
      <p className="text-gray-400 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2"
      >
        <FiHome className="text-xl" /> Go Back Home
      </Link>
    </div>
  );
}
