import React from "react";

const ClientSection = () => {
  const clientImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA9VOV8PnkPIRplvKZ-umDP4KfJzLj8r-_a_EKUOA5dIKFYPO7E3MswRZf6GQKJGX_HE7TfphkKY7XaaU8XkrPd77LGPI1mQsRKHhTuVSMz0yJ0jzQry3vTt4cQ8Tzw_cb9qIB74lOHeOnC1t2DapWUmZ3EFqhz7HUJezJFNPHm2Z6G6tz3kEjxY7CnIWUCbLU_t0cSS210YagiX4m49Cm4sQ8wn3k0zFjDicqTmX6GFRH5B2_T1x5ARdGmpA7PtElC8ZlS0Bvz6ijS",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCj1ozpatcetCrbDYZI_iEJACcKaEEhk6xjFDImjjFEBQm4VLulPBASCbVi0hSOiptneZoLzus-SGPwoTvPKOX--lcyp1GCPhmA0eyMe_tGOxiTh3W2gty-5zK-SS7t8yMLJGpOcIy0WMkI00kIl0HaJOjF5hWmQxCa98FssP0BrXuT1Uic_JqVAQBUwHtwpct7Cz-u5oQV3QPVzdZDjGNYbCfBYrH4e7Bkbcr20CNu2Go45QI208_xZAN5Pfu4V0iAqOAaHISg0nUl",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDesN7fPTb3ai0PVyHbX7cK6dd_9TtsU2tDBPz-bFY-XEJxelNcY1VpCkcNUxgXdc7JsTpnFSbqPr8Cd161GeCS1_tcCK4ezDfjYiKQq1Alb7qzVISMkh3dUbpAti5wcdK_jjsJYVH8qTbJ6VZfoJ1WXQrEBRXjGtg8eMWhlWoMs27b1Qhftp1tjQRgUv4G7-qr_KiGCIgVmZ6zauj2NCYOCbmIBG67mfvVHiftbf8eik_pV-TPbNxP9cg8b7_cV-26SvfTtZ7g8ARi",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBwqbxJ7cTolo9lRyTvRskPvrtsl2A7QQzkv5jK9wjPNmegHaCdZnDOH3qUi1W8RDIX9i79N3VtYgDdYkgQG2rN3ZVD9kIEyBNnhXzTZF7IyjsIJMECuD9A4qjP22BBZTFXGv6anyr-bXazil4uBHJG-nVWUuLwqK8dQp17ctwWM0YIup9WiJXjLX9x6yBPSXW6C3AdL_EKHwglyZRQMDhgM3h7Yx1WJf-uwwMzolvxV7MtwSrazH7rnQeABEVizeTWg55TdGIulFTZ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDk3KxVV9PoYHgOMvJu-iKSprBTn67XTSO8A9CGoA2cm2J_U-6nVq9YV11eeANxoCnUd0LwTJxOhbDW9iWxEiLy39vRqj7BsW1RI5TZpRedyToWIlr2r5ILTtO1Or2ALOXilCj4HI7VcCs3-anpzN4vVYbdlxk6v0k-QwRbsz2WZ-Nm0vAc4booCQPgB-LbVdjPeZ5dJXbzkcHM2MK7HDyI8v6XMdVex0UAlPohB30mB99Ab78nbjSYb2-gI8VlfastYfvdQCYeMvtY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD5UQxlZOVAFHyU-V2kWDS_2mFEXxVOHUXoCrs0tcX6KFBX9Th5ht_MDFxaIOcw4mX5p4fcIeNJl6LWgP4-0cysygdDs0YFy__wPJeY2yfLhiLvw5a6grTWGob-CuS0iTQphI7e1_jrYrOvRFWjpWqLTcBfvnkN6obGNcXMlbHvPU3zScjSKPypZdX4RKR3-UD5ifrcYn5o1qxM3LKKuEE261Wl-njDP3ioqGVgUnQywd0UDwCSCiz963I3Yy8pPVRpD20pv2WhBgqG",
  ];

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-48 py-5">
      <h2 className="text-[#0d111c] text-xl sm:text-2xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3">
        Our Clients
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 p-2 sm:p-4">
        {clientImages.map((img, index) => (
          <div key={index} className="flex">
            <div
              className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
