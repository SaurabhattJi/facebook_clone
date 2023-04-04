import React from "react";
import Shop from "../Shop";
const ShopItem = () => {
  return (
    <div className="feed">
      <Shop
        userName="Rohit Joshi"
        timeStamp="02:56 PM"
        image="https://scontent.fdel3-2.fna.fbcdn.net/v/t45.5328-4/339057061_6030004460450092_7548289646339191427_n.jpg?stp=c0.67.403.403a_dst-jpg_p403x403&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_ohc=QmStVLMzvkkAX-HOmya&_nc_ht=scontent.fdel3-2.fna&oh=00_AfAscD_S296ArxVPX68zkFu9oUlK0mwWgeGEIcA3Jc1eCA&oe=643180C6"
        msg="I am selling my IPhone. #selling #newphone #iphone"
        Like={668}
        price={"25,000"}
      />
      <Shop
        userName="Rohit Joshi"
        timeStamp="02:56 PM"
        image="https://scontent.fdel3-2.fna.fbcdn.net/v/t45.5328-4/336018678_5952543614821217_1201519774790269644_n.jpg?stp=c0.66.403.403a_dst-jpg_p403x403&_nc_cat=107&ccb=1-7&_nc_sid=c48759&_nc_ohc=iWDu408HAd4AX-KULRK&_nc_ht=scontent.fdel3-2.fna&oh=00_AfCVhkq2-bXPsvLSWqaNyT-LzBc8pKMwWhllOodtQwJL1A&oe=64300256"
        msg="I am selling my brand new IPhone 13 Pro. #iphone13 #new #sell"
        Like={302}
        price={"60,000"}
      />
      <Shop
        userName="Rohit Joshi"
        timeStamp="02:56 PM"
        image="https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-6/338992848_3349878831891325_6793994566765527756_n.jpg?stp=c0.64.1080.1080a_dst-jpg_s526x395&_nc_cat=102&ccb=1-7&_nc_sid=3b2858&_nc_ohc=-KG6kOTfdJMAX-NRRil&_nc_ht=scontent.fdel3-1.fna&oh=00_AfCIXMlekPU4I6-O7o5V0JzF5I_WEmM4LNXiFgRmdPbABQ&oe=6431762C"
        msg="Mountain bike is ready to sold. #bike #mountainbike #bikes #new"
        Like={52}
        price={"30,000"}
      />
      <Shop
        userName="Rohit Joshi"
        timeStamp="02:56 PM"
        image="https://scontent.fdel3-4.fna.fbcdn.net/v/t45.5328-4/336462246_6034621789925334_5715954917638723675_n.jpg?stp=c65.0.395.395a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_ohc=dMWIzry0W1kAX-ZW7-k&_nc_ht=scontent.fdel3-4.fna&oh=00_AfAAJGuuoNGOL9WMnRWvvR6AYOFvUbnzder3eWmG3fF7hw&oe=642FFBFE"
        msg="My car is ready to sold. If you want to purchase my car contact me at this number. +91 1234569879 
           #new #car #sell"
        Like={311}
        price={"1,30,000"}
      />
    </div>
  );
};

export default ShopItem;
