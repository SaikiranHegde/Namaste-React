import React from "react";
import User from "./User";

const About: React.FC = () => {
  return (
    <section>
      <div className="header-1">About</div>
      <User name="Saikiran" location="Bengaluru" contact="saikiranhegde0793@gmail.com"/>
    </section>
  );
}

export default About;