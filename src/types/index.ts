export interface Slide {
    title: string;
    location: string;
    description: string;
    link: string;
    videoUrl: string;
}

export interface CarouselProps {
    slides: Slide[];
}

export interface RideCardProps {
    slide: Slide;
    index: number;
    isActive: boolean;
}

export interface CarouselControlsProps {
    onPrevSlide: () => void;
    onNextSlide: () => void;
}

export interface Location {
    name: string;
    image: string;
}

export interface ExpandedSections {
    parks: boolean;
    quickLinks: boolean;
}

export interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    expandedSections: ExpandedSections;
    toggleSection: (section: keyof ExpandedSections) => void;
    locations: Location[];
}
