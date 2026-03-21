import { Link } from "react-router";
import { Terminal, Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Github, href: "https://github.com/NadaS2003", label: "Github" },
    { Icon: Linkedin, href: "https://linkedin.com/in/nada-salama-", label: "LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
      <footer className="bg-card border-t border-border mt-20 text-right" dir="rtl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Brand & Bio */}
            <div className="md:col-span-1">

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                خبيرة في بناء تطبيقات الويب القابلة للتوسع باستخدام معماريّة <span className="text-foreground font-semibold">MVC</span>.
                أمتلك مهارات تحليلية قوية في تصميم قواعد البيانات، الـ <span className="text-foreground font-semibold">REST APIs</span>، وحل المشكلات المعقدة لتقديم حلول برمجية آمنة وموثوقة.
              </p>
              {/* Social Links */}
              <div className="flex gap-3 justify-start">
                {socialLinks.map(({ Icon, href, label }) => (
                    <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-muted/50 hover:bg-primary/10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-all border border-transparent hover:border-primary/20"
                        aria-label={label}
                    >
                      <Icon size={20} />
                    </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-bold mb-6 text-foreground text-lg">روابط سريعة</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    عني (من أنا)
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    معرض أعمالي
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    تواصل معي
                  </Link>
                </li>
              </ul>
            </div>

            {/* Expertise / Services */}
            <div>
              <h3 className="font-bold mb-6 text-foreground text-lg">مجالات خبرتي</h3>
              <ul className="space-y-3">
                <li className="text-muted-foreground text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  تطوير الأنظمة (Backend)
                </li>
                <li className="text-muted-foreground text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  RESTful APIs & Backend Logic
                </li>
                <li className="text-muted-foreground text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Database Design (MySQL & ERD)
                </li>
                <li className="text-muted-foreground text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Frontend (HTML & Tailwind CSS & Bootstrap & JavaScript)
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="font-bold mb-6 text-foreground text-lg">معلومات التواصل</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-muted-foreground group">
                  <Mail size={18} className="text-primary" />
                  <a href="mailto:nadaramadan1512003@gmail.com" className="group-hover:text-primary transition-colors">nadaramadan1512003@gmail.com</a>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone size={18} className="text-primary" />
                  <span dir="ltr">+970 59 231 4892</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={18} className="text-primary" />
                  <span>فلسطين ، قطاع غزة </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-medium">
            <p dir="ltr">© {currentYear} NADA SALAMA. Built with Love & Code.</p>
            <div className="flex gap-6">
              <span className="hover:text-primary cursor-pointer transition-colors">Laravel</span>
              <span className="hover:text-primary cursor-pointer transition-colors">API</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Database</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Frontend</span>
            </div>
          </div>
        </div>
      </footer>
  );
}