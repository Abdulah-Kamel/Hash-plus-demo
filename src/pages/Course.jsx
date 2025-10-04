import React from 'react';
import { NavBar } from "../components/navbar";
import { CourseHero, CourseSidebar } from "../components/course-page";
import { courseHeroData, courseSidebarData } from '../data/coursePageData';
import Footer from "../components/footer";

const Course = () => {
  return (
    <div>
      <NavBar />
      
      <div className="bg-gray-50 min-h-screen">
        <div className="px-4 lg:px-12 py-8">
          <div className="mx-auto max-w-7xl">
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
