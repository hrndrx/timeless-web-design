const ExperienceSection = () => {
  const experiences = [
    {
      period: "2024 - Present",
      role: "Academic Initiatives Officer for Africa",
      organization: "United States and Africa Initiatives (USAFI)",
      location: "California, USA",
      description: "Linking experts in the USA with academic institutions and civil societies in Africa for capacity building and advocacy.",
    },
    {
      period: "2022 - 2023",
      role: "Due Diligence Assessment Team Leader",
      organization: "Einstein Rising & OVO Belgium",
      location: "Kampala, Uganda",
      description: "Led comprehensive due diligence assessments for over 40 companies seeking loans, grants, and equity financing.",
    },
    {
      period: "2020 - Present",
      role: "Co-Founder & Partner",
      organization: "Stepchange Africa",
      location: "London, UK",
      description: "Identifying investors and collaborative partners across Africa and Europe. Team leader in Corporate Governance initiatives.",
    },
    {
      period: "2018 - 2020",
      role: "Vice Chancellor",
      organization: "St. Lawrence University",
      location: "Kampala, Uganda",
      description: "Overall administration of the University including teaching, learning, research, and community engagement.",
    },
    {
      period: "2016 - 2017",
      role: "Deputy Vice Chancellor (Academics)",
      organization: "St. Lawrence University",
      location: "Kampala, Uganda",
      description: "Managing academic affairs, quality assurance, and human resource development for the institution.",
    },
    {
      period: "2005 - 2008",
      role: "Lecturer, Faculty of Economics and Management",
      organization: "Makerere University",
      location: "Kampala, Uganda",
      description: "Teaching Corporate Finance, Corporate Governance, and Financial Management to MBA and undergraduate students.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Career Highlights
          </h2>
          <div className="section-divider" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1/2 border-4 border-background z-10" />

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="light-card p-6 rounded-lg hover-lift">
                    <span className="text-primary font-medium text-sm">{exp.period}</span>
                    <h3 className="text-lg font-serif font-semibold text-foreground mt-2 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground font-medium text-sm mb-2">
                      {exp.organization}
                    </p>
                    <p className="text-muted-foreground/70 text-xs mb-3">{exp.location}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;