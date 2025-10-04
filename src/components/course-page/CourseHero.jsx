import React from 'react';
import {ChevronDown, GraduationCap, Heart, Play, StarOff} from 'lucide-react';
import badgecheck from "../../assets/badgecheck.svg"
const CourseHero = ({ data }) => {
  return (
    <div className="">
      <div className="px-4 lg:px-12 py-8">
          <div className="mx-auto">
              {/* Video Player */}
              <div className="relative bg-black rounded-2xl overflow-hidden mb-8 aspect-video">
                  <img
                      src={data.video}
                      alt="Course video"
                      className="w-full h-full object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center group">
                      <div
                          className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-10 h-10 text-primary ml-1" fill="currentColor"/>
                      </div>
                  </button>
              </div>

              {/* course tabs */}
              <div className="border-b border-gray-200 mb-8">
                  <ul className="flex flex-wrap justify-start gap-4 -mb-px text-sm font-medium text-center">
                      <li>
                          <a href="#" className="inline-block px-6 py-3 text-primary border-b-2 border-primary">
                              الملخص
                          </a>
                      </li>
                      <li>
                          <a href="#" className="inline-block px-6 py-3 text-gray-500 border-b-2 border-transparent hover:border-primary transition-colors hover:text-primary ">
                              المعلم
                          </a>
                      </li>
                      <li>
                          <a href="#" className="inline-block px-6 py-3 text-gray-500 border-b-2 border-transparent hover:border-primary transition-colors hover:text-primary ">
                              التقييمات
                          </a>
                      </li>
                      <li>
                          <a href="#" className="inline-block px-6 py-3 text-gray-500 border-b-2 border-transparent hover:border-primary transition-colors hover:text-primary ">
                              الملحقات
                          </a>
                      </li>
                      <li>
                          <a href="#" className="inline-block px-6 py-3 text-gray-500 border-b-2 border-transparent hover:border-primary transition-colors hover:text-primary ">
                              مجتمع الدورة
                          </a>
                      </li>
                  </ul>
              </div>

              {/* Description */}
              <div className="text-right space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">{data.description.title}</h2>
                  <p className="text-gray-600 leading-relaxed">
                      {data.description.content}
                  </p>
                  <button className="text-primary bg-[#BC6CEF0D] px-4 py-3 rounded-lg flex items-center gap-2 hover:underline font-medium">
                      {data.description.link}
                      <ChevronDown className="w-5 h-5 ml-1"/>
                  </button>
              </div>

              {/* Requirements */}
              <div className="mt-12 text-right bg-gray-50 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.requirements.title}</h2>
                  <ul className="space-y-3">
                      {data.requirements.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-600">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>

              {/* Learning Outcomes */}
              <div className="mt-12 text-right">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.outcomes.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-2 border-gray-100 rounded-lg p-4">
                      {data.outcomes.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-3">
                              <img src={badgecheck} alt="check"/>
                              <span className="text-gray-600">{item.label}</span>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Course Stats */}
              <div className="mt-12 text-right">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">الدورة في أرقام</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {/* Stat 1 - Videos */}
                      <div className="bg-[#33E2BD0D] rounded-xl p-6 text-center">
                          <div className="w-12 h-12 bg-teal-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                              <Play className="w-6 h-6 text-white" fill="currentColor"/>
                          </div>
                          <p className="text-sm sm:text-xl text-gray-900 mb-1">12 محتوى</p>
                      </div>

                      {/* Stat 2 - Students */}
                      <div className="bg-[#33E2BD0D] rounded-xl p-6 text-center">
                          <div className="w-12 h-12 bg-teal-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                              <GraduationCap className="w-6 h-6 text-white" fill="currentColor"/>
                          </div>
                          <p className="text-sm sm:text-xl text-gray-900 mb-1">10,170 طالب</p>
                      </div>

                      {/* Stat 3 - Reviews */}
                      <div className="bg-[#33E2BD0D] rounded-xl p-6 text-center">
                          <div className="w-12 h-12 bg-teal-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                              <Heart className="w-6 h-6 text-white" fill="currentColor"/>
                          </div>
                          <p className="text-sm sm:text-xl text-gray-900 mb-1">12,561 تقييم</p>
                      </div>

                      {/* Stat 4 - Rating */}
                      <div className="bg-[#33E2BD0D] rounded-xl p-6 text-center">
                          <div className="w-12 h-12 bg-teal-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                              <StarOff className="w-6 h-6 text-white" fill="currentColor"/>
                          </div>
                          <p className="text-sm sm:text-xl text-gray-900 mb-1">4.6 تقييم المعلم</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default CourseHero;
