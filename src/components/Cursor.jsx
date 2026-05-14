import React, { useEffect } from "react";

const Cursor = () => {

  useEffect(() => {

    const cursor =
      document.querySelector(".custom-cursor");

    const moveCursor = (e) => {

      cursor.style.left = e.clientX + "px";

      cursor.style.top = e.clientY + "px";
    };

    const links =
      document.querySelectorAll("a, button");

    links.forEach((link) => {

      link.addEventListener("mouseenter", () => {

        cursor.classList.add("cursor-grow");

      });

      link.addEventListener("mouseleave", () => {

        cursor.classList.remove("cursor-grow");

      });

    });

    window.addEventListener("mousemove", moveCursor);

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

    };

  }, []);

  return (
    <div className="custom-cursor"></div>
  );
};

export default Cursor;