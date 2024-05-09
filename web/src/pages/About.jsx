import React from "react";
import StudioHouse from '../images/HOME.jpg'

export default function About(){
    return(
        <div className="top">
            <div className="row">
                <div className="col-lg-9 col-sm-12">
                    <div className="row bg-white rounded-2">
                        <div className="col-lg-6 col-sm-12">
                        <img src={StudioHouse} width="60%" height="100%"/>
                        </div>
                        <div className="col-lg-6 col-sm-12 text-start p-lg-5 p-3">
                            <h6 className="px-3 border-start">since 2014</h6>
                            <h5 className="lh-1 mt-2">
                                Since inception in 2014, Pakwach FM set a very competitive atmosphere in 
                                radio broadcasting in the West Nile Area becoming the leading radio station 
                                in Alur and Pakwach Districts, and 2nd highest listenend to station in the 
                                whole of Westnile in 2017. Pakwach FM is now 7 years to-date.
                            </h5>
                        </div>
                    </div>
                    <div className="row bg-white rounded-2 mt-2  border-top border-5 border-black">
                    <h6 className="p-3 presenters-index w-25 d-none d-md-block d-d-lg-block">pakwach fm | profile</h6>
                    <h6 className="p-3 presenters-index w-75 d-sm-block d-md-none d-d-lg-none">pakwach fm | profile</h6>
                        <div className="row p-lg-5 p-3">
                            <div className="col-lg-6 col-sm-12 text-start">
                            <h6 className="px-3 border-start mt-3">target audience</h6>
                            <h5 className="lh-1 mt-2 small">
                            We target age group between 12 – 59 years considering most of these are decision makers, youths, parents, business community, civil servants and farmers who are consumers of a vast array of goods and services.
                            We have programs tailored for Women, Youth, Persons with disabilities, Farmers and the business community.
                            Our daily talk shows center on Economic Empowerment, Health, Education, cultural elements and Gender Issues.
                            </h5>
                            </div>
                            <div className="col-lg-6 col-sm-12 text-start">
                            <h6 className="px-3 border-start mt-3">programming</h6>
                            <h5 className="lh-1 mt-2 small">
                            We operate 24 hours a day seven days a week having 45% Music and a 55% talk programming day. The formats consist of vocals, discussions, debate and music. The talk reflects the lives and needs of our listener while the music reflects the popularity of the rich African culture among other music genres. We focus more on local content at 60%, National content at 30% and international at 10%.
                            </h5>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-white rounded-2 p-0 mt-3">
                        <div className="row p-0 m-0">
                            <div className="col-lg-3 p-lg-5 p-3 col-sm-12 text-start">
                            <h6 className="px-3 border-start mt-3">coverage</h6>
                            <h5 className="lh-1 mt-2 small">
                            Pakwach FM broadcasts from studios at Pakwach Town Council, on frequency 100.2 on a 200KM Radius reaching the following major towns and Districts: Pakwach, Nebbi, Zombo, Nwoya, Amuru, Kiryandongo, Buliisa, Biiso, Wanseko Madi Okollo and Parts of Arua
                            </h5>
                            </div>
                            <div className="col-lg-9 col-sm-12 text-start">
                            <iframe src="https://www.google.com/maps/d/embed?mid=1Y76b_MUXRRC5ZUHfQ8F_PCKhluiAm_oZ" width="100%" height="100%"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 px-3 text-start">
                    <div className="row bg-white rounded-2 p-lg-5 p-3">
                        <h6 className="px-3 border-start">mission</h6>
                            <h5 className="lh-1 mt-2 small">
                            To inform, educate, entertain and empower our diverse audience towards positive action
                            </h5>
                            <h6 className="px-3 border-start mt-3">vision</h6>
                            <h5 className="lh-1 mt-2 small">
                            An informed and knowledgable Nothern Uganda comprised of Economically developed and Socially transformed Communities
                            </h5>
                            <h6 className="px-3 border-start mt-3">objective</h6>
                            <h5 className="lh-1 mt-2 small">
                            To be a self-sustaining broadcasting institution and capacity builder for implementing agencies in the communities we serve
                            </h5>
                    </div>
                    <div className="row bg-white rounded-2 p-lg-5 mt-2 p-3">
                        <h6 className="px-3 border-start">why pakwach fm</h6>
                            <h5 className="lh-1 mt-2 small">
                            Radio is the number one mass media vehicle in our region of over 3 million daily listeners who are consumers of a vast array of products and services. We use automated up-to-date software and independent monitoring firms (IPSOS & REALFORGE) to guarantee value for money and timely delivery of your messages and campaigns.
                            Pakwach FM is the only radio station tailor made for this community providing an established platform from which you can, at minimal cost, bring your information, products and services to the attention of the region’s urban and rural communities. Our marketing office welcomes all opportunities to engage with you.
                            </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}