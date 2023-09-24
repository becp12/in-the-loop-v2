import CarouselItem from "./Carousel-Item/CarouselItem";

export default function CarouselInner({ screenshots, name }) {


    return (
        <>
            <div className="carousel-inner">
                {screenshots?.map((screenshot, index) =>
                    <CarouselItem name={name} index={index} screenshot={screenshot} />
                )}
            </div>
        </>
    )
}
