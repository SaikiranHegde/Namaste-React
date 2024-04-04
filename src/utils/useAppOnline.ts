import { useEffect, useState } from "react";

/**
 * This hook/function is used to indicate whether the app is online.
 *
 * @return {boolean} true if the app is online, false otherwise
 */

export const useAppOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, []);

  return isOnline;
}