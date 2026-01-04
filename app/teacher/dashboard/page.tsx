export default function TeacherDashboard() {
    return (
        <div className="space-y-6 animate-fade-in">
            {/* Welcome Section */}
            <div className="bg-white rounded-[20px] p-6 md:p-8 border border-gray-100">
                <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
                    Welcome back, Jane! 👋
                </h1>
                <p className="text-gray-500">
                    Here's what's happening with your classes today
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Total Students */}
                <div className="bg-white rounded-[20px] p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-1">245</h3>
                    <p className="text-sm text-gray-500">Total Students</p>
                </div>

                {/* Active Courses */}
                <div className="bg-white rounded-[20px] p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c3 0 6-3 6-7" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-1">12</h3>
                    <p className="text-sm text-gray-500">Active Courses</p>
                </div>

                {/* Pending Quizzes */}
                <div className="bg-white rounded-[20px] p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-1">8</h3>
                    <p className="text-sm text-gray-500">Pending Quizzes</p>
                </div>

                {/* Messages */}
                <div className="bg-white rounded-[20px] p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-1">24</h3>
                    <p className="text-sm text-gray-500">New Messages</p>
                </div>
            </div>

            {/* Recent Activity & Upcoming Classes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <div className="bg-white rounded-[20px] p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold text-black">Recent Activity</h2>
                        <button className="text-sm text-[#FFD600] hover:underline">View All</button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { student: "John Doe", action: "submitted assignment", course: "Mathematics", time: "2 hours ago" },
                            { student: "Sarah Smith", action: "completed quiz", course: "Physics", time: "4 hours ago" },
                            { student: "Mike Johnson", action: "asked a question", course: "Chemistry", time: "5 hours ago" },
                        ].map((activity, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">
                                    {activity.student.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-black">
                                        <span className="font-semibold">{activity.student}</span> {activity.action}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">{activity.course} • {activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Classes */}
                <div className="bg-white rounded-[20px] p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold text-black">Upcoming Classes</h2>
                        <button className="text-sm text-[#FFD600] hover:underline">View Schedule</button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { course: "Advanced Mathematics", time: "10:00 AM - 11:30 AM", students: 28, room: "Room 101" },
                            { course: "Physics Lab", time: "2:00 PM - 3:30 PM", students: 24, room: "Lab 3" },
                            { course: "Chemistry Basics", time: "4:00 PM - 5:00 PM", students: 32, room: "Room 205" },
                        ].map((class_item, i) => (
                            <div key={i} className="p-4 border border-gray-100 rounded-lg hover:border-[#FFD600] transition-colors">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-semibold text-black">{class_item.course}</h3>
                                    <span className="text-xs bg-[#FFD600] text-black px-2 py-1 rounded-full">Today</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{class_item.time}</p>
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                        </svg>
                                        {class_item.students} students
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        {class_item.room}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
