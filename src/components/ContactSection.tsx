import { Mail, Phone, MapPin, Linkedin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email:",
      value: "assemwanga@gmail.com",
      href: "mailto:assemwanga@gmail.com",
    },
    {
      icon: Phone,
      label: "Mobile cell:",
      value: "+256 750 123 477",
      href: "tel:+256750123477",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp:",
      value: "+256 750 123 477",
      href: "https://wa.me/256750123477",
    },
  ];

  return (
    <section id="contact" className="dark-section py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider text-sm uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Contact Information
          </h2>
          <div className="section-divider" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="dark-card p-8 md:p-12 rounded-lg">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details - Red labels like business card */}
              <div>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-label-red font-semibold">{item.label}</p>
                        <p className="text-white group-hover:text-gold transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/prof-andrew-ssemwanga-phd-36aa0420/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-label-red font-semibold">LinkedIn:</p>
                      <p className="text-white group-hover:text-gold transition-colors">
                        Connect on LinkedIn
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Address - Like business card */}
              <div>
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">P.O.Box 9272, Kampala - Uganda</p>
                    <p className="text-white/80">
                      Plot 626, Lubowa Estate
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="text-gold font-semibold mb-4">Available For:</h4>
                  <ul className="text-white/80 space-y-2">
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