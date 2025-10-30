import { Link } from 'wouter';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import locationsData from '@/data/locations.json';
import type { Location } from '@shared/schema';

const locations = locationsData as Location[];

export function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-bold text-primary mb-4" data-testid="text-footer-title">
              Lil Green Kitchen
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{t.footer.aboutText}</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/lil_green_kitchen"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-instagram"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-menu">
                    {t.nav.menu}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/locations">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-locations">
                    {t.nav.locations}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/story">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-story">
                    {t.nav.story}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/catering">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-catering">
                    {t.nav.catering}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-contact">
                    {t.nav.contact}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.footer.locations}</h4>
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.id}>
                  <h5 className="font-medium text-foreground text-sm mb-2">{location.city}</h5>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground mb-1">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      {location.address}, {location.zip}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors">
                      {location.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/impressum">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-impressum">
                    {t.footer.impressum}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/datenschutz">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-datenschutz">
                    {t.footer.datenschutz}
                  </span>
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <a href="mailto:info@lilgreen.de" className="hover:text-primary transition-colors">
                info@lilgreen.de
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sidebar-border text-center">
          <p className="text-sm text-muted-foreground">{t.footer.allRights}</p>
          <p className="text-xs text-muted-foreground mt-2">{t.footer.company}</p>
        </div>
      </div>
    </footer>
  );
}
