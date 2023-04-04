import React from "react";
import "../css/feed.css";
import UploadVideo from "./UploadVideo";

const VideoSection = () => {
  return (
    <div className="feed">
      <UploadVideo
        image="https://www.youtube.com/embed/WzlO79d3S8c"
        userName="Kamlesh Joshi"
        timeStamp="10:45 AM"
        Like={56}
        Comments={12}
      />
      <UploadVideo
        image="https://www.youtube.com/embed/xA-vp-KtFjU"
        userName="Deepanshu"
        timeStamp="01:25 PM"
        Like={36}
        Comments={6}
      />
      <UploadVideo
        image="https://www.youtube.com/embed/eKqY-oP1d_Y"
        userName="Saurabh Bhatt"
        timeStamp="01:25 AM"
        Like={74}
        Comments={21}
      />
      <UploadVideo
        image="https://www.youtube.com/embed/ArxRy5JNhlw"
        userName="Jalaj"
        timeStamp="01:25 AM"
        Like={89}
        Comments={15}
      />
      <UploadVideo
        image="https://www.youtube.com/embed/mNWFjD9U-ww"
        userName="Yogesh Bhatt"
        timeStamp="01:25 AM"
        Like={65}
        Comments={12}
      />
      <UploadVideo
        image="https://www.youtube.com/embed/bvUfuTJubPk"
        userName="5-Minutes Crafts "
        timeStamp="01:25 AM"
        Like={360}
        Comments={74}
      />
    </div>
  );
};

export default VideoSection;
