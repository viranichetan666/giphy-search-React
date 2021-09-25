import React from "react";
import { loaderImage } from "helper/constant";

const AppLoader = () => (
  <div className="text-center">
    <img src={loaderImage} alt="loading" />
  </div>
);

export default AppLoader;
