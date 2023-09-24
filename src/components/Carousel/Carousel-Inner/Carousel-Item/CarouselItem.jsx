export default function CarouselItem({ screenshot, index, name }) {
    

    return (
        <>
            <div className={`carousel-item ${screenshot.isActive ? "active" : ""}`}>
                <img src={screenshot.placeholderImage} className="d-block w-100" alt={`Screenshot #${index + 1} of ${name} Feature`} />
            </div>
        </>
    )
}

