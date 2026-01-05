import { useState } from "react";
import Navbar from "./components/NavBar";

const projects = [
  {
    title: "Exploring Forecast-based Financing (FbF) and Flood Risk Prediction (FUNES) by Red Cross Red Crescent Climate Centre",
    date: "September 2025",
    names: "by: Ashley May Barisoro, Gwyneth Cataylo, and Ariana May Saromo",
    description: `A research study analyzing the algorithms: forecasting-based financing and flood risk prediction made by Red Cross Red Crescent Climate Centre. 
                By creating a simplified Python implementation for flood prone communities in the Philippines, the study aims to understand the effectiveness of 
                these algorithms in disaster risk reduction and management.`,
    link: "/Online-Portfolio/DESALGIRLS_FinalProject_DESALGO.pdf",
    details: "Research Study | Data Analysis | Report Writing | Course: Designing Algorithms | Language: Python",
    image: "/Online-Portfolio/DESALGIRLS_FinalProject_DESALGO.png"
  },
  {
    title: "Proposed Database Design for Sertfit Athletics Gym & Sports Hub",
    date: "September 2025",
    names: "by: Christian Gabriel Agot, Roycee Hugh Lacuesta, June Benedict Malabanan, and Ariana May Saromo",
    description: `A proposed database design for Sertfit Athletics Gym & Sports Hub, a fitness center in Brgy. 174, Malibay, Pasay City, Philippines.
                The design includes an business rules and processes, ERD, data dictionary, the commands used in MariaDB and the table contents.`,
    link: "/Online-Portfolio/ARINALITY_Finals_Project.pdf",
    details: "Database Design | Entity Relationship Diagram | Data Dictionary | SQL | Course: Database Management 1 | DBMS: MariaDB",
    image: "/Online-Portfolio/ARINALITY_Finals_Project.png"
  },
  {
    title: "CLEANI UI/UX Design",
    date: "September 2025",
    names: "by: Nathan Timothy Arcaya, Ashley May Barisoro, Gwyneth Cataylo, and Ariana May Saromo",
    description: "A prototype website design for CLEANI, an instant stain remover pen product that aims to provide users with an easy and convenient way to get rid of stains.",
    link: "https://www.figma.com/proto/qmaTRJ725rPMsa2QZtqR4N/CLEANI?node-id=1713-86&p=f&t=hrck687sUHsPCsMT-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1713%3A86",
    details: "UI/UX Design | Prototyping | User Research | Course: UI/UX Design and Programming | Tool: Figma",
    image: "/Online-Portfolio/CLEANI UIUX Design.png"
  },
  {
    title: "Taxency: Transparency Board Application",
    date: "June 2025",
    names: "by: Gwyneth Cataylo and Ariana May Saromo",
    description: `Taxency is an application to increase transparency in the Philippine tax system by tracking government projects 
        and fund allocation. Using a hash table to organize project data, the app aims to simplify access to information, promote accountability, 
        and support Sustainable Development Goal 16 on strong, transparent institutions.`,
    link: "/Online-Portfolio/Taxency.pdf",
    details: "Python Application | Hash Table | Data Organization | Course: Data Structures and Algorithms | Language: Python",
    image: "/Online-Portfolio/Taxency.png"
  },
  {
    title: "Direct Clothing Inc. Order Entry System",
    date: "February 2025",
    names: "by: Mar Joseph Bijer, Ethan Edgar Francisco, Clark Ken Guiraldo,Ariana May Saromo, and Juan Victor Gabriel Villocillo",
    description: `A proposed order entry system for Direct Clothing Inc.. Includes the option to manage customer information, orders, 
        and inventory of the company.`,
    link: "/Online-Portfolio/Direct Clothing Inc..pdf",
    details: "Order Entry System | System Analysis and Design | Course: Introduction to Programming Languages| Language: Java",
    image: "/Online-Portfolio/Direct Clothing Inc..png"
  },
  {
    title: "Berry Blast Game",
    date: "October 2024",
    names: "by: Ariana May Saromo",
    description: `Berry Blast is a Python mini-game where players catch five types of berries within a one-minute time limit. 
        Afterward, the collected berries are used in a personality test, with results determined by the type gathered the most.`,
    link: "/Online-Portfolio/Berry Blast.pdf",
    details: "Python Mini-Game | Game Development | Course: Programming Concepts and Logic | Language: Python",
    image: "/Online-Portfolio/Berry Blast.png"
  }
];

