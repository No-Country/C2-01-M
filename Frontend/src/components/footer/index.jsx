import React from "react";
import { facebook, instagram, linkedin, twitter } from "../../assets";

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
      url: "https://www.instagram.com/",
    },
    { name: linkedin, url: "https://www.linkedin.com/" },
    {
      name: twitter,
      url: "https://twitter.com/",
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
                <a href={item.url} target={"blank"} key={index}>
                  <img src={item.name} alt={item.name} />
                </a>
              );
            })
          : null}
      </div>
    </WrapperFooter>
  );
};

export default Footer;
