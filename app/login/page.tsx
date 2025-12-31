"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Login() {
    return (
        <div className="min-h-screen w-full flex bg-white font-[Roboto,sans-serif]">
            {/* Left Side - Form Area */}
            <div className="w-full lg:w-[720px] shrink-0 flex flex-col items-center justify-center relative bg-white z-10 p-8">
                {/* Content Container (Width 505px from dump) */}
                <div className="w-full max-w-[505px] flex flex-col gap-[32px]">

                    {/* Header Group */}
                    <div className="flex flex-col items-center gap-[16px]">
                        <div className="w-[96px] h-[96px] relative flex items-center justify-center">
                            <Image src="/images/logo.png" alt="Logo" width={96} height={96} className="object-contain" />
                        </div>
                        <div className="text-center flex flex-col items-center">
                            <h1 className="text-[32px] leading-[41px] font-semibold text-[#000000]">
                                Welcome back 👋
                            </h1>
                            <p className="text-[#8692A6] text-[16px] leading-[25px] tracking-[0.005em]">
                                We are happy to have you back
                            </p>
                        </div>
                    </div>

                    {/* Register Form Container - Gap 50px */}
                    <div className="flex flex-col gap-[50px] w-full">

                        {/* Input Fields & Actions Container - Gap 24px */}
                        <div className="flex flex-col gap-[24px] w-full">

                            {/* Inputs Group - Gap 20px */}
                            <div className="flex flex-col gap-[20px] w-full">
                                {/* Email Address (Using 'Enter your email address' placeholder contextually, though dump label says Full Name for top input, standard login is Email) */}
                                <div className="flex flex-col gap-[8px]">
                                    <label htmlFor="email" className="text-[16px] font-medium text-[#9794AA]">Email Address</label>
                                    <div className="h-[56px] border border-[#9794AA] rounded-[6px] px-[20px] flex items-center">
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="bg-transparent w-full h-full outline-none text-[16px] text-[#9794AA] placeholder-[#9794AA] font-semibold"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="flex flex-col gap-[8px]">
                                    <label htmlFor="password" className="text-[16px] font-medium text-[#9794AA]">Password</label>
                                    <div className="h-[56px] bg-[#F5F6F7] border border-[#DBDBDB] rounded-[6px] px-[20px] flex items-center justify-between">
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Enter your password"
                                            className="bg-transparent w-full h-full outline-none text-[16px] text-[#757575] placeholder-[#757575] font-medium"
                                            required
                                        />
                                        <button type="button" className="opacity-100 transition-opacity">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#9794AA" />
                                                {/* Strike-through line for 'Hide' visual from dump */}
                                                <line x1="3" y1="3" x2="21" y2="21" stroke="#9794AA" strokeWidth="1.5" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Terms Checkbox */}
                            <div className="flex items-center gap-[14px]">
                                <div className="relative w-[20px] h-[20px] flex items-center justify-center">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        className="appearance-none w-[20px] h-[20px] bg-[#F7961F] rounded-[4px] cursor-pointer checked:bg-[#F7961F]"
                                        defaultChecked
                                    />
                                    {/* Custom Checkmark */}
                                    <svg className="absolute w-[12px] h-[12px] pointer-events-none" viewBox="0 0 12 10" fill="none">
                                        <path d="M1 5L4.5 9L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <label htmlFor="terms" className="text-[16px] font-medium text-[#CBCAD7] cursor-pointer">
                                    I agree to terms & conditions
                                </label>
                            </div>

                            {/* Buttons and Divider Section */}
                            <div className="flex flex-col gap-[20px] w-full">

                                {/* Login Button */}
                                <button className="w-full h-[56px] rounded-[39px] flex justify-center items-center bg-gradient-to-br from-[#FED136] to-[#F7961F] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                    <span className="text-[20px] font-medium text-black">Login</span>
                                </button>

                                {/* Or Divider */}
                                <div className="flex items-center gap-[14px] w-full">
                                    <div className="h-[1px] bg-[#686677] flex-grow"></div>
                                    <span className="text-[12px] font-normal text-[#CBCAD7]">Or</span>
                                    <div className="h-[1px] bg-[#686677] flex-grow"></div>
                                </div>

                                {/* Google Button (Black) */}
                                <button className="flex justify-center items-center gap-[16px] w-full h-[56px] bg-[#100F14] border border-[#100F14] rounded-[6px] hover:bg-black/90 transition-colors">
                                    <div className="w-[24px] h-[24px] relative">
                                        <svg viewBox="0 0 48 48" className="w-full h-full">
                                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                                        </svg>
                                    </div>
                                    <span className="text-[16px] font-medium text-white">Login with Google</span>
                                </button>

                                {/* Footer Link */}
                                <div className="flex justify-center items-center gap-[10px] pt-2">
                                    <span className="text-[16px] font-normal text-[#9794AA]">Don't have an account?</span>
                                    <Link href="/signup" className="text-[16px] font-normal text-[#9794AA] border-b border-[#9794AA] hover:text-[#757575] transition-colors">
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Right Side - Image/Illustration Container */}
            <div className="hidden lg:block flex-grow relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full shadow-[-6px_0px_6px_rgba(0,0,0,0.1)]"
                    style={{
                        backgroundImage: 'url(/images/signup_illustration.png)',
                        borderTopLeftRadius: '60px',
                        borderBottomLeftRadius: '60px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: '#fff' // Fallback
                    }}
                >
                </div>
            </div>
        </div>
    );
}
