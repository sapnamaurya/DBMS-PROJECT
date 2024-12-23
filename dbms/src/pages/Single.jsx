import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "./single.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import moment from "moment";
import Navbar from "../components/Navbar";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);
  return (
    <>
      {" "}
      <Navbar />
      <div className="single">
        <div className="content">
          <img
            src="https://mapmygenome.in/cdn/shop/articles/How_to_Stay_Healthy_While_Traveling_-_Tips_and_Insights_for_a_Safe_Journey.webp?v=1718688910"
            alt="image"
          />
          <div className="user">
            <img
              src="https://imgs.search.brave.com/jb8N75VR9_S4C_RS5-9Tks2NTKVFH6VKml-J4fBi9hU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc4/ODk5MzQ3Mi9waG90/by9zbWlsaW5nLXlv/dW5nLWV1cm9wZWFu/LWxhZHktaW4tc3Vp/dC1hdC10YWJsZS10/eXBpbmctb24tbGFw/dG9wLWNoYXR0aW5n/LXdpdGgtY2xpZW50/LndlYnA_YT0xJmI9/MSZzPTYxMng2MTIm/dz0wJms9MjAmYz1D/MWVlVVZiWEJpalZY/eGZYVTJTNHFmaWJN/T2tXNzM1VVhwSGNZ/Mi1FdFpzPQ"
              alt="image"
            />
            <div className="info">
              <span>{post.username}</span>
              <p>Posted {moment(post.date).fromNow()}</p>
            </div>

            <div className="edits">
              <Link to={`/write?edit=2`} state={post}>
                <TiEdit className="edit" />
              </Link>
              <RiDeleteBin5Fill className="delete" />
            </div>
          </div>
          <h1>Travelling</h1>
          <p>
            Travelling may mean many things for many people. If we open up
            dictionaries, they give many meanings of travelling. Someone may be
            on a trip or journey. For another group, travelling may mean going
            from one place to another as a travel agent, salesman, for business
            purpose, or studies.
          </p>

          <p>
            However if we take all the definitions of travelling, they are all
            directly or indirectly related to learning. All these activities
            make us come into contact with human beings, places and experiences.
            But there may be some travelling which are specifically for learning
            purposes. The most popular of them are related to students and
            researchers
          </p>

          <p>
            Some travel permanently. That is part of migration which has been a
            common phenomenon ever since ages. They may settle in another place
            forever. Greater cities like London and other cities of Europe and
            North America have been known for having settlers from all over the
            world
          </p>
          <p>
            In today’s systematic learning process the Arab saying “Seek
            knowledge even as far as China” is much suitable. Travelling
            automatically suits here as process of learning. It is the literal
            movement from one place to another than watch television to acquire
            knowledge. Journeys shown in television and internet videos still
            seem quite metaphorical.
          </p>
          <p>
            Travelling can be approached in various ways. Most of the time
            students and researchers travel in groups or with their families.
            Common interests are involved in such group-travelling. Travelling
            is part of adult-education. In most of the countries it has been
            made compulsory in their educational institutions
          </p>
          <p>
            Some travel permanently. That is part of migration which has been a
            common phenomenon ever since ages. They may settle in another place
            forever. Greater cities like London and other cities of Europe and
            North America have been known for having settlers from all over the
            world.
          </p>
          <p>
            Today science has made travelling so easy, swift and so comfortable.
            Sometimes families travel to the kins inside their countries and
            abroad. This personally benefits them to see and know new lands and
            make new acquaintances. The family also remains united despite far
            away from each other.
          </p>
        </div>
        <Menu />
      </div>
    </>
  );
};

export default Single;
