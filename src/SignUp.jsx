import { useNavigate } from "react-router-dom";
function SignUp() {
  let navigate = useNavigate();
  return (
    <div className="SignUp">
      <form action="" className="common_width">
        <h1>Just a few things... so we can help you!</h1>
        <div className="inputs_area">
          <div className="input_wrapper">
            <label htmlFor="">First Name</label>
            <input type="text" />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">Okay, what are you craving for?</label>
            <input type="text" />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">Town, State, Zip</label>
            <input type="text" />
          </div>
          <div className="input_wrapper">
            <label>Any dietary preference? </label>
            <input type="text" />
          </div>
          <div className="input_wrapper">
            <button
              onClick={(e) => {
                navigate("/Welcome");
              }}
            >
              💨 I’m ready for it!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
