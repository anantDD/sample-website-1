import React from 'react';

const SubMenu = () => {
	return (
            <div id="subMenu" className="text-left border  mb-4">
                  <h5 className="text-center font-weight-bold"> Submenu</h5>
                  <ul className="nav flex-column nav-pills">
                        <li className="nav-item ">
                              <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                              <a className="nav-link" href="#">Examples</a>
                        </li>
                        <li className="nav-item">
                              <a className="nav-link active" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                              <a className="nav-link" href="#">About</a>
                        </li>
                  </ul>
            </div>
	);
	
};

export default SubMenu;