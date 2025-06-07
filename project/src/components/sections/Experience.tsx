import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CalendarDays } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Software Engineer - intern",
    company: "Reality AI Lab.",
    location: "NYC, NY",
    date: "Jan 2025 - Present",
    description: [
      "Lead a team of 5 frontend developers in building a modern SaaS platform using React and TypeScript",
      "Developed reusable, responsive frontend components using React.js and React Hooks for the Marvel AI platform",
      "Built mobile-first UI based on Figma designs, ensuring WCAG accessibility and cross-browser compatibility",
      "Integrated REST APIs and Firebase real-time database for dynamic content delivery",
      "Contributed to architecture reviews and Dockerized backend services for deployment on AWS EC2",
      "Improved code reliability through unit and integration testing with Jest and Postman"
    ],
    skills: ["React.js",
    "Next.js",
    "TypeScript",
    "Material UI",
    "Firebase",
    "REST APIs",
    "Docker",
    "GitHub Actions",
    "AWS"]
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Tata Consultancy Services",
    location: "Hyderabad, India",
    date: "Nov 2023",
    description: [
      "Built interactive, responsive UIs with React.js and Redux, enhancing usability for customer service dashboards across 4 departments",
      "Designed and implemented REST APIs with Node.js and Express.js, enabling secure and scalable backend integrations",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Integrated CI/CD pipelines via Jenkins and deployed services to AWS EC2, collaborating with DevOps for production stability",
      "Created reusable UI components aligned with Material UI and company branding guidelines",
      "Led efforts to implement mobile-first designs and ensure accessibility compliance",
      "Automated CI/CD pipelines using Jenkins and GitHub Actions to streamline deployments",

      "Participated in agile development processes, including sprint planning and retrospectives"
    ],
    skills: ["React.js",
    "Redux",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "AWS",
    "Git",
    "Jenkins", "Agile"]
  }
];

const ExperienceItem: React.FC<{ experience: ExperienceItem; index: number }> = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="md:w-1/2 p-4">
        <div 
          className={`bg-white p-6 rounded-xl shadow-md ${
            isEven ? 'md:mr-8' : 'md:ml-8'
          }`}
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
            <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {experience.date.split('-')[0]}
            </span>
          </div>
          
          <div className="flex items-center text-gray-600 mb-4">
            <Building2 size={16} className="mr-2" />
            <span className="font-medium">{experience.company}</span>
            <span className="mx-2">•</span>
            <span>{experience.location}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <CalendarDays size={14} className="mr-2" />
            <span>{experience.date}</span>
          </div>
          
          <ul className="space-y-2 mb-4 text-gray-600">
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 mr-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.skills.map((skill) => (
              <span 
                key={skill} 
                className="bg-gray-100 text-xs text-gray-700 px-2 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex w-1/2 items-center justify-center relative">
        {index < experiences.length - 1 && (
          <div className="absolute top-1/2 bottom-0 w-1 bg-gray-200"></div>
        )}
        <div className="z-10 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center">
          {experience.id}
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A timeline of my professional journey and achievements
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2"></div>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceItem key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;