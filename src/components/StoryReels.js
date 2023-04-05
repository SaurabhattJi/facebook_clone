import React, { useState } from "react";
import "../css/storyReel.css";
import { Avatar, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
    img: "https://images.unsplash.com/photo-1620553967899-7b24032a3b6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGlnaCUyMGxldmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    src: "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_2560%2Cc_limit/best-face-oil.png",
  },
  {
    id: 4,
    name: "Madhur Sanwal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SDbn1J4d3ZdAOyr02NtcOtvXgv5IGuU6aET8Nw5C83N567w-XvMlU3VXWDGiK7nKdQM&usqp=CAU",
    src: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/75509/115579/1632657863085_IMG_20210210_120149__08277.1632992234.jpg?c=2",
  },
  {
    id: 5,
    name: "Gaurav",
    img: "https://images.unsplash.com/photo-1675788555085-d244c05f1d10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ZW16R0ZSV252X0F8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=60",
    src: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2021/08/1-face-framing-highlights.jpg?fit=1080%2C1129&ssl=1",
  },
];

const StoryReels = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };

  const handleStory = (id) => {
    console.log("id", id);
    const value = myPicData.filter((h) => h.id === id);

    console.log("value", value);
  };

  return (
    <div style={{ display: "flex", marginRight: "60px" }}>
      {myPicData.map((item, i) => {
        return (
          <>
            <div key={i}>
              <Modal open={open} onClose={handleClose}>
                <div
                  className="modal__pop"
                  style={{
                    margin: "20px auto",
                    border: "none",
                    outline: "none",
                    width: "300px",
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
                      <Avatar src="https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj" />
                      <h4>{item.name}</h4>
                    </div>

                    <img src={item.img} alt="" width="100%" />
                  </form>
                </div>
              </Modal>
            </div>

            <div className="storyReel">
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
          </>
        );
      })}
    </div>
  );
};

export default StoryReels;
