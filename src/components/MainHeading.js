import React from 'react';

const MainHeading = () => {
	return (
		<div className="px-0 headingBar jumbotron jumbotron-fluid text-light" >
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-8	">	
						<h1 className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h1>
					</div>	
					<div className="col-3 offset-1 d-lg-none">
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
	  						Contact
						</button>	
					</div>
				</div>	
			</div>
		</div>);
	
};

export default MainHeading;