"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { ExpandedSections } from "../types";

interface Location {
    name: string;
    image: string;
    hasSubOptions?: boolean;
    subOptions?: SubOption[];
}

interface SubOption {
    name: string;
    image: string;
}

const Navbar: React.FC = () => {
    const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);
    const [selectedSubLocation, setSelectedSubLocation] = useState<any>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
        parks: false,
        quickLinks: false
    });

    const toggleSection = (section: keyof ExpandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const locations: Location[] = [
        {
            name: "kochi",
            image: "https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=96&q=75"
        },
        {
            name: "bengaluru",
            image: "https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=96&q=75",
            hasSubOptions: true,
            subOptions: [
                {
                    name: "park",
                    image: "https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-park.png&w=96&q=75"
                },
                {
                    name: "resort",
                    image: "https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-resort.png&w=96&q=75"
                }
            ]
        },
        {
            name: "hyderabad",
            image: "https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=96&q=75"
        },
        {
            name: "bhubaneshwar",
            image: "https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=96&q=75"
        }
    ];

    return (
        <nav className="z-15 fixed top-10 left-15 right-15 bg-white rounded-xl py-3 px-12 font-mulish shadow-lg">
            <div className="flex justify-between items-center gap-x-7">
                {/* Logo */}
                <div>
                    <img
                        className="transition-transform duration-300 hover:scale-108 h-12 hover:cursor-pointer"
                        alt="wonderla"
                        src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75"
                    />
                </div>

                {/* Navigation Menu */}
                <div className="flex gap-5">
                    {/* Locations Dropdown */}
                    <div
                        className="flex items-center space-x-2 cursor-pointer gap-2 text-sm group relative"
                        onMouseEnter={() => setIsLocationOpen(true)}
                        onMouseLeave={() => setIsLocationOpen(false)}
                    >
                        <img
                            alt="icon"
                            className="h-4.5 m-0"
                            src="/icons/location.svg"
                        />
                        <div className="text-[#717D92] m-0 font-bold">LOCATIONS</div>
                        <img
                            alt="downArrow"
                            className="m-0 transition-transform duration-200 group-hover:rotate-180"
                            src="/icons/downarrow.svg"
                        />

                        {/* Hover area */}
                        <div className="h-10 absolute top-4 w-full"></div>

                        {/* Dropdown Menu */}
                        <div className={`w-72 ${isLocationOpen ? 'block' : 'hidden'} transform -translate-x-1/4 absolute top-12 z-10 bg-white rounded-3xl p-4 shadow-lg`}>
                            <div className="flex flex-col">
                                {locations.map((location, index) => (
                                    <div key={location.name}>
                                        <div className="flex justify-between items-center group/subSection relative">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <img
                                                        className="h-12 w-12 rounded-xl object-cover"
                                                        alt={location.name}
                                                        src={location.image}
                                                    />
                                                </div>
                                                <div className="uppercase">{location.name}</div>
                                            </div>

                                            {location.hasSubOptions && (
                                                <div>
                                                    <div className="h-16 -top-3 w-12 absolute"></div>
                                                    <div>
                                                        <svg
                                                            height="24"
                                                            width="24"
                                                            className="ml-auto size-5"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="#717D92"
                                                            strokeWidth="2.3"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M9 6L15 12L9 18"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Sub-dropdown for Bengaluru */}
                                            {location.hasSubOptions && (
                                                <div className="absolute left-70 group-hover/subSection:visible invisible flex flex-col bg-white rounded-xl p-4 w-40 transform translate-y-1/4 shadow-lg">
                                                    {location.subOptions?.map((subOption, subIndex) => (
                                                        <div key={subOption.name}>
                                                            <div className="flex items-center gap-4">
                                                                <div>
                                                                    <img
                                                                        className="h-12 w-12 rounded-xl object-cover"
                                                                        alt={subOption.name}
                                                                        src={subOption.image}
                                                                    />
                                                                </div>
                                                                <div className="uppercase">{subOption.name}</div>
                                                            </div>
                                                            {subIndex < (location.subOptions?.length || 0) - 1 && (
                                                                <div>
                                                                    <div className="h-2"></div>
                                                                    <hr className="border-t-1 border-gray-200" />
                                                                    <div className="h-2"></div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {index < locations.length - 1 && (
                                            <div>
                                                <div className="pt-3"></div>
                                                <hr className="border-t-1 border-gray-200" />
                                                <div className="pt-3"></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Other Navigation Items */}
                    <a href="">
                        <div className="flex items-center space-x-2 hover:cursor-pointer gap-2 text-sm">
                            <img
                                alt="icon"
                                className="h-4.5 m-0"
                                src="https://d22pimhl2qmbj7.cloudfront.net/public/discount_star_01_fdc6bc5632.svg?w=48&q=75"
                                style={{
                                    filter: "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)"
                                }}
                            />
                            <div className="text-[#717D92] font-bold">OFFERS</div>
                        </div>
                    </a>

                    <a href="">
                        <div className="flex items-center space-x-2 hover:cursor-pointer gap-2 text-sm">
                            <img
                                alt="icon"
                                className="h-4.5 m-0"
                                src="https://d22pimhl2qmbj7.cloudfront.net/public/marker_02_e495ae7481.svg?w=48&q=75"
                                style={{
                                    filter: "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)"
                                }}
                            />
                            <div className="text-[#717D92] font-bold">RIDES</div>
                        </div>
                    </a>

                    <a href="">
                        <div className="flex items-center space-x-2 hover:cursor-pointer gap-2 text-sm">
                            <img
                                alt="icon"
                                className="h-4.5 m-0"
                                src="https://d22pimhl2qmbj7.cloudfront.net/public/Frame_12_ebee895750.svg?w=48&q=75"
                                style={{
                                    filter: "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)"
                                }}
                            />
                            <div className="text-[#717D92] font-bold">RESTAURANTS</div>
                        </div>
                    </a>

                    <a href="">
                        <div className="flex items-center space-x-2 hover:cursor-pointer gap-2 text-sm">
                            <img
                                alt="icon"
                                className="h-4.5 m-0"
                                src="https://d22pimhl2qmbj7.cloudfront.net/public/Frame_13_c4d6212160.svg?w=48&q=75"
                                style={{
                                    filter: "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)"
                                }}
                            />
                            <div className="text-[#717D92] font-bold">EVENTS</div>
                        </div>
                    </a>
                </div>

                {/* Right Side - Book Tickets & Menu */}
                <div className="flex justify-center items-center gap-8">
                    <button className="px-2.5 py-2.5 rounded-lg text-black bg-[#fad600] hover:cursor-pointer">
                        <div className="flex justify-center items-center gap-1">
                            <div className="text-xs font-extrabold text-[#334dcf]">BOOK TICKETS</div>
                            <img className="h-[12px]" alt="icon" src="/icons/tickets.svg" />
                        </div>
                    </button>

                    <div className="cursor-pointer" onClick={() => setIsMobileMenuOpen(true)}>
                        <div>
                            <svg
                                width="27"
                                height="17"
                                viewBox="0 0 27 17"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-2.5 w-4 fill-yellow-400 lg:h-[17px] lg:w-[26px] lg:fill-[#334dcf]"
                            >
                                <rect x="0.322266" y="0.0905762" width="26.334" height="3.15699" rx="1.5785" className="origin-center transform transition-transform duration-300"></rect>
                                <rect x="0.322266" y="6.96667" width="26.334" height="3.15699" rx="1.5785" className="transform transition-opacity duration-300"></rect>
                                <rect x="0.322266" y="13.8429" width="26.334" height="3.15699" rx="1.5785" className="origin-center transform transition-transform duration-300"></rect>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar with smooth animations */}
            <Sidebar
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                locations={locations}
            />
        </nav>
    );
};

export default Navbar;
