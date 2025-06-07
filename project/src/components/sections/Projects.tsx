import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Info } from 'lucide-react';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    "id": 1,
    "title": "Healthcare Platform with Symptom Checker and Insurance Verifier",
    "description": "A healthcare web app where users can input symptoms to get AI-powered assessments and verify insurance coverage.",
    "image":  "/assets/projects/Healthcare.png",
    "technologies": ["React", "Vite", "TypeScript", "Tailwind CSS", "OpenAI API", "Node.js", "Express", "MongoDB"],
    "githubUrl": "https://github.com/PremKalyanDavidRaj/Healthcare-Platform-with-Symptom-Checker-and-Insurance-Verifier",
    "demoUrl": "",
    "category": "fullstack"
  },
  {
    "id": 2,
    "title": "HMS Scheduler",
    "description": "A Hospital Management System Scheduler with role-based dashboards and ICD medical code integration.",
    image: "/assets/projects/hms.png",
    "technologies": ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "MUI", "JWT"],
    "githubUrl": "https://github.com/PremKalyanDavidRaj/HMSscheduler",
    "demoUrl": "",
    "category": "fullstack"
  },
  {
    "id": 3,
    "title": "Query Plan Visualizer and Optimizer",
    "description": "A tool to visualize and optimize SQL query execution plans, helping developers analyze performance bottlenecks and improve query efficiency.",
    "image": "/assets/projects/query-plan-visualizer.png",
    "technologies": ["React", "Vite", "TypeScript", "Tailwind CSS", "Node.js", "Express", "D3.js"],
    "githubUrl": "https://github.com/PremKalyanDavidRaj/Query-Plan-Visualizer-and-Optimizer",
    "demoUrl": "",
    "category": "fullstack"
  },
  {
    "id": 4,
    "title": "Reinforcement Learning",
    "description": "A collection of reinforcement learning algorithms implemented in Python.",
    "image": "/assets/projects/reinforcement.png",
    "technologies": ["Python", "TensorFlow", "PyTorch", "OpenAI Gym"],
    "githubUrl": "https://github.com/PremKalyanDavidRaj/reinforcement_learning",
    "demoUrl": "",
    "category": "ai"
  },
  {
    "id": 5,
    "title": "Constraint Optimization with Google OR-Tools",
    "description": "Constraint optimization problems solved using Google OR-Tools.",
    "image": "/assets/projects/OR-Tools.png",
    "technologies": ["Python", "Google OR-Tools"],
    "githubUrl": "https://github.com/PremKalyanDavidRaj/Constraint-Optimization-with-Google-OR-Tools",
    "demoUrl": "",
    "category": "ai"
  },
  {
    "id": 6,
    "title": "Iris Classifier",
    "description": "A machine learning project to classify Iris flowers using KNN and other models.",
    "image": "/assets/projects/iris.png",
    "technologies": ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    "githubUrl": "https://github.com/PremKalyanDavidRaj/iris-classifier",
    "demoUrl": "",
    "category": "ml"
  },
  {
    "id": 7,
    "title": "Project Regression",
    "description": "Regression models for various predictive analysis tasks.",
    "image": "/assets/projects/ProjectRegression.png",
    "technologies": ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    "githubUrl": "https://github.com/PremKalyanDavidRaj/Project-Regression-",
    "demoUrl": "",
    "category": "ml"
  },
  {
    "id": 10,
    "title": "Weather App",
    "description": "A weather forecasting application using weather APIs.",
    "image": "/assets/projects/WeatherApp.png",
    "technologies": ["React", "HTML", "CSS", "JavaScript", "Weather API"],
    "githubUrl": "https://github.com/PremKalyanDavidRaj/WeatherApp",
    "demoUrl": "",
    "category": "frontend"
  }
]
;

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Projects
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
            Explore my latest work and personal projects
          </motion.p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 bg-gray-100 p-1.5 rounded-lg">
            {[].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-100 text-xs text-gray-700 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-gray-100 text-xs text-gray-700 px-2 py-1 rounded-md">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <ExternalLink size={16} />
              
                  </a>
                  <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-primary-600 transition-colors ml-auto">
                    <Info size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a
            href="https://github.com/PremKalyanDavidRaj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;