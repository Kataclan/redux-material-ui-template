import { useState, useEffect } from 'react';

const useOffSetTop = (top: number) => {
  const [offset, setOffset] = useState(false);
  const isTop = top || 100;

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > isTop) {
        setOffset(true);
      } else {
        setOffset(false);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, [isTop]);

  return offset;
};

export default useOffSetTop;
