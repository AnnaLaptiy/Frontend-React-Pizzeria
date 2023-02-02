import React from "react";
import ContentLoader from "react-content-loader"

export const PizzaLoader = () => {

  return (
    <ContentLoader
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 280 457"
      backgroundColor="#f5f5f5"
      foregroundColor="#dedede"

    >
      <circle cx="139" cy="139" r="125" />
      <rect x="25" y="287" rx="3" ry="3" width="202" height="24" />
      <rect x="0" y="413" rx="3" ry="3" width="100" height="30" />
      <rect x="120" y="413" rx="25" ry="16" width="150" height="44" />
      <rect x="0" y="320" rx="6" ry="6" width="270" height="75" />

    </ContentLoader>

  )
};