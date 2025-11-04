import { motion } from 'motion/react';
import { Award, Gem, Heart, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const features = [
    {
      icon: Gem,
      title: 'Calidad Premium',
      description: 'Materiales de la más alta calidad certificados internacionalmente'
    },
    {
      icon: Award,
      title: 'Artesanía Experta',
      description: 'Hecho a mano por joyeros con décadas de experiencia'
    },
    {
      icon: Heart,
      title: 'Diseños Únicos',
      description: 'Colecciones exclusivas diseñadas con pasión y dedicación'
    },
    {
      icon: Shield,
      title: 'Garantía de por Vida',
      description: 'Protección completa para tu inversión en elegancia'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl sm:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sobre Amora
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos una empresa de joyeria dedicada a ofrecer piezas que combinan elegancia y calidad.
          </p>
        </motion.div>

        {/* Image Gallery */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-64 md:h-80 rounded-2xl overflow-hidden group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1602752250015-52934bc45613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZ29sZCUyMGRpYW1vbmR8ZW58MXx8fHwxNzYxODAzMDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Joyería de lujo"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-64 md:h-80 rounded-2xl overflow-hidden group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuZWNrbGFjZSUyMGdvbGR8ZW58MXx8fHwxNzYxODAzMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Collar de oro"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative h-64 md:h-80 rounded-2xl overflow-hidden group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1610217434551-36981d619c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmluZyUyMGRpYW1vbmR8ZW58MXx8fHwxNzYxODAzMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Anillo de diamantes"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div> */}

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <feature.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
