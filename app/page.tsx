"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { userId } = useAuth();
  const { push } = useRouter();

  console.log({userId});

  useEffect(() => {
    if (userId) {
      push("/dashboard");    
    } else {
      push("/");
    }
  }, [userId]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-700 to-purple-300">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to ChatApp</h1>
      <div className="space-x-4">
        <Link 
          href="/sign-in" 
          className="bg-white text-indigo-700 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition"
        >
          Sign In
        </Link>
        <Link 
          href="/sign-up" 
          className="bg-indigo-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-800 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}