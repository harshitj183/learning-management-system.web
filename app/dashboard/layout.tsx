"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { icon: "🏠", label: "Dashboard", href: "/dashboard" },
        { icon: "📅", label: "Schedule", href: "/dashboard/schedule" },
        { icon: "👥", label: "Students", href: "/dashboard/students" },
        { icon: "📊", label: "Reports", href: "/dashboard/reports" },
        { icon: "⚙️", label: "Settings", href: "/dashboard/settings" },
    ];

    return (
        <div className="min-h-screen bg-muted flex">
            {/* Sidebar - Desktop */}
            <aside className="hidden md:flex flex-col w-64 bg-white border-r border-border h-screen fixed top-0 left-0 z-30">
                <div className="p-6 flex items-center gap-2 border-b border-border h-16">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        E
                    </div>
                    <span className="text-lg font-bold text-foreground">EduDash</span>
                </div>

                <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${pathname === item.href
                                    ? "bg-blue-50 text-primary"
                                    : "text-muted-foreground hover:bg-gray-50 hover:text-foreground"
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="p-4 border-t border-border">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">👩‍🏫</div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">Mrs. Sarah</p>
                            <p className="text-xs text-muted-foreground truncate">Teacher</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
                {/* Header */}
                <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6 sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden text-2xl" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>☰</button>
                        <h2 className="text-lg font-semibold text-foreground capitalize">
                            {pathname.split('/').pop() || 'Dashboard'}
                        </h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="w-10 h-10 rounded-full bg-gray-50 border border-border flex items-center justify-center relative">
                            🔔
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                        <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            Logout
                        </Link>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />
            )}

            {/* Mobile Sidebar */}
            <aside className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 flex items-center justify-between border-b border-border h-16">
                    <span className="text-lg font-bold text-foreground">EduDash</span>
                    <button onClick={() => setIsSidebarOpen(false)} className="text-2xl">×</button>
                </div>
                <div className="flex-1 py-6 px-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsSidebarOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${pathname === item.href
                                    ? "bg-blue-50 text-primary"
                                    : "text-muted-foreground hover:bg-gray-50 hover:text-foreground"
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            {item.label}
                        </Link>
                    ))}
                </div>
            </aside>
        </div>
    );
}
