import React from 'react';

const CourseRequirements = ({ requirements }) => {
  return (
    <div className="mt-12 text-right bg-gray-50 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{requirements.title}</h2>
      <ul className="space-y-3">
        {requirements.items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-600">
            <span className="text-primary mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseRequirements;
