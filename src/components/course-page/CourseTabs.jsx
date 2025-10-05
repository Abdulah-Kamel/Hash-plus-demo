import React from 'react';

const CourseTabs = () => {
  const tabs = [
    { id: 1, label: 'الملخص', active: true },
    { id: 2, label: 'المعلم', active: false },
    { id: 3, label: 'التقييمات', active: false },
    { id: 4, label: 'الملحقات', active: false },
    { id: 5, label: 'مجتمع الدورة', active: false },
  ];

  return (
    <div className="border-b border-gray-200 mb-4">
      <ul className="flex flex-wrap justify-start gap-2 -mb-px text-xs sm:text-sm font-medium text-center">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <a
              href="#"
              className={`inline-block px-3 sm:px-4 py-2 border-b-2 transition-colors ${
                tab.active
                  ? 'text-primary border-primary'
                  : 'text-gray-500 border-transparent hover:border-primary hover:text-primary'
              }`}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTabs;
