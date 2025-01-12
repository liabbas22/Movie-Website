import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import UseFatch from "../../../hooks/UseFatch";
import { useSelector } from "react-redux";
import ImageComponent from "../../../Component/lazyLoad/ImageComponent";
import ContentWrapper from "../../../Component/ContentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [Query, setQuery] = useState("");
  const navigate = useNavigate();
  const SearchQueryHandle = (event) => {
    if (event.key === "Enter" && Query.length > 0) {
      navigate(`/search/${Query}`);
      setQuery("");
    }
  };

  const SearchButtonHandle = () => {
    if (Query.trim() !== "") {
      navigate(`/search/${Query}`);
      setQuery("");
    }
  };

  const { url } = useSelector((state) => state.home);
  const { data, loading } = UseFatch("/movie/upcoming");
  useEffect(() => {
    if (data && url?.backdrop) {
      const bg =
        data.results?.[Math.floor(Math.random() * data.results.length)]
          ?.backdrop_path;
      setBackground(bg ? `${url.backdrop}${bg}` : "");
    }
  }, [data, url]);
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <ImageComponent src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">WellCome</span>
          <span className="subTitle">
            Million of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="serachInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={SearchQueryHandle}
            />
            <button onClick={SearchButtonHandle}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
