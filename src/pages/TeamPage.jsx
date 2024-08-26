import React from "react";
import JoinForm from "./teampage/JoinForm";
import Visionaries from "./teampage/Visionaries";
import Mission from "./teampage/Mission";
import MemberCard from "./teampage/MemberCard";

function TeamPage(){
    return(
        <div className="bg-[#1E1E1E]">
            <Visionaries/>
            <Mission/>
            <MemberCard/>
            <JoinForm/>
        </div>
    )
}

export default TeamPage;