import React from "react";
import MemberCard from "./MemberCard";
import Mars from "./images/mars.png"
import Cross from './images/Group 8674-min.png'
import Sachin from './members/sachin.png'
import Ashish from './members/ashish.png'
import Divij from './members/divij.png'
import Anant from './members/anant.png'
import Shyam from './members/shyam.png'
import Madhav from './members/madhav.png'
import Manish from './members/manish.png'
import Jay from './members/Jay.png'
import Rhitam from './members/rhitam.png'
import Astik from './members/astik.png'
import Sahil from './members/sahil.png'
import Shaurya from './members/shaurya.png'
import Ekam from './members/ekam.png'
import Rachit from './members/rachit.png'
import Mrinal from './members/mrinal.png'
import Abhidyu from './members/abhidyu.png'
import Nisht from './members/nisht.png'
import Raghav from './members/raghav.png'
import Yashvi from './members/yashvi.png'

const MemberGrid = () => {
    return(
        <div className="flex flex-col items-center mt-20 bg-cover bg-center" style={{ backgroundImage:`url(${Cross})`, backgroundSize:'100%'}} loading='lazy'>
            <button className="bg-[#FE6E3A] w-72 h-14 text-[#1E1E1E] py-4 px-4 rounded-lg font-bold nulshock text-2xl mb-40 hover:bg-orange-500">
        JOIN THE CREW
      </button>
            <h2 className="text-4xl text-white font-bold nulshock mb-5 ">MINDS BEHIND THE MAGIC</h2>
            <div className="flex justify-center space-x-6 mt-12">
                <MemberCard image={Ashish} name="DR.ASHISH SINGLA" role="President"/>
                <MemberCard image={Sachin} name="DR.SACHIN KANSAL" role="Vice President"/>
            </div>
            <div className="flex justify-center space-x-6 mt-12">
                <MemberCard image={Divij} name="DIVIJ GOEL" role="Overall Student Coordinator"/>
                <MemberCard image={Anant} name="ANANT TOMAR" role="Overall Student Coordinator"/>
                <MemberCard image={Shyam} name="SHYAM SUNDAR" role="Overall Student Coordinator"/>
                <MemberCard image={Madhav} name="MADHAV KATYAL" role="Overall Student Coordinator"/>
            </div>
            <div className="flex justify-between items-center w-full mt-12 px-80">
                <MemberCard image={Manish} name="MANISH JAIN" role="General Secretary"/>
                <img src={Mars} className="size-80 mt-10"></img>
                <MemberCard image={Jay} name="JAY DHAMIJA" role="General Secretary"/>
            </div> 
            <div className="flex justify-center space-x-6 mt-12">
                <MemberCard image={Sahil} name="SAHIL SHARMA" role="Joint Secretary"/>
                <MemberCard image={Astik} name="ASTIK THUKRAL" role="Joint Secretary"/>
                <MemberCard image={Rhitam} name="RHITAM DUTTA" role="Joint Secretary"/>
            </div>
            <div className="flex justify-center space-x-6 mt-12">
                <MemberCard image={Shaurya} name="SHAURYA AGGARWAL" role="Mechanical Lead"/>
                <MemberCard image={Ekam} name="EKAM SINGH" role="Mechanical Lead"/>
            </div>
            <div className="flex justify-center space-x-6 mt-12">
                <MemberCard image={Rachit} name="RACHIT GULIANI" role="Electronics Lead"/>
                <MemberCard image={Mrinal} name="MRINAL SOOD" role="Electronics Lead"/>
                <MemberCard image={Abhidyu} name="ABHIDYU MAHAJAN" role="Electronics Lead"/>
            </div>
            <div className="flex justify-center space-x-6 mt-12">
                <MemberCard image={Nisht} name="NISHIT MITTAL" role="Automation Lead"/>
            </div>
            <div className="flex justify-center space-x-6 mt-12">
                <MemberCard image={Raghav} name="RAGHAV GOEL" role="Non-Tech Lead"/>
                <MemberCard image={Yashvi} name="YASHVI KUMAR" role="Non-Tech Lead"/>
            </div>
        </div>
    )
}

export default MemberGrid;