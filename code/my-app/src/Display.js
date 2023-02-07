import React from "react";

// Function based component
const Display = ({ data }) => {
  //   console.log(props.data); //is always a object

  // destructuring of object
  //   const { data } = props;//const data = props.data

  return (
    <>
      <h3>User Data</h3>
      My name is {data.name} and age is {data.age}, working as a{" "}
      {data.designation}
    </>
  );
};

export default Display;
