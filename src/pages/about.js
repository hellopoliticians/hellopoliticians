import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLoad } from "react-router-dom-animation";
import { motion } from "framer-motion";
import { ReactComponent as PeaceSymbol } from './peace.svg';

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
      style={{ background: "#1bbc9b", zIndex: 111 }}
      initial={{ scale: isLoad ? 1 : 1 }}
      animate={{ scale: isAnimation ? 1 : isLoad ? 1 : 1 }}
      exit={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/2" animate="next">
            <div
              style={{
                color: "#fff",
                height: "99vh",
                width: "95vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                paddingLeft: "2em",
                paddingRight: "2em",
                textAlign: "center",
              }}
            >
              <div>
              {/* <h1>Hello Politicians</h1> */}
              <br />
              <h1>Make love</h1>
              <h1>like war.</h1>
              <br />
              <br />
              <br />
              <PeaceSymbol width={100} height={100} fill="white" />
              <br />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Body>
  );
};

export default Page;
