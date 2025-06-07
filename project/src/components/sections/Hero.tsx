import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary-600 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              Prem Kalyan David Raj Gai
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-heading font-medium mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              I build exceptional digital experiences with modern technologies.
              Specializing in creating robust, scalable applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                >
                  Contact Me <ArrowRight size={18} />
                </motion.button>
              </Link>
              <motion.a
                href="https://drive.google.com/file/d/1xEoKGFHaOw4uOd-PCuygdUmVmVaAUKbf/view?usp=sharing"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-medium flex items-center gap-2"
              >
                Resume <Download size={18} />
              </motion.a>
              <motion.a
                href="https://github.com/PremKalyanDavidRaj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
              >
                GitHub <Github size={18} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary-500 rounded-full absolute top-0 right-0 -z-10 blur-3xl opacity-20"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-secondary-500 rounded-full absolute bottom-0 left-0 -z-10 blur-3xl opacity-20"></div>
              <img   
                src={profileImg}
                alt="Prem Kalyan David Raj Gai"
                className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;