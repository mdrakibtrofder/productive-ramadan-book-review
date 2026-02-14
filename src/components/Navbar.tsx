import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, BookOpen, Heart, Activity, Target, Bookmark } from "lucide-react";

const navItems = [
    { label: "হোম", href: "#home", icon: <Moon className="w-4 h-4" /> },
    { label: "সূচিপত্র", href: "#toc", icon: <BookOpen className="w-4 h-4" /> },
    { label: "লেখক", href: "#authors", icon: <Heart className="w-4 h-4" /> },
    { label: "প্রস্তুতি", href: "#content", icon: <Activity className="w-4 h-4" /> },
    { label: "লক্ষ্য ও রুটিন", href: "#goals", icon: <Target className="w-4 h-4" /> },
    { label: "রেফারেন্স", href: "#references", icon: <Bookmark className="w-4 h-4" /> },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2 bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "py-4 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl gradient-copper flex items-center justify-center text-primary-foreground group-hover:glow-copper transition-all">
                            <Moon className="w-5 h-5" />
                        </div>
                        <div>
                            <h1 className="font-bold text-base text-foreground leading-tight">প্রোডাক্টিভ রমাদান</h1>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">বই রিভিউ ২০২৬</p>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all flex items-center gap-2"
                            >
                                {item.icon}
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-xl glass-card text-foreground"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <div className="p-4 space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-secondary transition-all text-foreground font-medium"
                                >
                                    <div className="w-8 h-8 rounded-lg gradient-teal flex items-center justify-center text-primary-foreground">
                                        {item.icon}
                                    </div>
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
