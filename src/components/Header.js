import React from 'react';

const Navbar = () => {
  
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mx-0 px-0">
      	<div className="container px-0" style={{width: "85%"}}>
		 	<a className="navbar-brand" href="#" style={{fontWeight: "bold",
		 												 color:"#38a7be", 
		 												 fontFamily:"Comic Sans MS, cursive, sans-serif"}}>
		 		AuthEntiC
		 	</a>
	  		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
	  		   									aria-controls="navbarSupportedContent" aria-expanded="false" 
	  		   									aria-label="Toggle navigation">
	    		<span className="navbar-toggler-icon"></span>
	  		</button>

  			<div className="collapse navbar-collapse" id="navbarSupportedContent">
    			<ul className="navbar-nav ml-auto">
		        	<li className="nav-item active">
				        <a className="nav-link" href="#">Ultreices <span className="sr-only">(current)</span></a>
				    </li>
			        <li className="nav-item">
			        	<a className="nav-link" href="#">Link</a>
			        </li>
			        <li className="nav-item">
			        	<a className="nav-link" href="#">Ipsum</a>
			        </li>      
			        <li className="nav-item">
			        	<a className="nav-link " href="#">Magna</a>
			      	</li>
			    </ul>
  			</div>
		</div>
	  </nav>
    );
}

export default Navbar;