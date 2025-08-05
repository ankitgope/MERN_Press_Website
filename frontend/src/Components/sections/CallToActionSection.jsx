import React from "react";

const CallToActionSection = () => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#0d111c] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Ready to Tell Your Story?
          </h1>
          <p className="text-[#0d111c] text-base sm:text-lg max-w-2xl mx-auto">
            Partner with News Agency and let us help you amplify your message.
            Contact us today to discuss your project and how we can support your goals.
          </p>
        </div>
        <div>
          <a href="#contact">

          <button className="h-10 sm:h-12 px-5 sm:px-6 rounded-full bg-[#0831aa] text-white text-sm sm:text-base font-semibold tracking-wide hover:bg-[#062c90] transition cursor-pointer">
            Get Started
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
