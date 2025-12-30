"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
            <div className="min-h-screen w-full flex bg-background items-center justify-center animate-fade-in relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full bg-blue-50/30 -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200/20 rounded-full blur-3xl -z-10" />

                <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center items-center text-center space-y-6">
                        <div className="w-20 h-20 bg-green-100/50 rounded-full flex items-center justify-center mb-4 animate-bounce">
                            <span className="text-4xl">🎉</span>
                        </div>

                        <h2 className="text-4xl font-extrabold text-foreground italic font-serif">Congratulations!</h2>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-foreground">Your account has been created.</h3>
                            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                                You will be notified once the admin reviews your application and documents.
                            </p>
                        </div>

                        <div className="w-full flex flex-col gap-3 pt-6">
                            <button
                                onClick={() => router.push('/dashboard')}
                                className="w-full py-3 rounded-full bg-secondary text-white font-bold text-lg hover:bg-secondary-hover shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                            >
                                Go to Dashboard
                            </button>
                            <div className="flex justify-between text-xs text-muted-foreground px-4">
                                <span>Current Status:</span>
                                <span className="text-yellow-600 font-medium">Pending Review</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="hidden md:flex w-1/2 bg-blue-50 items-center justify-center p-8 relative">
                        <div className="relative w-full max-w-xs">
                            <div className="aspect-square bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center gap-4">
                                <span className="text-6xl">✨</span>
                                <div className="h-2 w-20 bg-gray-200 rounded-full" />
                                <div className="h-2 w-16 bg-gray-200 rounded-full" />
                            </div>
                            {/* Floating elements */}
                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">✓</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex bg-background">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center animate-fade-in relative">
                <div className="max-w-md mx-auto w-full space-y-8">
                    <div className="space-y-2">
                        <Link href="/" className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl mb-6 hover:opacity-90 transition-opacity">
                            E
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Create Your Parent Account</h1>
                        <p className="text-muted-foreground">Start your journey with us today.</p>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex-1 py-2.5 border border-border rounded-lg flex items-center justify-center gap-2 hover:bg-muted transition-colors text-sm font-medium">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Sign up with Google
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or</span>
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={handleSignup}>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                                Email address
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 focus:border-primary focus:ring-primary/20"
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 focus:border-primary focus:ring-primary/20"
                                id="phone"
                                placeholder="+1 (555) 000-0000"
                                type="tel"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 focus:border-primary focus:ring-primary/20"
                                id="password"
                                type="password"
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        <button
                            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-white hover:bg-secondary-hover h-11 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                            type="submit"
                        >
                            Next Step
                        </button>
                    </form>

                    <div className="text-center text-sm text-muted-foreground">
                        Already have an account? <Link href="/login" className="font-semibold text-primary hover:underline">Login</Link>
                    </div>

                    <div className="flex justify-center gap-4 mt-8 opacity-50">
                        {/* Social Icons Placeholder */}
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    </div>
                </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:flex w-1/2 bg-muted items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-50/50" />
                {/* Decoration */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-300 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-30" />

                <div className="relative w-full max-w-lg">
                    <div className="aspect-square bg-white rounded-2xl shadow-2xl p-4 flex items-center justify-center">
                        {/* Recreating the illustration vibe from the user's image roughly with CSS shapes or placeholder text if image not available */}
                        <div className="text-center space-y-4">
                            <div className="text-6xl">🎓</div>
                            <h3 className="text-2xl font-bold text-foreground">Join the Community</h3>
                            <p className="text-muted-foreground">Unlock a world of knowledge and connect with the best educators.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
