import React from 'react';
import badgecheck from "../../assets/badgecheck.svg";

const CourseOutcomes = ({ outcomes }) => {
  return (
    <div className="mt-12 text-right">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{outcomes.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-2 border-gray-100 rounded-lg p-4">
        {outcomes.items.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <img src={badgecheck} alt="check" />
            <span className="text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOutcomes;
