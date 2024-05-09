import React from "react";
import Image from '../images/IMG-20230224-WA0017.jpg'
import Transport from '../images/3.jpg'

export default function News(){
    return(
        <div className="top">
            <div className="row mt-5">
            <div className="col-lg-9 col-sm-12 bg-white p-0 rounded-2">
                <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <img src="https://pbs.twimg.com/media/GGcLjksXcAA-bJe?format=jpg&name=small" width="100%" height="100%"/>
                </div>
                <div className="col-lg-4 col-sm-12 px-lg-5 px-3 pt-5 text-start">
                <h5 className="lh-1 text-start p-3">
                Pakwach District leaders decry corruption in fisheries enforcement, accusing the Fisheries Protection Unit of unjust practices. They highlighted officers' alleged extortion of money from locals and demanded the release of confiscated boats and detainees.</h5>
                    <h6 className="text-start mt-3 px-3">16 Feb 2024 | PAKWACH FM</h6><div className="d-flex flex-row mt-3 mx-3">
                    <a href="https://twitter.com/hashtag/PakwachFm?src=hashtag_click"><h6>#PakwachFm</h6></a></div>
                    <div>
                    </div>
                </div>
                </div>
            </div>
                <div className="col-lg-3 px-4 text-start">
                <div className="row bg-white border-top border-5 border-black p-lg-5 p-3 rounded-2">
                <img src={Transport} width="100%" height="100%"/>
                    <h5 className="lh-1 mt-3">Facts/News Update: What is the state of public transport now in Pakwach?</h5>
                    <h6>Feb 2023 | PAKWACH FM</h6>
                    <div className="d-flex flex-row mt-3">
                    <a href="https://twitter.com/hashtag/PakwachFm?src=hashtag_click"><h6>#PakwachFm</h6></a></div>
                </div>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-lg-9 bg-white rounded p-5">
                    <div className="row">
                        <div className="col-lg-6">
                        <img src="https://pbs.twimg.com/media/GFJUCwUXUAAljSz?format=jpg&name=small" width="100%" height="100%"/>
                    </div>
                        <div className="col-lg-6 text-start">
                        <h6 className="mt-2">NEWS IN FOCUS</h6>
                    <h5 className="lh-1">
                    Pakwach District calls for a General Hospital to address the health challenges and burdens facing the district. Health Minister Dr. Ruth Jane Aceng urges swift relocation of Health Center Four and availability of vast titled land.</h5>
                    <h6>31 Jan 2024 | PAKWACH FM</h6>
                    <div className="d-flex flex-row mt-5">
                    <a href="https://twitter.com/hashtag/MamwaUpdate?src=hashtag_click"><h6>#MamwaUpdate</h6></a>
                    <a href="https://twitter.com/hashtag/PakwachFm?src=hashtag_click" className="mx-3"><h6>#PakwachFm</h6></a></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 text-start">
                    <div className="row p-4 bg-white mx-2 rounded">
                        <img src="https://pbs.twimg.com/media/GGOQl_XXoAEHihx?format=jpg&name=small" width="100%" height="80%"/>
                        <h5 className="lh-1 mt-2">
                        General Taban Amin, aka "Igweee," to attend belated NRM Day in Pakwach District as Guest of Honor</h5>
                    <h6>13 Feb 2023 | PAKWACH FM</h6><div className="d-flex flex-row mt-3">
                    <a href="https://twitter.com/hashtag/PakwachFm?src=hashtag_click"><h6>#PakwachFm</h6></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}