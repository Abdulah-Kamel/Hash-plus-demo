import React from 'react';
import { ChevronLeft } from 'lucide-react';
import course_icon1 from "../assets/course_icon1.svg"
import course_icon2 from "../assets/course_icon2.svg"
import course_icon3 from "../assets/course_icon3.svg"
const categories = [
  {
    id: 1,
    title: 'الدورات التعليمية',
    description: 'أكثر من 120+ دورة',
    icon: (
        course_icon1
    ),
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 2,
    title: 'المعسكرات',
    description: 'أكثر من 120+ دورة',
    icon: (
        course_icon2
    ),
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    id: 3,
    title: 'المذكرات',
    description: 'أكثر من 120+ دورة',
    icon: (
        course_icon3
    ),
    gradient: 'from-green-400 to-green-600',
  },
];

const Categories = () => {
  return (
    <section className="py-16 px-4 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-primary rounded-3xl px-10 py-14 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                {/* Text Section */}
              <div className="text-right text-white space-y-6 order-2 lg:order-1 lg:col-span-2">
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
              {/* Cards Section */}
              <div className="flex flex-col sm:flex-row gap-6 order-2 lg:order-2 lg:col-span-3">
                {categories.map((category, index) => (
                      <div
                          key={category.id}
                          className="flex-1 bg-white rounded-3xl px-6 py-5 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                      >
                          <div className="flex flex-col h-full gap-y-8">
                             <div className="space-y-2">
                                 {/* Title */}
                                 <h3 className="text-3xl font-bold text-gray-900 mt-3">
                                     {category.title}
                                 </h3>

                                 {/* Description */}
                                 <p className="text-sm text-gray-600">
                                     {category.description}
                                 </p>
                             </div>

                             <div className="flex justify-between items-center mt-auto">
                                 {/* Arrow Button */}
                                 <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors">
                                     <ChevronLeft className="w-5 h-5" />
                                 </button>

                                 {/* Icon */}
                                 <div className={`w-22 h-22 flex items-center justify-center ${category.icon === course_icon1 && "bg-primary rounded-full"}`}>
                                     <img src={category.icon} alt="category icon" className="w-full h-full"/>
                                 </div>

                             </div>
                          </div>
                      </div>
                  ))}
              </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
