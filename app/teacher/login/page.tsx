"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function TeacherLogin() {
    return (
        <div className="min-h-screen w-full flex bg-white font-[Roboto,sans-serif]">
            {/* Left Side - Form Area */}
            <div className="w-full lg:w-[720px] shrink-0 flex flex-col items-center justify-center relative bg-white z-10 p-8">
                {/* Content Container */}
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
                                Login to continue as Teacher
                            </p>
                        </div>
                    </div>

                    {/* Login Form Container */}
                    <div className="flex flex-col gap-[50px] w-full">

                        {/* Input Fields & Actions Container */}
                        <div className="flex flex-col gap-[24px] w-full">

                            {/* Inputs Group */}
                            <div className="flex flex-col gap-[20px] w-full">
                                {/* Email Address */}
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
                                    <div className="h-[56px] border border-[#9794AA] rounded-[6px] px-[20px] flex items-center">
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Enter your password"
                                            className="bg-transparent w-full h-full outline-none text-[16px] text-[#9794AA] placeholder-[#9794AA] font-semibold"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Remember & Forgot */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 accent-[#FDC832]" />
                                    <span className="text-[14px] text-[#696F79]">Remember me</span>
                                </label>
                                <Link href="/teacher/forgot-password" className="text-[14px] text-[#FDC832] hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>

                            {/* Login Button */}
                            <Link
                                href="/teacher/dashboard"
                                className="h-[56px] bg-[#FDC832] rounded-[6px] flex items-center justify-center text-[16px] font-semibold text-[#000000] hover:bg-[#fdd45c] transition-colors"
                            >
                                Login
                            </Link>
                        </div>

                        {/* Register Link */}
                        <div className="text-center">
                            <p className="text-[16px] text-[#8692A6]">
                                Don't have an account?{" "}
                                <Link href="/teacher/signup" className="text-[#FDC832] font-semibold hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#FFF9E6] to-[#FFEFB3] items-center justify-center p-12 relative overflow-hidden">
                <div className="relative z-10 max-w-md">
                    <Image
                        src="/images/login_illustration.png"
                        alt="Teacher Illustration"
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-[#FDC832]/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#FDC832]/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}
