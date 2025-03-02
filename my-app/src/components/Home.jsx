import Frame8 from "./header/Frame8";
import Frame10 from "./Frame10";
import Frame31 from "./Frame31";
import Frame38 from "./footer/Frame38";
import PropTypes from "prop-types";
import "./Home.css";

const Home = ({ className = "" }) => {
  return (
    <div className={`home ${className}`}>
      <section className="main">
        <Frame8 />
        <Frame10 />
      </section>
      <section className="frame-wrapper">
        <Frame31 />
      </section>
      <Frame38 />
    </div>
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
