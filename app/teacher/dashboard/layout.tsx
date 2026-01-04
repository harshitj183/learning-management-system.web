"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function TeacherDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { label: "Dashboard", href: "/teacher/dashboard", icon: "home" },
        { label: "Course Management", href: "/teacher/dashboard/courses", icon: "courses" },
        { label: "Quiz Management", href: "/teacher/dashboard/quiz", icon: "quiz" },
        { label: "Manage Students", href: "/teacher/dashboard/students", icon: "students" },
        { label: "Messages", href: "/teacher/dashboard/messages", icon: "messages" },
    ];

    return (
        <div className="min-h-screen bg-[#F5F4F9] flex font-roboto text-slate-800">
            {/* Sidebar - Desktop */}
            <aside className="hidden md:flex flex-col w-[280px] bg-white h-screen fixed top-0 left-0 z-30 border-r border-gray-100">
                <div className="p-8 flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 relative flex items-center justify-center">
                            <img src="/images/logo.png" alt="EduHub" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-[15px] text-black tracking-tight">EduHub Teacher</span>
                        </div>
                    </div>

                    <button className="w-6 h-6 bg-[#FFD600] rounded flex items-center justify-center text-white hover:bg-yellow-500 shadow-sm transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 py-4 px-6 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-4 px-5 py-4 rounded-full text-[14px] font-normal transition-all duration-200 ${isActive
                                        ? "bg-[#FFD600] text-black shadow-md shadow-yellow-100 font-medium"
                                        : "text-[#969696] hover:text-gray-600 hover:bg-gray-50"
                                    }`}
                            >
                                <span className={`text-lg ${isActive ? 'text-black' : 'text-[#969696]'}`}>
                                    {item.icon === 'home' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        </svg>
                                    )}
                                    {item.icon === 'courses' && (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                            <path d="M6 12v5c3 0 6-3 6-7" />
                                        </svg>
                                    )}
                                    {item.icon === 'quiz' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                                        </svg>
                                    )}
                                    {item.icon === 'students' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    )}
                                    {item.icon === 'messages' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                    )}
                                </span>
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Profile Section */}
                <div className="p-6 border-t border-gray-100">
                    <Link href="/teacher/dashboard/profile" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-blue-100 overflow-hidden">
                            <img src="/images/avatar-female.png" alt="Teacher" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-black">Jane Smith</p>
                            <p className="text-xs text-gray-500">Teacher</p>
                        </div>
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col md:ml-[280px]">
                {/* Header */}
                <header className="bg-white border-b border-gray-100 px-4 md:px-10 py-4 md:py-6 sticky top-0 z-20">
                    <div className="flex items-center justify-between">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                        </button>

                        {/* Search Bar */}
                        <div className="hidden md:flex flex-1 max-w-md">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FFD600] transition-colors"
                                />
                                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3 md:gap-4 shrink-0">
                            {/* Notifications */}
                            <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            {/* Profile */}
                            <div className="w-10 h-10 rounded-full bg-blue-100 overflow-hidden border-2 border-white shadow-sm">
                                <img src="/images/avatar-female.png" alt="Teacher" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 px-4 md:px-10 py-6 md:py-10 overflow-y-auto">
                    {children}
                </main>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />
            )}

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <aside className="fixed top-0 left-0 w-[280px] h-screen bg-white z-50 md:hidden animate-slide-in">
                    <div className="p-8 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 relative">
                                <img src="/images/logo.png" alt="EduHub" className="w-full h-full object-contain" />
                            </div>
                            <span className="font-bold text-[15px] text-black">EduHub Teacher</span>
                        </div>
                        <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 py-4 px-6 space-y-2">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`flex items-center gap-4 px-5 py-4 rounded-full text-[14px] ${isActive
                                            ? "bg-[#FFD600] text-black font-medium"
                                            : "text-[#969696] hover:bg-gray-50"
                                        }`}
                                >
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </aside>
            )}
        </div>
    );
}
