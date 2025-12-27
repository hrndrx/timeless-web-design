import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

const HeroSection = () => {
  const credentials = [
    "PhD in Corporate Governance",
    "Doctor of Management",
    "MBA – Financial Management",
    "B.Com – Accounting",
  ];

  const stats = [
    { icon: Briefcase, value: "40+", label: "Years Experience" },
    { icon: GraduationCap, value: "5+", label: "Universities Led" },
    { icon: BookOpen, value: "11+", label: "Publications" },
    { icon: Award, value: "12+", label: "Fellowships" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float animation-delay-300" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium tracking-wide">
              Consultant • Researcher • Trainer
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 opacity-0 animate-fade-up animation-delay-100">
            <span className="text-foreground">Professor</span>
            <br />
            <span className="text-gradient-gold">Andrew Ssemwanga</span>
          </h1>

          {/* Credentials */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 opacity-0 animate-fade-up animation-delay-200">
            PhD, Doc. of Mngt, MBA, B.COM, FFA, FIPA, FIFC, MFC, CFC, MCIEA
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up animation-delay-300">
            Expert in Corporate Governance, Finance, Accounting, Institutional Evaluation,
            Due Diligence Assessment and Higher Education
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-up animation-delay-400">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover-lift gold-glow"
            >
              Get in Touch
            </a>
            <a
              href="#expertise"
              className="px-8 py-4 glass-card text-foreground font-semibold rounded-lg hover-lift border border-primary/20"
            >
              View Expertise
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 opacity-0 animate-fade-up animation-delay-500">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-lift"
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
