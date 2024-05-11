import React, { useState } from "react";
import Bunner from '../images/pakwach bunner.png'
import Form from 'react-bootstrap/Form'
import { FaEnvelope } from "react-icons/fa";

export default function Advertise(){
    const [formData, setFormData] = useState({
        "email": "",
        "message": ""
    })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData({...formData[name, value]})
    }
    function sendMail(){}
    return(
        <div className="top">
            <div className="row mt-5">
            <div className="col-lg-9 col-sm-12 ads-index p-0 rounded-2">
                <div className="row">
                <h2 className="text-start mx-lg-5">Advertise with us!</h2>
                <img src={Bunner} width="100%" height="100%"/>
                </div>
            </div>
                <div className="col-lg-3 px-4">
                <div className="row mtn p-lg-5 p-3 rounded-2 d-none d-md-block d-lg-block">
                <h6 className="text-start mb-3">MTN</h6>
                    <p className="text-start lh-1 small"></p>
                    <h6 className="p-2 border-start">mtn senkyu</h6>
                </div>
                <div className="row py-5 px-3 bg-white rounded-2 mt-2">
                <Form>
                <FaEnvelope className="active w-100"/>
                    <Form.Label><h6>leave a message</h6></Form.Label>
                    <Form.Control autoFocus placeholder="Email" type="text" name="search" onChange={handleChange}/>
                    <Form.Control placeholder="Leave a message" type="text" name="search" onChange={handleChange} className="my-2"/>
                    <h6 type="submit" variant="outlined" onClick={sendMail} className="mx-5 p-3 text-center rounded-2 button">Send</h6>
                </Form>
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
                </div>
                </div>
        </div>
    )
}