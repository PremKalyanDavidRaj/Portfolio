import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  description: string;
  achievements?: string[];
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url: string;
}

const educations: Education[] = [
  {
    id: 1,
    degree: "Master of Science in Information Technology",
    institution: "University of New Hampshire",
    location: "Manchester, NH",
    description: "Specialized in AI/ML and Web Technologies. Completed thesis on improving web application performance through optimized rendering techniques.",
    achievements: [
      "GPA: 3.6/4.0",
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Applications",
    institution: "Vignan University",
    location: "Guntur, Andhra Pradesh, India",
    description: "Comprehensive program covering software development principles, algorithms, data structures, and system design. Participated in numerous hackathons and coding competitions.",
    achievements: [
      "GPA: 3.0/4.0",
    ]
  }
];

const certifications: Certification[] = [
  {
    id: 1,
    name: "Machine Learning",
    issuer: "Standford University",
    date: "2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/KZSNL6DFGAYM"
  },
  {
    id: 2,
    name: "Google Data Analytics",
    issuer: "Google",
    date: "2025",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/3T4EDEOHFF9V"
  },
  {
    id: 3,
    name: "SQL (Advanced) Certificate",
    issuer: "HackerRank",
    date: "2025",
    url: "https://www.hackerrank.com/certificates/50b2519c62e8"
  },
  {
    id: 4,
    name: "Frontend Developer (React) Certificate",
    issuer: "HackerRank",
    date: "2025",
    url: "https://www.hackerrank.com/certificates/aabbb8809c95"
  },
  {
    id: 5,
    name: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "2025",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/QSIIPQUHBEIO"
  },
  {
    id: 6,
    name: "Scientific Computing With Python",
    issuer: "freeCodeCamp",
    date: "2022",
    url: "https://www.freecodecamp.org/certification/premkalyan/scientific-computing-with-python-v7"
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Education & Certifications
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
            My academic background and professional certifications
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 flex items-center">
              <GraduationCap size={24} className="text-primary-600 mr-3" />
              <h3 className="text-2xl font-semibold">Academic Education</h3>
            </div>

            <div className="space-y-8">
              {educations.map((edu) => (
                <div 
                  key={edu.id}
                  className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary-500"
                >
                  <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <BookOpen size={16} className="mr-2" />
                    <span>{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <Calendar size={14} className="mr-2" />
                    <span>{edu.date}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                  
                  {edu.achievements && (
                    <div>
                      <h5 className="font-medium text-gray-700 mb-2">Achievements:</h5>
                      <ul className="space-y-1 text-gray-600">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 mr-2"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-8 flex items-center">
              <Award size={24} className="text-primary-600 mr-3" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <motion.a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">{cert.name}</h4>
                  <div className="flex items-center text-gray-600 mb-2">
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-2" />
                    <span>{cert.date}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="mt-10 bg-gray-50 p-6 rounded-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold mb-4">Continuous Learning</h4>
              <p className="text-gray-600 mb-4">
                I believe in lifelong learning and regularly take courses to expand my knowledge
                and stay current with industry trends and technologies.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 mr-2"></span>
                  <span>Currently learning advanced system design patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 mr-2"></span>
                  <span>Exploring machine learning and AI integration in web apps</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 mr-2"></span>
                  <span>Regularly attend tech conferences and workshops</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;