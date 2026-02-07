import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  StarIcon,
  DocumentTextIcon,
  TrophyIcon
} from '@heroicons/react/24/solid';
import { 
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  LeetCodeIcon
} from './components/SocialIcons';

// 🎨 YOUR PROFESSIONAL DETAILS
const personalInfo = {
  name: "Yuvanesh S",
  title: "Project Research Scientist",
  tagline: "Building software and engineering-driven solutions, including technology-driven rehabilitation systems. Creating practical, reliable solutions with real-world impact.",
  email: "yuvansankar2424@gmail.com",
  phone: "",
  location: "Vellore, Tamil Nadu",
  github: "https://github.com/Yuvanesh24",
  linkedin: "https://www.linkedin.com/in/yuvanesh24/",
  leetcode: "https://leetcode.com/u/Yuvan_07/",
  twitter: "",
  photo: "/personal-website/profile-photo.jpg",
  photo1: "public/Grad.jpeg"
};

const education = {
  degree: "Electronics and Communication Engineering",
  university: "Saveetha Engineering College - 2024",
  period: ""
};

const skills = {
  frontend: ["Python", "C#", "GDScript", "Arduino C++"],
  backend: ["OpenCV", "Machine Learning", "PyQt5", "UDP Sockets", "Computer Vision"],
  tools: ["Godot", "Unity", "Arduino", "Raspberry Pi"]
};

const experience = [
  {
    title: "Project Research Scientist",
    department: "Department of Physiotherapy",
    company: "MAHE Manipal",
    period: "Dec 2025 - Present",
    description: "Lead engineering, setup, development, and validation of clinical rehabilitation devices at MAHE Manipal as part of the ICMR-funded HOMER project, led by CMC Vellore and IIT Madras."
  },
  {
    title: "Project Associate",
    department: "Department of Mechanical Engineering",
    company: "IIT Madras",
    period: "Apr 2025 - Dec 2025",
    description: "Developed NOARK gamified rehabilitation system using Godot, implemented fiducial marker-based computer vision pipelines for real-time motion tracking, and collaborated with interdisciplinary research teams."
  },
  {
    title: "Research Intern",
    department: "Department of Bioengineering",
    company: "Christian Medical College",
    period: "Sep 2024 - Mar 2025",
    description: "Developed Python-based rehabilitation interfaces using PyQt5, implemented real-time UDP data communication, integrated OpenCV for ML annotation, and programmed Arduino sensor systems."
  }
];

const projects = [

  {
    title: "NOARK",
    description: "Gamified rehabilitation system built in Godot for an arm-skateboard device, using Raspberry Pi and fiducial marker tracking to provide real-time movement feedback",
    tech: ["Python","GDScript","Godot", "Computer Vision", "Linux","ArucoMarkers","Raspberrypi"],
    link: "https://github.com/Yuvanesh24/NOARKGames.git"
  },
  {
    title: "Pressure-Based Balance System",
    description: "Developed a sensor-equipped balance board with a 3D UI for real-time weight distribution and postural stability analysis. Integrated Arduino data collection & Wi-Fi",
    tech: ["Python", "PyQt5", "OpenCV", "UDP Sockets", "V7 Darwin"],
    link: "https://github.com/Yuvanesh24/Mocap.git"
  },
  {
    title: "Smart Peak Clipping & Load Scheduling",
    description: "IoT-based power management solution using ESP32 and nRF communication to automate peak clipping and load balancing with real-time monitoring",
    tech: ["Arduino", "Sensors", "IOT", "App Development"],
    link: "https://github.com/Yuvanesh24"
  },


];

const publications = [
  {
    title: "Revolutionizing Networking - Exploration of Software-Defined Networking",
    journal: "IEEE",
    year: "Jan 2024",
    description: "Explores Software-Defined Networking (SDN), covering its architecture, key technologies, real-world deployments, and the benefits and challenges of implementing adaptive and secure network infrastructures.",
    link: "https://ieeexplore.ieee.org/document/10404534"
  },
  
];

