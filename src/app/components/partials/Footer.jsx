import React from "react";
import { Image } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import logoFooter from "../../../assets/logo/zs.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-body-tertiary text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex align-items-center gap-4">
                <Image
                  src={logoFooter}
                  style={{ width: "50px" }}
                  className="py-3"
                />
                <p className="fs-1 mt-3"> Zenith Solutions</p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                debitis sit hic esse nulla ipsum deleniti cum, veritatis
                inventore voluptate molestias ex magnam, deserunt earum aperiam
                omnis? Earum tempore laboriosam distinctio ut aspernatur,
                veritatis cupiditate vitae quae autem sapiente reprehenderit
                culpa assumenda ab? Laudantium tenetur vitae, debitis culpa
                laborum eveniet.
              </p>
            </div>
            <div className="col-lg-6 mt-5">
              <div className="className">
                <div className="d-flex gap-2">
                  <a href="" className="youtube">
                    <FaYoutube size={30} />
                  </a>
                  <a href="" className="instagram ">
                    <FaInstagram size={30} />
                  </a>
                  <a href="" className="instagram">
                    <FaTiktok size={30} />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit, sunt.
                </p>
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              @ 2024 Copyright
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
