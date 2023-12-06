import superapp from "../../assets/Super app.png";
import loginimage from "../../assets/loginimage.png";
import Forms from "./Forms";

const Login = () => {
    return (
      <div className='flex flex-row'>
          <div className=''>
              <h1 className="absolute text-white bottom-10 text-4xl font-bold px-[150px] py-24 w-[700px] items-center">Discover new things on Superapp</h1>
              <img className='h-screen w-[800px]' src={loginimage} alt="" />
          </div>
          <div className='bg-black w-[850px] flex flex-col items-center justify-center text-white leading-10'>
              <img src={superapp} alt="" />
              <h1>Create Your New Account</h1>
              <Forms />
          </div>
      </div>
    )
  }
  
  export default Login;