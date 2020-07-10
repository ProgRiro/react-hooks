import React, { createContext, useState } from "react";
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
import ComponentC from "./components/ComponentC";

export const UserContext = createContext();
export const LanguageContext = createContext();

function App() {
  const [user, serUser] = useState({ name: "yamada", age: "32" });
  const [language, serLanguage] = useState("日本語");
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
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
