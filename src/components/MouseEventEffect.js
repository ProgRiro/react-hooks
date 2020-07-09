import React, { useState, useEffect } from "react";

function MouseEventEffect() {
  console.log("MouseEventEffect が呼ばれました");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  // componentDidMount の役割
  // 初回のみ、その後のレンダー時に処理をスキップしたい場合は、[] を第2引数に渡す
  useEffect(() => {
    console.log("useEffect が呼ばれました");
    window.addEventListener("mousemove", getMousePosition);

    // componentWillUnmount の役割
    // アンマウント時の処理
    return () => {
      window.removeEventListener("mousemove", getMousePosition);
    };
  }, []);

  return (
    <div>
      <ul>
        <li>x座標： {x}</li>
        <li>y座標： {y}</li>
      </ul>
    </div>
  );
}

export default MouseEventEffect;
