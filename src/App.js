import React, { createContext, useState, useReducer, useEffect } from "react";
import "./App.css";
// import Counter from "./components/Counter";
// import CounterHook from "./components/CounterHook";
// import FormHook from "./components/FormHook";
// import ItemHook from "./components/ItemHook";
// import ClassEffect from "./components/ClassEffect";
// import EffectHook from "./components/EffectHook";
// import MouseEventEffect from "./components/MouseEventEffect";
// import DataFetch from "./components/DataFetch";
// import DataFetchById from "./components/DataFetchById";
// import ComponentC from "./components/ComponentC";

// for Reducer
// import CounterReducer from "./components/CounterReducer";
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";
import axios from "axios";

// export const UserContext = createContext();
// export const LanguageContext = createContext();

// for Reducer
// export const CountContext = createContext();
// const initialState = {
//   firstCounter: 0,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment1":
//       return { ...state, firstCounter: state.firstCounter + action.value };
//     case "decrement1":
//       return { ...state, firstCounter: state.firstCounter - action.value };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "データの取得に失敗しました。",
        post: {},
      };
    default:
      return state;
  }
};

function App() {
  // const [user, serUser] = useState({ name: "yamada", age: "32" });
  // const [language, serLanguage] = useState("日本語");
  // const [count, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  });

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterHook /> */}
      {/* <FormHook /> */}
      {/* <ItemHook /> */}
      {/* <ClassEffect /> */}
      {/* <EffectHook /> */}
      {/* <MouseEventEffect /> */}
      {/* <DataFetch /> */}
      {/* <DataFetchById /> */}
      {/* <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterReducer /> */}
      {/* <h1>カウント：{count.firstCounter}</h1>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      <h1>{state.loading ? "Loading..." : state.post.title}</h1>
      <h2>{state.error ? state.error : null}</h2>
    </div>
  );
}

export default App;
