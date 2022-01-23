import React from "react";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/intagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

// styles
import { WrapperFooter } from "./Footer.Styles";

const Footer = () => {
  const social = [
    {
      name: facebook,
      url: "http://www.facebook.com/sharer.php?u=www.mipagina.com&t=WildWaveSurf",
    },
    {
      name: instagram,
      url: "https://www.instagram.com/p/COfZRFgB7mYIt7HY9k6hgTolIZyg3kW5xFsb4w0/?utm_medium=copy_link",
    },
    { name: linkedin, url: "https://www.linkedin.com/in/fidel-parabacuto" },
    {
      name: twitter,
      url: "https://twitter.com/fparabacuto?ref_src=twsrc%5Etfw",
    },
  ];

  return (
    <WrapperFooter>
      <h6>© Copyright 2021, Wildwavesurf, open source. All rights reserved.</h6>
      <div style={{ display: "flex" }}>
        <h4>FOLLOW US</h4>
        {social.length > 0
          ? social.map((item, index) => {
              return (
                <a href={item.url} target={"blank"}>
                  <img src={item.name} alt={item.name} key={index} />
                </a>
              );
            })
          : null}
      </div>
    </WrapperFooter>
  );
};

export default Footer;
