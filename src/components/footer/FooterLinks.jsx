import React from 'react';

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.id}>
            <a 
              href={link.href} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
