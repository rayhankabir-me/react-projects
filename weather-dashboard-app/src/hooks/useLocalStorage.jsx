import { useEffect, useState } from "react";

const useLocalStorage = (storagekey, defaultvalue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storagekey)) ?? defaultvalue
  );

  useEffect(() => {
    localStorage.setItem(storagekey, JSON.stringify(value));
  }, [value, storagekey]);

  return [value, setValue];
};

export default useLocalStorage;
