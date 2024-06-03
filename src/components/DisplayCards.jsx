/* eslint-disable react/prop-types */
import DisplayCard from "./DisplayCard";

const DisplayCards = ({ cards }) => {
  return cards ? (
    <div className="cards">
      {cards.map((card, idx) => (
        <DisplayCard key={idx} props={card} />
      ))}
    </div>
  ) : null;
};

export default DisplayCards;
