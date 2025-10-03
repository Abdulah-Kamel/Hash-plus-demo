export const navLinks = [
  {
    id: 1,
    label: 'الرئيسية',
    href: '#',
    isActive: true,
  },
  {
    id: 2,
    label: 'التعليم',
    href: '#',
    hasDropdown: true,
    dropdownItems: [
      { id: 'edu-1', label: 'البرامج الدراسيهية', href: '#' },
      { id: 'edu-2', label: 'مذكرات', href: '#' },
      { id: 'edu-3', label: 'معسكرات', href: '#' },
    ],
  },
  {
    id: 3,
    label: 'المجتمع',
    href: '#',
    hasDropdown: true,
    dropdownItems: [
      { id: 'comm-1', label: 'مقالات', href: '#' },
      { id: 'comm-2', label: 'مذكرات', href: '#' },
      { id: 'comm-3', label: 'معسكرات', href: '#' },
    ],
  },
  {
    id: 4,
    label: 'المركز الاعلامى',
    href: '#',
  },
  {
    id: 5,
    label: 'المقالات',
    href: '#',
  },
];
