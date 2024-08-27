import React from "react";
import JoinForm from "./teampage/JoinForm";
import Visionaries from "./teampage/Visionaries";
import Mission from "./teampage/Mission";
import MemberGrid from "./teampage/MemberGrid";
import MemberGridMobile from "./teampage/MemberGridMobile";

function TeamPage(){
    return(
        <div className="bg-[#1E1E1E]">
            <Visionaries/>
            <Mission/>
            <div className='hidden md:block'><MemberGrid /></div>
            <div className='flex md:hidden'><MemberGridMobile /></div>
            <JoinForm/>
        </div>
    )
}

export default TeamPage;