import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Code2,
  Smartphone,
  Palette,
  ShieldCheck,
  LayoutPanelLeft,
  Layout,
  Database,
  Server,
  Target,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  ChevronLeft
} from "lucide-react";

export function Home() {
  // إحصائيات تعبر عن مسارك المهني
  const stats = [
    { value: "15+", label: "مشروع مكتمل" },
    { value: "10+", label: "عملاء سعداء" },
    { value: "24/7", label: "تطوير مستمر" },
    { value: "100%", label: "إتقان لارافيل" },
  ];

  // الخدمات التي تقدمينها كـ Full-Stack Developer
  const services = [
    {
      title: "تطوير الأنظمة (Backend)",
      description: "بناء أنظمة متكاملة وقابلة للتوسع باستخدام Laravel مع الالتزام بمعمارية MVC وكتابة Clean Code يسهل صيانته وتطويره.",
      icon: Database,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "بناء الـ REST APIs",
      description: "تصميم وتطوير واجهات برمجة التطبيقات (APIs) لربط الأنظمة المختلفة، مع معالجة البيانات بكفاءة وإدارة الـ Authentication والـ Authorization.",
      icon: Server,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "قواعد البيانات والأمان",
      description: "تصميم هياكل قواعد بيانات متقدمة (ERD) باستخدام MySQL، مع ضمان حماية البيانات وفلترتها والتحقق من صحتها (Validation) بدقة.",
      icon: ShieldCheck,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      title: "لوحات التحكم والواجهات",
      description: "تطوير لوحات تحكم إدارية (Admin Dashboards) متطورة لإدارة الملفات، المستخدمين، والبيانات بواجهات UI/UX عصرية وسهلة الاستخدام.",
      icon: LayoutPanelLeft,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const features = [
    {
      icon: Target,
      title: "دقة في التنفيذ",
      description: "أهتم بأدق التفاصيل البرمجية لضمان جودة الكود وسرعة الأداء.",
    },
    {
      icon: Sparkles,
      title: "حلول إبداعية",
      description: "أبحث دائماً عن أفضل الطرق التقنية لحل المشكلات المعقدة برمجياً.",
    },
    {
      icon: Award,
      title: "التزام بالمواعيد",
      description: "تسليم المشاريع في وقتها المحدد مع ضمان الدعم الفني المستمر.",
    },
  ];

  return (
      <div className="relative overflow-hidden text-right" dir="rtl">
        {/* تأثيرات الخلفية */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-right" dir="rtl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* المحتوى النصي - ندى سلامة */}
              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
              >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">مرحباً بك في عالمي البرمجي</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  أنا <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">NADA SALAMA</span>
                  <br /> مطورة ويب متخصصة في <span className="text-primary">Laravel</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl"
                >
                  خبيرة في بناء تطبيقات الويب القابلة للتوسع باستخدام معماريّة <span className="text-foreground font-semibold">MVC</span>.
                  أمتلك مهارات تحليلية قوية في تصميم قواعد البيانات، الـ <span className="text-foreground font-semibold">REST APIs</span>، وحل المشكلات المعقدة لتقديم حلول برمجية آمنة وموثوقة.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4"
                >
                  <Link to="/api/contact">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-shadow flex items-center gap-2 font-bold"
                    >
                      دعنا نبني مشروعك القادم
                      <ChevronLeft className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  <Link to="/api/projects">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-card border border-border rounded-xl hover:border-primary transition-colors font-bold"
                    >
                      استعراض أعمالي
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* العناصر البصرية المتميزة */}
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative hidden lg:block"
              >
                <div className="relative h-[500px] flex items-center justify-center">
                  {/* بطاقة خبرة الـ Backend */}
                  <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-10 right-0 w-72 h-44 bg-card/40 backdrop-blur-md border border-primary/20 rounded-[2rem] p-6 shadow-2xl z-20"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                      <Database className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-bold">Laravel Specialist</p>
                    <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                      Eloquent ORM • RESTful APIs • Secure Authentication
                    </p>
                  </motion.div>

                  {/* بطاقة حل المشكلات والتصميم */}
                  <motion.div
                      animate={{ y: [0, 20, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute bottom-10 left-0 w-72 h-44 bg-card/40 backdrop-blur-md border border-secondary/20 rounded-[2rem] p-6 shadow-2xl z-20"
                  >
                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                      <Layout className="w-6 h-6 text-secondary" />
                    </div>
                    <p className="text-sm font-bold">System Architect</p>
                    <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                      MVC Design • Clean Code • UI/UX Fundamentals
                    </p>
                  </motion.div>

                  {/* التأثير الضوئي المركزي */}
                  <div className="w-80 h-80 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-[100px] animate-pulse" />

                  {/* أيقونة الكود العائمة في الخلفية */}
                  <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute opacity-10"
                  >
                    <Code2 size={300} className="text-primary" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* قسم الإحصائيات */}
        <section className="py-20 border-y border-border/50 bg-card/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* قسم الخدمات الشخصية */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" dir="rtl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                حلول برمجية <span className="text-primary italic">مخصصة</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                أوظف خبرتي في إطار عمل <span className="text-foreground font-semibold">Laravel</span> لتحليل متطلباتك وتحويلها إلى حلول برمجية ذكية، آمنة، وقابلة للبحث والتطوير.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="relative group h-full"
                  >
                    <div className="bg-card border border-border rounded-[2rem] p-8 h-full transition-all group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/10 flex flex-col items-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed text-center">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* قسم المميزات */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">لماذا العمل معي؟</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* دعوة للعمل (CTA) */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative bg-gradient-to-r from-primary to-secondary rounded-[2rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl shadow-primary/20"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  هل لديك فكرة مشروع برمجية؟
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                  دعنا نتحدث حول كيفية تحويل فكرتك إلى واقع تقني ملموس باستخدام أحدث الأدوات البرمجية.
                </p>
                <Link to="/contact">
                  <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
                  >
                    تواصل معي الآن
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
  );
}