import CarouselInner from "./Carousel-Inner/CarouselInner";
import CarouselIndicatorContainer from "./Carousel-IndicatorContainer/CarouselIndicatorContainer";

export default function Carousel({ screenshots, name }) {
    return (
        <>
            <div id={name} className="carousel slide carousel-dark container-sm">
                <CarouselIndicatorContainer screenshots={screenshots} name={name} />
                <CarouselInner screenshots={screenshots} name={name} />
                <button className="carousel-control-prev" type="button" data-bs-target={`#${name}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${name}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )}