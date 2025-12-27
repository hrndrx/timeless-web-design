import { 
  Building, 
  TrendingUp, 
  GraduationCap, 
  ClipboardCheck, 
  Users, 
  FileCheck 
} from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: Building,
      title: "Corporate Governance",
      description: "Expert guidance on board structures, governance frameworks, policy development, and institutional leadership for organizations across Africa.",
    },
    {
      icon: TrendingUp,
      title: "Finance & Accounting",
      description: "Strategic financial management, investment analysis, budgeting, and accounting systems for public and private sector entities.",
    },
    {
      icon: GraduationCap,
      title: "Higher Education",
      description: "University administration, curriculum development, quality assurance, and academic program design. Former Vice Chancellor experience.",
    },
    {
      icon: ClipboardCheck,
      title: "Institutional Evaluation",
      description: "Comprehensive institutional evaluation programmes (IEP), accreditation support, and quality enhancement initiatives.",
    },
    {
      icon: FileCheck,
      title: "Due Diligence Assessment",
      description: "Thorough due diligence evaluations for investment readiness, loan applications, and organizational health assessments.",
    },
    {
      icon: Users,
      title: "Training & Capacity Building",
      description: "Customized training programmes in governance, finance, leadership, and strategic management for boards and executives.",
    },
  ];

  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
            Areas of Specialization
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Expertise & Services
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Delivering strategic solutions across corporate governance, finance, and education 
            sectors with over four decades of hands-on experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover-lift group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <area.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
