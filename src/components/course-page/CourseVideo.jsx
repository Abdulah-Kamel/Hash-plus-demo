import React from 'react';
import { Play } from 'lucide-react';

const CourseVideo = ({ video }) => {
  return (
    <div className="relative bg-black rounded-2xl overflow-hidden mb-8 aspect-video">
      <img
        src={video}
        alt="Course video"
        className="w-full h-full object-cover"
      />
      <button className="absolute inset-0 flex items-center justify-center group">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
        </div>
      </button>
    </div>
  );
};

export default CourseVideo;
