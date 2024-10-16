import React from "react";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "./single.css";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://imgs.search.brave.com/Ba3eHX-gWbRcrIkCOlDnRbOixjzpP4mXslwPxg8L5wk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/MTkwNjQzMy9waG90/by93b21hbi11c2lu/Zy1zbWFydC1waG9u/ZS1vbi12YWNhdGlv/bnMtaW4tYXRoZW5z/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1INXRsZmNGZ0Vw/R2QyM2tGWWlIT2Nr/WU80TlFNazVEb3R3/Mi1iZ3JiYzlZPQ"
          alt="image"
        />
        <div className="user">
          <img
            src="https://imgs.search.brave.com/jb8N75VR9_S4C_RS5-9Tks2NTKVFH6VKml-J4fBi9hU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc4/ODk5MzQ3Mi9waG90/by9zbWlsaW5nLXlv/dW5nLWV1cm9wZWFu/LWxhZHktaW4tc3Vp/dC1hdC10YWJsZS10/eXBpbmctb24tbGFw/dG9wLWNoYXR0aW5n/LXdpdGgtY2xpZW50/LndlYnA_YT0xJmI9/MSZzPTYxMng2MTIm/dz0wJms9MjAmYz1D/MWVlVVZiWEJpalZY/eGZYVTJTNHFmaWJN/T2tXNzM1VVhwSGNZ/Mi1FdFpzPQ"
            alt="image"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edits">
            <Link to={`/write?edit=2`}>
              <TiEdit className="edit" />
            </Link>
            <RiDeleteBin5Fill className="delete" />
          </div>
        </div>
        <h1>Travelling</h1>
        <p>
          Travelling may mean many things for many people. If we open up
          dictionaries, they give many meanings of travelling. Someone may be on
          a trip or journey. For another group, travelling may mean going from
          one place to another as a travel agent, salesman, for business
          purpose, or studies.
        </p>

        <p>
          However if we take all the definitions of travelling, they are all
          directly or indirectly related to learning. All these activities make
          us come into contact with human beings, places and experiences. But
          there may be some travelling which are specifically for learning
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
          Some travel permanently. That is part of migration which has been a
          common phenomenon ever since ages. They may settle in another place
          forever. Greater cities like London and other cities of Europe and
          North America have been known for having settlers from all over the
          world.
        </p>
      </div>
      <div className="menu"></div>
    </div>
  );
};

export default Single;
