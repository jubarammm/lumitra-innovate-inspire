
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-thunder text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-in">
            LUMITRA
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 animate-slide-up">
            Illuminating Technology Solutions
          </p>
          <p className="text-white/60 max-w-2xl mx-auto animate-slide-up delay-100">
            Empowering Your Business with 25 Years of Expertise
          </p>
          <div className="mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 hover:bg-white hover:text-black transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-thunder text-4xl md:text-5xl mb-8">ABOUT LUMITRA</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Lumitra is a dynamic startup specializing in technology solution services and consultation. With a legacy of 25 years in the tech industry, our founder's deep expertise empowers us to provide innovative, tailored strategies that help businesses overcome digital challenges.
          </p>
          <p className="text-white/60">
            Based in Riyadh, Saudi Arabia, we are committed to illuminating your path to success with cutting-edge solutions and unparalleled guidance.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-thunder text-4xl md:text-5xl mb-12 text-center">OUR SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-secondary/50 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="font-thunder text-2xl mb-4">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-thunder text-4xl md:text-5xl mb-8 text-center">GET IN TOUCH</h2>
          <p className="text-center text-white/80 mb-12">
            Ready to transform your business with innovative technology solutions? Reach out to us today and let our 25 years of expertise light the way.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="font-thunder text-xl mb-2">CONTACT INFO</h3>
                <p className="text-white/60">Email: info@lumitra.net</p>
                <p className="text-white/60">Address: Riyadh, Saudi Arabia</p>
                <p className="text-white/60">Tel: +966568872222</p>
              </div>
            </div>
            
            <form className="space-y-6">
              <Input
                placeholder="Your Name"
                className="bg-black/20 border-white/10 focus:border-white/30"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-black/20 border-white/10 focus:border-white/30"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-black/20 border-white/10 focus:border-white/30"
                rows={4}
              />
              <Button className="w-full bg-white text-black hover:bg-white/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-white/60 border-t border-white/10">
        <p>© 2025 Lumitra. All rights reserved.</p>
      </footer>
    </div>
  );
};

const services = [
  {
    title: "Technology Consultation",
    description: "In-depth analysis and strategic advice designed to streamline your operations and catalyze growth.",
  },
  {
    title: "Digital Transformation",
    description: "Custom solutions to modernize your business processes and enhance operational efficiency.",
  },
  {
    title: "IT Solutions",
    description: "Tailored technology implementations that align with your unique business needs.",
  },
  {
    title: "Innovation & Strategy",
    description: "Expert insights and future-focused planning to keep you ahead in an ever-evolving digital landscape.",
  },
];

export default Index;
