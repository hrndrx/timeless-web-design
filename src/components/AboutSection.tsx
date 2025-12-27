import { MapPin, Building2, Globe } from "lucide-react";

const AboutSection = () => {
  const memberships = [
    { org: "Institute of Financial Accountants (UK)", role: "Fellow" },
    { org: "Institute of Public Accountants (Australia)", role: "Fellow" },
    { org: "Institute of Financial Consultants (Canada/USA)", role: "Certified Fellow" },
    { org: "Chartered Institute of Education Assessors (UK)", role: "Member" },
    { org: "African Research and Resource Forum (Kenya)", role: "Associate Research Fellow" },
    { org: "Africa Governance Institute (Senegal)", role: "Corporate Governance Expert" },
  ];

  const currentRoles = [
    "Academic Initiatives Officer for Africa – USAFI (USA)",
    "Chairperson – Governance Systems International",
    "Co-Founder & Partner – Stepchange Africa (UK)",
    "Regional Coordinator – Professors Without Borders",
    "Country Representative – Leaders of Africa Institute",
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            About Professor Ssemwanga
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Card */}
          <div className="glass-card-strong p-8 rounded-2xl hover-lift">
            <h3 className="text-xl font-serif font-semibold text-primary mb-6">
              Professional Profile
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Professor Andrew Ssemwanga is a distinguished academic and consultant with over 
              four decades of experience spanning higher education, corporate governance, 
              finance, and institutional development. He has served as Vice Chancellor at 
              St. Lawrence University and held senior positions at multiple prestigious 
              institutions across Africa and internationally.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              His expertise encompasses institutional evaluation, due diligence assessment, 
              financial management, and strategic leadership. He has worked with governments, 
              international organizations including the World Bank, UNDP, and European University 
              Association, contributing to transformative projects across Uganda, Rwanda, 
              South Sudan, Nigeria, and beyond.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Kampala, Uganda
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Building2 className="w-4 h-4 text-primary" />
                P.O. Box 9272
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4 text-primary" />
                International Consultant
              </div>
            </div>
          </div>

          {/* Memberships & Roles */}
          <div className="space-y-8">
            {/* Professional Memberships */}
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-xl font-serif font-semibold text-primary mb-6">
                Professional Memberships
              </h3>
              <ul className="space-y-4">
                {memberships.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-foreground font-medium">{item.org}</span>
                      <span className="text-muted-foreground"> – {item.role}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Current Roles */}
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-xl font-serif font-semibold text-primary mb-6">
                Current Affiliations
              </h3>
              <ul className="space-y-3">
                {currentRoles.map((role, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
