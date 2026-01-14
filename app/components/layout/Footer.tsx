import { Link } from 'react-router';
import { Mail, Phone, MapPin, Linkedin, Youtube, Facebook } from 'lucide-react';
import toyotaLogo from "~/assets/toyota-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4 flex flex-col items-start ">
            <div className="flex flex-col items-center gap-2">
              <div className="w-30 h-auto flex items-center justify-center">
                <img src={toyotaLogo} alt="Toyota" className="" />
              </div>
              <div>
                <p className="text-[10px] text-background/70 leading-tight">Engine Plant #3 Karawang</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Toyota Motor Manufacturing Indonesia - Engine Plant #3 is committed to delivering
              world-class engines with precision, quality, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className=''>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Teams', href: '/teams' },
                { name: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className=''>
            <h3 className="font-heading text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex justify-center items-center gap-3 text-sm text-background/70">
                <MapPin color='white' className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Kawasan Industri KIIC, Karawang, West Java, Indonesia 41361</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone color='white' className="w-5 h-5 text-primary shrink-0" />
                <span>+62 267 8617000</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail color='white' className="w-5 h-5 text-primary shrink-0" />
                <span>info@toyotaindonesia.co.id</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className=''>
            <h3 className="font-heading text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-background/70">
              Follow us for the latest updates on manufacturing excellence and innovation.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Toyota Motor Manufacturing Indonesia. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
