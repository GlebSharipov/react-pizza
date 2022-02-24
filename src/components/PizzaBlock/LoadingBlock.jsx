import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="139" r="126" />
    <rect x="0" y="290" rx="3" ry="3" width="266" height="25" />
    <rect x="0" y="332" rx="6" ry="6" width="267" height="64" />
    <rect x="0" y="413" rx="17" ry="17" width="112" height="46" />
    <rect x="145" y="412" rx="16" ry="16" width="124" height="46" />
  </ContentLoader>
);

export default LoadingBlock;
