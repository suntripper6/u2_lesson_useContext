import { useContext } from "react";
import { DataContext } from "../DataContext";
import ComponentD from "./ComponentD";

const ComponentC = () => {
  const { userInfo, setUserInfo } = useContext(DataContext);
  return (
    <div>
      <h2>I am ComponentC</h2>
      <p>
        {userInfo.name}'s favorite movie is {userInfo.favMovie}
      </p>
      .
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "aqua",
            favFood: "Egg Rolls",
          })
        }
      >
        Change Color & Food
      </button>
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "pink",
            favMovie: "Hellraiser",
          })
        }
      >
        Change Color & Movie
      </button>
      <ComponentD />
    </div>
  );
};

export default ComponentC;
