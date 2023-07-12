import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div>
      <Link href="/create"> New Blog</Link>
    </div>
  );
}

export default Button;
