import React from "react";

export default function Person({ name, age }) {
  return (
    <div>
      <p>
        The Person, Name: {name}, Age: {age}
      </p>
    </div>
  );
}