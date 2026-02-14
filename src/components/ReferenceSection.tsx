import { motion } from "framer-motion";
import { FileText, Download, BookOpen, Eye, Zap } from "lucide-react";

const ReferenceSection = () => {

  const references = [
    {
      title: "প্রোডাক্টিভ রমাদান বই রিভিউ",
      type: "রেফারেন্স নোট",
      description: "মূল বই থেকে সংকলিত রিভিউ নোট",
      file: "/productive-ramadan-book-review/pdfs/reference-note.pdf",
      color: "gradient-card-1",
    },
    {
      title: "আমার রমযান প্রস্তুতি",
      type: "রেফারেন্স বই",
      description: "রমাদানের পরিপূর্ণ প্রস্তুতি গাইড",
      file: "/productive-ramadan-book-review/pdfs/reference-book.pdf",
      color: "gradient-card-2",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">📚 রেফারেন্স</h2>
        </motion.div>

        {/* Reference Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {references.map((ref, i) => (
            <motion.div
              key={ref.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl ${ref.color} flex items-center justify-center text-primary-foreground mb-4`}>
                <FileText className="w-7 h-7" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-copper/10 text-copper text-xs font-medium mb-3">{ref.type}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{ref.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{ref.description}</p>

              <div className="flex gap-2">
                <a
                  href={ref.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl gradient-teal text-primary-foreground text-sm font-medium hover:shadow-lg transition-all"
                >
                  <Eye className="w-4 h-4" />
                  দেখুন
                </a>
                <a
                  href={ref.file}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-foreground text-sm font-medium hover:shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  ডাউনলোড
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReferenceSection;
