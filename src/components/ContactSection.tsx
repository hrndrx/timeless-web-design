import { Mail, Phone, MapPin, Linkedin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "assemwanga@gmail.com",
      href: "mailto:assemwanga@gmail.com",
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+256 750 123 477",
      href: "tel:+256750123477",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+256 750 123 477",
      href: "https://wa.me/256750123477",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/prof-andrew-ssemwanga-phd-36aa0420/",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-secondary/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Available for consultancy engagements, training programmes, research collaborations, 
            and advisory roles. Based in Kampala, Uganda with international reach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card-strong p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                  Location
                </h3>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Kampala, Uganda</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Plot 626, Lubowa Estate<br />
                      P.O. Box 9272<br />
                      Kampala, Uganda
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-background/50 rounded-xl">
                  <h4 className="text-sm font-medium text-primary mb-2">Available For:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Consultancy Engagements</li>
                    <li>• Training & Workshops</li>
                    <li>• Research Collaborations</li>
                    <li>• Board Advisory Roles</li>
                    <li>• Speaking Engagements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
