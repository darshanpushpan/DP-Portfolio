import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const skills = [
  {
    group: "Programming & Scripting",
    items: ["Python", "Java", "JavaScript", "C#", ".NET", "SQL", "Node.js", "Bash"],
  },
  {
    group: "Software Development",
    items: ["REST API Design", "Git", "Jira", "Bitbucket", "Docker", "CI/CD", "Agile Methodologies"],
  },
  {
    group: "Security Integration",
    items: ["Secure SDLC", "OWASP Top 10", "Threat Modeling", "Secure Code Review"],
  },
  {
    group: "Tools & Platforms",
    items: ["AWS", "Azure", "Linux", "VS Code", "Postman"],
  },
  {
    group: "Networking & Protocols",
    items: ["TCP/IP", "DNS", "HTTPS", "SSH"],
  },
  {
    group: "Other",
    items: ["Application Development", "Debugging", "Documentation", "Team Collaboration"],
  },
];

const Tech = () => {
  const gradientClasses = [
    "from-fuchsia-500 to-purple-600",
    "from-indigo-500 to-blue-600",
    "from-emerald-500 to-teal-600",
    "from-rose-500 to-orange-500",
    "from-yellow-500 to-amber-600",
    "from-cyan-500 to-sky-600",
  ];

  return (
    <section>
      <div>
        <p className={`${styles.sectionSubText}`}>Technologies & tools</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((section, index) => (
          <motion.div
            key={section.group}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
            className={`p-[1.5px] rounded-2xl bg-gradient-to-r ${gradientClasses[index % gradientClasses.length]}`}
          >
            <div className="rounded-2xl h-full w-full bg-tertiary/70 backdrop-blur-sm">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="rounded-2xl p-6 h-full w-full transition-colors duration-300 hover:bg-tertiary/80"
              >
                <h3 className="text-white text-xl font-semibold mb-3">{section.group}</h3>
                <ul className="list-disc list-inside space-y-1 text-secondary">
                  {section.items.map((item) => (
                    <li key={`${section.group}-${item}`}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
