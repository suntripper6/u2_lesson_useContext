import { useContext } from "react";
import { DataContext } from "../DataContext";
import ComponentB from "./ComponentB";

const ComponenetA = () => {
  const { userInfo, setUserInfo } = useContext(DataContext);
  return (
    <div>
      <h2>I am ComponentA</h2>
      <p>
        <span>{userInfo.name}'s favorite color is </span>
        <span style={{ color: userInfo.favColor }}>{userInfo.favColor}</span>
        <br />
        <span>{userInfo.name}'s favorite food and movie are </span>
        <span>
          {userInfo.favFood} and {userInfo.favMovie}
        </span>
      </p>
      <button onClick={() => setUserInfo({ ...userInfo, favColor: "blue" })}>
        Make Blue
      </button>
      <button onClick={() => setUserInfo({ ...userInfo, favColor: "#e30022" })}>
        Make Cadmium Red
      </button>
      <ComponentB />
    </div>
  );
};

export default ComponenetA;
