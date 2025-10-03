import logo from "../../src/assets/logo.svg";
import {Link} from "react-router";
import { Search, ChevronDown, Menu, X } from 'lucide-react';

export function NavBar() {
  return (
    <>
      <nav className="sticky w-full z-20 top-0 start-0 bg-white/80 backdrop-blur ">
        <div className="flex flex-wrap w-full items-center justify-between p-4 lg:px-12">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Hash Plus Logo" className="h-12" />
          </Link>

          {/* Right actions (hidden on < lg) */}
          <div className="hidden lg:flex items-center gap-2 lg:order-2">
            <form className="max-w-md">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <Search className="w-6 h-6 text-gray-500" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="p-3 ps-10 w-56 text-sm rounded-full border-none bg-gray-100 focus:ring-0"
                  placeholder="ابحث هنا"
                  required
                />
              </div>
            </form>

            <button
              type="button"
              className="text-white bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-full text-sm px-5 py-2 text-center"
            >
              تسجيل الدخول
            </button>
          </div>

          {/* Desktop horizontal menu */}
          <div className="hidden lg:flex lg:w-auto lg:order-1">
            <ul className="flex items-center gap-6 font-medium">
              <li>
                <Link to="#" className="py-2 text-primary bg-gray-100  px-5 rounded-full" aria-current="page">الرئيسية</Link>
              </li>
              <li>
                <button
                  id="dropdownEduButton"
                  data-dropdown-toggle="dropdownEduMenu"
                  className="flex items-center gap-2 py-2 text-gray-900 hover:text-primary px-5"
                >
                  التعليم
                  <ChevronDown className="w-6 h-6" />
                </button>
                <div id="dropdownEduMenu" className="z-20 hidden font-normal divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-white">
                  <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownEduButton">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50">البرامج الدراسيهية</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50">مذكرات</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50">معسكرات</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="dropdownCommunityButton"
                  data-dropdown-toggle="dropdownCommunityMenu"
                  className="flex items-center gap-2 py-2 text-gray-900 hover:text-primary"
                >
                  المجتمع
                  <ChevronDown className="w-6 h-6" />
                </button>
                <div id="dropdownCommunityMenu" className="z-20 hidden font-normal divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-white">
                  <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownCommunityButton">
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-50">مقالات</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-50">مذكرات</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-50">معسكرات</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="#" className="py-2 text-gray hover:text-primary px-5">المركز الاعلامى</Link>
              </li>
              <li>
                <Link to="#" className="py-2 text-gray hover:text-primary px-5">المقالات</Link>
              </li>
            </ul>
          </div>

          {/* Mobile: drawer trigger (shown on < lg) */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            type="button"
            data-drawer-target="mobile-nav"
            data-drawer-show="mobile-nav"
            data-drawer-placement="right"
            aria-controls="mobile-nav"
            aria-expanded="false"
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Drawer (mobile sidebar) */}
      <div
        id="mobile-nav"
        className="fixed top-0 right-0 z-40 h-screen w-72 translate-x-full bg-white p-4 shadow-lg transition-transform lg:hidden"
        tabIndex="-1"
        aria-labelledby="mobile-nav-label"
      >
        <div className="flex items-center justify-between mb-6">
          <h5 id="mobile-nav-label" className="text-base font-semibold text-gray-900">القائمة</h5>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm p-2 inline-flex items-center"
            data-drawer-hide="mobile-nav"
            aria-controls="mobile-nav"
          >
            <span className="sr-only">Close sidebar</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu content */}
        <ul className="space-y-2 font-medium">
          <li>
            <Link to="#" className="block py-2 px-3 rounded hover:bg-gray-100">الرئيسية</Link>
          </li>
          <li>
            <button
              id="mDropdownEduButton"
              data-dropdown-toggle="mDropdownEduMenu"
              className="flex w-full items-center justify-between py-2 px-3 rounded hover:bg-gray-100"
            >
              التعليم
              <ChevronDown className="w-6 h-6" />
            </button>
            <div id="mDropdownEduMenu" className="z-30 hidden font-normal divide-y divide-gray-100 rounded-lg shadow-sm w-full bg-white">
              <ul className="py-2 text-sm text-gray-700" aria-labelledby="mDropdownEduButton">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-50">البرامج الدراسيهية</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-50">مذكرات</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-50">معسكرات</a></li>
              </ul>
            </div>
          </li>
          <li>
            <button
              id="mDropdownCommunityButton"
              data-dropdown-toggle="mDropdownCommunityMenu"
              className="flex w-full items-center justify-between py-2 px-3 rounded hover:bg-gray-100"
            >
              المجتمع
              <ChevronDown className="w-6 h-6" />
            </button>
            <div id="mDropdownCommunityMenu" className="z-30 hidden font-normal divide-y divide-gray-100 rounded-lg shadow-sm w-full bg-white">
              <ul className="py-2 text-sm text-gray-700" aria-labelledby="mDropdownCommunityButton">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-50">Dashboard</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-50">Settings</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-50">Earnings</a></li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="#" className="block py-2 px-3 rounded hover:bg-gray-100">المركز الاعلامى</Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-3 rounded hover:bg-gray-100">المقالات</Link>
          </li>

          {/* Optional: login and search in drawer */}
          <li className="pt-2 border-t">
            <form className="py-2">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <Search className="w-4 h-4 text-gray-500" />
                </div>
                <input type="search" className="p-3 ps-10 w-full text-sm rounded-full border-none bg-gray-100 focus:ring-0" placeholder="ابحث هنا" />
              </div>
            </form>
            <button className="w-full text-white bg-primary rounded-full py-2">تسجيل الدخول</button>
          </li>
        </ul>
      </div>
    </>
  );
}
