import React, { useEffect, useState } from "react";

const banner = [
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8YmlrZSUyMGNhciUyMGJpeWNsZSUyMGltYWdlfGVufDB8MHx8fDE3MTgwMDgzOTZ8MQ&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/171342669/photo/motorcyclist-stops-to-appreciate-view.jpg?s=1024x1024&w=is&k=20&c=rTV1DJWkyXyQs4GifXQ5s8cNI2YB8N6BguCQpD41mno=",
];

const Banner = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % banner.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-96">
      <img src={banner[count]} alt="Banner" className="h-full w-full" />
    </div>
  );
};

export default Banner;
