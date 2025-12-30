"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
    return (
        <div className="min-h-screen w-full flex bg-background">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center animate-fade-in relative">
                <div className="max-w-md mx-auto w-full space-y-8">
                    <div className="space-y-2">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl mb-6">
                            E
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Welcome back 👋</h1>
                        <p className="text-muted-foreground">Please enter your details to sign in.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                                Email address
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 focus:border-primary focus:ring-primary/20"
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                                    Password
                                </label>
                                <Link href="#" className="text-sm text-primary hover:underline">Forgot password?</Link>
                            </div>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 focus:border-primary focus:ring-primary/20"
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <label htmlFor="remember" className="text-sm text-muted-foreground">Remember me for 30 days</label>
                        </div>

                        <button
                            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-white hover:bg-secondary-hover h-11 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or</span>
                        </div>
                    </div>

                    <button className="w-full flex h-11 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-muted hover:text-accent-foreground transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Login with Google
                    </button>

                    <div className="text-center text-sm text-muted-foreground">
                        Don't have an account? <Link href="/signup" className="font-semibold text-primary hover:underline">Sign up</Link>
                    </div>
                </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:flex w-1/2 bg-muted items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-50/50" />
                {/* Decoration */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-300/50 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-300/50 rounded-full blur-3xl" />

                <div className="relative w-full max-w-lg">
                    <div className="aspect-square bg-white rounded-2xl shadow-2xl p-4 flex items-center justify-center">
                        <div className="text-center space-y-4">
                            <div className="text-6xl">✨</div>
                            <h3 className="text-2xl font-bold text-foreground">Welcome Back</h3>
                            <p className="text-muted-foreground">Continue where you left off and achieve your goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
