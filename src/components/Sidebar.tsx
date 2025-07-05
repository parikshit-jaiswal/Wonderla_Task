import React from 'react';
import Image from 'next/image';
import { SidebarProps } from '../types';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, expandedSections, toggleSection, locations }) => {
    return (
        <>
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ease-out ${isOpen ? 'opacity-60' : 'opacity-0 pointer-events-none'
                    }`}
                style={{ zIndex: 49 }}
                onClick={onClose}
            />

            <div
                className={`fixed top-0 right-0 h-full w-[470px] bg-white transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } overflow-hidden`}
                style={{ zIndex: 50 }}
            >
                <div className="flex justify-between items-center bg-white w-full p-8 pb-3">
                    <Image 
                        className="h-15" 
                        alt="Wonderla Logo" 
                        src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75"
                        width={256}
                        height={60}
                    />
                    <button
                        className="mr-4 p-1.5 rounded-full cursor-pointer border-gray-200 border hover:bg-gray-50 transition-colors"
                        onClick={onClose}
                        aria-label="Close sidebar"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[18px] text-gray-600">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="h-full min-h-0 overflow-y-auto p-7" style={{ maxHeight: 'calc(100vh - 100px)' }}>
                    <div className="h-fit flex flex-col overflow-y-visible flex-1 pb-24">
                        {/* Parks Section */}
                        <div className="flex-1 cursor-pointer">
                            <div
                                className="flex items-center gap-3 justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors"
                                onClick={() => toggleSection('parks')}
                            >
                                <div className="flex items-center gap-3">
                                    <div>
                                        <Image 
                                            className="h-7" 
                                            alt="Parks icon" 
                                            src="https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=48&q=75"
                                            width={48}
                                            height={28}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-xl  mb-1 text-gray-900">Parks</div>
                                        <div className="text-xs text-gray-600 font-medium">Explore Your favourite Wonderla Park</div>
                                    </div>
                                </div>
                                <svg
                                    height="24"
                                    width="24"
                                    className={`transform transition-transform duration-200 ${expandedSections.parks ? 'rotate-180' : ''}`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#334DCF"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M6 9L12 15L18 9"></path>
                                </svg>
                            </div>

                            <div className={`overflow-hidden transform transition-all ease-out duration-300 ${expandedSections.parks ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="grid grid-cols-2 grid-rows-2 gap-3 p-3 pb-1">
                                    {locations.map((location) => (
                                        <div key={location.name}>
                                            <div className="flex cursor-pointer items-center flex-col border border-gray-200 shadow-md rounded-2xl p-3 hover:shadow-lg transition-shadow bg-white">
                                                <div>
                                                    <Image 
                                                        className="rounded-full h-10 w-10 mb-2 object-cover" 
                                                        alt={location.name} 
                                                        src={location.image}
                                                        width={40}
                                                        height={40}
                                                    />
                                                </div>
                                                <div className="capitalize text-gray-900 font-medium text-sm">{location.name}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="h-4"></div>
                                <hr className="border-t-1 border-gray-200" />
                                <div className="h-4"></div>
                            </div>
                        </div>

                        {/* Resorts Section */}
                        <div>
                            <div className="flex-1 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <Image 
                                            className="h-7" 
                                            alt="Resorts icon" 
                                            src="https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=48&q=75"
                                            width={48}
                                            height={28}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-xl  mb-1 text-gray-900">Resorts</div>
                                        <div className="text-xs text-gray-600 font-medium">Get a rejuvenating experience at Wonderla Resort</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="h-4"></div>
                                    <hr className="border-t-1 border-gray-200" />
                                    <div className="h-4"></div>
                                </div>
                            </div>
                        </div>

                        {/* Offers & Combos Section */}
                        <div>
                            <div className="flex-1 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <Image 
                                            className="h-7" 
                                            alt="Offers icon" 
                                            src="https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=48&q=75"
                                            width={48}
                                            height={28}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-xl  mb-1 text-gray-900">Offers & Combos</div>
                                        <div className="text-xs text-gray-600 font-medium">Plan the perfect day with exciting offers</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="h-4"></div>
                                    <hr className="border-t-1 border-gray-200" />
                                    <div className="h-4"></div>
                                </div>
                            </div>
                        </div>

                        {/* Timings And Guidelines Section */}
                        <div>
                            <div className="flex-1 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <Image 
                                            className="h-7" 
                                            alt="Timings icon" 
                                            src="https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg?w=48&q=75"
                                            width={48}
                                            height={28}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-xl  mb-1 text-gray-900">Timings And Guidelines</div>
                                        <div className="text-xs text-gray-600 font-medium">Know the timings and other guidelines</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="h-4"></div>
                                    <hr className="border-t-1 border-gray-200" />
                                    <div className="h-4"></div>
                                </div>
                            </div>
                        </div>

                        {/* Special Cards Section */}
                        <div className="flex flex-col gap-2">
                            <div className="flex-1 p-4 rounded-2xl shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" style={{ backgroundColor: 'rgb(250, 214, 0)' }}>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <Image 
                                            className="h-10" 
                                            alt="Group booking icon" 
                                            src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75"
                                            width={96}
                                            height={40}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-xl  mb-1 text-black">Group Booking</div>
                                        <div className="text-xs font-medium text-gray-800">Reach Out To Wonderla Team</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 p-4 rounded-2xl shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" style={{ backgroundColor: 'rgb(51, 77, 207)' }}>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <Image 
                                            className="h-10" 
                                            alt="Tour portal icon" 
                                            src="https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=96&q=75"
                                            width={96}
                                            height={40}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-xl  mb-1 text-white">Tour Operator Portal</div>
                                        <div className="text-xs font-medium text-blue-100">Reach Out To Wonderla Team</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 p-4 rounded-2xl shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" style={{ backgroundColor: 'rgb(250, 214, 0)' }}>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <Image 
                                            className="h-10" 
                                            alt="Partner icon" 
                                            src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75"
                                            width={96}
                                            height={40}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-xl  mb-1 text-black">Partner With Us</div>
                                        <div className="text-xs font-medium text-gray-800">Reach Out To Wonderla Team</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Us Section */}
                        <div className="pt-3">
                            <div className="flex-1 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <Image 
                                            className="h-7" 
                                            alt="About us icon" 
                                            src="https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=48&q=75"
                                            width={48}
                                            height={28}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-xl  mb-1 text-gray-900">About Us</div>
                                        <div className="text-xs text-gray-600 font-medium">Know all about Wonderla</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="h-4"></div>
                                    <hr className="border-t-1 border-gray-200" />
                                    <div className="h-4"></div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links Section */}
                        <div className="mb-8">
                            <div className="flex-1 cursor-pointer">
                                <div
                                    className="flex items-center gap-3 justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors"
                                    onClick={() => toggleSection('quickLinks')}
                                >
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <Image 
                                                className="h-7" 
                                                alt="Quick links icon" 
                                                src="https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=48&q=75"
                                                width={48}
                                                height={28}
                                            />
                                        </div>
                                        <div>
                                            <div className="text-xl  mb-1 text-gray-900">Quick Links</div>
                                            <div className="text-xs text-gray-600 font-medium">Explore all other relevant information here</div>
                                        </div>
                                    </div>
                                    <svg
                                        height="24"
                                        width="24"
                                        className={`transform transition-transform duration-200 ${expandedSections.quickLinks ? 'rotate-180' : ''}`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#334DCF"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M6 9L12 15L18 9"></path>
                                    </svg>
                                </div>

                                <div className={`overflow-hidden transform transition-all ease-out duration-300 ${expandedSections.quickLinks ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex pt-3">
                                        <div className="w-10"></div>
                                        <div className="flex gap-2 text-sm flex-col">
                                            <div className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">Restaurants</div>
                                            <div className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">Merchandise</div>
                                            <div className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">Events</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="h-4"></div>
                                    <hr className="border-t-1 border-gray-200" />
                                    <div className="h-4"></div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Us Section */}
                        <div className="flex-1 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <div className="flex items-center gap-3">
                                <div>
                                    <Image 
                                        className="h-7" 
                                        alt="Contact us icon" 
                                        src="https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=48&q=75"
                                        width={48}
                                        height={28}
                                    />
                                </div>
                                <div>
                                    <div className="text-xl  mb-1 text-gray-900">Contact Us</div>
                                    <div className="text-xs text-gray-600 font-medium">Get In Touch With Wonderla Team</div>
                                </div>
                            </div>
                            <div>
                                <div className="h-4"></div>
                                <hr className="border-t-1 border-gray-200" />
                                <div className="h-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;