import React from "react";
import { Avatar } from "@mui/material";
import SidebarOptions from "../SidebarOptions";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Friends = () => {
  // const {id}= useParams()

  
  return (
    <div className="feed">
      <h2 style={{ margin: "0 auto", display: "flex", alignItems: "center" }}>
        <SidebarOptions src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png" />
        Your Friends
      </h2>
      <div className="right__body">
        <div className="right__body__options ">
          <Link
            to="/friends:id"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
            }}
          >
            <Avatar src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h4>Himanshu Dube</h4>
          </Link>
        </div>
        <div className="right__body__options ">
          <Link
            to="/friends:id"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
            }}
          >
            <Avatar src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" />
            <h4>Kamlesh Joshi</h4>
          </Link>
        </div>
        <div className="right__body__options ">
          <Link
            to="/friends:id"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
            }}
          >
            <Avatar src="https://static.tnn.in/photo/97415915/97415915.jpg" />
            <h4>Dinesh Sanwal</h4>
          </Link>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://burst.shopifycdn.com/photos/dark-haired-man-in-brown-leather-jacket.jpg?width=1200&format=pjpg&exif=1&iptc=1" />
          <h4>Gaurav</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
          <h4>Rahul Sharma</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg" />
          <h4>Pankaj Bhatt</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://media.gettyimages.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=gi&k=20&c=XsvT59r4ASMz3tttajBraC9esH7dzZXnBrRdM58ZsW0=" />
          <h4>Yogesh</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
          <h4>Jalaj Pandey</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://images.unsplash.com/photo-1474575695008-52c137c36eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80" />
          <h4>Madhur Sanwal</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://pixlr.com/images/index/remove-bg.webp" />
          <h4>Alphine Atarah</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://media.istockphoto.com/id/1372641621/photo/portrait-of-a-businessman-on-gray-background.jpg?b=1&s=170667a&w=0&k=20&c=Yyi5slaeNpq_HPcfgy1305VpJSwerPm_s7mTz_bBk6c=" />
          <h4>Bhaskar Joshi</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
          <h4>Amit Adhikari</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg" />
          <h4>Paras Chimwal</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://media.gettyimages.com/id/1314489757/photo/smiling-hispanic-man-against-white-background.jpg?s=612x612&w=gi&k=20&c=mU_OXyCcBWewSUuA-IQE7LYuwo7FtHqX8pVnpNSSXcQ=" />
          <h4>Joshi Harish</h4>
        </div>
      </div>
    </div>
  );
};

export default Friends;
