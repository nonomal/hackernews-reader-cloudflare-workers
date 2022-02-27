// Adapted code from: https://blog.whereisthemouse.com/create-a-list-component-with-keyboard-navigation-in-react
import { useEffect, useState } from "react";

export const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false);
  useEffect(() => {
    const downHandler = ({ key }: { key: string }) => {
      if (key === targetKey) {
        console.log("key down")
        setKeyPressed(true);
        setTimeout(() => {
          setKeyPressed(false);
        }, 0);
      }
    };
    const upHandler = ({ key }: { key: string }) => {
      if (key === targetKey) {
        console.log("key up")
        setKeyPressed(false);
      }
    };
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);
  return keyPressed;
};
