
import { useEffect, useRef } from "react";
import { RideCardProps } from "@/types";

const RideCard: React.FC<RideCardProps> = ({ slide, index, isActive }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        console.log(`RideCard ${index}: isActive=${isActive}, videoUrl=${slide.videoUrl}, title=${slide.title}`);
        
        if (videoRef.current) {
            if (isActive) {
                videoRef.current.load();
                videoRef.current.play().catch(error => {
                    console.log("Video play failed:", error);
                });
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [isActive, slide.videoUrl, index, slide.title]);

    return (
        <div key={index} className="rounded-4xl m-4 max-w-[250px] flex-none transform-gpu relative">
            <div
                className="absolute z-10 h-full w-full flex flex-col rounded-2xl pb-10 justify-end"
                style={{
                    background: "linear-gradient(180deg, rgba(245,245,245,0) 34.08%, rgba(34, 48, 74,1) 100%)"
                }}
            />

            <div className="absolute z-10 p-3 h-[105%] flex justify-end flex-col">
                <div className="text-white">
                    <div className="font-bold text-lg">{slide.title}</div>
                    <div className="text-xs text-gray-300">{slide.location}</div>
                    <div className="text-xs">{slide.description}</div>

                    <div className="hover:scale-105 transition-all" style={{ transition: "all 200ms" }}>
                        <a href={slide.link}>
                            <button className="py-3 px-8 mt-3 uppercase font-extrabold bg-[#FAD504] rounded-lg text-[#334dcf] hover:cursor-pointer">
                                <div className="flex justify-center items-center gap-1">
                                    <div className="text-xs">Ride Details</div>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <video
                key={`${slide.videoUrl}-${index}`}
                ref={videoRef}
                loop
                muted
                playsInline
                preload="metadata"
                className="aspect-[229/394] rounded-3xl w-full object-cover lg:aspect-[246/346]"
            >
                <source src={slide.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default RideCard;