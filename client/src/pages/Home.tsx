import { motion, useReducedMotion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { Leaf, Sprout, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import menuData from '@/data/menu.json';

export default function Home() {
  const { t, lang } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const features = [
    {
      icon: Sparkles,
      title: t.home.seasonalTitle,
      description: t.home.seasonalDesc,
    },
    {
      icon: Leaf,
      title: t.home.freshTitle,
      description: t.home.freshDesc,
    },
    {
      icon: Sprout,
      title: t.home.deliciousTitle,
      description: t.home.deliciousDesc,
    },
  ];

  const specials = menuData.specials;

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate transition-transform duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-serif" data-testid={`text-feature-${index}`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Specials Section */}
      {specials.length > 0 && (
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="text-specials-title">
                {t.menu.specials}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.home.seasonalDesc}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specials.map((special, index) => (
                <motion.div
                  key={special.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-accent/50 hover-elevate transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <CardTitle className="text-xl font-serif flex-1" data-testid={`text-special-${special.id}`}>
                          {lang === 'en' ? special.nameEn : special.name}
                        </CardTitle>
                        <span className="text-2xl font-bold text-primary flex-shrink-0">
                          €{special.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {lang === 'en' ? special.descriptionEn : special.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {special.labels.map((label) => (
                          <span
                            key={label}
                            className="text-xs px-3 py-1 bg-accent/20 text-accent-foreground rounded-full font-medium"
                          >
                            {label === 'vegan'
                              ? t.menu.filterVegan
                              : label === 'glutenfrei'
                              ? t.menu.filterGlutenfrei
                              : t.menu.filterNoSugar}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/menu">
                <Button size="lg" data-testid="button-view-full-menu">
                  {t.hero.ctaMenu}
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              {t.hero.aloha}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/catering">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-primary-foreground hover:bg-white/20"
                  data-testid="button-cta-catering"
                >
                  {t.nav.catering}
                </Button>
              </Link>
              <Link href="/locations">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-primary-foreground hover:bg-white/20"
                  data-testid="button-cta-locations"
                >
                  {t.hero.ctaLocations}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
