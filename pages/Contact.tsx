import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { IMAGES } from '../constants';
import { MapPin, Clock, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info Column */}
            <div className="space-y-10">
                <div>
                    <h1 className="font-serif text-4xl font-bold text-secondary mb-6">슈퍼 위치</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        "찾기 힘들 수도 있어요.<br/>
                        골목 끝, 파란 대문 집을 찾으세요."
                    </p>
                </div>

                <div className="space-y-6 border-t border-secondary/10 pt-8">
                    <div className="flex items-start">
                        <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                        <div>
                            <h3 className="font-serif font-bold text-lg">주소</h3>
                            <p className="text-gray-600">서울시 마포구 천하동 태평로 42길 1</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
                        <div>
                            <h3 className="font-serif font-bold text-lg">영업시간</h3>
                            <p className="text-gray-600">해 뜨면 열고, 피곤하면 닫습니다.</p>
                            <p className="text-sm text-gray-400 mt-1">대략 11:00 ~ 20:00 / 매주 월요일 휴무</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                        <div>
                            <h3 className="font-serif font-bold text-lg">연락처</h3>
                            <p className="text-gray-600">02-1234-5678</p>
                            <p className="text-sm text-gray-400 mt-1">전화보다는 인스타 DM이 빠릅니다.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <h3 className="font-serif font-bold text-xl mb-6">주인장에게 편지 쓰기</h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="이름" className="w-full px-4 py-3 rounded-lg bg-[#F4F1EA] border-none focus:ring-2 focus:ring-primary/50 outline-none" />
                            <input type="text" placeholder="연락처" className="w-full px-4 py-3 rounded-lg bg-[#F4F1EA] border-none focus:ring-2 focus:ring-primary/50 outline-none" />
                        </div>
                        <textarea rows={4} placeholder="남기실 말씀 (ex. 오란다 재입고 언제 되나요?)" className="w-full px-4 py-3 rounded-lg bg-[#F4F1EA] border-none focus:ring-2 focus:ring-primary/50 outline-none resize-none"></textarea>
                        <Button className="w-full">보내기</Button>
                    </form>
                </div>
            </div>

            {/* Map Column */}
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative">
                 <img src={IMAGES.MAP_PLACEHOLDER} alt="지도" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500" />
                 
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="bg-white/90 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border border-primary/20">
                         <span className="font-serif font-bold text-primary">지도는 마음속에... (Demo Image)</span>
                     </div>
                 </div>
            </div>
        </div>
      </Section>
    </div>
  );
};