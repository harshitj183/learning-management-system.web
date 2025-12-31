"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Signup() {
    const [step, setStep] = useState(1);
    const router = useRouter();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call and transition to success step
        setStep(2);
    };

    if (step === 2) {
        return (
            <div className="min-h-screen w-full flex bg-white font-[Roboto,sans-serif]">
                {/* Left Side - Success Content */}
                <div className="w-full lg:w-[720px] shrink-0 flex flex-col items-center justify-center relative bg-white z-10">
                    <div className="w-full max-w-[528px] flex flex-col items-center gap-[67px]">

                        {/* Congratulations Graphic & Text Group */}
                        <div className="flex flex-col items-center gap-[27px] w-full max-w-[406px]">
                            {/* Graphic */}
                            <div className="w-[406px] h-[197px] relative flex items-center justify-center">
                                <Image
                                    src="/images/congratulations_banner.png"
                                    alt="Congratulations"
                                    width={406}
                                    height={197}
                                    className="object-contain"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col items-center gap-[9px] w-full text-center">
                                <h2 className="text-[25px] font-semibold text-[#070707] font-['General_Sans',sans-serif] leading-[140%]">
                                    Congratulations
                                </h2>
                                <h3 className="text-[18px] font-medium text-[#070707] font-['General_Sans',sans-serif] leading-[140%]">
                                    Your application has been submitted!
                                </h3>
                                <p className="text-[18px] font-medium text-[#070707] font-['General_Sans',sans-serif] leading-[140%] max-w-[385px]">
                                    You will be notified once the admin reviews your qualifications and documents.
                                </p>
                            </div>
                        </div>

                        {/* Status & Action */}
                        <div className="flex flex-col items-center gap-[35px] w-full max-w-[406px]">
                            {/* Status Badge */}
                            <div className="flex items-center gap-[19px]">
                                <span className="text-[18px] font-medium text-[#070707] font-['General_Sans',sans-serif]">Current Status</span>
                                <div className="flex items-center justify-center px-[10px] py-[5px] bg-[#E0E0E0] rounded-[23px]">
                                    <span className="text-[13px] font-normal text-[#4B4B4B] font-['General_Sans',sans-serif]">Pending Verification</span>
                                </div>
                            </div>

                            {/* Dashboard Button */}
                            <button
                                onClick={() => router.push('/dashboard')}
                                className="w-[528px] h-[64px] rounded-[40px] flex justify-center items-center bg-gradient-to-br from-[#FED136] to-[#F7961F] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                            >
                                <span className="text-[20px] font-medium text-black font-roboto">Go to Dashboard</span>
                            </button>
                        </div>

                    </div>
                </div>

                {/* Right Side - Image/Illustration Container (Same as step 1) */}
                <div className="hidden lg:block flex-grow relative h-screen">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full shadow-[-6px_0px_6px_rgba(0,0,0,0.1)]"
                        style={{
                            backgroundImage: 'url(/images/signup_illustration.png)',
                            borderTopLeftRadius: '60px',
                            borderBottomLeftRadius: '60px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundColor: '#fff'
                        }}
                    >
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex bg-white font-[Roboto,sans-serif]">
            {/* Left Side - 720px width approx relative to 1440px desktop */}
            <div className="w-full lg:w-[720px] shrink-0 p-8 flex flex-col items-center justify-center relative bg-white z-10">
                <div className="w-full max-w-[528px] flex flex-col gap-8">

                    {/* Header Group */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-24 h-24 relative flex items-center justify-center">
                            <Image src="/images/logo.png" alt="Logo" width={96} height={96} className="object-contain" />
                        </div>
                        <h1 className="text-[32px] leading-[41px] font-semibold text-[#100F14] text-center">
                            Create Your Parent Account
                        </h1>
                    </div>

                    {/* Google Button */}
                    <button className="flex justify-center items-center gap-[16px] w-full h-[64px] bg-[#F5F6F7] border border-[#DBDBDB] rounded-[10px] hover:bg-gray-100 transition-colors">
                        <div className="w-7 h-7 relative">
                            <svg viewBox="0 0 48 48" className="w-full h-full">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                            </svg>
                        </div>
                        <span className="text-[16px] font-medium text-[#19181F]">Create account with Google</span>
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-[23px] w-full">
                        <div className="h-[1.5px] bg-[#CBCAD7] opacity-80 flex-grow"></div>
                        <span className="text-[18px] font-medium text-[#686677]">Or</span>
                        <div className="h-[1.5px] bg-[#CBCAD7] opacity-80 flex-grow"></div>
                    </div>

                    {/* Form Fields */}
                    <form onSubmit={handleSignup} className="flex flex-col gap-[28px] w-full">
                        <div className="flex flex-col gap-[24px]">
                            <div className="flex flex-col gap-[8px]">
                                <label htmlFor="email" className="text-[16px] font-medium text-[#9794AA]">Email Address</label>
                                <div className="h-[64px] bg-[#F5F6F7] border border-[#DBDBDB] rounded-[6px] px-[20px] flex items-center">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="bg-transparent w-full h-full outline-none text-[16px] text-[#100F14] placeholder-[#757575] font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-[8px]">
                                <label htmlFor="fullname" className="text-[16px] font-medium text-[#9794AA]">Full Name</label>
                                <div className="h-[64px] bg-[#F5F6F7] border border-[#DBDBDB] rounded-[6px] px-[20px] flex items-center">
                                    <input
                                        id="fullname"
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="bg-transparent w-full h-full outline-none text-[16px] text-[#100F14] placeholder-[#757575] font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-[8px]">
                                <label htmlFor="password" className="text-[16px] font-medium text-[#9794AA]">Password</label>
                                <div className="h-[64px] bg-[#F5F6F7] border border-[#DBDBDB] rounded-[6px] px-[20px] flex items-center justify-between">
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Create your password"
                                        className="bg-transparent w-full h-full outline-none text-[16px] text-[#100F14] placeholder-[#757575] font-medium"
                                        required
                                    />
                                    <button type="button" className="opacity-60 hover:opacity-100 transition-opacity">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#49475A" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-[32px] mt-2">
                            <button className="w-full h-[64px] rounded-[40px] flex justify-center items-center bg-gradient-to-br from-[#FED136] to-[#F7961F] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" type="submit">
                                <span className="text-[20px] font-medium text-black">Sign up</span>
                            </button>

                            <div className="text-[16px] font-normal text-[#49475A] text-center">
                                Already have an account? <Link href="/login" className="font-semibold hover:underline">Login</Link>
                            </div>

                            <div className="flex gap-[24px] items-center opacity-80">
                                <a href="#" className="w-[32px] h-[32px] bg-[#686677] mask-icon hover:bg-[#3b5998] transition-colors" style={{ maskImage: 'url(/icons/facebook.svg)', WebkitMaskImage: 'url(/icons/facebook.svg)' }}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#686677] hover:text-blue-600 transition-colors">
                                        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-[32px] h-[32px]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#686677] hover:text-blue-400 transition-colors">
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05-.78-.83-1.88-1.35-3.1-1.35-2.35 0-4.25 1.9-4.25 4.25 0 .33.04.65.11.95-3.53-.18-6.66-1.87-8.76-4.44-.36.63-.57 1.36-.57 2.14 0 1.47.75 2.77 1.89 3.53-.7-.02-1.35-.21-1.93-.53v.05c0 2.06 1.47 3.78 3.41 4.17-.36.1-.73.15-1.11.15-.27 0-.54-.02-.8-.08.54 1.69 2.11 2.92 3.97 2.96-1.46 1.14-3.29 1.82-5.28 1.82-.34 0-.68-.02-1.02-.06 1.89 1.21 4.12 1.91 6.51 1.91 7.82 0 12.1-6.47 12.1-12.1 0-.18 0-.37-.01-.55.84-.59 1.56-1.33 2.13-2.19z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-[32px] h-[32px]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#686677] hover:text-pink-600 transition-colors">
                                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-[32px] h-[32px]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#686677] hover:text-blue-700 transition-colors">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Side - Image/Illustration Container (Same as step 1) */}
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
