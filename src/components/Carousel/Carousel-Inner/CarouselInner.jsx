import CarouselItem from "./Carousel-Item/CarouselItem";

export default function CarouselInner({ screenshots }) {


    return (
        <>
            <div className="carousel-inner">
                {screenshots?.map(screenshot =>
                    <CarouselItem screenshot={screenshot} />
                )}
            </div>
        </>
    )
}
