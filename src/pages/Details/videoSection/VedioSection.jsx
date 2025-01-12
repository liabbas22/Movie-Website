import React, { useState } from "react";
import "./style.scss";
import Img from "../../../Component/lazyLoad/ImageComponent";
import ContentWrapper from "../../../Component/ContentWrapper/ContentWrapper";
import { PlayIcon } from "../detailsBanner/PlayButton/PlayIcon";
import VedioPop from "../vedioPop/VedioPop";

const VedioSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => (
    <div className="skItem">
      <div className="thumb skeleton"></div>
      <div className="row skeleton"></div>
      <div className="row2 skeleton"></div>
    </div>
  );

  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results.map((video) => {
              return (
                <div
                  key={video.id}
                  className="videoItem"
                  onClick={() => {
                    {
                      video?.key &&
                      setShow(true);
                      setVideoId(video?.key);
                    }
                  }}
                >
                  <div className="videoThumbnail">
                    <Img
                      src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    />
                    <PlayIcon />
                  </div>
                  <div className="videoTitle">{video.name}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VedioPop
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VedioSection;
