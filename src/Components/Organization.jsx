import * as React from "react";
import data from "./data.json";
import "./Organization.css";

const Card = (props) => {
  return (
    <>
      {props.data.map((item) => (
        <>
          <li className="card">
            {item.name}
            {item.children?.length && <Card data={item.children} />}
          </li>
        </>
      ))}
    </>
  );
};

const Organization = (props) => {
  return (
    <div className="org-tree">
      Employee Chart
      <Card data={data} />
    </div>
  );
};
export default Organization;