import React from 'react';
import { NavBar } from "../components/navbar";
import { CourseHero, CourseSidebar } from "../components/course-page";
import { courseHeroData, courseSidebarData } from '../data/coursePageData';
import Footer from "../components/footer";
import {Star, Share2} from "lucide-react";

const Course = () => {
  return (
    <div>
      <NavBar />
      
      <div className="bg-white min-h-screen">
        <div className="px-4 lg:px-12 py-8">
            {/* Header with Title and Breadcrumb Tabs */}
            <div className="flex max-sm:flex-col items-center justify-between mb-8 flex-wrap gap-4 border-y py-8 border-gray-200 pb-4">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {courseHeroData.title}
                </h1>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="progress-circle"></div>
                        <p className="max-sm:text-xs">تقدمك</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Star className="w-10 h-10 text-[#E4E4E7]"/>
                        <p className="max-sm:text-xs">قيم الدورة</p>
                    </div>
                    <button className="flex items-center gap-2 px-2 sm:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Share2 className="w-5 h-5 text-gray-600"/>
                        <p className="text-gray-700 max-sm:text-xs">شارك الدورة</p>
                    </button>
                </div>
            </div>
            <div className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Main Content - 2 columns */}
              <div className="lg:col-span-2">
                <CourseHero data={courseHeroData} />
              </div>
              
              {/* Sidebar - 1 column */}
              <div className="lg:col-span-1">
                <CourseSidebar data={courseSidebarData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Course;
