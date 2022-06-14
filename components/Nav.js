import React from "react";
import request from "../utils/requests";
import { Router, useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav>
      <div className="nav__objects ">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            className="nav__object-item"
            key={key}
            onClick={() => router.push(`/?genere=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
