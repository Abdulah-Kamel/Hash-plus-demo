import React from 'react';
import { Play, GraduationCap, Heart, Star } from 'lucide-react';

const CourseStats = () => {
  const stats = [
    { id: 1, icon: Play, label: '12 محتوى', color: 'bg-teal-400' },
    { id: 2, icon: GraduationCap, label: '10,170 طالب', color: 'bg-teal-400' },
    { id: 3, icon: Heart, label: '12,561 تقييم', color: 'bg-teal-400' },
    { id: 4, icon: Star, label: '4.6 تقييم المعلم', color: 'bg-teal-400' },
  ];

  return (
    <div className="mt-12 text-right">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">الدورة في أرقام</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="bg-[#33E2BD0D] rounded-xl p-6 text-center">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <Icon className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <p className="text-sm sm:text-xl text-gray-900 mb-1">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseStats;
