import CarouselIndicators from "./CarouselIndicators/CarouselIndicators"
export default function CarouselIndicatorContainer({ screenshots, name }) {
    return (
        <>
            <div className="carousel-indicators">
                {screenshots?.map((screenshot, index) =>
                    <CarouselIndicators screenshot={screenshot} index={index} name={name} />
                )}
            </div>
        </>
    )
}