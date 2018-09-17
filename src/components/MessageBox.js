import React from 'react';

const MessageBox = () => {
	return (
            <div id="MessageBox" className="text-left border p-2" style={{backgroundColor: "#ccc"}}>
                <h6 className="text-center font-weight-bold">Send me a message</h6>
                <form>
                    <div className="form-group">
                        <label className="mb-1 text-secondary" htmlFor="subject-form">Subject</label>
                        <input type="subject" className="form-control" id="subject-form" />
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-1 text-secondary" htmlFor="message-form">Message</label>
                        <textarea className="form-control" id="message-form" rows="3"></textarea>
                    </div>  
                    <button type="submit" className="btn btn-primary btn-block ">Submit</button>
                </form>
            </div>
	);
	
};

export default MessageBox;

