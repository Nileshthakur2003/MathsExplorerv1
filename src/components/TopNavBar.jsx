import React from 'react';
import { Menu, Bell } from 'lucide-react';

const TopNav = () => {
    return (
        <nav className="w-full bg-indigo-600 text-white p-4 flex items-center justify-between">
            {/* Left: Hamburger Menu */}
            <button className="p-2">
                <Menu size={24} />
            </button>

            {/* Middle: Title */}
            <h1 className="text-lg font-semibold">MathsExplorer</h1>

            {/* Right: Notification Icon */}
            <button className="p-2">
                <Bell size={24} />
            </button>
        </nav>
    );
};

export default TopNav;
