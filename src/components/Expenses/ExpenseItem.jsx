// import ExpenseDate from "./ExpenseDate";
// import Card from "../UI/Card";
// import "./ExpenseItem.css";
// import { useState } from "react";

// function ExpenseItem(props) {
//   const [title, setTitle] = useState(props.title);

//   const clickHandler = () => {
//     if (title === "Toilet Paper") {
//       setTitle("paper is shipping");
//     } else {
//       setTitle("");
//     }

//     if (title === "") {
//       setTitle(props.title);
//     } else if (title === "paper is shipping") {
//       setTitle(props.title);
//     }
//   };
//   return (
//     <Card className="expense-item">
//       {}
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2> {title} </h2>
//         <div className="expense-item__price">{props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>hide</button>
//     </Card>
//   );
// }

// export default ExpenseItem;

import React from "react";


import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
