"use client"
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/app/Assets/Logo.png"
import { useState } from 'react'

export default function LoginForm() {
 
  const [isChecked, setIsChecked] = useState(false);

  return (
  
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Title */}
        <div className="flex flex-col items-center">
          <Image
            src={Logo}
            alt="Nike Logo"
            width={60}
            height={22}
            className="mb-6"
          />
          <h2 className="text-2xl font-bold text-center">
            YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
          </h2>
        </div>

        {/* Form Section */}
        <form className="mt-12 space-y-6">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-3 py-2 border-[1.5px] rounded-[4px] border-slate-200 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Checkbox and Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <span
                className={`w-5 h-5 border border-gray-300 rounded mr-2 flex items-center justify-center ${
                  isChecked ? "bg-black" : "bg-white"
                }`}
              >
                {isChecked && (
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                )}
              </span>
              <span className="text-sm text-slate-500">Keep me signed in</span>
            </label>
            <Link href="#" className="text-sm text-slate-400 hover:underline">
              Forgotten your password?
            </Link>
          </div>

          {/* Privacy Policy */}
          <p className="text-sm text-center text-slate-500">
            By logging in, you agree to Nike&apos;s{" "}
            <Link href="#" className="underline text-slate-600 hover:text-black">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline text-slate-600 hover:text-black">
              Terms of Use
            </Link>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
          >
            SIGN IN
          </button>
        </form>

        {/* Join Us Section */}
        <p className="text-center text-sm">
          <span className="text-slate-500">Not a Member? </span>
          <Link href="#" className="text-black underline hover:no-underline">
            Join Us
          </Link>
        </p>
      </div>
    
    </div>
  );
}
 