function ProjectCard({ project }) {
  const [imgError] = useState(false);

  return (
    <div className="relative flex gap-5 bg-[#FFEBFD] p-5 rounded-xl shadow hover:shadow-sm transform hover:-translate-y-1 transition">
      <small className="absolute top-3 right-3 text-sm">{project.date}</small>
      <div className="w-[300px] h-[300px] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"/>
      </div>

      <div className="flex-1 text-left">
        <h4 className="font-bold text-sm md:text-base mb-2">{project.title}</h4>
        <p className="font-bold text-gray-800 text-sm mb-1">{project.names}</p><br/>
        <p className="text-gray-800 text-medium mb-1">{project.description}</p>
        <a href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-[#7630CC] font-semibold hover:underline mb-2"
            style={{ color: "#7630CC" }}>
            {project.title}
        </a><br/>
        <small className="text-gray-500 text-sm">{project.details}</small>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen w-screen bg-pink-200"
      style={{
        backgroundImage: 'url(/Online-Portfolio/bg-transparent.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
    <Navbar />
      <div id="home" className="pt-20 px-4 flex gap-4 items-center">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
            <p className="text-6xl md:text-7xl lg:text-8xl mr-0 md:mr-16 lg:mr-48 font-bold font-nunito">Ariana</p>
            <p className="text-6xl md:text-7xl lg:text-8xl mb-4 ml-0 md:ml-16 lg:ml-48 font-bold font-nunito">Saromo</p>
            <div className="flex gap-2 mt-2 justify-center">
              <p className="text-lg px-6 py-2 bg-[#FD9EF6] text-white rounded-full">
                Computer Science Student
              </p>
              <p className="text-lg px-6 py-2 bg-[#FD9EF6] text-white rounded-full">
                Aspiring Full-Stack Developer & Designer
              </p>
            </div>
            <a href="/Resume.pdf" className="inline-block mt-2 px-6 py-2 bg-[#C295F3] text-white rounded-full hover:bg-[#B4E0F7] transition">
              View Resume
            </a>
        </div>
        <div style={{ width: '600px', height: '680px' }}>
          <img src="/Online-Portfolio/Me.png" alt="Hero" className="w-full h-full object-cover"/>
        </div>
      </div>

    <article id="about" className="pt-8 px-4 md:px-8">
      <div className="flex gap-4">
        <img src="/Online-Portfolio/Laptop.png" alt="Laptop" className="w-full h-auto object-cover rounded-lg" style={{width: '350px', objectFit: 'cover'}}/>
        <div className="flex-1">
        <p className="boxed" style={{ color: "black" }}>
        <div className="window-titlebar">
        </div>
          <div className="window-controls">
            <div className="window-icon">─</div>
            <div className="window-icon">□</div>
            <div className="window-icon">✕</div>
          </div>
            <h3><b>Hi, I'm Ari!</b></h3>
            <div className="text-lg">
              I am a 2nd-year Computer Science student at Asia Pacific College with a passion for full-stack development and creative design. 
              I constantly explore new technologies and techniques to enhance my skills and build innovative solutions that combine functionality 
              with aesthetics. I enjoy experimenting with both frontend and backend development, creating projects that reflect my interest.
              In addition to coding, I am passionate about digital art and design, which inspires the visuals I create in my projects.
              I am eager to learn new tools and frameworks, tackle challenges, and find creative solutions.
              In my free time, I enjoy arts and crafts, gaming, and other creative hobbies that inspire my work.
            </div>
        </p>
        </div>
      </div>
    </article>

    <article className="pt-8 px-4 md:px-8">
      <div className="flex gap-4">
        <div className="flex-1">
          <p className="boxed" style={{ color: "black" }}>
          <div className="window-titlebar">
          </div>
          <div className="window-controls">
            <div className="window-icon">─</div>
            <div className="window-icon">□</div>
            <div className="window-icon">✕</div>
          </div>
            <h3><b>Skills</b></h3>
            <ul className="text-lg">
              <li>• HTML</li>
              <li>• CSS</li>
              <li>• Python</li>
              <li>• Java</li>
              <li>• JavaScript</li>
              <li>• MySQL</li>
              <li>• React</li>
              <li>• Bootstrap</li>
              <li>• Tailwind CSS</li>
              <li>• GitHub</li>
            </ul>
          </p>
        </div>

        <div className="flex-1">
          <p className="boxed" style={{ color: "black" }}>
            <div className="window-titlebar">
            </div>
            <div className="window-controls">
              <div className="window-icon">─</div>
              <div className="window-icon">□</div>
              <div className="window-icon">✕</div>
            </div>
            <h3><b>Experience</b></h3>
            <ul className="text-lg">
              <li>• <b>Marketing Officer</b> - Junior Philippine Computer Society - Asia Pacific College (September 2025 - Present)</li>
              <li>• <b>President</b> - Information and Communications Technology Club - Conperey Integrated Learning School Inc. (October 2022 - June 2024)</li>
            </ul>
          </p>
        </div>
        <img src="/Online-Portfolio/Gear.png" alt="Gear" className="w-full h-auto object-cover rounded-lg" style={{width: '400px', objectFit: 'cover'}}/>
      </div>
    </article>

    <article className="pt-8 px-4 md:px-8">
      <div className="flex gap-4">
        <img src="/Online-Portfolio/CLI.png" alt="CLI" className="w-full h-auto object-cover rounded-lg" style={{width: '350px', objectFit: 'contain'}}/>
        <div className="flex-1">
          <p className="boxed" style={{ color: "black" }}>
            <div className="window-titlebar">
            </div>
            <div className="window-controls">
            <div className="window-icon">─</div>
            <div className="window-icon">□</div>
            <div className="window-icon">✕</div>
            </div>
            <h3><b>Tools & Software Skills</b></h3>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/Microsoft.png" alt="Microsoft Office" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">Microsoft Office Apps</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/VSCode.png" alt="VS Code" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">VS Code</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/JetBrains.png" alt="JetBrains" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">JetBrains Apps</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/GitHubL.png" alt="GitHub" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">GitHub</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/ChatGPT.png" alt="ChatGPT" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">ChatGPT</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/Claude.png" alt="Claude" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">Claude</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/Procreate.png" alt="Procreate" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">Procreate</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/Figma.png" alt="Figma" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">Figma</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/Canva.png" alt="Canva" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">Canva</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/Kali.png" alt="Kali" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">Kali Linux</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/Ubuntu.png" alt="Ubuntu" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">Ubuntu Linux</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/Mysql.png" alt="MySQL" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">MySQL</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/XAMPP.png" alt="XAMPP" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">XAMPP</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/PacketTracer.png" alt="Packet Tracer" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">Packet Tracer</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/Online-Portfolio/Tinkercad.png" alt="Tinkercad" className="w-16 h-16 object-contain mb-2" />
                <span className="text-sm">Tinkercad</span>
              </div>
            </div>
          </p>
        </div>

        <div className="flex-1">
          <p className="boxed" style={{ color: "black" }}>
          <div className="window-titlebar">
          </div>
          <div className="window-controls">
          <div className="window-icon">─</div>
          <div className="window-icon">□</div>
          <div className="window-icon">✕</div>
          </div>
          <h3><b>Education</b></h3>
            <ul className="text-lg">
              <li>• <b>Bachelor of Science in Computer Science</b> - Asia Pacific College (2024-2028)</li>
              <li>• Senior High School - Conperey Integrated Learning School Inc. (2022-2024)</li>
              <li>• Junior High School - Conperey Integrated Learning School Inc. (2018-2022)</li>
              <li>• Elementary - Conperey Integrated Learning School Inc. (2012-2018)</li>
            </ul>
          </p>
        </div>
      </div>
    </article>

    <section id="projects" className="pt-8 px-4 md:px-8 pb-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">Projects</h2>
      <div className="flex flex-col gap-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
    </section>
  </div>
  );
}
export default Home;