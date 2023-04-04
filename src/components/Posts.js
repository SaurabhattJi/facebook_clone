import { Avatar, IconButton, Modal } from "@mui/material";
import React, { useState } from "react";
import "../css/post.css";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CloseIcon from "@mui/icons-material/Close";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
// import  Picker  from "@emoji-mart/react";
// import data from "@emoji-mart/data";

const Posts = () => {
  const [open, setOpen] = useState(false);
  // const [picker, setPicker] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const uploadFileWithclick = () => {
    document.getElementById("imageFile").click();
  };
  const postclick = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="modal__pop">
          <form>
            <div className="modal__heading">
              <h3>Create Post</h3>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="modal__header__top">
              <Avatar src="https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj" />
              <h5>Saurabh Bhatt</h5>
            </div>
            <div className="modal__body">
              <textarea
                rows="5"
                placeholder="What's on your mind, Saurabh ?"
              ></textarea>
            </div>
            <div className="modal__footer">
              <div className="modal__footer__left">
                <h4>Add to your post</h4>
              </div>
              <div className="modal__footer__right">
                <IconButton onClick={uploadFileWithclick}>
                  <PhotoLibraryIcon
                    fontSize="large"
                    style={{ color: "lightgreen" }}
                  />
                </IconButton>
                <input type="file" id="imageFile" style={{ display: "none" }} />
                <IconButton>
                  <VideoCallIcon fontSize="large" style={{ color: "red" }} />
                </IconButton>
                <IconButton>
                  <EmojiEmotionsIcon
                    fontSize="large"
                    style={{ color: "#ffb100" }}
                  />
                </IconButton>
              </div>
            </div>
            <input
              onClick={postclick}
              type="submit"
              value="Post"
              className="post_submit"
            />
          </form>
        </div>
      </Modal>
      <div className="post">
        <div className="post__first">
          <Avatar src="https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj" />
          <form>
            <input
              type="text"
              name=""
              id=""
              placeholder="What's on your mind,Saurabh ?"
              onClick={handleOpen}
            />
          </form>
        </div>
        <div className="post__second">
          <div className="post__option">
            <VideoCallIcon style={{ color: "red" }} fontSize="large" />
            <p>Live Video</p>
          </div>
          <span onClick={uploadFileWithclick}>
            <div className="post__option">
              <PhotoLibraryIcon
                fontSize="large"
                style={{ color: "lightgreen" }}
              />
              <p>Photo/Video</p>
              <input type="file" id="imageFile" style={{ display: "none" }} />
            </div>
          </span>

          <div className="post__option"> 
            <EmojiEmotionsIcon style={{ color: "#ffb100" }} fontSize="large" />
            <p>Feeling/Activity</p>
          </div>
          {/* <div className={picker ? "dis_block" : "dis_none"}>
            <Picker data={data} previewPosition="none" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Posts;
