import React from 'react';
const mapImageSrc ="http://res.cloudinary.com/dvsnoxmcd/image/upload/v1530113949/maps-att_rvk6cw.png";

const address ={
    street: "51, castro Street",
    cityAndState: "mountain View, California",
    country: "United States Of America"
}

const LocationMap = () => {
	return (
            <div id="LocationMap" className="text-left border p-2" style={{backgroundColor: "#ccc"}}>
                <h6 className="text-center font-weight-bold">Or meet me at the office</h6>
                
                 <img src={mapImageSrc} className="background-image my-2" style={{width: "100%", height:"auto"}} />
             
                {/*<div id="map"></div>*/}
                <div className="text-capitalize pl-3">{address.street}<br /> {address.cityAndState} <br />{address.country}</div>
            </div>
	);
	
};

export default LocationMap;


