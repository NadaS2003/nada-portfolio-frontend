import { useState } from "react";
import { motion } from "framer-motion"; // تأكدي من الاسم حسب مكتبتك (framer-motion أو motion/react)
import axios from "axios"; // أضفنا axios
import {
  Mail,
  Send,
  Clock,
  MessageSquare,
  CheckCircle2,
  Linkedin,
  Github,
  Rocket,
  Loader2 // أضفنا أيقونة التحميل
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // حالة التحميل
  const [error, setError] = useState(""); // حالة الخطأ

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // الربط مع Laravel API
      // ملاحظة: تأكدي من أن السيرفر يعمل على هذا الرابط
      await axios.post("https://nada-portfolio-api.onrender.com/api/contact", formData);

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // إخفاء رسالة النجاح بعد 5 ثوانٍ
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: any) {
      console.error("Error sending message:", err);
      setError("عذراً، تعذر إرسال الرسالة حالياً. يرجى المحاولة لاحقاً.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "nadaramadan1512002@gmail.com",
      link: "mailto:nadaramadan1512002@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      title: "لينكد إن",
      value: "Nada Salama",
      link: "https://linkedin.com/in/nada-salama-",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      icon: Github,
      title: "جيت هاب",
      value: "Nada Salam",
      link: "https://github.com/NadaS2003",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: Clock,
      title: "وقت الاستجابة",
      value: "أرد عادةً خلال أقل من 24 ساعة",
      link: "#",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const subjects = [
    "طلب تطوير موقع (Laravel/React)",
    "تحويل تصميم Figma إلى كود",
    "بناء API أو ربط قواعد بيانات",
    "استشارة تقنية",
    "أخرى",
  ];

  return (
      <div className="min-h-screen pt-32 pb-20 text-right" dir="rtl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              تواصل{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              معي
            </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              هل لديك فكرة مشروع أو استفسار تقني؟ أنا دائماً منفتحة للنقاش حول مشاريع جديدة وتحويل أفكارك إلى واقع رقمي.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">أرسل رسالة مباشرة</h2>
                </div>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">تم الإرسال بنجاح!</h3>
                      <p className="text-muted-foreground">
                        شكراً لتواصلك يا ندى. تم تسجيل رسالتك في النظام (Logs) بنجاح.
                      </p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {error && (
                          <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm">
                            {error}
                          </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block mb-2 text-sm font-medium">الاسم</label>
                          <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                              placeholder="اسمك الكريم"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium">البريد الإلكتروني</label>
                          <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                              placeholder="email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium">نوع الخدمة المطلوبة</label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        >
                          <option value="">اختر الموضوع</option>
                          {subjects.map((subject) => (
                              <option key={subject} value={subject}>{subject}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">تفاصيل الرسالة</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                            placeholder="كيف يمكنني مساعدتك؟"
                        />
                      </div>

                      <motion.button
                          type="submit"
                          disabled={isLoading}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'shadow-primary/25 hover:shadow-primary/40'}`}
                      >
                        {isLoading ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>جاري المعالجة...</span>
                            </>
                        ) : (
                            <>
                              <span>إرسال الطلب</span>
                              <Send className="w-5 h-5" />
                            </>
                        )}
                      </motion.button>
                    </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-8"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                    <motion.a
                        key={index}
                        href={info.link}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        target={info.link.startsWith('http') ? "_blank" : "_self"}
                        className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all group shadow-sm"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform shadow-md`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-sm mb-1">{info.title}</h3>
                      <p className="text-muted-foreground text-xs break-words">{info.value}</p>
                    </motion.a>
                ))}
              </div>

              {/* Availability Card */}
              <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-[2rem] p-8 relative overflow-hidden">
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <Rocket className="w-10 h-10 text-primary animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">لنبدأ رحلة الإبداع</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    أنا حالياً متاحة للمشاريع الحرة (Freelance) والفرص الوظيفية الجديدة. إذا كنت تبحث عن كود نظيف وتجربة مستخدم مميزة، فأنت في المكان الصحيح.
                  </p>
                  <div className="flex justify-center gap-4">
                  <span className="flex items-center gap-2 text-sm font-medium text-green-500 bg-green-500/10 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    متاحة للعمل الآن
                  </span>
                  </div>
                </div>

                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  );
}