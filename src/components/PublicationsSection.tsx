import { ExternalLink, BookOpen } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "The Role of External Examining in Higher Education: Challenges and Best Practices",
      type: "Book (Editor)",
      venue: "Emerald Publishing, Vol. 38",
      link: "https://www.emerald.com/insight/content/doi/10.1108/S2055-364120200000021009/full/html",
    },
    {
      title: "Teaching Business Ethics to Students in Uganda - Exploring its Significance in an African Context",
      type: "Journal Article",
      venue: "Emerald Insight",
      link: "https://www.emerald.com/insight/content/doi/10.1108/S2055-364120200000021009/full/html",
    },
    {
      title: "Evaluation Report for Ahmadu Bello University, Zaria – Nigeria",
      type: "Institutional Report",
      venue: "European University Association & Association of African Universities",
      link: "#",
    },
    {
      title: "A Code of Business Ethics: Building Linkages between African Higher Institutions and External Stakeholders",
      type: "Policy Brief",
      venue: "Association of African Universities",
      link: "https://www.aau.org/wp-content/uploads/sites/9/2018/04/Applied-Policy-Research-Brief-No.-1-Business-Ethics-2013-FOR-AAU-GENERAL-CONFERENCE.pdf",
    },
    {
      title: "South Sudanese Pound Managed Under Floating Exchange: Prospects and Challenges",
      type: "Book Chapter",
      venue: "Post-Referendum Sudan: National and Regional Questions, CODESRIA",
      link: "#",
    },
    {
      title: "Factors that Influence the Role of Expatriates in International Entrepreneurship: Rwanda Case Study",
      type: "Research Paper",
      venue: "Human Development Research Initiative",
      link: "https://hdevri.com/2018/11/20/international-entrepreneurship-in-rwanda/",
    },
  ];

  return (
    <section id="publications" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
            Academic Contributions
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Selected Publications
          </h2>
          <div className="section-divider" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="light-card p-6 rounded-lg hover-lift group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 items-center text-sm">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {pub.type}
                    </span>
                    <span className="text-muted-foreground">{pub.venue}</span>
                  </div>
                </div>
                {pub.link !== "#" && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Member of Editorial Boards: Emerald Journal of Applied Research in Higher Education, 
            International Academic Journal of Development Research, Higher Education Compass
          </p>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;