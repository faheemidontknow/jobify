export const Marquee = () => {
  // normal gold = #D4AF37
  // diamond gold = #B8860B
  return (
    <div className="w-full overflow-hidden bg-blue-600 border-y border-[#D4AF37]">
      <div className="flex w-max p-2 animate-marquee whitespace-nowrap">
        <div className="flex items-center">
          <span className="text-white text-sm">✦</span>
          <span className="mx-6 text-sm text-white font-semibold tracking-[0.2em]">
            WELCOME TO JOBIFY
          </span>

          <span className="text-white text-sm">✦</span>

          <span className="mx-8 text-sm text-white font-semibold tracking-[0.2em]">
            WELCOME TO JOBIFY{" "}
          </span>

          <span className="text-white text-sm">✦</span>

          <span className="mx-8 text-sm text-white font-semibold tracking-[0.2em]">
            WELCOME TO JOBIFY{" "}
          </span>

          <span className="text-white text-sm">✦</span>

          <span className="mx-8 text-sm text-white font-semibold tracking-[0.2em]">
            WELCOME TO JOBIFY{" "}
          </span>
        </div>

        {/* Duplicate for seamless scrolling */}
        <div className="flex items-center">
          <span className="text-white text-sm">✦</span>
          <span className="mx-8 text-sm text-white font-semibold tracking-[0.2em]">
            WELCOME TO JOBIFY{" "}
          </span>

          <span className="text-white text-sm">✦</span>

          <span className="mx-8 text-sm text-white font-semibold tracking-[0.2em]">
            WELCOME TO JOBIFY{" "}
          </span>

          <span className="text-white text-sm">✦</span>

          <span className="mx-8 text-sm text-white font-semibold tracking-[0.2em]">
            WELCOME TO JOBIFY{" "}
          </span>

          <span className="text-white text-sm">✦</span>

          <span className="mx-8 text-sm text-white font-semibold tracking-[0.2em]">
            WELCOME TO JOBIFY{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;

export const navLinks = ["Find Jobs", "Companies", "Categories", "About us", "Resources",];
