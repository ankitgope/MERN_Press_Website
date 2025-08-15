import React from "react";

/**
 * PublicationSection Component
 *
 * Displays a responsive grid of publication logos/images.
 * Optimized for accessibility and layout using Tailwind CSS.
 */

function PublicationSection() {
  const imageUrls = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCpWLjHrBfKrmVCIeS_djJKi0rYiIi685yOi72IZynLdmH6tK63MWw2iRS72xYqer5FquZOdTb9jhSAl3VFZ8A-DCSwnbXeDIlTwwqhKt6pyeZK3ELBLm2P4nIy_ueLW1rD66RqMkX_CwQJY_VSvH-Vwm6r3MflC03V7kmxDhEquFDSIL9iyzqwPy2BK2w8Dgmb_glksys9wRlKqlJyDxOyXhbJCB0Yf5gqYPhyps-DaElQkPnePzIlTlOT-j2-pWTTVWu2RU6QrXMF",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ1H2-HaxU7_k7N_2ZEYe9oOIDG7FE7ZOoOlWDw4P4ORgVNTR5giGSvG8caPeyDrGw_Uvuqy4liBhOMl4zy5W14I3-lk5QDaP3CHklxki3C7W40lqJVUQTFEg2rwTRl09frLg4SL2oL8oVT-JvSWUh4hiclN0AKPQNfD7d3vPBpfJla4j2s0OV5dqiUTSEfSBdphDBqOwGzNOUUshtZxPe5YMV8Z7vV1UoXkCUhD-BNYgPv_uOYBv3w7h1M-aR-S-rmrEewqXiWcwz",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAd7XPQLNkkm5XygpSKaRp3JEEcdm8dVxR3LcW526E0twgeQBPRUQ0mHagBuyyKR1n8prXbf3mQaqjOOHFcc0iK2gHuqW2hZnZqdzOfg63mGxpgjhwq-cmskclIQ-KQE_4Ofe2tpuQjtJI_Vg25QkOU7lae78cDedtrgl_8gEYBuD9I0sr86lURWeuiUVzd_J1CmeVk5ZTLdRV9vxoT8jI3XybXbnbGnHKe_sVtSAkE16x9hx2an-dJv14etl_omWp5Pu4XPGzKs8EM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAjFTrY1sFpnWpgyicaLJrbM8nAEbnsTlRuQmELiI4XCo2bd5rTBM3gBgKQWdhZNJq-mPqCdf8yI1Rxja8MlkahM6vEj2wbGsSsZHDMvKIAdvEWwLHEHyMX01xnkOyMQ8DxQXlYMgoZQQbFJlrS689f1uYAFoQVC0Us96Qpa-iyaDZ08Mnvz9q70C-9p-pRMAllyefpl8mffBXK7mfI28NZhJW2qBdAgqRVnhYnf2v9mvLHY9fhRwx0O5uactZwBg15UwPkOGLfPpOp",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC73SVOP-7B-4mrTIr7sQuYvK134pzHHvH3TzkNVfdNNZptvp-5twPj2J-WY_8NgN4vSE6WwnpBPKhhbnAulWS7RtE3VSl7ISNMa36BSp4NmWeSJhzy29AIwvzYtnj8fuOR_bw1_HEczEMfolqMrlZ_U4EcCheOzghzpALlVamNBm6OYUICO1myd-BmrzC5Aza4Nejd3-byrRQogNQat02tlVLTh8c7p713B83OoDRZIbsxSI_u_mRfXBIBX2ZjSSD6ojd1FjEfCaMj",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBmAQzBx05aLQymLJ3MiCmqhok1XNGMKlHbyIE03Hc1vmEJoZR-3D6lK1rWT4wqafKKfzX8duc_T9yzBknWO5q5IXI8Xk-mqXZ48Mvf_so2t2nOsGuMbAh9QH_cx7TBmxUrH3kb3IHwNwpZ5Tn8e_uEBJiYiVTEphy4ubDLk2mSZjhx6fY4Ujl5bm7gLYCU4KeD8-73n1RRYy1ZTeCyriQo6YQy9arP-jts7fvT01tqdZS2rXPyubqqntCRECJ5hFXkfQW_TdSfkkyo",
  ];

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-48 py-5">
      <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Trusted by Publications
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 p-4">
        {imageUrls.map((url, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={url}
              alt={`Publication ${index + 1}`}
              className="w-full h-auto object-contain rounded-xl shadow-sm"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PublicationSection;
