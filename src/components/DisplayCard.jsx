/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const DisplayCard = ({ props }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/details/${props?.imdbID}`)}>
      <img className="card-sc1" src={props?.Poster} />
      <div className="card-sc2">
        <span>
          <span className="subtitle">Title:</span> {props?.Title}
        </span>
        <span>
          <span className="subtitle">Year:</span> {props?.Year}
        </span>
        <span>
          <span className="subtitle">Type:</span> {props?.Type}
        </span>
      </div>
    </div>
  );
};

export default DisplayCard;
