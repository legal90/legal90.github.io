
const skills = {
  "Core Competencies": [
    "Site Reliability Engineering",
    "DevOps",
    "Tech Leadership",
    "Team Management",
  ],
  "Cloud & Infrastructure": [
    "Kubernetes",
    "GCP",
    "AWS",
    "Terraform",
    "ArgoCD",
    "Helm",
  ],
  "Observability & Security": [
    "Datadog",
    "Splunk",
    "Prometheus",
    "Grafana",
    "PagerDuty",
    "SOC2",
  ],
  "CI/CD & Tools": [
    "GitOps",
    "GitHub Actions",
    "Jenkins",
    "Cloud Build",
    "Docker",
    "Linux",
  ],
};

const Skills = () => {
  return (
    <section className="py-20 px-4 animate-fade-in" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-accent mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
