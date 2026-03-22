import { motion } from "framer-motion";
import { Link } from "wouter";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExternalLink, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <MainLayout>
      {/* HERO / FEATURES SECTION */}
      <section className="bg-primary text-white section-padding relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-inner relative z-10">
          <SectionHeader title="Features" subtitle="当協会の特徴" light />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm">1</span>
                量子技術とAIの融合
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                JGAIAは日本量子コンピューティング協会(JQCA)と戦略的提携を締結し、将来の重要技術である量子コンピューティングとAIの融合を目指しています。この連携により、両分野の知見を活かした革新的な取り組みを展開し、最先端技術の相乗効果を追求しています。
              </p>
              <img 
                src="https://www.jgaia.org/img/index/features/1.png" 
                alt="日本量子コンピューティング協会と日本生成AI協会の提携" 
                className="w-full rounded-xl shadow-lg shadow-black/20"
              />
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm">2</span>
                包括的アプローチ
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                JGAIAは、生成AI分野における「教育」「資格検定」「人材紹介」を一気通貫で提供します。最新の生成AI技術を学べる教育プログラムを実施し、習得したスキルを評価する資格検定制度を運営します。さらに、その専門性を活かせる職場への橋渡しも行います。
              </p>
              <img 
                src="https://www.jgaia.org/img/index/features/2.png" 
                alt="教育、資格検定、人材紹介" 
                className="w-full rounded-xl shadow-lg shadow-black/20"
              />
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/company-info"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/20"
            >
              協会情報を見る <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="bg-secondary section-padding">
        <div className="container-inner max-w-4xl">
          <SectionHeader title="News" subtitle="新着情報" />
          
          <div className="bg-white rounded-2xl shadow-xl shadow-primary/5 border border-border/50 overflow-hidden">
            {[
              { date: "2025.07.31", label: "協会お知らせ", title: "生成AIエンジニア試験開始のお知らせ", link: "https://one-stream.io/catalog/FAdiwHr2FVSmgxaIUA1Sv1eXHCr1" },
              { date: "2025.07.31", label: "協会お知らせ", title: "生成AIジェネラリスト試験開始のお知らせ", link: "https://one-stream.io/catalog/FAdiwHr2FVSmgxaIUA1Sv1eXHCr1" },
              { date: "2025.06.01", label: "協会お知らせ", title: "生成AIエンジニア講座無料公開のお知らせ", link: "https://one-stream.io/catalog/FAdiwHr2FVSmgxaIUA1Sv1eXHCr1/playlist/c7b5910a-7310-42bc-b7f2-38aa7d295ed8" },
              { date: "2025.06.01", label: "協会お知らせ", title: "生成AIジェネラリスト講座無料公開のお知らせ", link: "https://one-stream.io/catalog/FAdiwHr2FVSmgxaIUA1Sv1eXHCr1/playlist/c7b5910a-7310-42bc-b7f2-38aa7d295ed8" },
            ].map((news, idx) => (
              <motion.a
                key={idx}
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 border-b last:border-0 border-border hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-sm font-display font-medium text-muted-foreground">{news.date}</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                    {news.label}
                  </span>
                </div>
                <h4 className="text-base font-medium flex-grow group-hover:text-accent transition-colors">
                  {news.title}
                </h4>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-white section-padding">
        <div className="container-inner max-w-5xl">
          <SectionHeader title="Mission" subtitle="目標" />
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance">
              日本生成AI協会は、生成AI技術の普及と発展をリードし、日本の産業や学術界における革新的な成長を促進することを使命とします。我々は、生成AIの可能性を広く認知し、研究、産業応用、国際交流、教育などの活動を通じて、日本がグローバルな生成AI技術のリーダーとなることを目指します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "生成AI技術の普及と啓蒙", desc: "生成AIの基本概念や可能性を広く一般の人々に啓蒙し、産業界や学術界、一般社会に生成AIの重要性を理解してもらうことを目標とします。" },
              { title: "生成AI技術の研究支援", desc: "日本国内の生成AIに関連する研究者や企業の支援を行い、研究成果の共有や新たな研究プロジェクトの推進を促進します。" },
              { title: "産業界との連携と実用化", desc: "産業界と緊密な連携を図り、生成AI技術の産業応用を推進します。産業界のニーズに合った研究や技術開発を支援し、実用化に向けた一歩を踏み出します。" },
              { title: "国際的な連携と交流", desc: "国際的な生成AIコミュニティとの連携を強化し、最新の技術動向や知識の共有を通じて日本の生成AI技術の発展を国際的なレベルでリードします。" },
              { title: "生成AI人材の育成", desc: "学生や若手研究者を対象とした生成AI技術の教育プログラムを提供し、次世代のリーダーや専門家を育成します。人材の不足に対処し、日本の人材育成に貢献します。" }
            ].map((mission, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "p-8 rounded-2xl bg-secondary/50 border border-border/50 hover:shadow-lg transition-all duration-300",
                  idx === 4 && "md:col-span-2 lg:col-span-1" // Layout adjustment for odd number
                )}
              >
                <div className="text-5xl font-black text-primary/10 font-display mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-xl font-bold mb-3 text-primary">{mission.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{mission.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GREETING SECTION */}
      <section className="bg-secondary section-padding">
        <div className="container-inner max-w-5xl">
          <SectionHeader title="Greeting" subtitle="代表者ご挨拶" />
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="shrink-0 relative"
            >
              <div className="absolute inset-0 bg-primary/10 translate-x-3 translate-y-3 rounded-2xl -z-10"></div>
              <img 
                src="https://www.jgaia.org/img/index/representative.jpeg" 
                alt="代表理事" 
                className="w-64 h-auto rounded-2xl object-cover border border-border"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-grow"
            >
              <p className="text-foreground/80 leading-loose mb-6">
                当協会は、生成AI分野において日本の研究者、エンジニア、ビジネスパーソンの協力を促進し、革新的な技術とアプリケーション開発を推進します。この最先端の科学技術領域で、私たちは世界的リーダーシップの獲得を目指しています。
              </p>
              <p className="text-foreground/80 leading-loose mb-6">
                生成AIは、従来不可能だった創造の扉を開きます。我々の使命は、その潜在能力を最大化し、社会に革新的価値をもたらすことです。これには、産官学の垣根を越えた連携と、知識・情熱の結集が不可欠です。
              </p>
              <p className="text-foreground/80 leading-loose mb-10">
                当協会は、会員間の知識交換、情報共有、プロジェクト協力を促進し、相互成長の場を提供します。さらに、若手研究者の育成と啓発活動に注力し、次世代の生成AI人材育成にも取り組みます。
              </p>
              
              <div className="border-t border-border pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="font-bold text-lg text-primary">日本生成AI協会 代表理事</span>
                <img 
                  src="https://www.jgaia.org/img/index/signature.png" 
                  alt="Signature" 
                  className="h-16 object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section className="bg-primary text-white section-padding">
        <div className="container-inner max-w-4xl">
          <SectionHeader title="Media" subtitle="情報発信" light />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Discord", desc: "日本生成AI協会コミュニティー", link: "https://discord.gg/cMF47nDj", icon: "💬" },
              { name: "X", desc: "日本生成AI協会 公式アカウント", link: "https://x.com/jgaia_2024", icon: "🐦" },
              { name: "connpass", desc: "日本生成AI協会 イベント情報", link: "https://connpass.com/user/jgaia/", icon: "📅" },
            ].map((media, idx) => (
              <motion.a
                key={idx}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col items-center text-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{media.icon}</div>
                <h4 className="text-xl font-display font-bold mb-2">{media.name}</h4>
                <p className="text-sm text-white/70 mb-6">{media.desc}</p>
                <div className="mt-auto flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-accent group-hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
