import React from "react";
import CustomInput from "../component/CustomInput";
const Addcolor =()=>{
    return(
        <div>
            <h3 className="mb-4 title">Add Color Category</h3>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Color Category"/>
                    <button className="btn btn-success border-0 rounded-3 my-5"
                            type="submit"
                    >
                        Add Color Category
                    </button>
                </form>
            </div>
        </div>
    )
};
export default Addcolor;