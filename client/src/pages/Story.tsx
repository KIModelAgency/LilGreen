import { motion, useReducedMotion } from 'framer-motion';
import { Leaf, Sprout, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import saladImage from '@assets/generated_images/Fresh_garden_salad_bowl_79601ace.png';

export default function Story() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const values = [
    {
      icon: Leaf,
      title: t.story.missionTitle,
      text: t.story.missionText,
    },
    {
      icon: Sprout,
      title: t.story.sustainabilityTitle,
      text: t.story.sustainabilityText,
    },
    {
      icon: Heart,
      title: t.story.sourcingTitle,
      text: t.story.sourcingText,
    },
  ];

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
            data-testid="text-story-title"
          >
            {t.story.title}
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.story.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={saladImage}
              alt="Fresh ingredients"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground" data-testid={`text-value-${index}`}>
                      {value.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {value.text}
                  </p>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-video rounded-2xl bg-muted overflow-hidden">
                    <img
                      src={saladImage}
                      alt={value.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              ALOHA. #MAKEYOUHEALTHY
            </h2>
            <p className="text-xl opacity-90">
              {t.story.subtitle}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
