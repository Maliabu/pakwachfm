import React from "react";
import Image from '../images/IMG-20230224-WA0017.jpg'
import Transport from '../images/3.jpg'

export default function PakwachFm(props){
    return(
        <div className="top">
            <div className="row mt-5">
            <div className="col-lg-9 col-sm-12 bg-white p-0 rounded-2">
                <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <img src="https://pbs.twimg.com/media/GGcLjksXcAA-bJe?format=jpg&name=small" width="100%" height="100%"/>
                </div>
                <div className="col-lg-4 col-sm-12 px-lg-5 px-5 pt-5 text-start">
                <h5 className="lh-1 text-start">
                Pakwach District leaders decry corruption in fisheries enforcement</h5>
                    <h6 className="text-start mt-3">16 Feb 2024 | PAKWACH FM</h6><div className="d-flex flex-row mt-3">
                    <a href="https://twitter.com/hashtag/PakwachFm?src=hashtag_click"><h6>#PakwachFm</h6></a></div>
                    <div>
                    <img src="https://pbs.twimg.com/media/GFJUCwUXUAAljSz?format=jpg&name=small" width="100%" height="100%"/>
                    <h5 className="lh-1 my-3">Pakwach District calls for a General Hospital to address the health challenges</h5>
                    <h6>31 Jan 2024 | PAKWACH FM</h6>
                    <div className="d-flex flex-row mt-3">
                    <a href="https://twitter.com/hashtag/PakwachFm?src=hashtag_click"><h6>#PakwachFm</h6></a></div>
                    <div></div>
                    </div>
                </div>
                </div>
            </div>
                <div className="col-lg-3 px-4">
                <div className="row bg-white  border-top border-5 border-black p-lg-5 p-3 rounded-2 d-none d-md-block d-lg-block">
                    <h5 className="text-start lh-1">advertise here and let everyone see your ad or business</h5>
                    <h6 className="p-2 border-start">get in touch</h6>
                </div>
                <div className="row presenters-index p-5 rounded-2 mt-2 pointer" onClick={props.handletab6}>
                <h6 className="text-start my-3">in studio with you.... | find out who is bringing you the best gossip | the best music...</h6>
                    <h6 className="mt-5 text-start pt-5">presenters</h6>
                    <h6 className=" p-2 border-start">check em' out</h6>
                </div>
                </div>
            </div>
                <div className="mt-3 rounded-2 bg-white border-top border-5 border-black">
                <h6 className="p-3 presenters-index w-25 d-none d-md-block d-d-lg-block">pakwach fm | services</h6>
                <h6 className="p-3 presenters-index w-75 d-sm-block d-md-none d-d-lg-none">pakwach fm | services</h6>
                <div className="p-5">
                    <div className="row">
                        <div className="col-lg-4 p-lg-5 text-start">
                        <h6 className="border-start px-3">advertising</h6>
                            <h5 className="lh-1">All advertisements including Campaign ads, Health, Banking and Finance, Beverages ...</h5>
                        </div>
                        <div className="col-lg-4 p-2 text-start">
                        <div className="row p-lg-5">
                            <h6 className="border-start px-3">community dialogues</h6>
                            <h5 className="lh-1">We offer a platform for communities to have open, respectful, and solution oriented conversations about health-related issues...</h5>
                            </div>
                        </div>
                        <div className="col-lg-4 p-lg-5 text-start">
                            <h6 className="border-start px-3">talk shows</h6>
                            <h5 className="lh-1">Pakwach FM offers various talk show programs with the very best setting and presentations</h5>
                        </div>
                    </div>
                    <div className="p-3 d-flex flex-row presenters-index rounded-2">
                        <p className="lh-1 small mx-lg-5 mx-2 text-start d-none d-d-md-block d-lg-block">we offer lots of services whatever fits your pick, get in touch with us and we shall guarantee the best for you. Dj mentions, broadcasting both indoor and outdoor... and so much more</p>
                        <h6 className="p-2 border-start">more services</h6>
                    </div>
                </div>
                </div>
        </div>
    )
}