import { useEffect, useRef } from "react";

export const useInterval = (callback:()=>void,delay:number) => {
    const savedCallback = useRef<()=>void>(()=>{});
  
    useEffect(() => {
      savedCallback.current = callback;
    });
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
  
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, []);
  }