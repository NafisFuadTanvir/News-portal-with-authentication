import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Latestnews = () => {
    return (
        <div className="flex border p-4 mt-7">

            <button className="btn btn-secondary">Latest News</button>
            <Marquee pauseOnHover={true} speed={200}>
              <Link to="/" className="mr-12">I can be a React component, multiple React components, or just some text............</Link>
              <Link to="/" className="mr-12">I can be a React component, multiple React components, or just some text............</Link>
              <Link to="/" className="mr-12">I can be a React component, multiple React components, or just some text............</Link>
              </Marquee>
        </div>
    );
};

export default Latestnews;