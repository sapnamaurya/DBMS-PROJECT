import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./write.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Write = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <>
      <Navbar />
      <div className="add">
        <div className="contnt">
          <input type="text" placeholder="Title" />
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>{" "}
        </div>
        <div className="menus">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input style={{ display: "none" }} type="file" id="file" name="" />
            <label className="file" htmlFor="file">
              Upload Image
            </label>
            <div className="buttons">
              <button>Save as a draft</button>
              <button>Publish</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="cat">
              <input type="radio" name="cat" value=" Medical" id=" Medical" />
              <label htmlFor=" Medical"> Medical tourism</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="Wellness " id="Wellness " />
              <label htmlFor="Wellness ">Wellness tourism</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="Religious "
                id="Religious "
              />
              <label htmlFor="Religious ">Religious tourism</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="Dark " id="Dark " />
              <label htmlFor="Dark ">Dark tourism</label>
            </div>

            <div className="cat">
              <input type="radio" name="cat" value="food" id="food" />
              <label htmlFor="food">Food</label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Write;
