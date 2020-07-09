import React, { useState, useEffect } from "react";

function EffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // componentDidMount と componentDidUpdate の役割
  // useEffect が初回レンダー時と更新時に呼び出されている
  // レンダー後に発火されるので、useEffect 内の処理が実行された場合は、DOMが正しく更新されていることが保証される
  // 第2引数に条件を追加できる
  useEffect(() => {
    document.title = `クリック数： ${count} 回`;
    console.log("render");
  }, [count]); // count が変更された場合にのみ useEffect が発火する

  return (
    <div>
      <p>クリック数： {count} 回</p>
      <p>名前： {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>カウント+</button>
    </div>
  );
}

export default EffectHook;
