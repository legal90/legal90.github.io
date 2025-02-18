
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
      "Established and led a high-performing SRE team of 5 engineers",
      "Implemented comprehensive monitoring and alerting system using Datadog",
      "Reduced infrastructure costs by 30% through optimization",
      "Achieved 99.99% platform availability",
      "Successfully completed SOC2 Type II certification",
    ],
  },
  {
    title: "Lead Site Reliability Engineer",
    company: "Symphony",
    period: "Apr 2020 - Apr 2023",
    description: "Led infrastructure automation and migration to GKE, implemented CI/CD pipelines, and improved observability using Splunk, Datadog, and PagerDuty.",
    achievements: [
      "Successfully migrated 200+ microservices to Google Kubernetes Engine",
      "Designed and implemented GitOps workflow using ArgoCD",
      "Reduced deployment time from hours to minutes",
      "Built automated disaster recovery procedures",
      "Mentored junior SRE team members",
    ],
  },
  {
    title: "Senior Platform Engineer",
    company: "Volvo Cars",
    period: "Jun 2018 - Apr 2020",
    description: "Designed and operated internal Kubernetes-based PaaS, managed multiple clusters using kops, Helm, and Terraform, and developed internal tooling for logging, monitoring, and CI/CD.",
    achievements: [
      "Architected and deployed company-wide Kubernetes platform",
      "Created self-service developer portal for 100+ development teams",
      "Implemented automated scaling solutions saving 40% in cloud costs",
      "Led the adoption of Infrastructure as Code practices",
      "Conducted workshops on Kubernetes and cloud-native technologies",
    ],
  },
  {
    title: "Infrastructure Engineer",
    company: "Apica Systems",
    period: "Feb 2017 - Jun 2018",
    description: "Maintained infrastructure for SaaS solutions across multiple cloud providers, implemented Infrastructure-as-Code, and developed automated build solutions.",
    achievements: [
      "Implemented multi-cloud infrastructure using Terraform",
      "Developed automated backup and restore procedures",
      "Reduced system downtime by 65%",
      "Created comprehensive documentation for all infrastructure components",
      "Improved CI/CD pipeline efficiency by 50%",
    ],
  },
  {
    title: "Infrastructure Engineer",
    company: "Parallels Inc.",
    period: "Jul 2013 - Jan 2017",
    description: "Led DevOps initiatives, managed cloud infrastructure, and contributed to open-source projects including Vagrant provider and Docker Machine driver.",
    achievements: [
      "Contributed to major open-source projects in the virtualization space",
      "Designed and implemented automated testing infrastructure",
      "Reduced deployment failures by 80%",
      "Created internal tools for infrastructure management",
      "Mentored junior team members in DevOps practices",
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
