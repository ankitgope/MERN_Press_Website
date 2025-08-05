import React from "react";

function HeroSection() {
  return (
    <div id="hero" className="px-4 md:px-10 lg:px-20 flex justify-center py-5">
      <div className="flex flex-col w-full max-w-[960px]">
        <div className="p-2 sm:p-4">
          <div
            className="flex min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[480px] flex-col gap-4 sm:gap-6 md:gap-8 
                       bg-cover bg-center bg-no-repeat sm:rounded-xl 
                       items-start justify-end px-4 sm:px-8 md:px-10 pb-10"
            style={{
              backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, 0.1),
                  rgba(0, 0, 0, 0.4)
                ),
                url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5m5swtNV7Iq-aFNXCUYTuT-2H1LJdHO_fVSPt3uj0OGGB_nTsfvjQGeX1gXM2NZVGQETjKMNrZ7BYaGFFXT9HDNhWMTW9Mk-KqiutSsTxd9cb3iAtL8A3UDLAYOscXSLB3h4osR44Ts8RVbIMLETIFwu-TWoLL7LmN9VaFiQ2_WdtYwg0TdOf5pPkPd9O0Z6lvMy1Dk7ZKit7I9-JtaNhdxjwxzLExUmw-6Q7sKHWqQGQZDtfoI6T0_EMeuNL35vgOCc7p12adNqE")`,
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                Your Story, Amplified
              </h1>
              <h2 className="text-white text-sm sm:text-base md:text-lg font-normal leading-normal">
                We are a leading newspaper agency specializing in editorial, reporting, publishing, and media-related services. Our team of experienced journalists and
                      editors is dedicated to delivering high-quality content that informs, engages, and inspires.
              </h2>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
