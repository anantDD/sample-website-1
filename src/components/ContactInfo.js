import React from 'react';

//dummy content
const sampleSrc = "http://res.cloudinary.com/dvsnoxmcd/image/upload/v1482485351/Hot_Weather_1920x1200_q0agke.jpg";
const photoSrc = "http://res.cloudinary.com/dvsnoxmcd/image/upload/v1503063071/IMG_20170818_185913_k3f1ve.jpg";

const ContactInfo = () => {
	return (
            <div id="ContactInfo" className="text-left border pb-2" style={{backgroundColor: "#ddd", fontSize:"0.9em"}}>
                 <img src={sampleSrc} className="background-image" style={{width: "100%", height:"6rem"}} />
                 <img src={photoSrc} className="photo" style={{width: "auto", height:"6rem", borderRadius:"50%", position: "relative", left: "50%", transform: "translate(-50%,-50%)"}} />
                 <div className="row m-0">
                 	<div className="col-3 offset-1  font-weight-bold">Name</div>
                 	<div className="col-6 text-left">Nomen Nescio</div>
             	</div>
                 <div className="row m-0">
                 	<div className="col-3 offset-1 font-weight-bold">Email</div>
                 	<div className="col-8 " style={{overflowWrap: "break-word"}}>nomen@example.com</div>
             	</div>
                 <div className="row m-0">
                 	<div className="col-3 offset-1 font-weight-bold">Phone</div>
                 	<div className="col-8">+852 555 555</div>
             	</div>

            </div>
	);
	
};

export default ContactInfo;