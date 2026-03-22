import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(10, "メッセージは10文字以上で入力してください"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate network request since we don't have a backend
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <MainLayout>
      {/* Background element */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-primary -z-10 clip-path-polygon-[0_0,100%_0,100%_80%,0_100%]"></div>

      <section className="pt-16 pb-24 px-4">
        <div className="container-inner max-w-3xl relative">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4 tracking-tight">Contact</h1>
            <p className="text-white/80 font-bold tracking-widest uppercase mb-8">お問い合わせ</p>
            <p className="text-white/90">一般社団法人日本生成AI協会へのお問い合わせは、以下のフォームからお願いします。</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl shadow-black/10 p-8 md:p-12 border border-border"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">お問い合わせを受け付けました</h3>
                <p className="text-muted-foreground mb-8">
                  内容を確認の上、担当者より回答させていただきます。<br/>
                  今しばらくお待ちください。
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 border border-border rounded-lg text-sm font-bold hover:bg-secondary transition-colors"
                >
                  新しいメッセージを送る
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">名前</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="山田 太郎"
                    {...register("name")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border bg-secondary/30 text-foreground placeholder:text-muted-foreground/50",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                      errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-border"
                    )}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">メールアドレス</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="mail@example.com"
                    {...register("email")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border bg-secondary/30 text-foreground placeholder:text-muted-foreground/50",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                      errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-border"
                    )}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">メッセージ</label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="お問い合わせ内容をご入力ください"
                    {...register("message")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border bg-secondary/30 text-foreground placeholder:text-muted-foreground/50 resize-y",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                      errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-border"
                    )}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? "送信中..." : "送信する"}
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
