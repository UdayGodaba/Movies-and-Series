/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/constants";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(API_URL + `&i=${id}`);
        setData(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className="details">
      <div className="details-sc1">
        <img className="details-banner" src={data?.Poster} />
        <div className="details-content">
          <span>
            <span className="details-subtitle">Title: </span>
            {data?.Title ? data?.Title : "N/A"}
          </span>
          <span>
            <span className="details-subtitle">Released: </span>
            {data?.Released ? data?.Released : "N/A"}
          </span>
          <span>
            <span className="details-subtitle">Country: </span>
            {data?.Country ? data?.Country : "N/A"}
          </span>
          <span>
            <span className="details-subtitle">Language: </span>
            {data?.Language ? data?.Language : "N/A"}
          </span>
          <span>
            <span className="details-subtitle">Plot: </span>
            {data?.Plot ? data?.Plot : "N/A"}
          </span>
          <span>
            <span className="details-subtitle">Type: </span>
            {data?.Type ? data?.Type : "N/A"}
          </span>
          <span>
            <span className="details-subtitle">Director: </span>
            {data?.Director ? data?.Director : "N/A"}
          </span>
          <span>
            <span className="details-subtitle">Genre: </span>
            {data?.Genre ? data?.Genre : "N/A"}
          </span>
          <span>
            <span className="details-subtitle">totalSeasons: </span>
            {data?.totalSeasons ? data?.totalSeasons : "N/A"}
          </span>
        </div>
      </div>
      <div className="details-sc2"></div>
    </div>
  );
};

export default Details;
