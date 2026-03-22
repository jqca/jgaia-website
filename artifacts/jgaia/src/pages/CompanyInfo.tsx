import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

export default function CompanyInfo() {
  const tableData = [
    { label: "名称", value: "日本生成AI協会（JGAIA）" },
    { label: "設立目的", value: "生成AI技術の普及と発展を推進し、日本の産業や学術界における生成AIの活用を促進することを目的とする。" },
    { label: "設立年月日", value: "2023年6月27日" },
    { label: "法人種別", value: "一般社団法人" },
    { label: "本部所在地", value: "東京都中央区銀座1丁目22番11号銀座大竹ビジデンス2階" },
    { label: "代表理事", value: "高野秀隆" },
    { label: "会員", value: "一般企業、学術研究機関、個人など、生成AIに関心を持つ団体および個人が会員となることができる。" },
    { label: "活動領域", value: "生成AI技術の普及啓蒙、研究支援、産業界との連携、国際交流、人材育成など、生成AI関連の幅広い活動を行う。" },
    { 
      label: "活動内容", 
      value: (
        <ul className="list-disc pl-5 space-y-2">
          <li>生成AIの基礎知識や応用分野に関するセミナーやワークショップの開催</li>
          <li>国内外の研究機関との共同研究プロジェクトの推進</li>
          <li>生成AI技術の産業応用に向けた企業との連携・相談支援</li>
          <li>国際的な生成AIコミュニティとの交流と情報共有</li>
          <li>学生や若手研究者を対象とした生成AI技術の教育プログラムの提供</li>
        </ul>
      ) 
    },
    { label: "資金", value: "会員の会費、寄付、補助金、協賛金などによって賄われる。" },
    { label: "役員", value: "理事や監事などの役員体制により運営される。" },
    { label: "ホームページ", value: <a href="https://www.jgaia.org" className="text-accent hover:underline">https://www.jgaia.org</a> },
  ];

  return (
    <MainLayout>
      <div className="bg-secondary/50 py-12 border-b border-border">
        <div className="container-inner text-center">
          <SectionHeader title="About" subtitle="協会情報" className="mb-0" />
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-inner max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl shadow-primary/5 border border-border overflow-hidden"
          >
            <div className="bg-primary p-6 md:p-8 text-center border-b border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest">協会概要</h2>
              <p className="text-white/70 text-sm mt-2 font-display uppercase tracking-widest">Association Profile</p>
            </div>
            
            <div className="p-0">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {tableData.map((row, idx) => (
                    <tr key={idx} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                      <th className="py-5 px-6 md:px-8 w-1/3 md:w-1/4 align-top bg-secondary/50 font-bold text-primary text-sm md:text-base whitespace-nowrap border-r border-border">
                        {row.label}
                      </th>
                      <td className="py-5 px-6 md:px-8 align-top text-foreground/80 text-sm md:text-base leading-relaxed">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
