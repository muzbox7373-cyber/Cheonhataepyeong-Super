import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { IMAGES } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src={IMAGES.HERO_BG} 
                alt="Hero Background" 
                className="w-full h-full object-cover opacity-90 brightness-75 scale-105 animate-[pulse_10s_infinite_ease-in-out]"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
            {/* Scanline effect overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none z-10"></div>
        </div>

        <div className="relative z-20 text-center max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-bold tracking-wider mb-6 backdrop-blur-sm">
               OPEN 11:00 - 20:00
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-black leading-tight mb-6 drop-shadow-lg">
              바쁜 일상은 잠시 멈춤,<br />
              여기는 <span className="text-primary inline-block transform -rotate-2 decoration-4 underline-offset-8">천하태평 슈퍼</span>입니다.
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-200 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              도심 속 작은 쉼표. <br className="md:hidden"/> 추억의 간식과 느긋한 음악이 있는 곳에서<br />
              오늘 하루, 잠시 게을러져도 괜찮아요.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button onClick={() => alert('쿠폰이 발급되었습니다! 카운터에서 보여주세요.')}>
                    방문 기념 10% 할인 쿠폰 받기
                </Button>
                <Link to="/story">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                        슈퍼 이야기 들어보기
                    </Button>
                </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <Section className="bg-background">
        <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">슈퍼의 3가지 매력</h2>
            <p className="text-gray-500">당신이 이곳을 사랑하게 될 소소한 이유들</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
                { title: "추억 소환", desc: "그때 그 시절, 100원의 행복을 기억하나요?", img: IMAGES.FEATURE_1 },
                { title: "멍때리기 창가", desc: "아무 생각 없이 창밖만 봐도 시간이 뚝딱.", img: IMAGES.FEATURE_2 },
                { title: "주인장 추천 BGM", desc: "LP판에서 흘러나오는 지지직거리는 감성.", img: IMAGES.FEATURE_3 },
            ].map((feature, idx) => (
                <motion.div 
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="group flex flex-col items-center"
                >
                    <div className="w-full h-64 overflow-hidden rounded-2xl border-4 border-white shadow-lg mb-6 relative">
                        <img src={feature.img} alt={feature.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-2 text-secondary">{feature.title}</h3>
                    <p className="text-gray-600 text-center px-4 word-keep-all">{feature.desc}</p>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Guestbook / Reviews */}
      <Section className="bg-[#EAE6DA]">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b-2 border-secondary/10 pb-4">
            <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary">다녀간 손님들의 방명록</h2>
                <p className="text-gray-500 mt-2">벽에 적힌 낙서 대신, 따뜻한 한마디.</p>
            </div>
            <Link to="/space" className="text-primary font-bold flex items-center hover:underline mt-4 md:mt-0">
                공간 더 보기 <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((review) => (
                <div key={review} className="bg-white p-6 pt-8 pb-12 shadow-md transform rotate-1 hover:rotate-0 transition-transform duration-300 relative">
                    {/* Tape effect */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-accent/30 rotate-[-2deg]"></div>
                    
                    <div className="flex text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="font-serif text-lg text-secondary mb-4 leading-relaxed">
                        "도심 한복판에 이런 곳이 있다니... 들어오자마자 시간이 멈춘 것 같았어요. 오란다 맛집 인정!"
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 font-sans border-t pt-4">
                        <span>김*수 님</span>
                        <span>2023.10.2{review}</span>
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </div>
  );
};