import React from 'react';
import heroPcIcon from "../assets/hero-pc.svg"
import profile1 from "../assets/profile1.png"
import profile2 from "../assets/profile2.png"
import profile3 from "../assets/profile3.png"
``
import {Sparkles, ArrowLeft, Camera, Video} from 'lucide-react';

const Hero = () => {
    const percent = 90; // desired progress
    return (
        <section className={"min-h-[85vh] bg-transparent flex max-lg:flex-col max-lg:items-center max-lg:justify-center justify-between gap-8 px-5 lg:px-20 pt-12"}>
            <div className={"w-3/6 max-lg:w-full max-lg:text-center mt-16 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center"}>
                <h1 className={"mb-4 text-4xl font-extrabold leading-24 tracking-tight text-gray-900 md:text-5xl lg:text-6xl rtl:text-right lg:text-right max-lg:text-center"}>
                    <span className="block">أكبر منصة لتعلم</span>
                    <span className="block">
                        <span className="inline-flex items-center gap-3 rtl:flex-row-reverse">
                            {/* Decorative icon; uses currentColor so it can be themed via text-* classes */}
                            <svg
                                className="w-14 h-14 text-teal-400"
                                aria-hidden="true"
                                focusable="false"
                                viewBox="0 0 56 56"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                            >
                                <g clipPath="url(#clip0_2011_61166)">
                                    <path d="M32.76 0H23.24L26.7311 24.9367L11.5668 4.83518L4.83516 11.5668L24.9367 26.7311L0 23.24V32.76L24.9367 29.2689L4.8352 44.4332L11.5669 51.1648L26.7311 31.0633L23.24 56H32.76L29.2689 31.0633L44.4332 51.1648L51.1648 44.4332L31.0633 29.2689L56 32.76V23.24L31.0633 26.7311L51.1648 11.5668L44.4332 4.83518L29.2689 24.9367L32.76 0Z"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2011_61166">
                                        <rect width="56" height="56" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="block">بتجربة</span>
                            <span className="text-primary">البرمجة</span>
                        </span>
                    </span>
                    <span className="block">بسيطة و سلسلة</span>
                </h1>
                <p className="text-qusecondary leading-8 max-lg:text-center">معسكرات وبرامج احترافية بالشراكة مع كبرى الجهات العالمية؛ لتطوير مهاراتك <br/> في مجالات التقنيات الحديثة، بمنهجيّة تعلُّم قائمة على التطبيقات العملية،<br/> ضمن بيئة تعليمية محفزة وتنافسية.</p>

                {/* CTA Button */}
                <div className="mt-8 rtl:text-right lg:text-right max-lg:text-center">
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30"
                    >
                        ابدأ الآن
                        {/* arrow icon (RTL friendly: points left) */}
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                </div>

                {/* Stats List */}
                <ul className="mt-12 grid gap-8 grid-cols-3 rtl:text-right lg:text-right max-lg:text-center">
                    <li>
                        <div className="text-4xl md:text-5xl font-extrabold text-gray-900">+10</div>
                        <div className="mt-1 text-qusecondary">سنوات من الخبرة</div>
                    </li>
                    <li>
                        <div className="text-4xl md:text-5xl font-extrabold text-gray-900">+450</div>
                        <div className="mt-1 text-qusecondary">طالب حالي لدينا</div>
                    </li>
                    <li>
                        <div className="text-4xl md:text-5xl font-extrabold text-gray-900">+35</div>
                        <div className="mt-1 text-qusecondary">دورات ومعسكرات</div>
                    </li>
                </ul>
            </div>

            {/* Illustration + floating badges */}
            <div className="flex w-3/6 max-lg:w-full items-center justify-center mt-16">
                <div className="relative w-[576px] h-[662px] max-lg:scale-90">
                    {/* top-left success gauge card */}
                    <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-1 w-60">
                        <div className="flex items-center justify-center">
                            {/* semicircle gauge */}
                            <svg viewBox="0 0 200 100" className="w-40 h-20">
                                {/* الخلفية الرمادية */}
                                <path
                                    d="M20,100 A80,80 0 0,1 180,100"
                                    fill="none"
                                    stroke="#E5E7EB"
                                    strokeWidth="14"
                                    strokeLinecap="round"
                                />
                                {/* الجزء الملون */}
                                <path
                                    d="M20,100 A80,80 0 0,1 180,100"
                                    fill="none"
                                    stroke="#BC6CEF"
                                    strokeWidth="14"
                                    strokeLinecap="round"
                                    strokeDasharray="251"   // المحيط النصفي
                                    strokeDashoffset="25"   // يخليها 90%
                                />
                            </svg>
                        </div>
                        <div className="text-center mt-1">
                            <div className="text-2xl font-bold text-gray-900">{percent}%</div>
                            <div className="text-sm text-gray-500">نسبة النجاح</div>
                        </div>
                    </div>


                    {/* top-right camera icon */}
                    <div className="absolute -top-8 -right-8 bg-secondary text-white w-20 h-20 rounded-full grid place-items-center shadow-xl">
                        <Video className="w-8 h-8"/>
                    </div>

                    {/* main illustration panel */}
                    <div className="rounded-[28px] flex justify-center items-center h-full overflow-hidden bg-gradient-to-tl from-primary/85 to-primary p-6 shadow-2xl">
                        <img src={heroPcIcon} alt="واجهة منصتنا" className="w-full h-auto select-none"/>
                    </div>

                    {/* bottom-right students card */}
                    <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-4 w-53 backdrop-blur">
                        <div className="flex flex-col items-center gap-3">
                            {/* avatars */}
                            <div className="flex -space-x-2 rtl:space-x flex-row-reverse">
                                <img className="w-10 h-10 border-2 border-white rounded-full "
                                     src={profile1} alt=""/>
                                <img className="w-10 h-10 border-2 border-white rounded-full "
                                     src={profile2} alt=""/>
                                <img className="w-10 h-10 border-2 border-white rounded-full "
                                     src={profile3} alt=""/>
                                <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                                   href="#">+99</a>
                            </div>

                            <div className="text-sm text-qusecondary leading-5">
                                أكثر من +500 طالب اشترك معنا من جميع أنحاء العالم
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;