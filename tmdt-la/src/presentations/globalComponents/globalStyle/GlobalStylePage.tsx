// External files
import React from "react";

// Internal files
// Styles
import "./GlobalStyle.module.scss";

interface GlobalStylePageProps {
  children: any;
}

const GlobalStylePage: React.FC<GlobalStylePageProps> = (props) => {
  const { children } = props;
  return children;
};

export default GlobalStylePage;
