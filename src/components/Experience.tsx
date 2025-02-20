
import { Check, ChevronDown, Star } from "lucide-react";
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
    description: "Leading the SRE team and managing internal infrastructure including GCP, MongoDB Atlas, and third-party integrations. Implementing IT operations, security guidelines, and establishing Infrastructure-as-Code practices across cloud resources.",
    achievements: ["Led the SRE team, fostering knowledge sharing, coaching, and cross-team collaboration. Owned and managed the entire internal infrastructure, including GCP, MongoDB Atlas, and third-party integrations.", "Implemented IT operations and security guidelines, focusing on Change Management, Incident Management, and SOC2 compliance.", "Supported development teams by providing expertise in IT operations, cloud infrastructure, and observability.", "Founded the SRE team, successfully hiring and onboarding engineers, boosting the capacity and performance of the SRE business unit.", "Established an Infrastructure-as-Code approach across all cloud infrastructure resources, using Terraform, Terragrunt, and ArgoCD.", "Led the adoption of GitOps for managing ephemeral environments, streamlining internal development and testing workflows with ArgoCD and Helm.", "Planned and executed a project to optimize CI/CD pipelines, reducing build times and increasing build success rates, leveraging GCP Cloud Build, GitHub Actions and Kubernetes."]
  },
  {
    title: "Lead Site Reliability Engineer",
    company: "Symphony",
    period: "Apr 2020 - Apr 2023",
    description: "Led infrastructure automation and migration initiatives, implementing CI/CD pipelines and improving observability across products. Specialized in Real-Time Communication infrastructure and DevOps practices implementation.",
    achievements: ["Successfully migrated microservices from AWS ECS to an internal platform based on Google Kubernetes Engine (GKE) using Kubernetes, Helm, and ArgoCD.", "Led the infrastructure automation efforts for Real-Time Communication (WebRTC) projects, enhancing service reliability and scalability.", "Implemented CI/CD pipelines for both containerized and VM-based services, enabling automated deployments and infrastructure changes through Terraform, Terragrunt, and Packer.", "Improved observability across products by implementing logging (Splunk), monitoring dashboards (Datadog), and alerting systems (PagerDuty).", "Played a key role in on-call rotations, ensuring high availability of critical production services.", "Drove the adoption of DevOps practices, empowering development teams to manage their full product lifecycle from development to production.", "Led the migration and upgrade of Terraform states and modules from older version 0.11 to 1.1+, improving infrastructure management and consistency."]
  },
  {
    title: "Senior Platform Engineer",
    company: "Volvo Cars",
    period: "Jun 2018 - Apr 2020",
    description: "Designed and operated an internal Kubernetes-based Platform-as-a-Service, managing multiple clusters and developing comprehensive internal tooling for logging, monitoring, and CI/CD.",
    achievements: ["Designed and operated an internal distributed platform based on Kubernetes, providing it as a Platform-as-a-Service (PaaS) for product teams and helping them adopt cloud-native best practices.", "Managed and maintained multiple Kubernetes clusters using tools like kops, Helm, and Terraform.", "Developed and maintained internal tools within Kubernetes, including logging (ElasticSearch, FluentD, Kibana), monitoring (Prometheus, Grafana), CI/CD (Jenkins, Spinnaker, ArgoCD), and security (Vault).", "Successfully created and deployed the internal PaaS, onboarding the first group of projects (~10 in total) to the platform.", "Authored platform documentation and onboarding guides to help other teams integrate effectively.", "Led the implementation of Infrastructure-as-Code for Kubernetes clusters and services using Terraform, kops, and Helm."]
  },
  {
    title: "Infrastructure Engineer",
    company: "Apica Systems",
    period: "Feb 2017 - Jun 2018",
    description: "Maintained infrastructure for SaaS solutions across multiple cloud providers, managing over 2000 distributed nodes and implementing Infrastructure-as-Code practices.",
    achievements: ["Maintained infrastructure for the company's SaaS solutions (Apica Synthetic, Apica LoadTest), supporting over 2000 distributed nodes across AWS, Rackspace, DigitalOcean, VMware vSphere, and bare metal.", "Collaborated with development and QA teams to provide technical expertise for production services and assist with product improvements.", "Provided third-line support, troubleshooting customer-specific issues.", "Managed internal services, including monitoring (Sensu, Grafana), metric collection (Telegraf, InfluxDB), logging (Graylog, Elasticsearch), configuration management (Puppet, Foreman), and CI (TeamCity).", "Participated in on-call rotations, troubleshooting incidents and preparing detailed reports.", "Developed a robust solution for building and releasing full-stack installers of Apica products using Chef's Omnibus, automating the creation of platform-specific packages with TeamCity. This solution was successfully deployed to On-Prem and Hybrid customers.", "Pioneered the adoption of Infrastructure-as-Code for managing both private and public cloud resources using Terraform and Packer.", "Implemented integration tests for infrastructure code (Puppet manifests) using Vagrant, TestKitchen, and InSpec, ensuring code quality and reliability."]
  },
  {
    title: "Infrastructure Engineer",
    company: "Parallels Inc.",
    period: "Jul 2013 - Jan 2017",
    description: "Led DevOps initiatives, managed cloud infrastructure based on Parallels Cloud Server and Virtuozzo Containers, and contributed to major open-source projects in the virtualization space.",
    achievements: ["Led DevOps evangelism efforts, promoting best practices like Infrastructure Automation, CI/CD, and the adoption of tools such as Chef, TestKitchen, Vagrant, Packer, and Jenkins across the company.", "Managed internal cloud infrastructure based on Parallels Cloud Server and Virtuozzo Containers.", "Maintained and contributed to Parallels' open-source projects, including Vagrant provider, Docker Machine driver, and Chef cookbooks.", "Oversaw the maintenance of public Parallels web services, including the official website, forum, and customer support systems.", "Automated internal infrastructure services, including JIRA, Bitbucket Server, Confluence, Jenkins, and Chef Server.", "Participated in on-call rotations, troubleshooting real-time production issues.", "Automated the deployment and management of external and internal infrastructure using Chef, enabling easy deployment, rollback, and environment replication (production, staging, testing).", "Contributed to numerous open-source projects like Docker Machine, Chef, Vagrant, Packer, and Bento, enhancing community-driven tools.", "Improved Parallels Desktop for Pro customers by developing integrations with popular tools like Vagrant, Packer, and Docker Machine."]
  },
  {
    title: "System Administrator",
    company: "Roseltorg (Unified Electronic Trading Platform)",
    period: "Jun 2012 - Jul 2013",
    description: "",
    achievements: []
  },
  {
    title: "System Administrator",
    company: "MFI Soft",
    period: "Jun 2010 - Jun 2012",
    description: "",
    achievements: []
  }
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-muted animate-fade-in select-text" id="experience">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl font-bold text-accent mb-12 text-center">Experience</h2>
        
        {/* Road Background */}
        <div className="absolute left-[47px] top-24 bottom-8 w-[2px] bg-gradient-to-b from-primary/30 to-primary/10" />
        
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isCurrentJob = index === 0; // First position is the current one
            
            return (
            <div key={index} className="relative">
              {/* Connecting dot with different style for current job */}
              <div className={`absolute left-[44px] top-[28px] w-8 h-8 rounded-full ${
                isCurrentJob ? 'bg-primary/20 animate-pulse' : 'bg-primary/10'
              }`} />
              
              <Collapsible
                open={openIndex === index}
                onOpenChange={() => setOpenIndex(openIndex === index ? null : index)}
                className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative z-10 ${
                  isCurrentJob ? 'ring-2 ring-primary/20 ring-offset-2 ring-offset-muted' : ''
                }`}
              >
                <CollapsibleTrigger asChild>
                  <div className="w-full p-6 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className={`rounded-full p-2 mt-1 shadow-md relative z-20 select-none ${
                        isCurrentJob ? 'bg-primary animate-pulse' : 'bg-primary'
                      }`}>
                        {isCurrentJob ? (
                          <Star className="w-4 h-4 text-white" />
                        ) : (
                          <Check className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold text-accent">{exp.title}</h3>
                          {isCurrentJob && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium mt-1">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                        <p className="text-muted-foreground mt-3">{exp.description}</p>
                      </div>
                      {exp.achievements.length > 0 && (
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground transition-transform select-none ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>
                  </div>
                </CollapsibleTrigger>
                {exp.achievements.length > 0 && (
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
                )}
              </Collapsible>
              
              {/* Decorative elements */}
              {index !== experiences.length - 1 && (
                <>
                  <div className="absolute left-[47px] top-24 h-16 w-[2px] bg-gradient-to-b from-primary to-primary/30" />
                  <div className="absolute left-[43px] top-32 w-[10px] h-[10px] rounded-full bg-primary/40" />
                </>
              )}
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Experience;
