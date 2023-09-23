export default function CarouselItem({ screenshot }) {
    

    return (
        <>
            <div className={`carousel-item ${screenshot.isActive ? "active" : ""}`}>
                <img src={screenshot.placeholderImage} className="d-block w-100" alt="Screenshot #1 of Project Tracking Feature" />
            </div>
        </>
    )
}

