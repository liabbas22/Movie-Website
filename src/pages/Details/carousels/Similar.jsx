import React from "react";
import Carousel from "../../../Component/Carousel/Carousel";
import useFetch from "../../../hooks/UseFatch";

const Similar = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "movie" ? "Similar Movies" : "Similar TV Shows";

  return (
    <Carousel
      title={title}
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};
// Similar Type Not Working on Click Because it don't have media type
export default Similar;
