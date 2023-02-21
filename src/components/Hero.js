import React from "react";
import photo4 from "../assets/photo4.JPG";
import Layout from "./Layout";

export const Hero = () => {
  return (
    <>
    <Layout>

      <section className="section1 grid" id="home">
        <div className="left">
          <img src={photo4} alt="" />
        </div>
        <div className="flex right">
          <div>
            <h2 className="name">Jeetendra Karki</h2>
            <p className="tag">Web Developer</p>
          </div>

          <a href="" download="C:\Users\jite\Desktop\My resume.docx">
            <button>
              Download Resume <i className="fa-solid fa-download"></i>
            </button>
          </a>
        </div>
      </section>
      </Layout>
    </>
  );
};
