// A custom hook is a reusable function that contains React hook logic.

// Its name must begin with use.

// Custom hooks help extract reusable behaviour from components without duplicating logic.

// import { useEffect, useState } from "react";

// function useLocalStorage<T>(key: string, initialValue: T) {
//   const [value, setValue] = useState<T>(() => {
//     try {
//       const savedValue = localStorage.getItem(key);

//       return savedValue
//         ? JSON.parse(savedValue)
//         : initialValue;
//     } catch {
//       return initialValue;
//     }
//   });

//   useEffect(() => {
//     try {
//       localStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.error("Unable to save value", error);
//     }
//   }, [key, value]);

//   return [value, setValue] as const;
// }

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue =
        window.localStorage.getItem(key);

      if (storedValue === null) {
        return initialValue;
      }

      return JSON.parse(storedValue) as T;
    } catch (error) {
      console.error(
        "Unable to read from local storage:",
        error
      );

      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(
        key,
        JSON.stringify(value)
      );
    } catch (error) {
      console.error(
        "Unable to save to local storage:",
        error
      );
    }
  }, [key, value]);

  return [value, setValue];
}


