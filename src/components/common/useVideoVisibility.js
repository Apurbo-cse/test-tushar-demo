import { useEffect } from "react";

const useVideoVisibility = (videoRef) => {
  const handleVideoVisibility = () => {
    const video = videoRef.current;
    const { top, bottom } = video.getBoundingClientRect();
    const isVisible = top < window.innerHeight && bottom >= 0;

    if (!isVisible) {
      video.pause();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVideoVisibility);

    return () => {
      window.removeEventListener("scroll", handleVideoVisibility);
    };
  }, []);
};

export default useVideoVisibility;
