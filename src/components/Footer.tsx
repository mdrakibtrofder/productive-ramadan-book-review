import { motion } from "framer-motion";
import { Heart, Moon, BookOpen, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl gradient-copper flex items-center justify-center text-primary-foreground">
                <Moon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">প্রোডাক্টিভ রমাদান</h3>
                <p className="text-xs text-muted-foreground">বই রিভিউ ২০২৬</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              এই ওয়েবসাইটটি "প্রোডাক্টিভ রমাদান" বইয়ের বিস্তারিত রিভিউ হিসেবে তৈরি করা হয়েছে।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">দ্রুত লিংক</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-foreground transition-colors flex items-center gap-2 underline underline-offset-4 decoration-border">হোম</a></li>
              <li><a href="#toc" className="hover:text-foreground transition-colors flex items-center gap-2 underline underline-offset-4 decoration-border">সূচিপত্র</a></li>
              <li><a href="#authors" className="hover:text-foreground transition-colors flex items-center gap-2 underline underline-offset-4 decoration-border">লেখক</a></li>
              <li><a href="#content" className="hover:text-foreground transition-colors flex items-center gap-2 underline underline-offset-4 decoration-border">প্রস্তুতি</a></li>
              <li><a href="#goals" className="hover:text-foreground transition-colors flex items-center gap-2 underline underline-offset-4 decoration-border">লক্ষ্য ও রুটিন</a></li>
              <li><a href="#references" className="hover:text-foreground transition-colors flex items-center gap-2 underline underline-offset-4 decoration-border">রেফারেন্স</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© ২০২৬ প্রোডাক্টিভ রমাদান বই রিভিউ। সকল অধিকার সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
