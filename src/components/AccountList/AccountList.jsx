import React from "react";
import "./AccountList.css";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
  FaYoutube,
} from "react-icons/fa";
const AccountList = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="account-list__root">
      <div
        className="account-list__item gitHub"
        onClick={() => openInNewTab("https://github.com/matheusgmello")}
      >
        <FaGithub size={36} />
      </div>
      <div
        className="account-list__item stackOverFlow"
        onClick={() =>
          openInNewTab("https://pt.stackoverflow.com/users/332248/matheus?tab=profile")
        }
      >
        <FaStackOverflow size={36} />
      </div>{" "}
      {/* <div
        className="account-list__item mediumBlog"
        onClick={() => openInNewTab("https://medium.com/")}
      >
        <FaMedium size={36} />
      </div> */}
      <div
        className="account-list__item linkedIn"
        onClick={() => openInNewTab("https://www.linkedin.com/in/matheusgmello")}
      >
        <FaLinkedin size={36} />
      </div>
      {/* <div
        className="account-list__item youTube"
        onClick={() => openInNewTab("https://www.youtube.com/c/")}
      >
        <FaYoutube size={36} />
      </div> */}
    </div>
  );
};

export default AccountList;
