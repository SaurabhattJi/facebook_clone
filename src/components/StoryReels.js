import React, { useState } from "react";
import "../css/storyReel.css";
import { Avatar, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareDropdown from "../components/dropdownComponents/ShareDropdown";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import Slider from "react-slick";

const myPicData = [
  {
    id: 1,
    name: "Saurabh Bhatt",
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    src: "https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    name: "Himanshu Dube",
    img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Shirts1.jpg",
    src: "https://www.faceapp.com/static/img/content/compare/beard-example-before@3x.jpg",
  },
  {
    id: 3,
    name: "Kamlesh Joshi",
    img: "https://images.unsplash.com/photo-1534617580102-6342ca2bfd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxvb2tpbmclMjBmb3J3YXJkfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    src: "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_2560%2Cc_limit/best-face-oil.png",
  },
  {
    id: 4,
    name: "Madhur Sanwal",
    img: "https://media.istockphoto.com/id/528421708/photo/portrait-and-sunset-at-the-beach.jpg?s=612x612&w=0&k=20&c=4SZ2tHAJPTyNyy0u0LuK3NuCbPjvM0gyrgWNsr8N8_M=",
    src: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/75509/115579/1632657863085_IMG_20210210_120149__08277.1632992234.jpg?c=2",
  },
  {
    id: 5,
    name: "Gaurav",
    img: "https://media.gettyimages.com/id/1252680368/photo/portrait-of-man-in-snow-having-none-of-it.jpg?s=612x612&w=gi&k=20&c=zATKIRGwP2UIcTZ7JaAkB7rf13naN9h2YbaZrTWuY1c=",
    src: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2021/08/1-face-framing-highlights.jpg?fit=1080%2C1129&ssl=1",
  },
];
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
// };
const StoryReels = () => {
  const [open, setOpen] = useState(false);
  const [pic, setPic] = useState([]);
  const [like, setLike] = useState(<FavoriteBorderIcon />);
  const handleClose = () => {
    setOpen(false);
  };
  const reelLike = () => {
    setLike(<FavoriteIcon style={{ color: "red" }} />);
  };

  const handleStory = (id) => {
    // console.log("id", id);
    const value = myPicData.filter((h) => h.id === id);
    setPic(value);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {pic?.map((elem, i) => {
        return (
          <Modal open={open} onClose={handleClose} key={i}>
            <div
              className="modal__pop"
              style={{
                margin: "20px auto",
                border: "none",
                outline: "none",
                width: "350px",
              }}
            >
              <form>
                <div className="modal__heading">
                  <h3>Story</h3>
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </div>
                <div className="modal__header__top">
                  <Avatar src={elem.src} />
                  <h4 style={{padding:"0 5px"}}>{elem.name}</h4>
                </div>
                <br />
                <img src={elem.img} alt="" width="100%" />
              </form>
              <div className="likereel">
                <IconButton onClick={reelLike}>{like}</IconButton>
                <input type="text" placeholder="Write a Reply" />
                <ShareDropdown name={""} />
              </div>
            </div>
          </Modal>
        );
      })}

      <div style={{ display: "flex" }}>
        {/* <Slider {...settings}> */}
        {myPicData.map((item, i) => {
          return (
            <div className="storyReel" key={i}>
              <div onClick={handleOpen}>
                <div
                  className="story"
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                  onClick={() => {
                    handleStory(item.id);
                  }}
                >
                  <Avatar src={item.src} />
                  <h4>{item.name}</h4>
                </div>
              </div>
            </div>
          );
        })}
        {/* </Slider> */}
      </div>
    </>
  );
};

export default StoryReels;
