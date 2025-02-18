
import { Check } from "lucide-react";

const experiences = [
  {
    title: "Site Reliability Engineer",
    company: "Grafana Labs",
    period: "2021 - Present",
    description: "Leading SRE initiatives for cloud-native monitoring solutions.",
  },
  {
    title: "Senior Platform Engineer",
    company: "ITRex Group",
    period: "2018 - 2021",
    description: "Architected and maintained cloud infrastructure for enterprise clients.",
  },
  {
    title: "DevOps Engineer",
    company: "ScienceSoft",
    period: "2013 - 2018",
    description: "Implemented CI/CD pipelines and automated deployment processes.",
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-muted animate-fade-in" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12 text-center">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-2 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent">{exp.title}</h3>
                  <p className="text-primary font-medium mt-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  <p className="text-muted-foreground mt-3">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
