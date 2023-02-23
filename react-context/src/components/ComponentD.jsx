import { useContext } from "react";
import { DataContext } from "../DataContext";

const ComponentD = () => {
  const { userInfo, setUserInfo } = useContext(DataContext);
  return (
    <div>
      <h2>I am ComponentD</h2>
      <p>{userInfo.name}'s favorite food is </p>
      <p style={{ color: userInfo.favColor }}>{userInfo.favFood}</p>.
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "brown",
          })
        }
      >
        Change to Brown
      </button>
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favMovie: "Big Lebowski",
          })
        }
      >
        Change Movie
      </button>
    </div>
  );
};

export default ComponentD;
