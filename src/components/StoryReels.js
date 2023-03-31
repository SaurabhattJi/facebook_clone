import React from "react";
import "../css/storyReel.css";
import { Avatar } from "@mui/material";

const StoryReels = () => {
  return (
    <div className="storyReel">
      <div
        className="story"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80')`,
        }}
      >
        <Avatar src="https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj" />
        <h4>Saurabh Bhatt</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1624530460655-6ebd3f70ba36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b3V0ZG9vciUyMGdpcmx8ZW58MHx8MHx8&w=1000&q=80')`,
        }}
      >
        <Avatar src="https://www.faceapp.com/static/img/content/compare/beard-example-before@3x.jpg" />
        <h4>Dinesh Sanwal</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1620553967899-7b24032a3b6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGlnaCUyMGxldmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80')`,
        }}
      >
        <Avatar src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_2560%2Cc_limit/best-face-oil.png" />
        <h4>Himanshu Dube</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SDbn1J4d3ZdAOyr02NtcOtvXgv5IGuU6aET8Nw5C83N567w-XvMlU3VXWDGiK7nKdQM&usqp=CAU')`,
        }}
      >
        <Avatar src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/75509/115579/1632657863085_IMG_20210210_120149__08277.1632992234.jpg?c=2" />
        <h4>Kamlesh Joshi</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1675788555085-d244c05f1d10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ZW16R0ZSV252X0F8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=60')`,
        }}
      >
        <Avatar src="https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2021/08/1-face-framing-highlights.jpg?fit=1080%2C1129&ssl=1" />
        <h4>Gaurav </h4>
      </div>
    </div>
  );
};

export default StoryReels;
