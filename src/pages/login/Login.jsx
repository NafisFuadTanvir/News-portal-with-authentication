import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { Authcontext } from "../../context/Authprovider";

const Login = () => {

  const {signIn}= useContext(Authcontext)

    const handleLogin=(e)=>{


        e.preventDefault();

        const email= e.target.email.value;
        const password= e.target.password.value;
        console.log(email,password)
        e.target.reset()

        signIn(email,password)
        .then(()=>{
          console.log("sign in successfull")
        })
        .catch((error)=>{
          console.log(error.message)
        })


    }
  return (
    <div>
      <Navbar></Navbar>

       <div className="mt-28">
        <h2 className="text-center text-2xl">Login your account</h2>


        <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>Don’t Have An Account ? <Link to="/register"><button className="btn btn-link btn-primary">Register</button></Link> </p>
            </form>
           

       </div>
    </div>
  );
};

export default Login;
