import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Shimla",
      dec: "Shimla is the capital city of Himachal Pradesh, a northern Indian state. It is situated at an elevation of 2,276 meters (7,467 ft) above sea level, making it a popular hill station. Here are some key features of Shimla",
      img: "	https://imgs.search.brave.com/RoJV7D0SCxgazp29jZeAB_IAPTxo-0EBKK2-9J1SXyY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaW5kaWEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA5L1NoaW1sYS0x/LmpwZw",
    },
    {
      id: 2,
      title: "Manali",
      dec: "Manali is a hill station situated in the Kullu district of Himachal Pradesh, India. It is nestled in the picturesque Beas River valley, at an elevation of 2,050 meters (6,730 ft) above sea level. The town is known for its cool climate, snow-capped mountains, and natural beauty, making it a popular tourist destination.",
      img: "https://imgs.search.brave.com/EMcWQ_zCMcl581MqqeFKmW5jcEKnzy3HljgpPDsZVKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTky/OTcyNDcyL3Bob3Rv/L2JlYXV0aWZ1bC1s/YW5kc2NhcGUtbmVh/ci1tYW5hbGktaW5k/aWEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTREeklZNm5C/VWtzQS1zZTJIZVlC/Q3RaUTlxaTR2RDdk/dThQa0xNY0c0QWM9",
    },
    {
      id: 3,
      title: "Massoorie",
      dec: "Mussoorie is a picturesque hill station located in the Dehradun district of Uttarakhand, India. Perched at an altitude of approximately 2,005 meters (6,578 feet) above sea level, it offers breathtaking views of the Shivalik ranges and the Doon Valley.",
      img: "https://imgs.search.brave.com/oBxHY2dUjdQxnvrf9eu4hIxEbK4Oz1xRiMsRX1L04ZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90LmV1/Y2RuLmluL3RvdXJp/c20vbGcvbXVzc29v/cmllLTcwNzMzNjEu/d2VicA",
    },
    {
      id: 4,
      title: "Nanital",
      dec: "Nainital is a picturesque hill station located in the Kumaon region of Uttarakhand, India. It is situated at an altitude of 2,084 meters (6,837 ft) above sea level, nestled in a valley surrounded by mountains. The town is built around the beautiful Naina Lake, which is approximately two miles in circumference and is surrounded by hills.",
      img: "https://imgs.search.brave.com/5Lr0slSom7jIF79yJd0qgWDYENfdIKQ-6Y3Y0qIdhhI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by9tc2lk/LTEwNDIxODA0Myx3/aWR0aC05NixoZWln/aHQtNjUuY21z",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="image" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.dec}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
