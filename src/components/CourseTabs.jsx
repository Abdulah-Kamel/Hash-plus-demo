import React from 'react';
import { ArrowLeft } from 'lucide-react';

const CourseTabs = () => {
  return (
    <ul className="flex mt-5 gap-4 flex-wrap text-sm font-medium text-center text-gray-500">
      <li className="me-2">
        <a
          href="#"
          className="inline-block px-7 py-4 text-white bg-primary rounded-full active"
          aria-current="page"
        >
          كل المنتجات
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="inline-block px-7 py-4 rounded-full hover:text-white bg-white hover:bg-primary transition-colors"
        >
          الدورات
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="inline-block px-7 py-4 rounded-full hover:text-white bg-white hover:bg-primary transition-colors"
        >
          المذكرات
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="inline-block px-7 py-4 rounded-full hover:text-white bg-white hover:bg-primary transition-colors"
        >
          المعسكرات
        </a>
      </li>
      <li className="ms-auto">
        <a
          href="#"
          className="inline-block px-7 py-4 rounded-full hover:text-white bg-white hover:bg-primary transition-colors"
        >
          عرض الكل
          <ArrowLeft className="inline-flex h-5 w-5 ms-2" />
        </a>
      </li>
    </ul>
  );
};

export default CourseTabs;
