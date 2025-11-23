import React, { useState } from 'react';
import { Section } from '../components/Section';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Goods: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <Section>
        <div className="text-center mb-16">
            <h1 className="font-serif text-4xl font-bold text-secondary mb-4">이달의 보물들</h1>
            <p className="text-gray-500">사장님이 직접 먹어보고 가져온 깐깐한 큐레이션</p>
        </div>

        {/* Masonry-ish Grid using Column CSS */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {PRODUCTS.map((product) => (
                <motion.div 
                    key={product.id}
                    breakInside="avoid"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer break-inside-avoid mb-8 hover:shadow-xl transition-shadow"
                >
                    <div className="aspect-square overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                    </div>
                    <div className="p-6">
                        <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">{product.category}</span>
                        <h3 className="font-serif text-xl font-bold text-secondary mb-2">{product.name}</h3>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                        <div className="flex justify-between items-center border-t pt-4 mt-2">
                            <span className="font-bold text-secondary">{product.price}</span>
                            <span className="text-xs text-gray-400">자세히 보기 &rarr;</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedProduct(null)}
            >
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#F4F1EA] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
                >
                    <button 
                        onClick={() => setSelectedProduct(null)}
                        className="absolute top-4 right-4 p-2 bg-white/80 rounded-full z-10 hover:bg-white transition-colors"
                    >
                        <X className="w-5 h-5 text-secondary" />
                    </button>

                    <div className="w-full md:w-1/2 h-64 md:h-auto">
                        <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full w-fit mb-4">
                            {selectedProduct.category}
                        </span>
                        <h2 className="font-serif text-3xl font-bold text-secondary mb-4">{selectedProduct.name}</h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            {selectedProduct.description}<br/><br/>
                            어릴 적 그 맛 그대로.<br/>
                            천하태평 슈퍼에서만 만날 수 있는<br/>
                            특별한 패키지로 준비했습니다.
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                            <span className="text-2xl font-bold text-secondary">{selectedProduct.price}</span>
                            <button 
                                onClick={() => alert("장바구니에 담겼습니다! (개발 중)")}
                                className="px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-primary transition-colors"
                            >
                                담기
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};