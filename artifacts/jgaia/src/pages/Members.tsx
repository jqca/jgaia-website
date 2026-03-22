import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Members() {
  return (
    <MainLayout>
      <div className="bg-secondary/50 py-16 border-b border-border">
        <div className="container-inner text-center">
          <SectionHeader title="Members" subtitle="協会員一覧" className="mb-0" />
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-inner max-w-4xl">
          
          {/* Corporate Members */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-primary mb-2">法人会員</h2>
              <p className="text-muted-foreground uppercase tracking-widest text-sm font-display">Corporate Members</p>
              <div className="h-0.5 w-16 bg-primary/20 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Member 1 */}
              <motion.a 
                href="https://www.zebraquantum.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center bg-white border border-border p-10 rounded-2xl hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="h-32 flex items-center justify-center mb-6 w-full">
                  <img 
                    src="https://www.jgaia.org/img/member/9119337053.jpg" 
                    alt="株式会社ZebraQuantum" 
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-primary font-bold group-hover:text-accent transition-colors">
                  株式会社ZebraQuantum <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </div>
              </motion.a>

              {/* Member 2 */}
              <motion.a 
                href="https://www.aiforward.jp/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group flex flex-col items-center bg-white border border-border p-10 rounded-2xl hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="h-32 flex items-center justify-center mb-6 w-full">
                  <img 
                    src="https://www.jgaia.org/img/member/7015912640.jpg" 
                    alt="合同会社AI Forward" 
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-primary font-bold group-hover:text-accent transition-colors">
                  合同会社AI Forward <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </div>
              </motion.a>
            </div>
          </div>

          {/* Supporting Members */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-primary mb-2">賛助会員</h2>
              <p className="text-muted-foreground uppercase tracking-widest text-sm font-display">Supporting Members</p>
              <div className="h-0.5 w-16 bg-primary/20 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
              {/* Member 1 (Centered if single) */}
              <motion.a 
                href="https://www.jqca.org/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center bg-white border border-border p-10 rounded-2xl hover:shadow-xl hover:border-primary/20 transition-all duration-300 md:col-start-1 md:col-end-3 max-w-md mx-auto w-full"
              >
                <div className="h-32 flex items-center justify-center mb-6 w-full">
                  <img 
                    src="https://www.jgaia.org/img/member/0175853689.jpg" 
                    alt="日本量子コンピューティング協会" 
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-primary font-bold group-hover:text-accent transition-colors">
                  日本量子コンピューティング協会 <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </div>
              </motion.a>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
}
