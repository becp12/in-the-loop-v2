export default function CarouselIndicators({ screenshot, index, name }) {
    return (
        <>
            <button type="button" data-bs-target={`#${name}`} data-bs-slide-to={index} className={`${screenshot.isActive ? "active" : ""}`} aria-current={`${screenshot.isActive ? "true" : "false"}`} aria-label={`Slide ${index}`} ></button>
            {/* <button type="button" data-bs-target="#Carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#Carousel" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
        </>
    )
}