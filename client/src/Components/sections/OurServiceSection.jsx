import React from "react";

function OurServicesSection() {
  return (
    <div
      id="services"
      className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-5"
    >
      <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Our Services
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
        {/* Card 1 */}
        <div className="w-full gap-3 rounded-lg border border-[#ced5e8] bg-[#f8f9fc] p-4 flex flex-col">
          <div className="text-[#0d111c]" data-icon="Pencil" data-size="24px">
            {/* Pencil SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M227.31,73.37L182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0d111c] text-base font-bold leading-tight">
              Editorial Services
            </h2>
            <p className="text-[#495e9c] text-sm font-normal leading-normal">
              Crafting compelling narratives with precision and clarity.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full gap-3 rounded-lg border border-[#ced5e8] bg-[#f8f9fc] p-4 flex flex-col">
          <div className="text-[#0d111c]" data-icon="Newspaper" data-size="24px">
            {/* Newspaper SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M88,112a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm8,40h80a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM232,64V184a24,24,0,0,1-24,24H32A24,24,0,0,1,8,184.11V88a8,8,0,0,1,16,0v96a8,8,0,0,0,16,0V64A16,16,0,0,1,56,48H216A16,16,0,0,1,232,64Zm-16,0H56V184a23.84,23.84,0,0,1-1.37,8H208a8,8,0,0,0,8-8Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0d111c] text-base font-bold leading-tight">
              Reporting &amp; News Coverage
            </h2>
            <p className="text-[#495e9c] text-sm font-normal leading-normal">
              Delivering timely and accurate news from the front lines.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full gap-3 rounded-lg border border-[#ced5e8] bg-[#f8f9fc] p-4 flex flex-col">
          <div className="text-[#0d111c]" data-icon="Megaphone" data-size="24px">
            {/* Megaphone SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0d111c] text-base font-bold leading-tight">
              Media Relations
            </h2>
            <p className="text-[#495e9c] text-sm font-normal leading-normal">
              Building and maintaining strong media connections.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full gap-3 rounded-lg border border-[#ced5e8] bg-[#f8f9fc] p-4 flex flex-col">
          <div className="text-[#0d111c]" data-icon="Video" data-size="24px">
            {/* Video SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0d111c] text-base font-bold leading-tight">
              Multimedia Production
            </h2>
            <p className="text-[#495e9c] text-sm font-normal leading-normal">
              Creating engaging video and audio content to enhance storytelling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServicesSection;
