import React from "react";
import "../css/feed.css";
import StoryReels from "./StoryReels";
import Posts from "./Posts";
import UploadedPost from "./UploadedPost";

const Feed = () => {
  return (
    <div className="feed">
      {/* this section for reels section  */}
      <StoryReels />
      {/* this is post section  */}
      <Posts />
      {/* this section for uploaded post section  */}
      <div>
        <UploadedPost
          photoURl="https://i.pinimg.com/736x/ad/a1/11/ada1111922a46161836af9366c38a2d0--indore.jpg"
          image="https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863"
          userName="Dinesh sunny"
          timeStamp="10:45 Pm"
          msg="When you look at me, what do you see?"
          Like={23}
          Comments={2}
          id="1"
        />
        <UploadedPost
          photoURl="https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj"
          image="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
          userName="Saurabh Bhatt"
          timeStamp="01:28 Pm"
          msg="This is dummy msg"
          Like={10}
          Comments={1}
          id="2"
        />
        <UploadedPost
          photoURl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIU7051YUY64gcMvu7gKFMlva8HXtKLxFfFiE-wxtDiZInbGO8TgRMtJuDO2-ryRpAzs&usqp=CAU"
          image="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
          userName="Kamlesh Joshi"
          timeStamp="08:36 Pm"
          msg="The Beautiful place Taz Mahal"
          Like={363}
          Comments={86}
          id="3"
        />
        <UploadedPost
          photoURl=""
          // image="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
          userName="Himanshu Dube"
          timeStamp="08:36 Pm"
          msg="It’s funny how other people are willing to do lots of brave things for you… yet… you still choose someone who can’t even offer you half of what others could."
          Like={34}
          Comments={23}
          id="4"
        />
        <UploadedPost
          photoURl="http://images6.fanpop.com/image/photos/40200000/Trending-Facebook-Profile-Pictures-Of-Boys-emo-boys-40268071-1537-2431.jpg"
          image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
          userName="Gaurav"
          timeStamp="08:36 Pm"
          msg="This is my first post in this platform"
          Like={64}
          Comments={20}
          id="5"
        />
        <UploadedPost
          photoURl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cTjdRDEQikzV1wdrxT3uo4YGdmxKkCsQKG0aamIIbYkGa6ZWgiyvXByXwO1yhbE4vS0&usqp=CAU"
          // image="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
          userName="The Iconic Man"
          timeStamp="08:36 Pm"
          msg="In character, in form, in style, in all things, the supreme excellence is simplicity."
          Like={110}
          Comments={12}
          id="6"
        />
        <UploadedPost
          photoURl="https://e1.pxfuel.com/desktop-wallpaper/1007/944/desktop-wallpaper-boys-cool-stylish-facebook-profile-dp.jpg"
          image="https://www.bhagwanphoto.com/wp-content/uploads/2020/02/Lord-Shiva-Bhagwan-Ji-Images-Free-Download-with-Wallpaper.jpg"
          userName="Saurbh"
          timeStamp="08:36 Pm"
          msg="I once prayed to God for a bike but quickly found out He didn’t work that way—so I stole a bike and prayed for His forgiveness."
          Like={108}
          Comments={17}
          id="7"
        />
        <UploadedPost
          photoURl="https://dp.profilepics.in/profile_pictures/dashing_boys/dashing_boys_profile_pictures_dashing_dps_228.jpg"
          image="http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg"
          userName="Yoesh Bhatt"
          timeStamp="08:36 Pm"
          msg="This picture is clicked by me"
          Like={84}
          Comments={14}
          id="8"
        />
        <UploadedPost
          photoURl="https://dp.profilepics.in/profile_pictures/boys-profile-pics/boys-profile-pics-dp-for-whatsapp-facebook-02.jpg"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAMHeJNunPNl6AtRk7q_VA_0N9vzIeG5_kClILhvJh9pdlTK6T-rgtIWSn5KwRXihSUM&usqp=CAU"
          userName="Jalaj"
          timeStamp="08:36 Pm"
          msg="This is my first post in this platform"
          Like={14}
          Comments={4}
          id="9"
        />
      </div>
    </div>
  );
};

export default Feed;
