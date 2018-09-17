import React from 'react';

const Footer = () => {
	return (
	<footer className="footer bg-dark">
      <div className="w-75 m-auto">
      	<div className="row  text-center  text-capitalize">
      		<div className="col">
      			<div className="pt-4 pb-2 text-white font-weight-bold">
      			About Us
      			</div>
      			<ul className="text-white-50">
      				<li><a>quis nostrud</a></li>
      				<li><a>tempor incididunt ut</a></li>
      				<li><a>consectetur</a></li>
      				<li><a>ad minim</a></li>
      			</ul>
      		</div>
      		<div className="col mx-auto">
      			<div className="pt-4 pb-2 text-white font-weight-bold">
      			Legal
      			</div>
      			<ul className="text-white-50">
      				<li><a>quis nostrud</a></li>
      				<li><a>laboris nisi</a></li>
      				<li><a>consectetur</a></li>
      			</ul>
  			</div>
      		<div className="col">
      			<div className="pt-4 pb-2 text-white font-weight-bold">
      			Developers
      			</div>
      			<ul className="text-white-50">
      				<li><a>laboris nisi</a></li>
      				<li><a>ad minim</a></li>
      				<li><a>quis nostrud</a></li>
      				<li><a>tempor incididunt ut</a></li>
      			</ul>
      		</div>
	  	</div>
	  </div>
    </footer>);
	
};

export default Footer;