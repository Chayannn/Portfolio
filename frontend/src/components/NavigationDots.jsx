import React from "react";

const NavigationDots = ({ active }) => {
  const sections = [
    "home",
    "about",
    "work",
    "skills",
    "testimonial",
    "contact",
  ];
  return (
    <div className="app__navigation">
      {sections.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
