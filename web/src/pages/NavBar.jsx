import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TabItem from './TabItem'
import TabContent from "./TabContent";
import About from './About'
import Home from './PakwachFm'
import News from "./News";
import Sports from "./Sports";
import Programming from "./Programming";
import Presenters from "./Presenters";
import Events from "./Events";
import '../App.css'

export default function NavBar(props){
    const [activeTab, setActiveTab] = useState("tab1")

    const handleTab1 = () => {
        setActiveTab("tab1")
    }
    const handleTab2 = () => {
        setActiveTab("tab2")
    }
    const handleTab3 = () => {
        setActiveTab("tab3")
    }
    const handleTab4 = () => {
        setActiveTab("tab4")
    }
    const handleTab5 = () => {
        setActiveTab("tab5")
    }
    const handleTab6 = () => {
        setActiveTab("tab6")
    }
    return(
        <div className="main">
        <div className="px-5 py-3 row bg-pakwach">
            <div className="col-1">
                <TabItem id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab1} title={<span>Home</span>}/>
            </div>
            <div className="col-1">
                <TabItem id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab3} title={<span>Programming</span>}/>
            </div>
            <div className="col-1">
                <TabItem id="tab4" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab4} title={<span>News</span>}/>
            </div>
            <div className="col-1">
                <TabItem id="tab5" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab5} title={<span>Sports</span>}/>
            </div>
            <div className="col-1">
                <TabItem id="tab6" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab6} title={<span>Presenters</span>}/>
            </div>
            <div className="col-1">
                <TabItem id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab2} title={<span>About</span>}/>
            </div>
        </div>
        <div className="p-5 row">
            <div className="col">
                <TabContent id="tab1" activeTab={activeTab}><Home/></TabContent>
            </div>
            <div className="col">
                <TabContent id="tab3" activeTab={activeTab} ><Programming/></TabContent>
            </div>
            <div className="col">
                <TabContent id="tab4" activeTab={activeTab}><News/></TabContent>
            </div>
            <div className="col">
                <TabContent id="tab5" activeTab={activeTab} ><Sports/></TabContent>
            </div>
            <div className="col">
                <TabContent id="tab6" activeTab={activeTab}><Presenters/></TabContent>
            </div>
            <div className="col">
                <TabContent id="tab2" activeTab={activeTab} ><About/></TabContent>
            </div>
        </div>
        </div>
    )
}