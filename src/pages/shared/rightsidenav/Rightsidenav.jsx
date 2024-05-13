import {  FaFacebook, FaGithub, FaGoogle, FaInstagram,  FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
const Rightsidenav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="font-bold">Login with</h2>
        <div>
            
          <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
            Login with Google
          </button>
          
        </div>
        <div>
          <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>
            Login with Github
          </button>
          
        </div>
      </div>
      <div className="p-4  mb-6">
        <h2 className="font-bold">Find us on</h2>
        <div className="border mt-2 rounded-t-lg">
            <a href="https://www.facebook.com/na.fis.5494360/"> <button className="btn btn-outline w-full">
            <FaFacebook></FaFacebook>
            Facebook
          </button></a>
         
          
        </div>
        <div className="border ">
          <button className="btn btn-outline w-full">
            <FaTwitter></FaTwitter>
            Twitter
          </button>
          
        </div>
        <div className="border rounded-b-lg">
          <button className="btn btn-outline w-full">
            <FaInstagram></FaInstagram>
            Instagram
          </button>
          
        </div>
      </div>

      <div className="p-4 space-y-3 mb-6">
        <h2 className="font-bold text-xl">Q-Zone</h2>
        <div>
            <img src={qZone1} alt="" />
         
        </div>
        <div>
        <img src={qZone2} alt="" />
          
        </div>

        <div>
         
        <img src={qZone3} alt="" />
        </div>
      </div>


    </div>
  );
};

export default Rightsidenav;
