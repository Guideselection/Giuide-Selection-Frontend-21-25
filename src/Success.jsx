import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Success(){


    const navigate = useNavigate()

    localStorage.removeItem('token_for_first_time');
      localStorage.removeItem('token');
      localStorage.removeItem('GuideName');
      localStorage.removeItem("GuideMailId")
      localStorage.removeItem("userMailId");
      localStorage.removeItem('newpassword');
      localStorage.removeItem('userMailId');
      localStorage.removeItem('GuideId');

      const GoLogin=()=>{
        navigate('/login')
      }




    return(
        <>
        <div className="text-lg border-4 m-2 text-white bg-red-800 text-center align-middle justify-center py-10">
            <h1>You have successfully completed filling the form.</h1>
            <h1>Contact your project coordinator for further process.</h1>
            <h1>Thank you</h1>
            <button onClick={GoLogin} className="p-4 bg-white text-black mt-4">Back to Login</button>
            </div>
        </>
    )
}