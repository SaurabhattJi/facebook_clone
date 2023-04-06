import React from "react";
import "../../css/feed.css";
import UploadVideo from "../UploadVideo";

const VideoSection = () => {
  return (
    <div className="feed">
      <UploadVideo
        image="https://www.youtube.com/embed/6V37LCXuWaA"
        userName="Kamlesh Joshi"
        timeStamp="10:45 AM"
        Like={56}
        Comments={120}
        photoURl={
          "https://i.pinimg.com/736x/ad/a1/11/ada1111922a46161836af9366c38a2d0--indore.jpg"
        }
      />
      <UploadVideo
        image="https://www.youtube.com/embed/xA-vp-KtFjU"
        userName="Deepanshu"
        timeStamp="01:25 PM"
        Like={36}
        Comments={600}
        photoURl={
          "https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj"
        }
      />
      <UploadVideo
        image="https://www.youtube.com/embed/eKqY-oP1d_Y"
        userName="Saurabh Bhatt"
        timeStamp="01:25 AM"
        Like={74}
        Comments={210}
        photoURl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIU7051YUY64gcMvu7gKFMlva8HXtKLxFfFiE-wxtDiZInbGO8TgRMtJuDO2-ryRpAzs&usqp=CAU"
        }
      />
      <UploadVideo
        image="https://www.youtube.com/embed/QV3ln7c2MUQ"
        userName="Jalaj"
        timeStamp="01:25 AM"
        Like={89}
        Comments={158}
        photoURl={""}
      />
      <UploadVideo
        image="https://www.youtube.com/embed/mNWFjD9U-ww"
        userName="Yogesh Bhatt"
        timeStamp="01:25 AM"
        Like={65}
        Comments={120}
        photoURl={
          "http://images6.fanpop.com/image/photos/40200000/Trending-Facebook-Profile-Pictures-Of-Boys-emo-boys-40268071-1537-2431.jpg"
        }
      />
      <UploadVideo
        image="https://www.youtube.com/embed/bvUfuTJubPk"
        userName="5-Minutes Crafts "
        timeStamp="01:25 AM"
        Like={360}
        Comments={747}
      />
    </div>
  );
};

export default VideoSection;
