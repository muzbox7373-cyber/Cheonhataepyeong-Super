import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-[#F4F1EA] py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="font-serif font-bold text-2xl mb-4">천하태평 슈퍼</h3>
            <p className="font-sans font-light text-sm opacity-80 leading-relaxed">
              바쁜 일상 속 작은 쉼표.<br/>
              우리는 느리게 걷는 법을 팝니다.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-accent">Contact</h4>
            <div className="flex flex-col items-center md:items-start space-y-2 text-sm font-light opacity-80">
                <a href="#" className="flex items-center hover:text-accent transition-colors">
                    <Instagram className="w-4 h-4 mr-2" /> @cheonhataepyeong
                </a>
                <a href="#" className="flex items-center hover:text-accent transition-colors">
                    <Mail className="w-4 h-4 mr-2" /> master@slowsuper.com
                </a>
            </div>
          </div>

          <div>
             <h4 className="font-serif font-bold text-lg mb-4 text-accent">Location</h4>
             <div className="flex flex-col items-center md:items-start space-y-2 text-sm font-light opacity-80">
                <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" /> 서울시 마포구 어쩌구 골목길 42
                </p>
                <p>영업시간: 11:00 ~ 20:00</p>
                <p className="text-xs text-gray-400">(사장님 기분 따라 조기 마감 가능)</p>
             </div>
          </div>

        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs font-light opacity-50">
          © 2024 Cheonhataepyeong Super. All rights reserved.
        </div>
      </div>
    </footer>
  );
};