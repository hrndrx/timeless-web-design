import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: Briefcase, value: "40+", label: "Years Experience" },
    { icon: GraduationCap, value: "5+", label: "Universities Led" },
    { icon: BookOpen, value: "11+", label: "Publications" },
    { icon: Award, value: "12+", label: "Fellowships" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading - Red italic serif like business card */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 opacity-0 animate-fade-up text-accent uppercase tracking-wide italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            PROFESSOR ANDREW SSEMWANGA
          </h1>

          {/* Credentials */}
          <p className="text-sm md:text-base text-foreground font-bold mb-6 opacity-0 animate-fade-up animation-delay-100" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            (PhD, Doc. of Mngt, MBA, B.COM, FFA, FIPA, FIFC, MFC, CFC, MCIEA)
          </p>

          {/* Role - Bold sans-serif navy blue like business card */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[hsl(220,60%,25%)] mb-6 opacity-0 animate-fade-up animation-delay-200 tracking-wide" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            CONSULTANT / RESEARCHER / TRAINER
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-foreground font-bold max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up animation-delay-300">
            Corporate Governance, Finance, Accounting, Institutional Evaluation Programme,
            Due Diligence Assessment and Higher Education
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-up animation-delay-400">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded hover-lift"
            >
              Get in Touch
            </a>
            <a
              href="#expertise"
              className="px-8 py-4 border-2 border-foreground text-foreground font-semibold rounded hover-lift hover:bg-foreground hover:text-background transition-colors"
            >
              View Expertise
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 opacity-0 animate-fade-up animation-delay-500">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="light-card p-6 rounded-lg hover-lift"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;