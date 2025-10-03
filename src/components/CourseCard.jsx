import React from 'react';
import { Clock, BookOpenText } from 'lucide-react';
import Rating from './Rating';
import courseProfile from "../assets/courseProfile.png";
import saRyal from "../assets/saRyal.svg";

const CourseCard = ({ course }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
      <a href="#">
        <img className="w-full rounded-xl" src={course.image} alt={course.title} />
      </a>
      <div>
        {/* Rating Section */}
        <div className="flex items-center mt-2.5 mb-5">
          <span className="text-base font-light px-2.5 py-0.5 rounded-sm">
            ({course.reviews})
          </span>
          <div className="flex items-center">
            <Rating rating={course.rating} />
            <span className="text-base font-light px-2.5 py-0.5 rounded-sm ms-1">
              {course.rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="my-2">
          <h2 className="text-2xl font-medium">{course.title}</h2>
        </div>

        {/* Instructor */}
        <div className="mt-4 flex items-center gap-2">
          <div className="bg-[#F0F0F0] w-8 h-8 flex justify-center items-center rounded-full me-2">
            <img className="rounded-full" src={courseProfile} alt="Instructor avatar" />
          </div>
          <p className="text-base font-light">{course.instructor}</p>
        </div>

        {/* Course Info */}
        <div className="mt-4 flex items-center justify-between me-6 border-b border-[#E6E6E6] py-2.5">
          <div className="text-qusecondary flex items-center gap-2">
            <Clock className="text-qusecondary" />
            <p>{course.duration}</p>
          </div>
          <div className="text-qusecondary flex items-center gap-2">
            <BookOpenText className="text-qusecondary" />
            <p>{course.duration}</p>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-3xl font-semibold text-gray-900 flex gap-1">
            <span>{course.price}</span>
            <img src={saRyal} alt="سعر الدورة" />
          </div>
          <a
            href="#"
            className="border border-[#E6E6E6] rounded-full hover:bg-primary hover:text-white transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-6 py-3 text-center"
          >
            اضف الى السلة
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
