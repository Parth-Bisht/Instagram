import { useEffect } from "react";

export default function useClickOutside(ref, setIsActive) {
    console.log(ref);
  useEffect(() => {
    function handleClickOutside() {
      if (ref.current) {
        setIsActive(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, setIsActive]);
}
