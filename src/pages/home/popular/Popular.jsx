import React, { useState } from "react";
import ContentWrapper from "../../../Component/ContentWrapper/ContentWrapper";
import SwitchTabs from "../../../Component/SwitchTabs/SwitchTabs";
import UseFatch from "../../../hooks/UseFatch";
import Carousel from "../../../Component/Carousel/Carousel";

const Popular = () => { 
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = UseFatch(`/${endPoint}/popular`);
  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
    </div>
  );
};

export default Popular;
