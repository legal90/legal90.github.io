
import { Check, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const experiences = [
  {
    title: "Head of Site Reliability",
    company: "Billhop",
    period: "Apr 2023 - Present",
    description: "Leading SRE team initiatives, managing cloud infrastructure on GCP, implementing security guidelines, and establishing Infrastructure-as-Code practices using Terraform, Terragrunt, and ArgoCD.",
    achievements: [
      "Leading cloud migration project to GCP",
      "Managing and optimizing infrastructure costs",
      "Implementing GitOps practices with ArgoCD",
      "Establishing and maintaining Infrastructure-as-Code with Terraform",
      "Building and leading the SRE team",
    ],
  },
  {
    title: "Lead Site Reliability Engineer",
    company: "Symphony",
    period: "Apr 2020 - Apr 2023",
    description: "Led infrastructure automation and migration to GKE, implemented CI/CD pipelines, and improved observability using Splunk, Datadog, and PagerDuty.",
    achievements: [
      "Led migration of 200+ microservices to Kubernetes",
      "Improved system reliability and performance",
      "Implemented comprehensive monitoring solutions",
      "Automated deployment processes",
      "Managed and mentored SRE team members",
    ],
  },
  {
    title: "Senior Platform Engineer",
    company: "Volvo Cars",
    period: "Jun 2018 - Apr 2020",
    description: "Designed and operated internal Kubernetes-based PaaS, managed multiple clusters using kops, Helm, and Terraform, and developed internal tooling for logging, monitoring, and CI/CD.",
    achievements: [
      "Designed and implemented internal Kubernetes platform",
      "Developed automated deployment pipelines",
      "Created internal developer tools and APIs",
      "Maintained high-availability infrastructure",
      "Provided technical leadership and mentoring",
    ],
  },
  {
    title: "Infrastructure Engineer",
    company: "Apica Systems",
    period: "Feb 2017 - Jun 2018",
    description: "Maintained infrastructure for SaaS solutions across multiple cloud providers, implemented Infrastructure-as-Code, and developed automated build solutions.",
    achievements: [
      "Managed multi-cloud infrastructure",
      "Implemented Infrastructure-as-Code practices",
      "Developed automated testing solutions",
      "Improved system reliability and uptime",
      "Created comprehensive documentation",
    ],
  },
  {
    title: "Infrastructure Engineer",
    company: "Parallels Inc.",
    period: "Jul 2013 - Jan 2017",
    description: "Led DevOps initiatives, managed cloud infrastructure, and contributed to open-source projects including Vagrant provider and Docker Machine driver.",
    achievements: [
      "Contributed to Vagrant and Docker Machine projects",
      "Managed cloud infrastructure and deployments",
      "Implemented automated testing systems",
      "Developed internal infrastructure tools",
      "Led DevOps transformation initiatives",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-muted animate-fade-in" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Collapsible
              key={index}
              open={openIndex === index}
              onOpenChange={() => setOpenIndex(openIndex === index ? null : index)}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <CollapsibleTrigger className="w-full p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-2 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold text-accent">{exp.title}</h3>
                    <p className="text-primary font-medium mt-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                    <p className="text-muted-foreground mt-3">{exp.description}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-6 pb-6 pt-2">
                  <h4 className="font-semibold text-accent mb-3">Key Achievements:</h4>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
