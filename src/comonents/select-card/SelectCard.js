import React from "react";

export const SelectCard = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <input type="radio" value="course a" name="a" /> course a
        <input type="radio" value="course b" name="a" /> course b
        <input type="radio" value="course c" name="a" /> course c
        <input type="radio" value="course d" name="a" /> course d
    </div>
  )
};
