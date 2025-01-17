import React from "react";
import Carousel from "../../../Component/Carousel/Carousel";
import useFetch from "../../../hooks/UseFatch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  if (error) {
    return <div>Error loading recommendations.</div>;
  }

  return (
    <div>
      {
        data?.results &&
      <Carousel
        title="Recommendations"
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
}
    </div>
  );
};

export default Recommendation;
