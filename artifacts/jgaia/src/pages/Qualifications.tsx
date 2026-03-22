import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { ExternalLink, Award, BookOpen, PlayCircle } from "lucide-react";

export default function Qualifications() {
  return (
    <MainLayout>
      <div className="bg-primary py-16 md:py-24 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="container-inner text-center relative z-10">
          <SectionHeader title="Qualifications" subtitle="資格・認定講座" light className="mb-0" />
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-inner max-w-5xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">資格検定サービス</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-sm font-display">Qualification Examination Service</p>
          </div>

          <div className="prose max-w-none text-foreground/80 text-center mb-16 text-balance leading-loose">
            <p>
              日本生成AI協会は、生成AIに関する知識を有し、<strong>事業活用する人材（ジェネラリスト）</strong>と、
              <strong>生成AIを実装する人材（エンジニア）</strong>の育成を目指します。
            </p>
            <p>
              各々に必要な知識やスキルセットを定義し、<strong>資格試験</strong>を行うとともに、協会が認定した事業者が各種講座を通じて、トレーニングを提供します。
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                <img 
                  src="https://www.jgaia.org/img/%E7%94%9F%E6%88%90AI%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%A9%E3%83%AA%E3%82%B9%E3%83%88%E6%A4%9C%E5%AE%9A.png" 
                  alt="生成AIジェネラリスト検定" 
                  className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-xl group-hover:-translate-y-2 transition-transform duration-300 relative z-10"
                />
              </div>
              <p className="text-center mt-6 font-bold text-primary">生成AIジェネラリスト検定</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                <img 
                  src="https://www.jgaia.org/img/Generative_AI_Engineer_Certification.png" 
                  alt="生成AIエンジニア検定" 
                  className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-xl group-hover:-translate-y-2 transition-transform duration-300 relative z-10"
                />
              </div>
              <p className="text-center mt-6 font-bold text-primary">生成AIエンジニア検定</p>
            </motion.div>
          </div>

          {/* Courses Details */}
          <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 mb-24 border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary flex items-center justify-center gap-3">
              <BookOpen className="w-6 h-6" /> 提供講座について
            </h3>
            <p className="text-center leading-loose text-foreground/80 mb-10 max-w-3xl mx-auto">
              なお、講座の種類としては、資格認定用に<strong>生成AIジェネラリスト講座、生成AIエンジニア（自然言語処理）講座、生成AIエンジニア（画像生成）講座</strong>の３種類、そして資格認定とは関係なく、生成AI関連の技術の理解を深めるための複数の講座を提供します。
            </p>

            <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="w-full md:w-1/3 flex justify-center shrink-0">
                <img 
                  src="https://www.jgaia.org/img/%E8%AA%8D%E5%AE%9A%E8%A8%BC.png" 
                  alt="認定証" 
                  className="w-full max-w-[200px] h-auto shadow-md border border-border/50 -rotate-3"
                />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center justify-center md:justify-start gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  資格認定証の発行
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  各講座受講後、一定のスキルを有すると認定された方に「資格認定証」を発行しております。資格取得証明等にご活用ください。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a 
                    href="https://www.jgaia.org/certification.php" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all hover:shadow-lg"
                  >
                    認定証を発行する <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://connpass.com/user/jgaia/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/5 transition-all"
                  >
                    講座情報を確認 <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* QAI-Zen Platform */}
          <div className="border-t border-border pt-20">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-primary mb-2">QAI-Zen</h2>
                <p className="text-accent font-bold mb-6 tracking-wider">オンライン学習プラットフォーム</p>
                
                <p className="text-foreground/80 leading-loose mb-8">
                  日本生成AI協会は<strong>「QAI-Zen」</strong>というオンラインプラットフォームを通じて、生成AIの活用方法や生成AIのエンジニアリングに関するセミナー動画を配信しています。
                  <br/><br/>
                  このプラットフォームでは、個人向けおよび企業向けに、最新の生成AI技術やその実践的な応用例について学ぶことができる多様なコンテンツを提供しています。<strong>QAI-Zen</strong>を通じて、より多くの方々に生成AIの可能性と重要性を理解していただき、この先端技術の普及と発展に貢献することを目指しています。
                </p>
                
                <a 
                  href="https://one-stream.io/catalog/FAdiwHr2FVSmgxaIUA1Sv1eXHCr1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1 w-full sm:w-auto"
                >
                  <PlayCircle className="w-6 h-6" />
                  QAI-Zenを開く
                </a>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-sm">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </div>
                  <img 
                    src="https://www.jgaia.org/img/QAI-Zen%20%E3%82%B5%E3%83%A0%E3%83%8D%E3%82%A4%E3%83%AB.png" 
                    alt="QAI-Zen サムネイル" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
}
