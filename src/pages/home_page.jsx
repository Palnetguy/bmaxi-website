import NavBar from "../componets/navbar";
import "../styles/home_page.css";
import logo from "../assets/images/logo.svg";
import aboutUsImg from "../assets/images/about-us-im.jpeg";
// import sup1 from "../assets/images/Union.svg";
import sup1 from "../assets/images/Vector.svg";
import sup2 from "../assets/images/Vector (1).svg";
import sup3 from "../assets/images/Group 66.svg";
import sup4 from "../assets/images/Layer_1.svg";
import sup5 from "../assets/images/Clip path group.svg";
import sup6 from "../assets/images/layer1.svg";

import logowhite from "../assets/images/logo white.svg";
import contactBg from "../assets/images/contactBg.jpeg";
import union1 from "../assets/images/Union (1).svg";
import union2 from "../assets/images/Union (2).svg";
import union3 from "../assets/images/Union (3).svg";

import printselect from "../assets/images/print select.svg";
import printunselect from "../assets/images/print unset.svg";
import firstservSect from "../assets/images/first serve select.svg";
import firstunservSect from "../assets/images/first serve unsect.svg";
import brandsect from "../assets/images/brand select.svg";
import brandunsect from "../assets/images/brand unselect.svg";

import firstservIm from "../assets/images/first serve im.jpeg";
import brandIm from "../assets/images/brand select im.jpeg";
import printIm from "../assets/images/print select im.jpeg";

import locationIco from "../assets/images/location_on.svg";
import emailIco from "../assets/images/email.svg";
import callIco from "../assets/images/call.svg";
import { useState } from "react";

