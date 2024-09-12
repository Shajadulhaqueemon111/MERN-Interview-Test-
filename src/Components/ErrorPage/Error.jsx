
import { NavLink } from "react-router-dom";


const Error = () => {

    const imageStyle={
        height:"600px",
        weight:"300px"
    }
    return (
        <div>
           <div>
            <img style={imageStyle} className="mx-auto w-3/4" src="https://i.ibb.co.com/JCd0c6x/pngtree-error-page-not-found-concept-illustration-flat-design-with-people-this-png-image-2038499.jpg" alt="" />

            </div> 

            <div className="mx-auto w-3/5">
                <NavLink to='/'>
                    <h1 className="btn btn-secondary btn-outline  text-center">Please-Go-To-Home-page</h1>
                </NavLink>
            </div>
        </div>
    );
};

export default Error;