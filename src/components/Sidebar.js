import React, { useState } from 'react';
import { LayoutDashboard, Users, Calendar, UserCircle, Building2, HeadphonesIcon, Settings } from 'lucide-react';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Users, label: 'Recruitment' },
    { icon: Calendar, label: 'Schedule' },
    { icon: UserCircle, label: 'Employee' },
    { icon: Building2, label: 'Department' },
    { icon: HeadphonesIcon, label: 'Support' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="h-screen bg-white border-r border-gray-200 p-4 hidden md:block w-64">
      {/* Branding Section */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">V</span>
        </div>
        <span className="text-xl font-semibold">Vasilum</span>
      </div>

      {/* Menu Section */}
      <div className="space-y-2">
        <p className="text-gray-400 text-sm mb-4">MAIN MENU</p>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
              activeIndex === index ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
