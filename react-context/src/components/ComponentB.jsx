import { useContext } from "react";
import { DataContext } from "../DataContext";

const ComponentB = () => {
  const { userInfo, setUserInfo } = useContext(DataContext);
  return (
    <div>
      <h2>I am ComponentB</h2>
      <p>
        <span>{userInfo.name}'s favorite color is </span>
        <span style={{ color: userInfo.favColor }}>{userInfo.favColor}</span>.
      </p>

      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "orange",
          })
        }
      >
        Change to Orange
      </button>

      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "pink",
          })
        }
      >
        Change to Pink
      </button>

      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favFood: "cookies",
          })
        }
      >
        Change to Cookies
      </button>
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favMovie: "Interstellar",
          })
        }
      >
        Change to Interstellar
      </button>

      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favMovie: "Contact",
          })
        }
      >
        Change to Contact
      </button>
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "#e30022",
          })
        }
      >
        Change to Cadmium Red
      </button>
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favFood: "chips",
          })
        }
      >
        Change to Chips
      </button>
    </div>
  );
};

export default ComponentB;
