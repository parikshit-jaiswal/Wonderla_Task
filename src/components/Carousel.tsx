"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import CarouselControls from "./CarouselControls";
import RideCard from "./RideCard";
import ExploreButton from "@/components/ExploreButton";
import { CarouselProps } from "@/types";

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        skipSnaps: false,
        dragFree: false
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentSlide(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.scrollTo(0, true);
            setCurrentSlide(0);
        }
    }, [slides, emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const interval = setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [emblaApi, currentSlide]);

    return (
        <section className=" relative">
            <div className="text-white text-6xl font-extrabold ">OUR ICONIC RIDES</div>
            <CarouselControls
                onPrevSlide={scrollPrev}
                onNextSlide={scrollNext}
            />
            <div className="embla overflow-hidden mt-8" ref={emblaRef}>
                <div className="embla__container flex">
                    {slides.map((slide, index) => (
                        <div className="embla__slide flex-none" key={index}>
                            <RideCard
                                slide={slide}
                                index={index}
                                isActive={index === currentSlide}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8 ml-4">
                <ExploreButton />
            </div>

        </section>
    );
};

export default Carousel;
