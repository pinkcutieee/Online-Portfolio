import { useState, useEffect } from "react";

export default function Contacts() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark') || document.body.classList.contains('dark'));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const bgImage = isDark 
    ? "url('/Online-Portfolio/dark-bg.png')" 
    : "url('/Online-Portfolio/bg1.png')";

  return (
    <div 
      className="min-h-screen w-screen bg-cover bg-no-repeat transition-all duration-500"
      style={{ backgroundImage: bgImage }}
    >
      <div className="pt-40 px-4 md:px-8 pb-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-[#E6F1F7]">
            Connect with Me
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Feel free to reach out and connect with me through any of the following:
          </p>
        </div>
      </div>

      <div className="px-4 md:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 rounded-[15px] p-5 bg-[#FFEBFD] dark:bg-[#2a2a3a] shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
              <div>
                <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">Name</p>
                <p className="font-semibold text-lg text-black dark:text-[#E6F1F7]">
                  Ariana May F. Saromo
                </p>
              </div>
              <div>
                <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">Course</p>
                <p className="font-semibold text-lg text-black dark:text-[#E6F1F7]">
                  Bachelor of Science in Computer Science
                </p>
              </div>
              <div>
                <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">School</p>
                <p className="font-semibold text-lg text-black dark:text-[#E6F1F7]">
                  Asia Pacific College
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "BunEmail.png", title: "Email", content: <><a className="block text-sm text-[#A6427C] dark:text-[#B4E0F7]" href="mailto:afsaromo@student.apc.edu.ph">afsaromo@student.apc.edu.ph</a><a className="block text-sm text-[#A6427C] dark:text-[#B4E0F7]" href="mailto:ririariii15@gmail.com">ririariii15@gmail.com</a></> },
              { img: "BunPhone.png", title: "Phone", content: <a className="text-[#A6427C] dark:text-[#B4E0F7]" href="tel:+639957757988">+63 995 775 7988</a> },
              { img: "BunLI.png", title: "LinkedIn", content: <a className="text-[#A6427C] dark:text-[#B4E0F7]" href="https://www.linkedin.com/in/ariana-may-s-6a6ba6328/" target="_blank">Ariana May Saromo</a> },
              { img: "BunGH.png", title: "GitHub", content: <a className="text-[#A6427C] dark:text-[#B4E0F7]" href="https://github.com/pinkcutieee" target="_blank">pinkcutieee</a> },
              { img: "BunTH.png", title: "Trailhead", content: <a className="text-[#A6427C] dark:text-[#B4E0F7]" href="https://www.salesforce.com/trailblazer/xne2vyi84ilms2r1b8" target="_blank">Ariana May Saromo</a> },
              { img: "BunML.png", title: "Microsoft Learn", content: <a className="text-[#A6427C] dark:text-[#B4E0F7]" href="https://learn.microsoft.com/en-us/users/arianamaysaromo-1068/" target="_blank">Ariana May Saromo</a> }
            ].map((item, idx) => (
              <div key={idx} className="rounded-[15px] p-6 text-center bg-[#FFEBFD] dark:bg-[#2a2a3a] shadow transition hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <img src={`/Online-Portfolio/${item.img}`} className="w-[150px] h-[150px] object-contain" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-black dark:text-[#E6F1F7]">{item.title}</h3>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}