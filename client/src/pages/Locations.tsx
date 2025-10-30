import { motion, useReducedMotion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Bus, Car, Navigation } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import locationsData from '@/data/locations.json';
import type { Location } from '@shared/schema';

const locations = locationsData as Location[];

export default function Locations() {
  const { t, lang } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-testid="text-locations-title"
          >
            {t.locations.title}
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.locations.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover-elevate transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-serif text-3xl text-primary" data-testid={`text-location-${location.id}`}>
                      {location.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{location.address}</p>
                        <p className="text-sm text-muted-foreground">{location.zip} {location.city}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a
                        href={`tel:${location.phone}`}
                        className="text-foreground hover:text-primary transition-colors"
                        data-testid={`link-phone-${location.id}`}
                      >
                        {location.phone}
                      </a>
                    </div>

                    {/* Opening Hours */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                        <h3 className="font-semibold text-foreground">{t.locations.hours}</h3>
                      </div>
                      <div className="ml-8 space-y-2">
                        {location.hours.map((hour, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              {lang === 'en' ? hour.dayEn : hour.day}
                            </span>
                            <span className="text-foreground font-medium">
                              {hour.open === 'Geschlossen' || hour.open === 'Closed'
                                ? lang === 'en'
                                  ? 'Closed'
                                  : 'Geschlossen'
                                : `${hour.open} - ${hour.close}`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Transport */}
                    {location.transport && (
                      <div className="flex items-start gap-3">
                        <Bus className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground text-sm mb-1">
                            {t.locations.transport}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {lang === 'en' ? location.transportEn : location.transport}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Parking */}
                    {location.parking && (
                      <div className="flex items-start gap-3">
                        <Car className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground text-sm mb-1">
                            {t.locations.parking}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {lang === 'en' ? location.parkingEn : location.parking}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      <a
                        href={location.gmapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[200px]"
                      >
                        <Button className="w-full" data-testid={`button-navigate-${location.id}`}>
                          <Navigation className="w-4 h-4 mr-2" />
                          {t.locations.navigate}
                        </Button>
                      </a>
                      <a
                        href={`tel:${location.phone}`}
                        className="flex-1 min-w-[200px]"
                      >
                        <Button variant="outline" className="w-full" data-testid={`button-call-${location.id}`}>
                          <Phone className="w-4 h-4 mr-2" />
                          {t.locations.call}
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
