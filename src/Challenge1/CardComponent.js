import Challenge from "./Challenge";
import cardData from "./card-data";

export default function CardComponent() {
    const card = cardData.map(function(cardElement) {
        return <Challenge
            img={cardElement.img}
            rating={cardElement.rating}
            reviewCount={cardElement.reviewCount}
            country={cardElement.country}
            title={cardElement.title}
            price={cardElement.price}
            openSpots={cardElement.openSpots}
        />
    });

    return (
        <div>
            {card}
        </div>
    );
}