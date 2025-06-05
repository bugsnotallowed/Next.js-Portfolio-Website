// 'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';

interface Skill {
  name: string;
  icon: string;
  category: 'languages' | 'webdev' | 'databases' | 'tools';
}

const skills: Skill[] = [
  // Languages
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', category: 'languages' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', category: 'languages' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', category: 'languages' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', category: 'languages' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg', category: 'languages' },
  
  // Web Development
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', category: 'webdev' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', category: 'webdev' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg', category: 'webdev' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'webdev' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', category: 'webdev' },
  
  // Databases
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', category: 'databases' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg', category: 'databases' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', category: 'databases' },
  { name: 'Postgresql', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', category: 'databases' },
  
  // Tools
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', category: 'tools' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', category: 'tools' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', category: 'tools' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', category: 'tools' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', category: 'tools' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', category: 'tools' }
];

type Category = 'all' | 'languages' | 'webdev' | 'databases' | 'tools';

const categoryLabels: Record<Category, string> = {
  all: 'All Skills',
  languages: 'Languages',
  webdev: 'Web Dev',
  databases: 'Databases',
  tools: 'Tools',
};

const categoryTitles: Record<Exclude<Category, 'all'>, string> = {
  languages: 'Languages',
  webdev: 'Web Development',
  databases: 'Databases',
  tools: 'Tools & Technologies',
};

export default function TechnicalExpertise() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const skillsByCategory = activeCategory === 'all' 
    ? {
        languages: skills.filter(s => s.category === 'languages'),
        webdev: skills.filter(s => s.category === 'webdev'),
        databases: skills.filter(s => s.category === 'databases'),
        tools: skills.filter(s => s.category === 'tools'),
      }
    : null;

  return (
    <section id="skills" className="py-10 px-6 bg-gradient-to-br">

      {/* Header */}
      <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical {""} 
            <span className='text-4xl md:text-5xl font-bold text-purple mb-4'>Expertise</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning multiple technologies and domains
          </p>
        </div>

      <div className="max-w-6xl mx-auto py-10 px-10 border border-white/[.2] rounded-3xl">

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as Category)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                activeCategory === key
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                  : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {activeCategory === 'all' ? (
            // Show all categories when "All Skills" is selected
            Object.entries(skillsByCategory!).map(([category, categorySkills]) => (
              <div key={category} className="animate-fade-in">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    {category === 'languages' && '💻'}
                    {category === 'webdev' && '🌐'}
                    {category === 'databases' && '🗄️'}
                    {category === 'tools' && '🔧'}
                  </div>
                  <h3 className="text-2xl font-semibold text-purple-400">
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {categorySkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Show filtered skills for specific category
            <div className="animate-fade-in">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {filteredSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <div
      className={cn(
        "group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6",
        "hover:bg-slate-700/40 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10",
        "transition-all duration-300 transform hover:scale-105 hover:-translate-y-2",
        "animate-slide-up"
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-purple-600/20 transition-colors duration-300">
          <Image
            src={skill.icon}
            alt={skill.name}
            width={32}
            height={32}
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
          {skill.name}
        </span>
      </div>
    </div>
  );
}