export default function DashboardPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Overview</h1>
                    <p className="text-muted-foreground">Here is what's happening with your students today.</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors shadow-sm text-sm font-medium">
                    + New Assignment
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Students", value: "248", icon: "👨‍🎓", color: "bg-blue-100 text-blue-600" },
                    { label: "Average Grade", value: "B+", icon: "📝", color: "bg-green-100 text-green-600" },
                    { label: "Assignments", value: "12", icon: "📚", color: "bg-yellow-100 text-yellow-600" },
                    { label: "Messages", value: "5", icon: "💬", color: "bg-purple-100 text-purple-600" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+2.5%</span>
                        </div>
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content Area - e.g. Recent Activity or Schedule */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-border shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-foreground">Upcoming Schedule</h3>
                        <button className="text-sm text-primary hover:underline">View All</button>
                    </div>

                    <div className="space-y-4">
                        {[
                            { time: "09:00 AM", subject: "Mathematics", class: "Class 5-A", color: "border-blue-500" },
                            { time: "10:30 AM", subject: "Science", class: "Class 4-B", color: "border-green-500" },
                            { time: "01:00 PM", subject: "History", class: "Class 6-C", color: "border-yellow-500" },
                        ].map((cls, i) => (
                            <div key={i} className={`flex items-center p-4 rounded-lg bg-gray-50 border-l-4 ${cls.color} hover:bg-gray-100 transition-colors`}>
                                <div className="w-24 font-bold text-foreground">{cls.time}</div>
                                <div className="flex-1">
                                    <div className="font-semibold text-foreground">{cls.subject}</div>
                                    <div className="text-sm text-muted-foreground">{cls.class}</div>
                                </div>
                                <button className="w-8 h-8 rounded-full hover:bg-white flex items-center justify-center text-muted-foreground">⋮</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Side Panel - Quick Actions/Notices */}
                <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                    <h3 className="text-lg font-bold text-foreground mb-6">Notice Board</h3>
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                            <div className="flex items-start gap-3">
                                <div className="text-xl">⚠️</div>
                                <div>
                                    <div className="text-sm font-semibold text-yellow-800">Exam Schedule Released</div>
                                    <p className="text-xs text-yellow-700 mt-1">Final exams starting next week. Please review assignment submissions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <div className="flex items-start gap-3">
                                <div className="text-xl">ℹ️</div>
                                <div>
                                    <div className="text-sm font-semibold text-blue-800">Staff Meeting</div>
                                    <p className="text-xs text-blue-700 mt-1">Tomorrow at 4:30 PM in the conference room.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="bg-gradient-to-br from-primary to-blue-600 rounded-lg p-4 text-white text-center">
                            <h4 className="font-bold mb-2">Upgrade to Pro</h4>
                            <p className="text-xs opacity-90 mb-4">Unlock advanced analytics and reports.</p>
                            <button className="w-full py-2 bg-white text-primary rounded-md text-sm font-bold shadow-sm hover:bg-gray-50">Upgrade Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
