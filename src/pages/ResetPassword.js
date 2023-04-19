import React from "react";
import CustomInput from "../component/CustomInput";

const ResetPassword =()=>{
    return(
        <div  className="py-5" style={{background: "#ffd333",midHeight:"100vh"}}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <h3 className="text-center title">Reset Password</h3>
                <p className="text-center title">Please Enter your new Password</p>
                <form action=" ">
                    <CustomInput type="password" placeholder="New Password" id="pass"/>
                    <CustomInput type="password"  placeholder="Confirm Password" id="confirm pass"/>
                    <button className="border-0 px-3 py-2 text-white fu-bold w-100"
                            style={{background:"#ffd333"}}
                            type="submit">
                        Reset Password
                    </button>
                </form>

            </div>
        </div>
    )
};
export default ResetPassword;