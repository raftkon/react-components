import React from "react";
import useNavigation from "../hooks/use-navigation";

const Route = ({ path, element }) => {
  const { currentPath } = useNavigation();
  return <>{path === currentPath ? element : null}</>;
};

export default Route;
