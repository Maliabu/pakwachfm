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
import Menu from '../images/menu.png'
import Community from "./Community";
import '../App.css'
import Logo from '../images/logo.png'
import Headlines from "./Headlines";
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Advertise from "./Advertise";
import {FaFacebook, FaWhatsapp, FaTwitter, FaYoutube, FaSearch, FaArrowDown, FaRegObjectGroup, FaPeopleCarry, FaPeopleArrows, FaUsers, FaMicrophoneAlt} from 'react-icons/fa'

export default function NavBar(props){
    const [formData, setFormData] = useState(
        {
            "search": ""
        }
    )
    const [activeTab, setActiveTab] = useState("tab1")
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
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
                <div className="pt-4">{myFinalSearch}</div>
            )
        }
    }
    const sendMail = () => {}
    const handleShow = () => {
        setShow(true)
    }
    const handleShow1 = () => {
        setShow1(true)
    }
    const handleShow2 = () => {
        setShow2(true)
    }
    const handleShow3 = () => {
        setShow3(true)
    }
    const handleShow4 = () => {
        setShow4(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    const handleClose1 = () => {
        setShow1(false)
    }
    const handleClose2 = () => {
        setShow2(false)
    }
    const handleClose3 = () => {
        setShow3(false)
    }
    const handleClose4 = () => {
        setShow4(false)
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
    const handleTab7 = () => {
        setActiveTab("tab7")
    }
    const handleTab10 = () => {
        setActiveTab("tab10")
    }
    const handleSearch = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...formData, [name]: value });
    }
    return(
        <div className="main-image">
        <div className="d-none d-md-block d-lg-block nav-top">
        <div className="row p-3 bg-white justify-content-start">
            <div className="col-6 text-start">
                <img src={Logo} alt="logo" width="25%"/>
            </div>
            <div className="col-2 text-end">
                <h6 className="mt-3 px-3 border-end active pointer" onClick={handleTab7}>advertise with us</h6>
            </div>
            <div className="col-4 text-end pt-2 rounded-2">
                <div className="d-flex flex-row justify-content-end">
                    <h6 className="px-2"><Form.Control placeholder="search here" type="text" name="search" onClick={handleShow}/></h6>
                <div className="px-2 pointer">
                    <FaSearch className="active" onClick={handleShow}/>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} className="mt-5 shadow-sm p-2">
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
        <div className="pb-1">
        <div className=" row px-lg-3 p-3 mx-5 bg-white rounded-bottom-3">
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
            </div><div className="col-lg-6 text-end">
            <div className="d-flex flex-row justify-content-end">
            <h6 className="m-2">OUR COMMUNITY</h6>
        <img src={Menu} alt="logo" width="3%" height="3%" className="mt-1" onClick={handleShow4}/></div>
            <Modal show={show4} onHide={handleClose4} className="margin-top-plus p-0">
            <div className="row kitenge p-0 rounded-3 m-0">
                <div className="col-5 p-2 px-4">
                <h3 className="py-3 lh-1">Let's Explore Together</h3>
                <div className="m-3">
                <div className="py-1"><TabItem id="tab10" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab10} show1={show4} setShow1={setShow4} title={<span className="tab-item text-white">EVENTS</span>}/></div>
                <div>
                <TabItem id="tab10" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab10} show1={show4} setShow1={setShow4} title={<span className="tab-item text-white">PODCASTS</span>}/></div>
                <div className="py-1">
                <TabItem id="tab10" activeTab={activeTab} setActiveTab={setActiveTab} onClick={handleTab10} show1={show4} setShow1={setShow4} title={<span className="tab-item text-white">GALLERY</span>}/></div>
                </div>
            </div>
            <div className="col-7 p-0">
            <img src="https://media.istockphoto.com/id/2149086661/es/foto/hipop%C3%B3tamo-con-cr%C3%ADa-en-el-parque-nacional-murchison-falls-uganda.webp?b=1&s=170667a&w=0&k=20&c=7pw09hgOeVndXXmmDI2gaiyw-p56uz-oalGbJZ_a8JM=" alt="logo" width="100%" className="my-3"/>
            </div>
            </div>
                <p className="small d-none bg-light p-2 text-center"><span className="mx-2">Our social media community</span><FaFacebook size={20} className="mx-3"/><FaTwitter size={20}/><FaWhatsapp size={20} className="mx-3"/><FaYoutube size={20}/></p>
            </Modal>
            </div>
        </div>
        </div>
        <div className="d-flex flex-row bg-white shadow p-0">
            <div className="col-5"><h6 className="mx-5 mt-3">entertainment | sports bank | culture | news and gossip ...</h6></div>
            <div className="col-5 text-start p-2">
            </div>
            <div className="col-2 main-orange"><h6 className="px-3 pointer mt-3 text-white" onClick={handleShow2}>get in touch</h6></div>
        </div>
        </div>
        <div className="d-sm-block d-md-none d-lg-none nav-top bg-pakwach1">
        <div className="row px-2 py-2 justify-content-start">
        <div className="col-2">
        <img src={Menu} alt="logo" width="60%" className="mt-2" onClick={handleShow1}/>
            <Modal show={show1} onHide={handleClose1} className="mt-5 p-0 w-75">
            <div className="py-5 px-4">
                <p className="small d-none">Dashboard</p>
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
                <p className="small d-none pt-4 text-center"><FaFacebook size={20} className="mx-3"/><FaTwitter size={20}/><FaWhatsapp size={20} className="mx-3"/><FaYoutube size={20}/></p>
            </div>
            </Modal>
        </div>
            <div className="col-8">
            <img src={Logo} alt="logo" width="60%"/>
            </div>
        <div className="col-2 text-end">
        <FaSearch className="mt-3 active" onClick={handleShow}/>
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
        <div className="row bg-dark shadow">
        <div className="col-6 p-3">
        <div className="d-flex flex-row justify-content-center border-end">
        <h6 className="small m-2" onClick={handleTab7}>advertise</h6><FaMicrophoneAlt className="mt-1 active"/></div></div>
        <div className="col-6 p-3" onClick={handleTab10}>
        <div className="d-flex flex-row justify-content-start">
            <h6 className="m-2">OUR COMMUNITY</h6>
        <FaUsers className="mt-1 active"/></div>
        </div>
        <div className="row">
            <Modal show={show2} onHide={handleClose2} className="mt-5 p-2">
                <Form className="p-4">
                    <Form.Label><h6>leave a message</h6></Form.Label>
                    <Form.Control autoFocus placeholder="email" type="text" name="search" onChange={handleSearch}/>
                    <Form.Control placeholder="leave a message" type="text" name="search" onChange={handleSearch} className="my-2"/>
                    <h6 type="submit" variant="outlined" onClick={sendMail} className="mx-5 p-3 text-center rounded-2 button">Send</h6>
                </Form>
            </Modal>
        </div>
        </div>
        </div>
        <div className="px-lg-5 px-4 py-3">
            <div>
                <TabContent id="tab1" activeTab={activeTab}><Home handletab6 = {handleTab6} handletab3 = {handleTab3} handletab7 = {handleTab7}/></TabContent>
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
            <div>
                <TabContent id="tab7" activeTab={activeTab} ><Advertise/></TabContent>
            </div>
            <div>
                <TabContent id="tab10" activeTab={activeTab} ><Community/></TabContent>
            </div>
        </div>
        <div className="p-lg-5 p-3 bg-pakwach1"><Headlines/></div>
        <div className="p-5 bg-dark">
        <div className="d-flex flex-row justify-content-start">
                <h6 className="text-start py-3">find out more news <br/> and sports, entertainment at our page</h6>
            </div>
            <div className="row p-lg-5 p-2 justify-content-start text-white shadow rounded-3">
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
                <div className="active">
                <FaFacebook size={25} className="mx-2"/><FaTwitter size={25}/><FaWhatsapp size={25} className="mx-2"/><FaYoutube size={25}/>
                </div>
            </div>
        </div>
        </div>
    )
}