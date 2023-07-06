import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import { motion } from "framer-motion";

const AppWrap = (Component, idName, classNames, bgcolor) => () => {
  return (
    <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      id={idName}
      className={`app__container ${classNames} ${bgcolor}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2023 CHAYAN</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </motion.div>
  );
};

export default AppWrap;
