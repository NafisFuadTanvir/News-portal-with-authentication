import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/navbar/Navbar";
import Rightsidenav from "../shared/rightsidenav/Rightsidenav";




const Detailsnews = () => {

    const {id}= useParams();
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">

                <div className="col-span-3">
                    <h2 className="text-5xl mb-10">This is News details page</h2>
                    {id}
                </div>

                <div>
                    <Rightsidenav></Rightsidenav>
                </div>

            </div>
        </div>
    );
};

export default Detailsnews;