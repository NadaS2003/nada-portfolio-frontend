import { motion } from "motion/react";
import {
  Rocket,
  Target,
  Heart,
  Code2,
  Palette,
  Server,
  Database,
  Award,
  BookOpen,
  ShieldCheck,
  Zap
} from "lucide-react";

export function About() {
  const values = [
    {
      icon: Code2,
      title: "Clean Code & MVC",
      description: "أؤمن بكتابة كود منظم يتبع معمارية MVC لضمان سهولة الصيانة والتطوير المستقبلي.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShieldCheck,
      title: "الأمان والتحقق",
      description: "خبرة في بناء أنظمة الصلاحيات (Authorization) والتحقق من البيانات (Validation) بدقة عالية.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "حل المشكلات",
      description: "أمتلك مهارات تحليلية قوية لتحويل المتطلبات المعقدة إلى حلول برمجية بسيطة وفعالة.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Target,
      title: "دقة التنفيذ",
      description: "أهتم بتسليم مشاريع برمجية موثوقة تلبي احتياجات المستخدم النهائي بدقة متناهية.",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const expertise = [
    {
      icon: Code2,
      title: "Laravel Development",
      percentage: 95,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Server,
      title: "RESTful APIs & Backend Logic",
      percentage: 92,
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Database,
      title: "Database Design (MySQL & ERD)",
      percentage: 90,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "Frontend (HTML & Tailwind CSS & Bootstrap & JavaScript)",
      percentage: 88,
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
      <div className="min-h-screen pt-32 pb-20 text-right" dir="rtl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header - ندى سلامة */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              من {" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              أنا
            </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed font-medium">
              أنا مطورة Laravel طموحة (24 عاماً)، أمتلك خبرة عملية في بناء تطبيقات ويب قابلة للتوسع.
              أركز بشكل أساسي على تطوير الـ Backend باستخدام PHP و Laravel، مع مهارات قوية في بناء لوحات التحكم،
              إدارة قواعد البيانات، وربط الـ APIs، مدمجة بلمسات إبداعية في تصميم واجهات المستخدم.
            </p>
          </motion.div>

          {/* Mission & Professional Path */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-[2rem] p-8 hover:border-primary/50 transition-all group shadow-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">فلسفتي البرمجية</h2>
              <p className="text-muted-foreground leading-relaxed">
                لا أكتفي بكتابة كود يعمل فحسب، بل أهتم بكتابة كود نظيف (Clean Code) يسهل البحث فيه وتطويره. أؤمن بأن قوة النظام تبدأ من هيكلة قاعدة بيانات متينة ومنطق برجمي (Backend Logic) لا تشوبه شائبة.
              </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-[2rem] p-8 hover:border-primary/50 transition-all group shadow-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-secondary/20">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">الخبرة العملية</h2>
              <p className="text-muted-foreground leading-relaxed">
                طورت العديد من الأنظمة الإدارية المعقدة، مثل منصات إدارة تدريب الطلاب ولوحات تحكم الشركات. مهاراتي تشمل إدارة عمليات الـ CRUD المتقدمة، ورفع الملفات، وتصميم واجهات رسومية تسهل تجربة المستخدم.
              </p>
            </motion.div>
          </div>

          {/* Expertise Section */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">المهارات التقنية</h2>
              <p className="text-muted-foreground text-lg">الأدوات التي أتقنها لتحويل المتطلبات إلى حلول واقعية</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              {expertise.map((skill, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${skill.gradient} rounded-xl flex items-center justify-center text-white shadow-md`}>
                          <skill.icon className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-lg">{skill.title}</span>
                      </div>
                      <span className="text-primary font-black" dir="ltr">{skill.percentage}%</span>
                    </div>
                    <div className="h-3.5 bg-muted rounded-full overflow-hidden border border-border shadow-inner">
                      <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-l ${skill.gradient} rounded-full`}
                      />
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تختار العمل معي؟</h2>
              <p className="text-muted-foreground text-lg">قيم مهنية ألتزم بها في كل مشروع</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                  <motion.div
                      key={index}
                      whileHover={{ y: -10 }}
                      className="bg-card border border-border rounded-[1.5rem] p-8 h-full hover:border-primary/50 transition-all text-center shadow-sm"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto text-white shadow-xl group-hover:rotate-12 transition-transform`}>
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Stats */}
          <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-primary to-secondary rounded-[3rem] p-16 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-64 h-64 border-4 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-white/20 rounded-full translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
              <div>
                <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <div className="text-5xl font-black mb-2">15+</div>
                <div className="text-white/90 font-medium">مشروع ناجح</div>
              </div>
              <div>
                <Code2 className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <div className="text-5xl font-black mb-2">100%</div>
                <div className="text-white/90 font-medium">كود نظيف وموثق</div>
              </div>
              <div>
                <Database className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <div className="text-5xl font-black mb-2">10+</div>
                <div className="text-white/90 font-medium">أنظمة إدارية</div>
              </div>
              <div>
                <Zap className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <div className="text-5xl font-black mb-2">24/7</div>
                <div className="text-white/90 font-medium">تطوير مستمر</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  );
}