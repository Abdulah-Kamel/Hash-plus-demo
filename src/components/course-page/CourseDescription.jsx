import React from 'react';
import { ChevronDown } from 'lucide-react';

const CourseDescription = ({ description }) => {
  return (
    <div className="text-right space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">{description.title}</h2>
      <p className="text-gray-600 leading-relaxed">
        {description.content}
      </p>
      <button className="text-primary bg-[#BC6CEF0D] px-4 py-3 rounded-lg flex items-center gap-2 hover:underline font-medium">
        {description.link}
        <ChevronDown className="w-5 h-5 ml-1" />
      </button>
    </div>
  );
};

export default CourseDescription;
