import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5/CSS3', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 85 },
      { name: 'NestJS', level: 70 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'GraphQL', level: 65 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Jest', level: 75 },
      { name: 'Webpack', level: 65 },
      { name: 'Vite', level: 80 },
      { name: 'CI/CD', level: 75 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 65 },
      { name: 'Vercel', level: 85 },
      { name: 'Netlify', level: 85 },
      { name: 'GitHub Actions', level: 75 },
      { name: 'Firebase', level: 80 },
      { name: 'Serverless', level: 65 },
    ],
  },
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700 font-medium">{skill.name}</span>
      <span className="text-gray-500 text-sm">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <motion.div
        className="bg-primary-600 h-2.5 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      ></motion.div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Skills
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
            A comprehensive overview of my technical skills and expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-white p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Other Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Redux', 'Vue.js', 'SASS/SCSS', 'Figma', 'UI/UX Design',
              'REST APIs', 'Python', 'Java', 'Linux', 'Agile/Scrum',
              'Microservices', 'Responsive Design', 'Performance Optimization',
              'SEO', 'Accessibility', 'Material UI', 'Chakra UI'
            ].map((skill) => (
              <motion.span
                key={skill}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
                whileHover={{ scale: 1.05, backgroundColor: '#e0f2fe' }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;