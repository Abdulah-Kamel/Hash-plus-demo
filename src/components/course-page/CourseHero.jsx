import React from 'react';
import { Play } from 'lucide-react';

const CourseHero = ({ data }) => {
  return (
    <div className="bg-white">
      <div className="px-4 lg:px-12 py-8">
        <div className="mx-auto max-w-7xl">
          {/* Header with Title and Breadcrumb Tabs */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {data.title}
            </h1>

            {/* Breadcrumb-style Tabs */}
            <div className="flex items-center gap-2">
              {data.tabs.map((tab, index) => (
                <React.Fragment key={tab.id}>
                  <button
                    className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors rounded-lg ${
                      tab.active
                        ? 'text-primary bg-indigo-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                  {index < data.tabs.length - 1 && (
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Video Player */}
          <div className="relative bg-black rounded-2xl overflow-hidden mb-8 aspect-video">
            <img 
              src={data.video} 
              alt="Course video" 
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
              </div>
            </button>
          </div>

          {/* Description */}
          <div className="text-right space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">{data.description.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {data.description.content}
            </p>
            <button className="text-primary hover:underline font-medium">
              {data.description.link}
            </button>
          </div>

          {/* Requirements */}
          <div className="mt-12 text-right">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.requirements.title}</h2>
            <ul className="space-y-3">
              {data.requirements.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Outcomes */}
          <div className="mt-12 text-right">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.outcomes.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.outcomes.items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    item.checked ? 'bg-primary border-primary' : 'border-gray-300'
                  }`}>
                    {item.checked && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
