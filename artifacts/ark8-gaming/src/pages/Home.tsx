import { useEffect } from "react";
import { motion } from "framer-motion";
import { Monitor, Cpu, Gamepad2, Coffee, ChevronRight, Instagram, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Arsenal", href: "#arsenal" },
  { label: "Pricing", href: "#pricing" },
];

export default function Home() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (!link) return;
      
      const href = link.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand selection:text-white">
      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" data-testid="link-home">
            <span className="text-xl font-bold tracking-tighter text-white">
              ARK8 <span className="text-[#009AFE]">GAMING</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="bg-[#009AFE] hover:bg-[#0080D6] text-white font-semibold">
              <a href="#pricing" data-testid="button-nav-pricing">View Pricing</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,154,254,0.15)_0%,transparent_60%)] z-10" />
          <img 
            src="/hero.png" 
            alt="ARK8 Gaming Arena" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container relative z-20 px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-[#009AFE]/30 bg-[#009AFE]/10 px-3 py-1 text-sm font-medium text-[#009AFE] backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#009AFE] mr-2 animate-pulse" />
              Chennai's Premier Esports Arena
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">Dominate</span>
              <br />
              <span className="relative">
                <span className="absolute -inset-1 blur-2xl opacity-40 bg-[#009AFE]" />
                <span className="relative text-[#009AFE]">The Lobby</span>
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Zero latency. Maximum frames. Step into ARK8 Gaming and experience competitive play the way it was meant to be played. Near SRM University.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-[#009AFE] hover:bg-[#0080D6] text-white shadow-[0_0_20px_rgba(0,154,254,0.4)] hover:shadow-[0_0_30px_rgba(0,154,254,0.6)] transition-all duration-300">
                <a href="#pricing" data-testid="button-hero-pricing">View Passes</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-[#009AFE] text-[#009AFE] hover:bg-[#009AFE]/10 bg-transparent">
                <a href="https://www.instagram.com/ark8gaming/" target="_blank" rel="noreferrer" data-testid="button-hero-instagram">
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow on Instagram
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About / Location */}
      <section id="about" className="py-24 relative bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-video md:aspect-square overflow-hidden rounded-2xl border border-border/50">
                <div className="absolute inset-0 bg-[#009AFE]/10 mix-blend-overlay z-10" />
                <img 
                  src="/about.png" 
                  alt="Inside ARK8 Gaming Cafe" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built For <span className="text-[#009AFE]">Gamers</span>.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Located right near SRM University in Chennai, ARK8 Gaming is more than just a cafe — it's a community hub for hardcore gamers and esports enthusiasts. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're grinding ranked, running scrims with your squad, or just kicking back with a controller, we've curated the ultimate environment to fuel your passion.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/50">
                <div>
                  <h4 className="text-4xl font-black text-white mb-2">320<span className="text-[#009AFE] text-2xl">Hz</span></h4>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Pro Displays</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-white mb-2">24/7</h4>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Uninterrupted</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Arsenal (Features) */}
      <section id="arsenal" className="py-24 bg-card/50 relative border-y border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,154,254,0.05)_0%,transparent_50%)]" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The <span className="text-[#009AFE]">Arsenal</span></h2>
            <p className="text-lg text-muted-foreground">Uncompromising hardware for those who take gaming seriously.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Monitor className="h-8 w-8" />,
                title: "Pro-Tier Displays",
                desc: "320Hz monitors for zero-latency competitive play. See the enemy before they see you."
              },
              {
                icon: <Cpu className="h-8 w-8" />,
                title: "High-End PC Rigs",
                desc: "Premium GPUs and top-tier processors to guarantee maximum frames on ultra settings."
              },
              {
                icon: <Gamepad2 className="h-8 w-8" />,
                title: "Console Lounge",
                desc: "The ultimate chill zone for controller players with plush seating and massive 4K TVs."
              },
              {
                icon: <Coffee className="h-8 w-8" />,
                title: "Fuel & Grub",
                desc: "Premium snacks and energy beverages to keep your grind going through the night."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl bg-background border border-border/50 hover:border-[#009AFE]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#009AFE]/0 to-[#009AFE]/0 group-hover:from-[#009AFE]/5 group-hover:to-transparent transition-all duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[inset_0_0_20px_rgba(0,154,254,0.1)] transition-opacity duration-500 rounded-2xl pointer-events-none" />
                
                <div className="text-[#009AFE] mb-6 relative z-10 drop-shadow-[0_0_8px_rgba(0,154,254,0.5)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white relative z-10">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 relative bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Choose Your <span className="text-[#009AFE]">Session</span></h2>
            <p className="text-lg text-muted-foreground">Straightforward pricing. No hidden fees. Just pure gaming.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Hourly Rate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border relative flex flex-col"
            >
              <h3 className="text-xl font-medium text-muted-foreground mb-2">Hourly Rate</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">₹60</span>
                <span className="text-muted-foreground ml-2">/ hr</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4 text-[#009AFE] mr-2" /> Quick sessions
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4 text-[#009AFE] mr-2" /> Access to PC & Console
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full border-border hover:bg-white/5">
                <a href="https://wa.me/919962103426?text=Hi%20ARK8%20Gaming!%20I'd%20like%20to%20book%20an%20hourly%20session." target="_blank" rel="noreferrer" data-testid="button-pricing-dropin">Drop In</a>
              </Button>
            </motion.div>

            {/* Featured Pass */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border-2 border-[#009AFE] relative flex flex-col shadow-[0_0_30px_rgba(0,154,254,0.15)] md:-my-4"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#009AFE] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-medium text-[#009AFE] mb-2">3-Hour Gamer Pass</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-white">₹150</span>
                <span className="text-muted-foreground ml-2 line-through text-sm">₹180</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-sm text-white">
                  <ChevronRight className="h-4 w-4 text-[#009AFE] mr-2" /> Perfect for scrims
                </li>
                <li className="flex items-center text-sm text-white">
                  <ChevronRight className="h-4 w-4 text-[#009AFE] mr-2" /> Guaranteed station lock
                </li>
                <li className="flex items-center text-sm text-white">
                  <ChevronRight className="h-4 w-4 text-[#009AFE] mr-2" /> 10% off snacks
                </li>
              </ul>
              <Button asChild className="w-full bg-[#009AFE] hover:bg-[#0080D6] text-white font-semibold">
                <a href="https://wa.me/919962103426?text=Hi%20ARK8%20Gaming!%20I'd%20like%20to%20book%20the%203-Hour%20Gamer%20Pass." target="_blank" rel="noreferrer" data-testid="button-pricing-lockin">Lock It In</a>
              </Button>
            </motion.div>

            {/* All Day */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border relative flex flex-col"
            >
              <h3 className="text-xl font-medium text-muted-foreground mb-2">All-Day Grind</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">₹350</span>
                <span className="text-muted-foreground ml-2">/ day</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4 text-[#009AFE] mr-2" /> Open to close access
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4 text-[#009AFE] mr-2" /> Premium rig priority
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4 text-[#009AFE] mr-2" /> Free energy drink
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full border-border hover:bg-white/5">
                <a href="https://wa.me/919962103426?text=Hi%20ARK8%20Gaming!%20I'd%20like%20to%20book%20the%20All-Day%20Grind%20pass." target="_blank" rel="noreferrer" data-testid="button-pricing-allday">Go All Out</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="space-y-4">
              <span className="text-2xl font-bold tracking-tighter text-white">
                ARK8 <span className="text-[#009AFE]">GAMING</span>
              </span>
              <p className="text-sm text-muted-foreground max-w-xs">
                The ultimate competitive and casual gaming destination in Chennai. Play harder.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Location & Hours</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5 text-[#009AFE] mr-3 shrink-0" />
                  <span>Near SRM University<br />Kattankulathur, Chennai<br />Tamil Nadu 603203</span>
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-5 w-5 text-[#009AFE] mr-3 shrink-0" />
                  <span>Open Daily: 10:00 AM - 2:00 AM</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Connect</h4>
              <p className="text-sm text-muted-foreground mb-4">Follow us for tournament announcements and giveaways.</p>
              <Button asChild className="w-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white border-0">
                <a href="https://www.instagram.com/ark8gaming/" target="_blank" rel="noreferrer" data-testid="link-footer-instagram">
                  <Instagram className="mr-2 h-5 w-5" />
                  @ark8gaming
                </a>
              </Button>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} ARK8 Gaming. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
