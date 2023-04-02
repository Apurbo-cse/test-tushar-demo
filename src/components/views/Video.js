import React, { useState, useRef, useEffect } from "react";

import src from '../assets/video/1.mp4'
import axios from "axios";
import { Link } from "react-router-dom";

export const Video = () => {
    const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleVideoVisibility = () => {
    const video = videoRef.current;

    // Check if the video element reference is available before accessing its properties
    if (!video) {
      console.error("Video reference not set up correctly");
      return;
    }

    const { top, bottom } = video.getBoundingClientRect();
    const isVideoVisible = top < window.innerHeight && bottom >= 0;

    // If the video is not visible and was previously visible, pause it
    if (!isVideoVisible && isVisible) {
      console.log("Video paused");
      video.pause();
      setIsVisible(false);
    }

    // If the video is visible and was previously not visible, play it
    if (isVideoVisible && !isVisible) {
      console.log("Video played");
      video.play();
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVideoVisibility);

    return () => {
      window.removeEventListener("scroll", handleVideoVisibility);
    };
  }, []);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  

  return (
    <>
      <video ref={videoRef} autoPlay muted loop>
      <source src={src} type="video/mp4" />
    </video>

    <div>
      <h1>Welcome to my blog!</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Video