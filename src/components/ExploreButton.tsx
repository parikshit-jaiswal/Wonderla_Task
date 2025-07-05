const ExploreButton = () => {
    return (
        <button
            className="py-4 px-24 mt-10 mb-10 hover:scale-110 transition-all font-extrabold bg-[#FAD504] rounded-full text-text hover:cursor-pointer"
            style={{ transition: "200ms" }}
        >
            <div className="flex justify-center items-center gap-1">
                <div className="text-sm text-[#334dcf]">Explore All Rides!</div>
            </div>
        </button>
    );
};

export default ExploreButton;
