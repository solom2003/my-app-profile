import { FaGithubSquare } from "react-icons/fa";
import Navbar from "../nav/NavBar"
import Img from './image.jpg'
import Image from 'next/image'

const homepage = () => {
    return(
      <>
     
      {/* title name */}
      <title>abdo_solom</title>

      

      <Navbar/>



        <div className="bg-gray-800 h-screen ">
          <div className="text-white flex flex-row place-content-center">

            <div className="mt-10">
                <h4 className="font-bold">Front_end Developer</h4>
                <p style={{fontSize: 50}} className="font-bold ">Hallo I'm</p>
                <h1 style={{fontSize: 50}} className="text-[#f94449]/100 font-extrabold tracking-widest">Abdelrhamn</h1>
                <p className="font-medium mt-6">hi, i'm Web Front_Developer</p>
                <p className="font-medium mb-6">and i have exprinens in front end and i have a good skils</p>

               <button className="rounded-lg border-2 border-[#f94449]/100 text-[#f94449]/100 w-60 h-12 font-medium mt-6 hover:bg-[#f94449]/100 hover:text-white "><a href="https://github.com/solom2003">Go To Git Gub</a></button>

            </div>
            
            {/* <div className="mt-20 ml-20"> */}

                 <div  className="rounded-full h-[350px] w-[350px]">

                  <Image 
                    src={Img}
                    className="h-[350px] w-[350px] mt-[50px] ml-[20px] rounded-full border-[4px] border-[#f94449]/100 border-soled"
                    alt={""}  
                  />

                 </div>
                 
            </div>
                 
          </div>


      </>
    );
}
export default homepage;