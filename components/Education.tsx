import { useState } from 'react';
import { cn } from '@/utils/cn';

interface Course {
  name: string;
  icon: string;
}

interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
  cgpa?: string;
  grade10?: string;
  grade12?: string;
  specialization?: string;
  courses?: Course[];
}

const educationData: EducationItem[] = [
  {
    id: 'be',
    period: '2022 - Present',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Fr. Conceicao Rodrigues College of Engineering',
    location: 'Mumbai, Maharashtra',
    cgpa: '7.9/10.0',
    courses: [
      { name: 'Data Structures & Algorithms', icon: '</>' },
      { name: 'Database Management Systems', icon: '🗄️' },
      { name: 'Operating Systems', icon: '💻' },
      { name: 'Computer Networks', icon: '🌐' },
      { name: 'Software Engineering', icon: '⚙️' },
      { name: 'Artificial Intelligence', icon: '🤖' }
    ]
  },
  {
    id: 'junior college',
    period: '2020 - 2022',
    degree: 'HSC SSC',
    institution: 'Nirmala Memorial Foundation, P.J Pancholia High School',
    location: 'Mumbai',
    grade12: '80%',
    grade10: '91.2%',
    specialization: 'Specialized in Physics, Chemistry, and Maths'
  }
];

export default function Education() {
  const [expandedCard, setExpandedCard] = useState<string | null>('be');

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="education" className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Education {""}
            <span className='text-4xl md:text-5xl font-bold text-purple mb-2'>Qualifications</span>
          </h2>
          <div className="w-16 h-1 bg-purple-600 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple"></div>

          {educationData.map((item, index) => (
            <div key={item.id} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full border-4 border-purple text-purple"></div>

              {/* Period */}
              <div className="ml-8 mb-4">
                <span className="text-2xl font-semibold text-purple">
                  {item.period}
                </span>
              </div>

              {/* Education Card */}
              <div className="ml-8">
                <div
                  className={cn(
                    "border border-slate-700/50 rounded-lg p-6 transition-all duration-300",
                    "hover:border-purple-500/50 cursor-pointer",
                    expandedCard === item.id && "border-purple-500/50"
                  )}
                  onClick={() => toggleCard(item.id)}
                >
                  {/* Degree and Institution */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-gray-400 text-lg">
                      {item.institution} {item.location}
                    </p>
                  </div>

                  {/* Grades */}
                  <div className="space-y-2 mb-4">
                    {item.cgpa && (
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400 font-semibold text-lg">
                          CGPA: {item.cgpa}
                        </span>
                      </div>
                    )}
                    {item.grade12 && (
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400 font-semibold text-lg">
                          12th: {item.grade12}
                        </span>
                      </div>
                    )}
                    {item.grade10 && (
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400 font-semibold text-lg">
                          10th: {item.grade10}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Specialization */}
                  {item.specialization && (
                    <p className="text-white text-lg mb-4">
                      {item.specialization}
                    </p>
                  )}

                  {/* Key Courses - Expandable */}
                  {item.courses && (
                    <div className="transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-semibold text-white">
                          Key Courses
                        </h4>
                        <button
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCard(item.id);
                          }}
                        >
                          <svg
                            className={cn(
                              "w-6 h-6 transition-transform duration-300",
                              expandedCard === item.id ? "rotate-180" : ""
                            )}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Courses Grid */}
                      <div
                        className={cn(
                          "grid grid-cols-1 md:grid-cols-2 gap-3 overflow-hidden transition-all duration-500 ease-in-out",
                          expandedCard === item.id
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        )}
                      >
                        {item.courses.map((course, courseIndex) => (
                          <div
                            key={courseIndex}
                            className={cn(
                              "flex items-center gap-3 p-3 rounded-lg border border-slate-700/30",
                              "hover:border-purple-500/30 transition-colors duration-200",
                              "animate-slide-up"
                            )}
                            style={{
                              animationDelay: `${courseIndex * 100}ms`,
                            }}
                          >
                            <span className="text-purple-400 text-lg">
                              {course.icon}
                            </span>
                            <span className="text-gray-300 font-medium">
                              {course.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}