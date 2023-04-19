import React from "react";
import CustomInput from "../component/CustomInput";
const Addbrand =()=>{
    return(
        <div>
            <h3 className="mb-4 title" >Add Brand</h3>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Brand Category"/>
                    <button className="btn btn-success border-0 rounded-3 my-5"
                            type="submit"
                    >
                        Add Brand Category
                    </button>
                </form>
            </div>
        </div>
    )
};
export default Addbrand;