import React from 'react';
import {Star, StarHalf, User, Clock, ShoppingCart, ArrowLeft, BookOpen, BookOpenText} from 'lucide-react';
import courses_arrow from "../assets/courses_arrow.svg"
import course1 from "../assets/course1.png"
import course2 from "../assets/course2.png"
import courseProfile from "../assets/courseProfile.png"
import saRyal from "../assets/saRyal.svg"

// Mock data based on the design
const courses = [
    {
        id: 1,
        image: course1,
        category: 'الأعلى تقييم',
        title: 'مذكرات JavaScript',
        instructor: 'ولاء القحطاني',
        duration: '40 ساعة',
        rating: 4.5,
        reviews: 625,
        price: 50,
    },
    {
        id: 2,
        image: course2,
        category: 'الأعلى تقييم',
        title: 'مذكرات JavaScript',
        instructor: 'ولاء القحطاني',
        duration: '40 ساعة',
        rating: 4.5,
        reviews: 625,
        price: 50,
    },
    {
        id: 3,
        image: course1,
        category: 'الأعلى تقييم',
        title: 'مذكرات JavaScript',
        instructor: 'ولاء القحطاني',
        duration: '40 ساعة',
        rating: 4.5,
        reviews: 625,
        price: 50,
    },
    {
        id: 4,
        image: course2,
        category: 'الأعلى تقييم',
        title: 'مذكرات JavaScript',
        instructor: 'ولاء القحطاني',
        duration: '40 ساعة',
        rating: 4.5,
        reviews: 625,
        price: 50,
    },
    {
        id: 5,
        image: course1,
        category: 'الأعلى تقييم',
        title: 'مذكرات JavaScript',
        instructor: 'ولاء القحطاني',
        duration: '40 ساعة',
        rating: 4.5,
        reviews: 625,
        price: 50,
    },
    {
        id: 6,
        image: course2,
        category: 'الأعلى تقييم',
        title: 'مذكرات JavaScript',
        instructor: 'ولاء القحطاني',
        duration: '40 ساعة',
        rating: 4.5,
        reviews: 625,
        price: 50,
    },
    {
        id: 7,
        image: course1,
        category: 'الأعلى تقييم',
        title: 'مذكرات JavaScript',
        instructor: 'ولاء القحطاني',
        duration: '40 ساعة',
        rating: 4.5,
        reviews: 625,
        price: 50,
    },
    {
        id: 8,
        image: course2,
        category: 'الأعلى تقييم',
        title: 'مذكرات JavaScript',
        instructor: 'ولاء القحطاني',
        duration: '40 ساعة',
        rating: 4.5,
        reviews: 625,
        price: 50,
    },
];

// A dynamic rating component
const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center">
            {hasHalfStar && <StarHalf key="half" fill="currentColor" className="w-4 h-4 text-yellow-300" />}
            {[...Array(emptyStars)].map((_, i) => (
                <Star key={`empty-${i}`} fill="currentColor" className="w-4 h-4 text-gray-300" />
            ))}
            {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} fill="currentColor" className="w-4 h-4 text-yellow-300" />
            ))}
        </div>
    );
};

const CourseCard = ({ course }) => (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
        <a href="#">
            <img className="w-full rounded-xl" src={course.image} alt="product image"/>
        </a>
        <div>
            <div className="flex items-center mt-2.5 mb-5">
                <span className="text-base font-light px-2.5 py-0.5 rounded-sm">
                    (625)
                </span>
                <div className="flex rowr items-center">
                    <Rating rating={course.rating} />
                    <span className="text-base font-light px-2.5 py-0.5 rounded-sm ms-1">{course.rating.toFixed(1)}</span>
                </div>
            </div>
            <div className="my-2">
                <h2 className="text-2xl font-medium">مذكرات JavaScript</h2>
            </div>
            <div className="mt-4 flex items-center gap-2">
                <div className="bg-[#F0F0F0] w-8 h-8 flex justify-center items-center rounded-full me-2">
                    <img className="rounded-full" src={courseProfile} alt="Rounded avatar"/>
                </div>
                <p className="text-base font-light">ولاء القحطاني</p>
            </div>
            <div className="mt-4 flex items-center justify-between me-6 border-b border-[#E6E6E6] py-2.5">
                <div className="text-qusecondary flex items-center gap-2">
                    <Clock className="text-qusecondary"/>
                    <p>40 ساعه</p>
                </div>
                <div className="text-qusecondary flex items-center gap-2">
                    <BookOpenText className="text-qusecondary"/>
                    <p>40 ساعه</p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="text-3xl font-semibold text-gray-900 flex gap-1">
                    <span>50</span>
                    <img src={saRyal} alt="saud arabia ryal currency"/>
                </div>
                <a href="#"
                   className="border border-[#E6E6E6] rounded-full hover:bg-primary hover:text-white transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-6 py-3 text-center">
                    اضف الى السلة
                </a>
            </div>
        </div>
    </div>
);

const Courses = () => {
    return (
        <section className="p-4 lg:px-12">
            <div className="mx-auto relative w-full px-6 lg:px-10 py-14 rounded-2xl bg-[#6E82F41A]">
                <div className="text-right mb-12">
                    <h2 className="text-4xl font-bold tracking-tight leading-normal text-gray-900 sm:text-5xl">
                        أفضل الدورات المقدمة <br/> خصيصاً إليك
                    </h2>
                </div>
                <img
                    src={courses_arrow}
                    alt="course svg arrow"
                    className="absolute left-1 top-1 w-16 sm:w-24 md:w-32 lg:w-44 xl:w-56 h-auto select-none pointer-events-none"
                />

                <ul className="flex mt-5 gap-4 flex-wrap text-sm font-medium text-center text-gray-500">
                    <li className="me-2">
                        <a href="#" className="inline-block px-7 py-4 text-white bg-primary rounded-full active"
                           aria-current="page">كل المنتجات</a>
                    </li>
                    <li className="me-2">
                        <a href="#"
                           className="inline-block px-7 py-4 rounded-full hover:text-white bg-white hover:bg-primary transition-colors">الدورات</a>
                    </li>
                    <li className="me-2">
                        <a href="#"
                           className="inline-block px-7 py-4 rounded-full hover:text-white bg-white hover:bg-primary transition-colors">المذكرات</a>
                    </li>
                    <li className="me-2">
                        <a href="#"
                           className="inline-block px-7 py-4 rounded-full hover:text-white bg-white hover:bg-primary transition-colors">المعسكرات</a>
                    </li>
                    <li className="ms-auto">
                        <a href="#"
                           className="inline-block px-7 py-4 rounded-full hover:text-white bg-white hover:bg-primary transition-colors">
                            عرض الكل
                            <ArrowLeft className="inline-flex h-5 w-5 ms-2"/>
                        </a>
                    </li>
                </ul>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mt-8">
                    {courses.map((course, index) => (
                        <CourseCard key={`${course.id}-${index}`} course={course}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;