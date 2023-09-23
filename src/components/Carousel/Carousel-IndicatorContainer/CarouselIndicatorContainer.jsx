import CarouselIndicators from "./CarouselIndicators/CarouselIndicators"
export default function CarouselIndicatorContainer({ screenshots, name }) {
    return (
        <>
            <div className="carousel-indicators">
                {screenshots?.map((screenshot, index) =>
                    <CarouselIndicators screenshot={screenshot} index={index} name={name} />
                )}
                {/* <button type="button" data-bs-target="#ProjectTrackingCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#ProjectTrackingCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#ProjectTrackingCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
        </>
    )
}