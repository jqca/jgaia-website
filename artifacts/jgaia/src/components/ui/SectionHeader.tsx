import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, className, centered = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12 md:mb-16", centered && "text-center", className)}
    >
      <h2 className={cn(
        "text-3xl md:text-5xl font-display font-black mb-3 tracking-tight",
        light ? "text-white" : "text-primary"
      )}>
        {title}
      </h2>
      <p className={cn(
        "text-sm md:text-base font-bold tracking-widest uppercase",
        light ? "text-white/70" : "text-muted-foreground"
      )}>
        {subtitle}
      </p>
      <div className={cn(
        "h-1 w-12 mt-6 rounded-full",
        centered && "mx-auto",
        light ? "bg-white/20" : "bg-primary/20"
      )} />
    </motion.div>
  );
}
