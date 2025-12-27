const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-semibold text-primary mb-1">
              Prof. Andrew Ssemwanga, PhD
            </p>
            <p className="text-sm text-muted-foreground">
              Consultant • Researcher • Trainer
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Kampala, Uganda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
