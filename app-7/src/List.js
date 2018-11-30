import React from "react";
import Todo from "./Todo";

export default function List(props) {
  let list = props.tasks.map((item, i) => {
    return <Todo key={i} task={item} />;
  });

  return <div>{list}</div>;
}
