import React, { useState } from "react";
import ContentWrapper from "../../../Component/ContentWrapper/ContentWrapper";
import SwitchTabs from "../../../Component/SwitchTabs/SwitchTabs";
import useFetch from "../../../hooks/UseFatch"
import Carousel from "../../../Component/Carousel/Carousel";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading, error } = useFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      {error ? (
        <div className="error">Failed to fetch data. Please try again later.</div>
      ) : (
        <Carousel data={data?.results || []} loading={loading} />
      )}
    </div>
  );
};

export default Trending;
