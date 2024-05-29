import React, {useState} from "react";
import { FaRegThumbsDown, FaRegThumbsUp, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Kitenge from '../images/kitenge.jpeg'
import Dj from '../images/Dj Cwinya.jpg'
import Broadcasting from '../images/broadcasting.jpg'
import Veratti from '../images/verrati.jpg'
import Women from '../images/women.jpeg'
import Bus from '../images/3.jpg'
import { Gallery } from "./Gallery";
import Modal from 'react-bootstrap/Modal'

export default function Community(){
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    return(
        <div className="top">
            <div className="row mt-5">
            <div className="col-lg-9 col-sm-12 broder-top border-5">
                <div className=" rounded-2 bg-white border-top border-5 border-black">
                <h6 className="p-3 presenters-index w-25 d-none d-md-block d-d-lg-block">Events</h6>
                <h6 className="p-3 presenters-index w-75 d-sm-block d-md-none d-d-lg-none">Events</h6>
                <div className="row p-5">
                <div className="col-lg-4 col-sm-12 text-start p-0 rounded-3">
                <div className="">
                <img src="https://hangspots.com/storage/images/banners/2023/31/64f0a48b8c6891693492363.jpg" width="100%" height="100%"/>
                    <h5 className="lh-1 mt-3 mx-3">
                    Luo Festival</h5>
                    <h6 className="mx-3">monday - friday</h6>
                </div>
                </div>
                <div className="col-lg-4 col-sm-12 px-1 text-start">
                <div className="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dC7V65RObKQb51CqcJeGx27dRH9Tnux2dJEn53AiQw&s" width="100%" height="100%"/>
                    <h5 className="lh-1 mt-3 mx-3">
                    Bushy D'King</h5>
                    <h6 className="mx-3">monday - friday</h6>
                </div>
                </div>
                <div className="col-lg-4 col-sm-12 p-0 text-start">
                <div className="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2drrlzdGJTd_tWq6khL-AdTuWim3gIHkHvX5lfb1wQ&s" width="100%" height="100%"/>
                    <h5 className="lh-1 mt-3 mx-3">
                    Ezzy</h5>
                    <h6 className="mx-3">monday - friday</h6>
                </div>
                </div></div>
                </div>
                <div className="row bg-white d-none rounded-3 mt-1 mx-2 p-5">
                <h6 className="lh-1">other events</h6>
                <p className="p-5 bg-light rounded-3">
                    Stay with us for more exciting events and all thats happening in town!
                </p>
                </div>
            </div>
                <div className="col-lg-3 p-5 bg-white text-start rounded-3">
                <h3>Podcasts</h3>
                <h6 className="px-3 border-start mt-5">Events</h6>
                <p className="lh-1 small">Bringing you your special programs are our best presenters yet. Meet them</p>
                <FaRegThumbsUp className="mx-1"/><span>0</span><span className="small mx-3 p-2 bg-light rounded-2">Comment</span><FaRegThumbsDown className="mx-1"/><span>0</span>
                <h6 className="px-3 border-start mt-5">Events</h6>
                <p className="lh-1 small">Bringing you your special programs are our best presenters yet. Meet them</p>
                <FaRegThumbsUp className="mx-1"/><span>0</span><span className="small mx-3 p-2 bg-light rounded-2">Comment</span><FaRegThumbsDown className="mx-1"/><span>0</span>
                <h6 className="px-3 border-start mt-5">Events</h6>
                <p className="lh-1 small">Bringing you your special programs are our best presenters yet. Meet them</p>
                <FaRegThumbsUp className="mx-1"/><span>0</span><span className="small mx-3 p-2 bg-light rounded-2">Comment</span><FaRegThumbsDown className="mx-1"/><span>0</span>
                </div>
            </div>
                <div className="mt-3 rounded-2 bg-white border-top border-5 border-black">
                <h6 className="p-3 presenters-index w-25 d-none d-md-block d-d-lg-block">Gallery</h6>
                <h6 className="p-3 presenters-index w-75 d-sm-block d-md-none d-d-lg-none">Gallery</h6>
                <div className="p-lg-5 p-3">
                    <div className="row">
                        <div className="col-lg-4 text-start">
                        <img src={Women} width="100%" height="40%" className="mt-5"/>
                        <img src={Veratti} width="100%" height="40%" className="mt-2"/>
                        </div>
                        <div className="col-lg-4 text-start">
                        <img src={Kitenge} width="100%" height="70%"/>
                        <img src={Bus} width="100%" height="30%" className="mt-2"/>
                        </div>
                        <div className="col-lg-4 text-start">
                        <img src={Broadcasting} width="100%" height="40%" className="mt-5"/>
                        <img src={Dj} width="100%" height="40%" className="mt-2"/>
                        </div>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <p>hi</p>
                        <Gallery/>
                    </Modal>
                </div>
                </div>
                <div className="mt-3 rounded-2 bg-white border-top border-5 border-black">
                <h6 className="p-3 presenters-index w-25 d-none d-md-block d-d-lg-block">promotions</h6>
                <h6 className="p-3 presenters-index w-75 d-sm-block d-md-none d-d-lg-none">promotions</h6>
                <div className="p-lg-5 p-3"><p className="p-lg-5 p-3 bg-light rounded-3">
                    Stay with us for more exciting events and all thats happening in town!
                </p>
                </div>
                </div>
        </div>
    )
}