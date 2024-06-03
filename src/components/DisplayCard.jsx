/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const DisplayCard = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props;

  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/details/${imdbID}`)}>
      <img className="card-sc1" src={Poster} />
      <div className="card-sc2">
        <span>
          <span className="subtitle">Title:</span> {Title}
        </span>
        <span>
          <span className="subtitle">Year:</span> {Year}
        </span>
        <span>
          <span className="subtitle">Type:</span> {Type}
        </span>
      </div>
    </div>
  );
};

export default DisplayCard;
