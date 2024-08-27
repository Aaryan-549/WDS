import React from "react";
import JoinForm from "./teampage/JoinForm";
import Visionaries from "./teampage/Visionaries";
import Mission from "./teampage/Mission";
import MemberGrid from "./teampage/MemberGrid";

function TeamPage(){
    return(
        <div className="bg-[#1E1E1E]">
            <Visionaries/>
            <Mission/>
            <MemberGrid/>
            <JoinForm/>
        </div>
    )
}

export default TeamPage;