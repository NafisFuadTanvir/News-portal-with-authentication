import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { Authcontext } from "../../context/Authprovider";


const Register = () => {

  const{createUser}= useContext(Authcontext)

    const handleRegister=(e)=>{

        e.preventDefault();
        const name= e.target.name.value;
        const email= e.target.email.value;
        const password= e.target.password.value;
        console.log(name,email,password)
          
        e.target.reset()
        //creating user
          createUser(email,password)
          .then(result=>{
            console.log(result.user)
          })
          .catch((error)=>{
            console.error(error)
          })

        
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-24">
        <h2 className="text-center text-2xl">Register your account</h2>


        <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
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
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Already Have An Account ? <Link to="/login"><button className="btn btn-link btn-primary">Login</button></Link> </p>
            </form>
           

       </div>
            
        </div>
    );
};

export default Register;