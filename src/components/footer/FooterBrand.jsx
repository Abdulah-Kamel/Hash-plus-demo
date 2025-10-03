import React from 'react';
import logo from "../../assets/logo.svg";
import googlePlay from "../../assets/google-play.png";
import appStore from "../../assets/app-store.png";

const FooterBrand = ({ brand, appDownload }) => {
  return (
    <div className="space-y-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Hash Plus Logo" className="h-12" />
      </div>
      
      {/* Tagline */}
      <p className="text-gray-600 leading-relaxed max-w-xs">
        {brand.tagline}
      </p>
      
      {/* App Download Buttons */}
      <div className="flex gap-3">
        <a href={appDownload.googlePlay} className="block">
          <img src={googlePlay} alt="Get it on Google Play" className="h-12" />
        </a>
        <a href={appDownload.appStore} className="block">
          <img src={appStore} alt="Download on App Store" className="h-12" />
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;
