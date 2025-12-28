import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="py-20 notebook-page relative" id="contact">
      {/* Spiral binding */}
      <div className="absolute left-0 top-0 bottom-0 w-12 spiral-binding opacity-60" />
      <div className="absolute left-16 top-0 bottom-0 w-[3px] bg-[hsl(0_70%_70%)]" />

      <div className="container mx-auto px-8 md:px-20">
        <h2 className="font-handwriting text-5xl md:text-7xl text-ink mb-4 text-center">
          Let's <span className="highlight-text">Connect</span>
        </h2>
        <p className="font-casual text-xl text-muted-foreground text-center mb-16">
          Drop me a line, let's create something amazing together! ✉️
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="sticky-note p-8 opacity-0 animate-pop-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-handwriting text-3xl text-ink mb-6 font-bold">Get in Touch</h3>

              <div className="space-y-4 font-casual text-lg">
                <div className="flex items-center gap-3 text-ink">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>vpriyasnhu708@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-ink">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>+91 (831) 844-0657</span>
                </div>
                <div className="flex items-center gap-3 text-ink">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Shahjahanpur,Uttar Pradesh,India</span>
                </div>
              </div>

              {/* Social links doodle */}
              <div className="mt-8 flex gap-4">
                {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="font-casual text-sm px-4 py-2 border-2 border-dashed border-doodle rounded-full hover:bg-primary/30 transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="sticky-note-alt p-8 space-y-6 opacity-0 animate-pop-in"
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="font-handwriting text-3xl text-ink font-bold">Send a Message</h3>

            <div className="space-y-4">
              <div>
                <label className="font-casual text-ink block mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 bg-paper/80 border-2 border-dashed border-doodle/50 rounded font-body focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="font-casual text-ink block mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-paper/80 border-2 border-dashed border-doodle/50 rounded font-body focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="font-casual text-ink block mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full p-3 bg-paper/80 border-2 border-dashed border-doodle/50 rounded font-body focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Let's build something awesome..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 font-handwriting text-xl px-8 py-3 bg-highlight text-ink rounded hand-drawn-border hover:scale-105 transition-transform"
            >
              <Send size={20} />
              Send It!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;