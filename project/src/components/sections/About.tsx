import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users, Coffee } from 'lucide-react';

const AboutCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
  >
    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
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
            Get to know me better and what drives my passion for development
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Developer working" 
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-4">Full Stack Developer & UI/UX Enthusiast</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with over 5 years of experience building web applications. 
              My journey in tech started when I built my first website at 19, and I've been hooked ever since.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I specialize in JavaScript frameworks like React and Node.js, and I'm always exploring new technologies 
              to stay at the cutting edge of web development. I believe in clean code, user-centered design, and 
              building applications that are not just functional but also a joy to use.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you'll find me hiking in the mountains, reading sci-fi novels, or experimenting 
              with new recipes in the kitchen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span className="text-gray-700">Based in Boston, MA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span className="text-gray-700">5+ Years of Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span className="text-gray-700">Freelance Available</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span className="text-gray-700">Remote Work Preferred</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <AboutCard 
            icon={<Code2 size={24} />}
            title="Clean Code"
            description="I write clean, maintainable code that follows best practices and industry standards."
          />
          <AboutCard 
            icon={<Lightbulb size={24} />}
            title="Creative Solutions"
            description="I approach problems with creativity and find innovative solutions to complex challenges."
          />
          <AboutCard 
            icon={<Users size={24} />}
            title="Team Player"
            description="I thrive in collaborative environments and enjoy working with diverse teams."
          />
          <AboutCard 
            icon={<Coffee size={24} />}
            title="Always Learning"
            description="I'm constantly learning new technologies and improving my skills."
          />
        </div>
      </div>
    </section>
  );
};

export default About;