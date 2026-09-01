import React from "react";
import {
  Star,
  ArrowRight,
  CirclePlay,
  Search,
  MapPin,
  BriefcaseBusiness,
  ChevronDown,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-white via-[#f8f8ff] to-[#f1f1ff]">
        <section className="max-w-7xl mx-auto px-6 lg:px-10  pb-10">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            {/* LEFT SIDE */}
            <div>
              <div className="inline-flex items-center gap-2 border border-indigo-100 rounded-full px-4 py-2 text-indigo-600 mb-8 bg-white/70">
                <Star size={18} fill="currentColor" />
                <span className="text-sm">
                  Find the job that fits your life
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#080d1f]">
                Find Your Dream Job
                <br />
                Build Your <span className="text-[#5b4cff]">Future</span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
                Discover thousands of job opportunities with top companies and
                take the next step in your career.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-8">
                <button className="flex items-center gap-3 bg-[#5145ff] hover:bg-[#4438e8] text-white px-7 py-4 rounded-xl font-medium transition">
                  Browse Jobs
                  <ArrowRight size={20} />
                </button>

                <button className="flex items-center gap-3 border border-slate-300 bg-white hover:bg-slate-50 px-7 py-4 rounded-xl font-medium text-slate-900 transition">
                  <CirclePlay size={22} className="text-[#5145ff]" />
                  How it works
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex justify-center">
              {/* Background blobs */}
              <div className="absolute w-[420px] h-[420px] bg-[#7567ff] rounded-full opacity-80 top-12 left-1/2 -translate-x-1/2"></div>

              {/* Replace with your actual image */}
              <img
                src="img3.png"
                alt="Job seekers"
                className="relative z-10 w-full max-w-[450px] object-contain"
              />
            </div>
          </div>

          {/* SEARCH BOX */}
          <div className="relative z-30 mt-[-10px]">
            <div className="bg-white shadow-xl border border-slate-200 rounded-2xl p-3 grid md:grid-cols-4 items-center">
              {/* Job search */}
              <div className="flex items-center gap-3 px-5 py-4 md:border-r border-slate-200">
                <Search className="text-slate-500" size={21} />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full outline-none text-slate-700 placeholder:text-slate-500"
                />
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 px-5 py-4 md:border-r border-slate-200">
                <MapPin className="text-slate-500" size={21} />
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  className="w-full outline-none text-slate-700 placeholder:text-slate-500"
                />
              </div>

              {/* Category */}
              <button className="flex items-center justify-between gap-3 px-5 py-4 md:border-r border-slate-200 text-slate-700">
                <span className="flex items-center gap-3">
                  <BriefcaseBusiness className="text-slate-500" size={21} />
                  All Categories
                </span>

                <ChevronDown size={18} />
              </button>

              {/* Search button */}
              <div className="px-2">
                <button className="w-full bg-[#5145ff] hover:bg-[#4438e8] text-white rounded-xl py-4 font-medium transition">
                  Search Jobs
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Main;
