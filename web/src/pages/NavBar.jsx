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
import Menu from '../images/menu.png'
import '../App.css'
import Logo from '../images/logo.png'
import Headlines from "./Headlines";
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import {FaFacebook, FaWhatsapp, FaTwitter, FaYoutube, FaArrowDown, FaSearch} from 'react-icons/fa'

export default function NavBar(props){
    const [formData, setFormData] = useState(
        {
            "search": ""
        }
    )
    const [activeTab, setActiveTab] = useState("tab1")
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const searchCriteria = [
        {
            "name": "news",
            "tab": "tab4"
        },
        {
            "name": "programs",
            "tab": "tab3"
        },
        {
            "name": "presenters",
            "tab": "tab6"
        },
        {
            "name": "about",
            "tab": "tab2"
        }
    ]
    const results = (search) => {
        if(search === ""){
            return (
                <div>
                    <p className="small text-start">0 search results found</p>
                </div>
            )
        } else {
            const SearchFilter = searchCriteria.filter((item)=>{ if(item.name.toLowerCase().includes(search.toLowerCase())){return item;}})
            const myFinalSearch = SearchFilter.map((item) => {return <TabItem activeTab={activeTab} setActiveTab={setActiveTab} show1={show} setShow1={setShow} id={item.tab} title={<h6>{item.name}</h6>}/>})
            return(
                <div className="py-4">{myFinalSearch}</div>
            )
        }
    }
    const handleShow = () => {
        setShow(true)
    }
    const handleShow1 = () => {
        setShow1(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    const handleClose1 = () => {
        setShow1(false)
    }
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
    const handleSearch = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...formData, [name]: value });
    }
    return(
        <div className="main">
        <div className="d-none d-md-block d-lg-block nav-top">
        <div className="row p-3 main justify-content-start">
            <div className="col-9 text-start">
                <img src={Logo} alt="logo" width="15%"/>
            </div>
            <div className="col-2 text-end">
                <h6 className="mt-3 px-3 border-end">advertise</h6>
            </div>
            <div className="col-1 text-end pt-2 rounded-2">
                <div className="d-flex flex-row justify-content-end">
                    <h6 className="px-2 border-end mt-2">search here</h6>
                <div className="px-2 pointer">
                    <FaSearch onClick={handleShow}/>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} className="mt-5 p-2">
                <Form className="p-2 px-3">
                    <Form.Label><h6>Search</h6></Form.Label>
                    <Form.Control autoFocus placeholder="search here" type="text" name="search" onChange={handleSearch}/>
                </Form>
                <div className="p-2 px-3">
                    <h6 className="small">results</h6>
                    {results(formData.search)}
                </div>
            </Modal>
            </div>
        </div>
        <div className="px-lg-5 p-3 row bg-pakwach2">
            <div className="col-lg-1 col-2">
                <TabItem id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab1} title={<span className="tab-item">Home</span>}/>
            </div>
            <div className="col-lg-1 col-2">
                <TabItem id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab3} title={<span className="tab-item">Programs</span>}/>
            </div>
            <div className="col-lg-1 col-2">
                <TabItem id="tab4" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab4} title={<span className="tab-item">News</span>}/>
            </div>
            <div className="col-lg-1 col-2">
                <TabItem id="tab5" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab5} title={<span className="tab-item">Sports</span>}/>
            </div>
            <div className="col-lg-1 col-2">
                <TabItem id="tab6" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab6} title={<span className="tab-item">Presenters</span>}/>
            </div>
            <div className="col-lg-1 col-2">
                <TabItem id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab2} title={<span className="tab-item">About</span>}/>
            </div>
        </div>
        <div className="d-flex flex-row p-2 presenters-index">
        <h6 className="mx-5 mt-2">entertainment | sports bank | culture | news and gossip ...</h6>
            <p className="small lh-1 text-start mx-5">sports and entertainment, culture and so much more here <br/> on 100.2 Pakwach fm</p>
            <h6 className="border-start mx-3 my-2 pt-2 px-3">get in touch</h6>
        </div>
        </div>
        <div className="d-sm-block d-md-none d-lg-none nav-top bg-pakwach1">
        <div className="row px-2 py-2 justify-content-start">
        <div className="col-2">
        <img src={Menu} alt="logo" width="60%" className="mt-2" onClick={handleShow1}/>
            <Modal show={show1} onHide={handleClose1} className="mt-5 p-0 w-75">
            <div className="py-5 px-4">
                <p className="small">Dashboard</p>
                <div className="py-2 border-top border-bottom">
                <div className="py-3"><TabItem id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab1} show1={show1} setShow1={setShow1} title={<span className="tab-item">Home</span>}/></div>
                <div>
                <TabItem id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab3} show1={show1} setShow1={setShow1} title={<span className="tab-item">Programs</span>}/></div>
                <div className="py-3">
                <TabItem id="tab4" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab4} show1={show1} setShow1={setShow1} title={<span className="tab-item">News</span>}/></div>
                <div>
                <TabItem id="tab6" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab5} show1={show1} setShow1={setShow1} title={<span className="tab-item">presenters</span>}/></div>
                <div className="py-3">
                <TabItem id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab2} show1={show1} setShow1={setShow1} title={<span className="tab-item">About</span>}/></div>
                </div>
                <p className="small pt-4 text-center"><FaFacebook size={20} className="mx-3"/><FaTwitter size={20}/><FaWhatsapp size={20} className="mx-3"/><FaYoutube size={20}/></p>
            </div>
            </Modal>
        </div>
            <div className="col-8">
            <img src={Logo} alt="logo" width="60%"/>
            </div>
        <div className="col-2 text-end">
        <FaSearch className="mt-3" onClick={handleShow}/>
        </div>
        </div>
        <div className="row">
            <Modal show={show} onHide={handleClose} className="mt-5 p-2">
                <Form className="p-2 px-3">
                    <Form.Label><h6>Search</h6></Form.Label>
                    <Form.Control autoFocus placeholder="search here" type="text" name="search" onChange={handleSearch}/>
                </Form>
                <div className="p-2 px-3">
                    <h6 className="small">results</h6>
                    {results(formData.search)}
                </div>
            </Modal>
        </div>
        <div className="d-flex flex-row p-3 presenters-index">
            <h6 className="small border rounded p-2">advertise</h6>
            <h6 className="lh-1 mx-3">entertainment | culture | news</h6>
        </div>
        </div>
        <div className="px-lg-5 px-4 py-3">
            <div>
                <TabContent id="tab1" activeTab={activeTab}><Home/></TabContent>
            </div>
            <div>
                <TabContent id="tab3" activeTab={activeTab} ><Programming/></TabContent>
            </div>
            <div>
                <TabContent id="tab4" activeTab={activeTab}><News/></TabContent>
            </div>
            <div>
                <TabContent id="tab5" activeTab={activeTab} ><Sports/></TabContent>
            </div>
            <div>
                <TabContent id="tab6" activeTab={activeTab}><Presenters/></TabContent>
            </div>
            <div>
                <TabContent id="tab2" activeTab={activeTab} ><About/></TabContent>
            </div>
        </div>
        <div className="p-lg-5 p-3 bg-pakwach1"><Headlines/></div>
        <div className="p-5 main">
        <div className="d-flex flex-row justify-content-start">
                <h6 className="text-start py-3">find out more news <br/> and sports, entertainment at our page</h6>
            </div>
            <div className="row p-lg-5 p-2 justify-content-start bg-white rounded-3">
                <div className="col-sm-12 col-lg-6 text-start">
                    <h6>quick links</h6>
                    <p className="lh-1"><span>Programming</span><br/><span>Presenters</span><br/><span>Sports</span><br/><span>News</span></p>
                    <h6 className="pt-5">location</h6>
                    <p className="lh-1 small">Plot 14 - Fred Jacan Lane, Wanglei B, Pakwach Town Council, P.O.BOX 131</p>
                    <p className="py-5 lh-1 small">{'\u00A9'}copyright@pakwachfm<br/>AllRightsReserved<br/>{new Date().getFullYear()}</p>
                </div>
                <div className="col-sm-12 col-lg-6 text-start">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                    <h6>Get in touch with us</h6>
                    <h6>administration</h6>
                    <p className="lh-1">+256-776-994301<br/>+256-753-994300</p>
                    <h6 className="pt-5">studio lines</h6>
                    <p className="lh-1">+256-786-223233<br/>+256-758991623</p>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                    <h6>sales</h6>
                    <p className="lh-1">+256-772-331128<br/>+256-704-331129</p>
                    <h6 className="pt-5">newsroom</h6>
                    <p className="lh-1">+256-781-878181</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center p-lg-5 p-4">
                <h6 className="text-start">follow pakwachfm on <br/> social media</h6>
                <FaFacebook size={20} className="mx-3"/><FaTwitter size={20}/><FaWhatsapp size={20} className="mx-3"/><FaYoutube size={20}/>
            </div>
        </div>
        </div>
    )
}