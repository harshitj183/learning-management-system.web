import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="w-full max-w-7xl mx-auto p-6 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-2">
           {/* Logo Placeholder */}
           <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
             E
           </div>
           <span className="text-xl font-bold tracking-tight text-foreground">EduHub</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">For Teachers</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">For Parents</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="px-6 py-2 rounded-full text-foreground hover:bg-muted transition-colors font-medium">
            Log in
          </Link>
          <Link href="/signup" className="px-6 py-2 rounded-full bg-secondary text-white hover:bg-secondary-hover transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
            Sign up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 py-12 gap-12 relative">
        
        {/* Left Content */}
        <div className="flex-1 space-y-8 animate-slide-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-2">
            🚀 The Future of Learning
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-foreground">
            Make Learning <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Fun & Engaging
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Connect parents, teachers, and students in one seamless platform. Track progress, asign tasks, and celebrate achievements together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/signup" className="px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary-hover shadow-lg hover:shadow-blue-200 transition-all text-center">
              Get Started
            </Link>
            <Link href="#" className="px-8 py-4 rounded-full bg-white border border-border text-foreground font-bold text-lg hover:bg-muted transition-all flex items-center justify-center gap-2">
              <span>▶</span> Watch Demo
            </Link>
          </div>
          
          <div className="pt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-${i*100 + 200}`} />
              ))}
            </div>
            <p>Trusted by 10,000+ happy parents</p>
          </div>
        </div>

        {/* Right Content - Hero Image/Illustration */}
        <div className="flex-1 relative w-full h-[500px] flex items-center justify-center animate-fade-in delay-100">
           {/* Blob Background */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
           
           <div className="relative z-10 w-full max-w-lg transform hover:scale-105 transition-transform duration-500">
              <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 relative">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative group cursor-pointer">
                  {/* Mock Video UI */}
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-primary border-b-[10px] border-b-transparent ml-1" />
                      </div>
                   </div>
                   <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-secondary" />
                   </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -right-8 -top-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce delay-700">
                   <span className="text-2xl">💡</span>
                </div>
                <div className="absolute -left-8 bottom-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-pulse delay-1000">
                   <span className="text-2xl">📚</span>
                </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
