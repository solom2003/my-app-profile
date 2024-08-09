import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../nav/NavBar";



const cvpage = () => {
    return(
      <div className="bg-gray-800 h-full ">

        {/* title name */}
        <title>abdo_solom</title>

        <Navbar/> 

        <div className="flex justify-center mr-[200px]  h-[800px]">

        <div className="m-[300px]">
        <div className="absolute top-[96px] left-[550px] ">
            <p className="text-[#f94449]/100 h-[50px] w-[400px] flex justify-center items-center text-[30px] font-bold">Description</p>
            <p className="h-[150px] w-[400px] font-[18px] text-white font-bold">I am Abdul Rahman, and I am from Egypt. I work at the front desk and I have many skills in this field. I am also proficient in these skills, and I provide the service well and on time.</p>
        </div>
        
        {/* Eduction */}
        <div className="absolute top-[325px] left-[550px]">
            <p className="text-[#f94449]/100  h-[50px] w-[400px] flex justify-center items-center text-[30px] font-bold">Education</p>
            <p className="h-[150px] w-[400px] font-[18px] text-white font-bold">I am currently a student studying, administrative systems and information, at the Higher Institutes for Specific Studies in Al-Haram “http://www.hissgiza.com/”.</p>
        </div>
       </div>


        <div className=" w-[250px] h-[700px]  absolute  left-[200px] bg-gray-800 h-full  ">

            <div className=" flex  justify-center flex-col mt-4">
        
                <p className="text-[#f94449]/100 text-[35px] font-bold">About Me</p>
                <p className="text-white/100 text-[23px]">Name : Abdelrhman</p>
                <p className="text-white/100 text-[23px]">Age : 20</p>
                <p className="text-white/100 text-[15px] text-[20px]">Education : College student</p>
            
            </div>
            <div className=" flex  justify-center flex-col mt-4">
        
                <p className="text-[#f94449]/100 text-[35px] font-bold">Skills</p>
                
                <ul className="text-white/100 text-[20px] font-bold">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>NEXT.JS</li>
                <li>REDUX</li>
                <li>GIT and GITHUB</li>
                <li>REACT.JS</li>
                </ul>
            
            </div>
            <div className=" flex  justify-center flex-col mt-4">
        
                <p className="text-[#f94449]/100 text-[35px] font-bold">Contect Me</p>
                <ul className="text-white/100 text-[20px] font-bold">
                <li>0115 <span className="text-[#f94449]/100">493</span> 2458</li>
                <li className="text-[15px]">abdosolom.2003<span className="text-[#f94449]/100">@</span>gmail.com</li>
                <li className="flex flex-row items-center"><span><FaGithub /></span><a href="https://github.com/solom2003">solom<span className="text-[#f94449]/100">2003</span></a></li>
                <li className="flex flex-row items-center"><span><FaLinkedin />
                </span><a href="https://www.linkedin.com/in/abdelrhman-lotfy-08380520b/">  Abdelrhman <span className="text-[#f94449]/100">Lotfy</span></a></li>
                <li>Egypt, <span className="text-[#f94449]/100">Giza</span></li>
                </ul>
            
            </div>
        </div>
      </div>
     </div>
     );
}

export default cvpage;