const certifications = [
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credential: "Networking Fundamentals, Routing & Switching"
  },
  {
    title: "HackerRank Python (Basics)",
    issuer: "HackerRank",
    date: "2024",
    credential: "Python Programming Fundamentals"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2023",
    credential: "Advanced IoT and Sensor Integration"
  },
  {
    title: "Introduction to internet of things(IOT)",
    issuer: "NPTEL",
    date: "2022",
    credential: "Advanced IoT and Sensor Integration"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-effect z-50 px-6 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            {personalInfo.name}
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`hover:text-purple-400 transition-colors ${
                  activeSection === item.href.substring(1) ? 'text-purple-400' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-2"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Reduced height */}
      <section id="home" className="flex items-center justify-center px-6 pt-40 pb-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              {personalInfo.title}
            </p>
            <p className="text-base text-gray-400 mb-6">
              {personalInfo.tagline}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors text-sm md:text-base"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="border border-purple-600 hover:bg-purple-600 px-6 py-2 rounded-full transition-colors text-sm md:text-base"
              >
                View Projects
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-64 h-64 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-float"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <img
                  src={personalInfo.photo}
                  alt={`${personalInfo.name} - Professional Profile`}
                  className="w-56 h-56 rounded-full object-cover border-4 border-dark shadow-2xl"
                  onError={(e) => {
                    console.log('Image failed to load, using fallback');
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%234a5568'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23fff' text-anchor='middle' dy='.3em'%3ENo Photo%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Institutions Logos Section - Reduced padding and changed to whileInView */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Professional Journey</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {[
              {
                name: "SEC Chennai",
                logo: "/sec-chennai-logo.jpg"
              },
              {
                name: "CMC Vellore", 
                logo: "/cmc-vellore-logo.jpg"
              },
              {
                name: "IIT Madras",
                logo: "/iit-madras-logo.jpg"
              },
              {
                name: "MAHE Manipal",
                logo: "/mahe-manipal-logo.jpg"
              }
            ].map((institution, index) => (
              <motion.div
                key={institution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-lg flex flex-col items-center justify-center h-36"
              >
                <img
                  src={institution.logo}
                  alt={`${institution.name} Logo`}
                 className="h-16 w-auto object-contain hover:scale-110 hover:drop-shadow-xl transition-all duration-300"

                  onError={(e) => {
                    // Fallback if logo not found - show just name
                    e.target.style.display = 'none';
                  }}
                />
                <p className="text-gray-300text-sm font-medium mt-3 text-center">
                  {institution.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Reduced padding */}
      <section id="about" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-300 mb-4">
                Electronics and Communication Engineering graduate (2024) focused on software development, computer vision, and AI-driven healthcare solutions.
              </p>
              <p className="text-gray-300 mb-6">
                Currently working as a Project Research Scientist on the ICMR-funded HOMER project, a multi-center upper-limb rehabilitation study led by CMC Vellore and IIT Madras.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-purple-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-purple-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Profile photo in about section */}
              <div className="mb-6 flex justify-center">
                <img
                  src={personalInfo.photo1}
                  alt={`${personalInfo.name} - Professional Headshot`}
                  className="w-100 h-80 rounded-lg object-cover border-4 border-purple-600/50 shadow-xl"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%234a5568'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23fff' text-anchor='middle' dy='.3em'%3ENo Photo%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">🎓 Education & Quick Facts </h3>
              <div className="space-y-4">
                <div className="glass-effect p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AcademicCapIcon className="h-6 w-6 text-purple-400" />
                    <div>
                      <h4 className="font-semibold">{education.degree}</h4>
                      <p className="text-gray-400">{education.university}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-effect p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-400">1+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="glass-effect p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-400">3+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Programming Languages",
                icon: "💻",
                skills: skills.frontend
              },
              {
                title: "Technologies & Frameworks", 
                icon: "🧩",
                skills: skills.backend
              },
              {
                title: "Tools & Platforms",
                icon: "🛠️",
                skills: skills.tools
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-lg"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-600/20 border border-purple-600/50 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Experience</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-600/30"></div>
            
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 md:px-8">
                  <div className="glass-effect p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <BriefcaseIcon className="h-5 w-5 text-purple-400" />
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                    </div>
                     <h4 className="text-purple-400 mb-2">
                    {job.company}
                    {job.department && (
                      <span className="text-white text-sm ml-3">- {job.department}</span>
                    )}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">{job.period}</p>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex md:w-1/2 md:justify-center">
                  <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-dark"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-lg hover:transform hover:scale-105 transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <StarIcon className="h-16 w-16 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-600/20 border border-purple-600/50 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Publications & Certifications</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <DocumentTextIcon className="h-6 w-6 text-purple-400 mr-3" />
                Publications
              </h3>
              <div className="space-y-4">
              </div>
              {publications.map((pub, index) => (
                <div key={index} className="glass-effect p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">{pub.title}</h4>
                <p className="text-purple-400 text-sm mb-2">
                    {pub.journal} • {pub.year}
                </p>
                 <p className="text-gray-300 text-sm mb-4">{pub.description}</p>

                  {pub.link && (
                     <a
                       href={pub.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                     >
                  View Publication →
                  </a>
                 )}
               </div>
               ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <TrophyIcon className="h-6 w-6 text-purple-400 mr-3" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass-effect p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                    <p className="text-purple-400 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
                    <p className="text-gray-300 text-sm">{cert.credential}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                Interested in collaboration or research opportunities in rehabilitation technology, healthcare innovation, and software development. Feel free to reach out for discussions on engineering solutions across medical and technology-driven domains
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-purple-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-purple-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a href={personalInfo.github} className="text-gray-400 hover:text-purple-400 transition-colors">
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a href={personalInfo.linkedin} className="text-gray-400 hover:text-purple-400 transition-colors">
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                <a href={personalInfo.leetcode} className="text-gray-400 hover:text-purple-400 transition-colors">
                  <LeetCodeIcon className="h-6 w-6" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <form className="glass-effect p-6 rounded-lg" onSubmit={(e) => {
                e.preventDefault();
                alert('Contact form functionality would be implemented here!');
              }}>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-dark-tertiary border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-dark-tertiary border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 bg-dark-tertiary border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proverb Section */}
      <footer className="glass-effect py-8 px-6">
        <div className="proverb-text max-w-4xl mx-auto">
         <p className="text-lg font-serif font-light tracking-wide">
          " Either increase sacrifice or reduce desire "
          </p>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-400">
            © 2026 {personalInfo.name}. All rights reserved. Built with React and ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
