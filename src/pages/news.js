import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLoad } from "react-router-dom-animation";
import { motion } from "framer-motion";

const Body = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Page = (routerLocation, isAnimation) => {
  const [isLoad, setLoad] = useLoad();

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <Body
      style={{ background: "#f0a", zIndex: 111 }}
      initial={{ scale: isLoad ? 1 : 0.9 }}
      animate={{ scale: isAnimation ? 0.9 : isLoad ? 1 : 0.9 }}
      exit={{ scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <h1>this location: {routerLocation.location.pathname}</h1>
      <ul>
        <li>
          <Link to="/" animate={"prev"}>
            home
          </Link>
        </li>
        <li>
          <Link to="/about" animate={"prev"}>
            about
          </Link>
        </li>
        <li>
          <Link to="/news" animate={"prev"}>
            news
          </Link>
        </li>
      </ul>
    </Body>
  );
};

export default Page;
