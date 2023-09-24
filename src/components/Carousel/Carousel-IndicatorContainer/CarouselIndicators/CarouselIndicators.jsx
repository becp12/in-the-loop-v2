export default function CarouselIndicators({ screenshot, index, name }) {
    return (
        <>
            <button type="button" data-bs-target={`#${name}`} data-bs-slide-to={index} className={`${screenshot.isActive ? "active" : ""}`} aria-current={screenshot.isActive ? "true" : "false"} aria-label={`Slide ${index}`} ></button>
        </>
    )
}