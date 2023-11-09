import React from "react";
import Main from "../components/Main";
import Discover from "../components/Discover";
import CategeoryList from "../components/Categeory";
import Categeory from "../data/fake";
import Testimonial from "../components/Testimonial";
import Foooter from "../components/Foooter";
function Home() {
  return (
    <div>
      <Main />
      <Discover />
      {Categeory.map((Categeory) => (
        <CategeoryList
          title={Categeory.title}
          sub={Categeory.subcat}
          Categeory={Categeory}
          bg={Categeory.bg}
        />
      ))}
      <div className="testim-box space">
        <Testimonial />
      </div>
      {/* <Foooter /> */}
    </div>
  );
}

export default Home;
