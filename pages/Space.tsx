import React, { useState } from 'react';
import { Section } from '../components/Section';
import { SPACE_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Space: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % SPACE_INFO.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + SPACE_INFO.length) % SPACE_INFO.length);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#EAE6DA]">
      <Section>
        <div className="text-center mb-12">
            <h1 className="font-serif text-4xl font-bold text-secondary mb-4">슈퍼 구석구석</h1>
            <p className="text-gray-500">당신이 머물 수 있는 작은 아지트</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl border-8 border-white bg-black">
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={activeIndex}
                        src={SPACE_INFO[activeIndex].image}
                        alt={SPACE_INFO[activeIndex].name}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 md:p-12 text-white">
                    <motion.div
                        key={`text-${activeIndex}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">{SPACE_INFO[activeIndex].name}</h2>
                        <p className="text-lg opacity-90 font-light">{SPACE_INFO[activeIndex].description}</p>
                    </motion.div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center mt-8 px-4">
                <button onClick={prevSlide} className="p-4 rounded-full bg-white text-secondary hover:bg-primary hover:text-white transition-colors shadow-lg">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex space-x-3">
                    {SPACE_INFO.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${idx === activeIndex ? 'bg-primary w-8' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>

                <button onClick={nextSlide} className="p-4 rounded-full bg-white text-secondary hover:bg-primary hover:text-white transition-colors shadow-lg">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
      </Section>

      {/* Grid Gallery for details */}
      <Section>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-sm rotate-1">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">🎮 오락실 이용 팁</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 font-light">
                    <li>동전 교환기는 카운터 옆에 있습니다.</li>
                    <li>뒷사람을 위해 1인 2판 매너 게임 부탁드려요.</li>
                    <li>사장님을 이기면 쫀드기 1개 서비스! (현재 최고기록 58,900점)</li>
                </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm -rotate-1">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">🎵 신청곡 안내</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 font-light">
                    <li>LP판은 눈으로만 봐주세요.</li>
                    <li>신청곡은 종이에 적어 카운터로 주세요.</li>
                    <li>트로트, 최신 아이돌 노래는 정중히 거절합니다. (사장님 취향 존중)</li>
                </ul>
            </div>
         </div>
      </Section>
    </div>
  );
};