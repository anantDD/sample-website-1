import React from 'react';
import SubMenu from './SubMenu';	
import ContactInfo from './ContactInfo';
import MessageBox from './MessageBox';
import LocationMap from './LocationMap';

const Modal = () => {
	return (
		


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-body">
        		<div className="">
					<SubMenu />
					<ContactInfo />
					<MessageBox />
					<LocationMap />
				</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>);
	
};

export default Modal;