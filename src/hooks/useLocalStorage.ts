import { useEffect, useState } from "react";

export const useLocalStorage = <T>( // assigned a generic ts type T and will define it next
  key: string, // as defined in the use of this hook, 1st param is a key to store in the local storage, this will always be a string
  initialValue: T | (() => T) // this can be either a array or a function taht returns same hook function
) => {
  const [value, setValue] = useState<T>(() => {
    // type of this state is same as the value get's pased with the hook
    const jsonValue = localStorage.getItem(key); // accessing value from localstorage

    if (jsonValue != null) return JSON.parse(jsonValue); // if value found, returning

    if (typeof initialValue === "function") {
      // or if this is the setState function
      return (initialValue as () => T)(); // the initial value will be same as the setState function
    } else {
      return initialValue; // or the value itself
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)); // setting passed value to local storge in the passed key
  }, [key, value]); // invoking this component only when the key or the value updates

  return [value, setValue] as [typeof value, typeof setValue]; // mimicing the useState hook, sending the local useState value and function here
  // The types defined as the 1st one will always be the type of the local useState value, and the 2nd one will be same as the local useState setState function
};
