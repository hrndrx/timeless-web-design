const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark-section py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-semibold text-gold mb-1">
              Prof. Andrew Ssemwanga, PhD
            </p>
            <p className="text-sm text-white/70">
              Consultant • Researcher • Trainer
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-white/70">
              © {currentYear} All rights reserved
            </p>
            <p className="text-xs text-white/50 mt-1">
              Kampala, Uganda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;