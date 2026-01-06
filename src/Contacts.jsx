export default function Contacts() {
  return (
    <div className="min-h-screen w-screen bg-[url('/Online-Portfolio/bg1.png')] dark:bg-[url('/Online-Portfolio/dark-bg.png')] bg-cover bg-no-repeat">
      <div className="pt-40 px-4 md:px-8 pb-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-[#E6F1F7]">
            Connect with Me
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Feel free to reach out and connect with me me through any of the following:
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
            <div className="rounded-[15px] p-6 text-center bg-[#FFEBFD] dark:bg-[#2a2a3a] shadow transition hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <img src="/Online-Portfolio/BunEmail.png" className="w-[200px] h-[200px]" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-black dark:text-[#E6F1F7]">Email</h3>
              <p className="text-xs mb-1 text-gray-600 dark:text-gray-400">Primary</p>
              <a className="block text-sm text-[#A6427C] dark:text-[#B4E0F7]" href="mailto:afsaromo@student.apc.edu.ph">
                afsaromo@student.apc.edu.ph
              </a>
              <p className="text-xs mt-2 mb-1 text-gray-600 dark:text-gray-400">Secondary</p>
              <a className="block text-sm text-[#A6427C] dark:text-[#B4E0F7]" href="mailto:ririariii15@gmail.com">
                ririariii15@gmail.com
              </a>
            </div>

            <div className="rounded-[15px] p-6 text-center bg-[#FFEBFD] dark:bg-[#2a2a3a] shadow transition hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <img src="/Online-Portfolio/BunPhone.png" className="w-[200px] h-[200px]" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-[#E6F1F7]">Phone</h3>
              <a className="text-[#A6427C] dark:text-[#B4E0F7]" href="tel:+639957757988">
                +63 995 775 7988
              </a>
            </div>

            <div className="rounded-[15px] p-6 text-center bg-[#FFEBFD] dark:bg-[#2a2a3a] shadow transition hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <img src="/Online-Portfolio/BunLI.png" className="w-[200px] h-[200px]" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-[#E6F1F7]">LinkedIn</h3>
              <a
                className="text-[#A6427C] dark:text-[#B4E0F7]"
                href="https://www.linkedin.com/in/ariana-may-s-6a6ba6328/"
                target="_blank"
              >
                Ariana May Saromo
              </a>
            </div>

            <div className="rounded-[15px] p-6 text-center bg-[#FFEBFD] dark:bg-[#2a2a3a] shadow transition hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <img src="/Online-Portfolio/BunGH.png" className="w-[200px] h-[200px]" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-[#E6F1F7]">GitHub</h3>
              <a
                className="text-[#A6427C] dark:text-[#B4E0F7]"
                href="https://github.com/pinkcutieee"
                target="_blank"
              >
                pinkcutieee
              </a>
            </div>

            <div className="rounded-[15px] p-6 text-center bg-[#FFEBFD] dark:bg-[#2a2a3a] shadow transition hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <img src="/Online-Portfolio/BunTH.png" className="w-[200px] h-[200px]" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-[#E6F1F7]">Trailhead</h3>
              <a
                className="text-[#A6427C] dark:text-[#B4E0F7]"
                href="https://www.salesforce.com/trailblazer/xne2vyi84ilms2r1b8"
                target="_blank"
              >
                Ariana May Saromo
              </a>
            </div>

            <div className="rounded-[15px] p-6 text-center bg-[#FFEBFD] dark:bg-[#2a2a3a] shadow transition hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <img src="/Online-Portfolio/BunML.png" className="w-[200px] h-[200px]" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-[#E6F1F7]">Microsoft Learn</h3>
              <a
                className="text-[#A6427C] dark:text-[#B4E0F7]"
                href="https://learn.microsoft.com/en-us/users/arianamaysaromo-1068/"
                target="_blank"
              >
                Ariana May Saromo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
