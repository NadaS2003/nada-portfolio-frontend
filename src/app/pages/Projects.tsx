import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Github, FolderCode, Loader2, AlertCircle } from "lucide-react";
import axios from "axios";

// تعريف شكل بيانات المشروع لضمان استقرار TypeScript
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image_url: string;
  image?: string;
  tech_stack?: string[];
  tags?: string[];
  demo?: string;
  github?: string;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // جلب البيانات من Laravel API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // تأكدي أن هذا الرابط هو الذي يعمل لديكِ في المتصفح
        const response = await axios.get("http://127.0.0.1:8000/api/projects");

        // استخراج البيانات من الـ Resource
        const fetchedData = response.data.data || response.data;
        setProjects(fetchedData);
        setError(null);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("فشل في تحميل المشاريع. تأكدي من تشغيل السيرفر وإعدادات CORS.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
      <div className="min-h-screen pt-32 pb-20 text-right" dir="rtl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <FolderCode className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">سجل الإنجازات</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              معرض{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              أعمالي
            </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              مجموعة مختارة من المشاريع التي قمت بتطويرها، من قواعد بيانات Laravel المتينة إلى واجهات React الإبداعية.
            </p>
          </motion.div>

          {/* Main Content Area */}
          {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                <p className="text-muted-foreground">جاري جلب المشاريع من قاعدة البيانات...</p>
              </div>
          ) : error ? (
              <div className="flex flex-col items-center justify-center py-20 text-red-500">
                <AlertCircle className="w-12 h-12 mb-4" />
                <p className="font-bold">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 text-sm underline text-muted-foreground"
                >
                  إعادة المحاولة
                </button>
              </div>
          ) : (
              /* Projects Grid */
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all shadow-sm hover:shadow-xl"
                    >
                      {/* Image Section */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                            src={project.image_url || project.image || "https://via.placeholder.com/400x300"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Links on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.demo && (
                              <motion.a
                                  href={project.demo}
                                  target="_blank"
                                  whileHover={{ scale: 1.1 }}
                                  className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg"
                              >
                                <ExternalLink size={18} />
                              </motion.a>
                          )}
                          {project.github && (
                              <motion.a
                                  href={project.github}
                                  target="_blank"
                                  whileHover={{ scale: 1.1 }}
                                  className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg"
                              >
                                <Github size={18} />
                              </motion.a>
                          )}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 text-right">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies Tags */}
                        <div className="flex flex-wrap gap-2">
                          {(project.tech_stack || project.tags || []).map((tag, i) => (
                              <span
                                  key={i}
                                  className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-[10px] font-medium text-primary"
                              >
                        {tag}
                      </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                ))}
              </div>
          )}

          {/* Contact CTA */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-24 p-10 bg-card/50 border border-border rounded-[2rem]"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              هل لديك مشروع مشابه في ذهنك؟
            </h3>
            <p className="text-muted-foreground mb-8">
              أنا جاهزة لتحويل أفكارك إلى واقع برمجي ملموس بأعلى المعايير.
            </p>
            <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-10 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              تواصل معي للبدء
            </motion.a>
          </motion.div>
        </div>
      </div>
  );
}