const HomePage = () => {
  return (
    <div className="home_page">
      <div className="top">
        <NavBar />
        <Intro />
      </div>
      <div className="more">
        <AboutUs />
        <Sevices />
        <Partners />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
};

const Intro = () => {
  return (
    <section className="intro">
      <div className="contain">
        <h1>Welcome to </h1>
        <img src={logo} alt="" />
        <p>
          Where <span>Creativity</span> Meets <span>Precision.</span>
        </p>
        <button>Talk with us</button>
        <button>Know About Us</button>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <div className="about_us">
      <h1 className="title">About Us </h1>
      <div className="info">
        <div className="img">
          <img src={aboutUsImg} alt="" />
        </div>
        <div className="text">
          <p>
            At <span className="orgtext">Bmaxi</span>{" "}
            <span className="bltext">Graphics</span> Ltd, we blend creativity
            with precision to craft unique visual experiences. Our team of
            expert designers is dedicated to bringing your brand’s vision to
            life, whether it’s through rebranding, launching a new product, or
            enhancing your digital presence. Let us be the creative partner that
            transforms your ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
};
const Sevices = () => {
  const [curent_open, setcurent_open] = useState(1);

  const handleSetCurrentOpen = (e) => {
    setcurent_open(e);
  };

  return (
    <div className="services">
      <h1 className="title">Services</h1>

      <div className="service">
        <div className={`${curent_open === 1 ? "one" : "closed"}`}>
          <img src={union1} alt="" />
          <div className="nav">
            <div className="icon" onClick={() => handleSetCurrentOpen(1)}>
              <img src={firstservSect} alt="" />
            </div>
            <div className="icon un" onClick={() => handleSetCurrentOpen(2)}>
              <img src={brandunsect} alt="" />
            </div>
            <div className="icon un" onClick={() => handleSetCurrentOpen(3)}>
              <img src={printunselect} alt="" />
            </div>
          </div>
          <div className="content">
            <div className="img">
              <img src={firstservIm} alt="" />
            </div>
            <div className="info">
              <h2>Designing</h2>
              <p>
                At <span className="orgtext">Bmaxi</span>{" "}
                <span className="bltext"> Graphics </span>
                Ltd, graphic design is about crafting visuals that connect and
                communicate. We blend creativity with precision, ensuring every
                design element reflects your brand’s identity and resonates with
                your audience. From logos to full branding, we bring your vision
                to life with thoughtful, impactful design.
              </p>
            </div>
          </div>
        </div>
        <div className={`${curent_open === 2 ? "one" : "closed"}`}>
          <img src={union2} alt="" />
          <div className="nav">
            <div className="icon un" onClick={() => handleSetCurrentOpen(1)}>
              <img src={firstunservSect} alt="" />
            </div>
            <div className="icon" onClick={() => handleSetCurrentOpen(2)}>
              <img src={brandsect} alt="" />
            </div>
            <div className="icon un" onClick={() => handleSetCurrentOpen(3)}>
              <img src={printunselect} alt="" />
            </div>
          </div>
          <div className="content">
            <div className="img">
              <img src={brandIm} alt="" />
            </div>
            <div className="info">
              <h2>Branding</h2>
              <p>
                At <span className="orgtext">Bmaxi</span>{" "}
                <span className="bltext">Graphics </span>
                Ltd, graphic design is about crafting visuals that connect and
                communicate. We blend creativity with precision, ensuring every
                design element reflects your brand’s identity and resonates with
                your audience. From logos to full branding, we bring your vision
                to life with thoughtful, impactful design.
              </p>
            </div>
          </div>
        </div>
        <div className={`${curent_open === 3 ? "one" : "closed"}`}>
          <img src={union3} alt="" />
          <div className="nav">
            <div className="icon un" onClick={() => handleSetCurrentOpen(1)}>
              <img src={firstunservSect} alt="" />
            </div>
            <div className="icon un" onClick={() => handleSetCurrentOpen(2)}>
              <img src={brandunsect} alt="" />
            </div>
            <div className="icon" onClick={() => handleSetCurrentOpen(3)}>
              <img src={printselect} alt="" />
            </div>
          </div>
          <div className="content">
            <div className="img">
              <img src={printIm} alt="" />
            </div>
            <div className="info">
              <h2>Printing</h2>
              <p>
                At <span className="orgtext">Bmaxi</span>{" "}
                <span className="bltext"> Graphics </span>
                Ltd, our printing service transforms your designs into
                high-quality, tangible products. From business cards to
                brochures, we ensure vibrant colors and sharp details in every
                print. With a focus on precision and quality, we bring your
                visual concepts to life with excellence and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Partners = () => {
  return (
    <div className="partners">
      <h1 className="title">
        Proudly <span className="bltext">Partnered</span> With
      </h1>
      <div className="partners_conatiner">
        <div className="part">
          <img src={sup1} alt="" />
        </div>
        <div className="part">
          <img src={sup2} alt="" />
        </div>
        <div className="part">
          <img src={sup3} alt="" />
        </div>
        <div className="part">
          <img src={sup4} alt="" />
        </div>
        <div className="part">
          <img src={sup5} alt="" />
        </div>
        <div className="part">
          <img src={sup6} alt="" />
        </div>
      </div>
    </div>
  );
};

const GetInTouch = () => {
  return (
    <div className="get_in_touch">
      <h1>
        GET IN <span>TOUCH</span>
      </h1>
      <div className="contact_form">
        <div className="info">
          <h2>Let’s connect</h2>
          <p>
            We’d love to hear from you! Whether you have a question, want to
            discuss a project, or just want to say hello, feel free to reach
            out.
          </p>
          <form action="">
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone number" />
            <textarea type="text" placeholder="First Name"></textarea>
            <button>Send</button>
          </form>
        </div>

        <div className="img">
          <img src={contactBg} alt="" />
          <img src={logowhite} alt="" />
        </div>
      </div>
      <div className="contact_links">
        <span></span>
        <div className="links">
          <div className="link"></div>
          <div className="link"></div>
          <div className="link"></div>
          <div className="link"></div>
          <div className="link"></div>
        </div>
        <div className="up_btn"></div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" />
      <div className="info">
        <div className="if">
          <div className="icn">
            <img src={locationIco} alt="" />
          </div>
          <p>Nasser Road Mall, Kampala, Uganda</p>
        </div>
        <div className="dash"></div>
        <div className="if">
          <div className="icn">
            <img src={emailIco} alt="" />
          </div>
          <p>bmaxiprint18@gmail.com</p>
        </div>
        <div className="dash"></div>
        <div className="if">
          <div className="icn">
            <img src={callIco} alt="" />
          </div>
          <p>+256 703 891474</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
