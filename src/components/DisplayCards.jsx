/* eslint-disable react/prop-types */
import DisplayCard from "./DisplayCard";

const DisplayCards = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map((card, idx) => (
        <DisplayCard key={idx} props={card} />
      ))}
    </div>
  );
};

export default DisplayCards;
