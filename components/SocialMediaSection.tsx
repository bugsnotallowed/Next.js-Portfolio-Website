import React from "react";
import { cn } from "@/utils/cn";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const SocialMediaSection = () => {
  const socialMediaData = [
    {
      name: "LinkedIn",
      username: "@adarshgupta",
      link: "https://www.linkedin.com/in/adarsh-gupta-650a09264/",
      backgroundImage: "/LinkedInProfilePic.png", // Replace with your LinkedIn profile/cover image
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      gradient: "from-blue-600 to-blue-800"
    },
    {
      name: "GitHub",
      username: "@bugsnotallowed",
      link: "https://github.com/bugsnotallowed",
      backgroundImage: "/GithubProfilePic.png", // Replace with your GitHub profile image
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      gradient: "from-gray-700 to-gray-900"
    },
    {
      name: "Instagram",
      username: "@aadarsh_173",
      link: "https://www.instagram.com/aadarshhh_173/?igsh=YnA1OTc3bnU1MmN1#",
      backgroundImage: "/InstagramProfilepic.png", // Replace with your Instagram profile image
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      gradient: "from-pink-500 via-red-500 to-yellow-500"
    }
  ];

  return (
    <section id="contact">
    <div className="py-10 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today.
        </p>
      </div>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialMediaData.map((social, index) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-50"
                  style={{
                    backgroundImage: `url(${social.backgroundImage})`
                  }}
                />
                {/* Gradient overlay */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-80 group-hover:opacity-90 transition-opacity duration-300",
                  social.gradient
                )} />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-48 flex flex-col justify-between">
                {/* Icon and Platform Name */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white group-hover:bg-white/20 transition-all duration-300">
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {social.username}
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex items-center justify-between">
                  <span className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">
                    Follow me on {social.name}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subtle animation elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
            </a>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            Let's build something amazing together! 🚀
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default SocialMediaSection;