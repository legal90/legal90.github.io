
import { Check } from "lucide-react";

const experiences = [
  {
    title: "Head of Site Reliability",
    company: "Billhop",
    period: "Apr 2023 - Present",
    description: "Leading SRE team initiatives, managing cloud infrastructure on GCP, implementing security guidelines, and establishing Infrastructure-as-Code practices using Terraform, Terragrunt, and ArgoCD.",
  },
  {
    title: "Lead Site Reliability Engineer",
    company: "Symphony",
    period: "Apr 2020 - Apr 2023",
    description: "Led infrastructure automation and migration to GKE, implemented CI/CD pipelines, and improved observability using Splunk, Datadog, and PagerDuty.",
  },
  {
    title: "Senior Platform Engineer",
    company: "Volvo Cars",
    period: "Jun 2018 - Apr 2020",
    description: "Designed and operated internal Kubernetes-based PaaS, managed multiple clusters using kops, Helm, and Terraform, and developed internal tooling for logging, monitoring, and CI/CD.",
  },
  {
    title: "Infrastructure Engineer",
    company: "Apica Systems",
    period: "Feb 2017 - Jun 2018",
    description: "Maintained infrastructure for SaaS solutions across multiple cloud providers, implemented Infrastructure-as-Code, and developed automated build solutions.",
  },
  {
    title: "Infrastructure Engineer",
    company: "Parallels Inc.",
    period: "Jul 2013 - Jan 2017",
    description: "Led DevOps initiatives, managed cloud infrastructure, and contributed to open-source projects including Vagrant provider and Docker Machine driver.",
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
