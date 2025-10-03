import React from 'react';
import { ChevronLeft } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'الدورات التعليمية',
    description: 'أكثر من 120+ دورة',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" fill="currentColor" className="text-blue-500" />
        <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="white" />
      </svg>
    ),
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 2,
    title: 'المعسكرات',
    description: 'أكثر من 120+ دورة',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
        <path d="M25 25 L50 50 L75 25 L75 75 L50 50 L25 75 Z" fill="currentColor" className="text-purple-500" />
      </svg>
    ),
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    id: 3,
    title: 'المذكرات',
    description: 'أكثر من 120+ دورة',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
        <path d="M50 20 L30 40 L30 60 L50 80 L70 60 L70 40 Z M50 35 L40 45 L40 55 L50 65 L60 55 L60 45 Z" fill="currentColor" className="text-green-500" />
      </svg>
    ),
    gradient: 'from-green-400 to-green-600',
  },
];

const Categories = () => {
  return (
    <section className="py-16 px-4 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl p-8 lg:p-16 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Cards Section */}
            <div className="flex flex-col sm:flex-row gap-6 order-2 lg:order-1">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className="w-20 h-20 flex items-center justify-center">
                      {category.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>

                    {/* Arrow Button */}
                    <button className="mt-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Text Section */}
            <div className="text-right text-white space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                عن المنصة
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                فئات هاش بلس
                <br />
                <span className="text-green-300">التعليمية</span>
              </h2>

              <p className="text-lg text-white/90 leading-relaxed">
                معسكرات وبرامج تدريبية بالشراكة مع كبرى الجهات العالمية، لتطوير مهاراتك في مجالات التقنيات الحديثة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
