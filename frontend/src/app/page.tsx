import Link from 'next/link';
import { Sparkles, Zap, Shield, ArrowRight, Layout } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 py-24 selection:bg-indigo-500/30">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="mb-8 p-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] animate-gradient shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/90 text-xs font-bold text-white uppercase tracking-widest leading-none">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            Revolutionizing Productivity
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="mb-8 text-center text-5xl font-[900] tracking-tight sm:text-6xl lg:text-7xl text-white">
          Manage Your Project <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Todo List Evolution
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-400 font-medium sm:text-xl leading-relaxed">
          Streamline your workflow, track progress, and goals with the next generation of task management tailored for modern innovators Sarim Dev.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-24">
          <Link
            href="/signup"
            className="group relative flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-10 py-5 text-lg font-bold text-white shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] transition hover:bg-indigo-700 hover:shadow-[0_0_50px_-5px_rgba(79,70,229,0.6)] active:scale-95"
          >
            Deploy My Workspace
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/signin"
            className="flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl px-10 py-5 text-lg font-bold text-slate-200 transition hover:bg-slate-800 hover:border-slate-700 active:scale-95"
          >
            Access Dashboard
          </Link>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
          {[
            { icon: Zap, title: "Hyper-Fast", desc: "Built for speed, optimized for your flow." },
            { icon: Shield, title: "Vault-Grade", desc: "Your tasks are secured with deep encryption." },
            { icon: Layout, title: "Seamless", desc: "Intuitive layout that stays out of your way." }
          ].map((feature, i) => (
            <div key={i} className="group p-6 rounded-3xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-slate-800 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Footer */}
      <div className="mt-32 flex flex-col items-center gap-4 text-slate-500">
        <div className="w-px h-12 bg-gradient-to-b from-indigo-500 via-transparent to-transparent" />
        <p className="text-xs uppercase tracking-widest font-bold opacity-30">Phase II Tech Stack</p>
      </div>
    </main>
  );
}

