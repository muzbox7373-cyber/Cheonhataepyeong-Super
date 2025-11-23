import React from 'react';
import { Section } from '../components/Section';
import { IMAGES } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Story: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="pt-16 min-h-screen bg-paper-texture">
      
      {/* Header */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden flex items-center justify-center">
         <motion.img 
            style={{ y: yPos }}
            src={IMAGES.PHILOSOPHY_BG} 
            className="absolute inset-0 w-full h-[120%] object-cover brightness-75"
         />
         <div className="relative z-10 text-center p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
             <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4">슈퍼의 철학</h1>
             <p className="text-white/90 text-lg font-light">게으름도 능력이 되는 곳</p>
         </div>
      </div>

      {/* Content 1 */}
      <Section>
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
                <img src={IMAGES.OWNER_IMG} alt="사장님" className="w-full rounded-lg shadow-xl sepia-[.2]" />
                <p className="text-center text-gray-500 text-sm mt-2 italic">↑ 실제로 게으른 사장님</p>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                <h2 className="font-serif text-3xl font-bold text-secondary">왜 '천하태평' 인가요?</h2>
                <div className="w-12 h-1 bg-primary"></div>
                <p className="leading-loose text-gray-700 font-light text-lg">
                    대한민국 직장인 10년 차, 빨리빨리 사회에 지쳐 도망쳤습니다.<br/>
                    숨이 턱 끝까지 차오를 때, 누군가는 멈춰 서서 "괜찮아"라고 말해줘야 하니까요.<br/>
                    <br/>
                    천하태평 슈퍼는 물건만 파는 곳이 아닙니다.<br/>
                    멍 때릴 시간, 추억을 곱씹을 여유, 그리고 맛있는 간식을 팝니다.
                </p>
            </div>
        </div>
      </Section>

      {/* Rules */}
      <Section className="bg-secondary text-[#F4F1EA]">
         <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12">슈퍼의 3대 규칙</h2>
            <div className="grid gap-8">
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="border border-[#F4F1EA]/30 p-8 rounded-lg hover:bg-white/5 transition-colors"
                >
                    <h3 className="text-xl font-bold text-primary mb-2">01. 시계 보지 않기</h3>
                    <p className="font-light opacity-80">여기서는 해가 뜨고 지는 것만 중요해요.</p>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="border border-[#F4F1EA]/30 p-8 rounded-lg hover:bg-white/5 transition-colors"
                >
                    <h3 className="text-xl font-bold text-primary mb-2">02. 한숨 크게 쉬기</h3>
                    <p className="font-light opacity-80">땅이 꺼져도 괜찮아요. 슈퍼 바닥 튼튼합니다.</p>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="border border-[#F4F1EA]/30 p-8 rounded-lg hover:bg-white/5 transition-colors"
                >
                    <h3 className="text-xl font-bold text-primary mb-2">03. 맛있는 건 0칼로리</h3>
                    <p className="font-light opacity-80">사장님이 그렇게 믿고 있습니다.</p>
                </motion.div>
            </div>
         </div>
      </Section>
    </div>
  );
};