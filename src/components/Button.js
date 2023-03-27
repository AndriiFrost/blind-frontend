import React, { useEffect, useState } from "react";

const Button = (props) => {
  let [click, setClick] = useState(0);

  useEffect( () => {
    document.title = `You enter ${click}`
  })
  
  console.log(click);
  return <button onClick={() => setClick(click + 1)}>{props.text} {click}</button>;
};

Button.defaultProps = {
  text: "Button",
};

export default Button;
