import React from 'react';
import SameSeries from './SameSeries';
import SubMenu from './SubMenu';	
import ContactInfo from './ContactInfo';
import MessageBox from './MessageBox';
import LocationMap from './LocationMap';
import RelatedArticles from './RelatedArticles';
import Modal from './Modal';

const LorIpsPara= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit vehicula viverra. Nam rhoncus purus sem, ac pharetra risus finibus a. Quisque commodo eget enim vel suscipit. Sed elementum neque eu turpis volutpat, non interdum est suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut ac finibus nisi. Etiam tortor dolor, venenatis quis gravida egestas, condimentum nec nibh. Sed mollis lorem in tellus dapibus, at fringilla justo elementum. Cras consequat, odio sed tristique mollis, quam nisi venenatis turpis, ac lobortis ex odio eget odio. Aliquam gravida congue lectus consequat gravida. Curabitur consequat eget mauris pellentesque viverra. Aliquam accumsan ante porta, mattis mi ac, convallis augue. Curabitur ultrices facilisis tincidunt. Fusce et suscipit velit, sed pulvinar nibh. Aliquam felis libero, lacinia vel egestas congue, finibus eget ante.

Aenean tristique lacus in urna bibendum, nec facilisis leo bibendum. Suspendisse id sagittis risus. Proin finibus euismod felis. Aenean finibus condimentum dolor, sed iaculis lacus tincidunt fermentum. Sed vehicula vel leo sit amet luctus. Sed commodo nibh turpis, a posuere risus ornare ac. Sed sagittis commodo dapibus. Cras dapibus varius risus, non molestie nunc pellentesque vel. Aliquam laoreet rhoncus mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce efficitur mattis felis, nec varius risus varius id. Cras malesuada lectus in aliquet consectetur. Nullam orci lacus, aliquam non tincidunt in, tincidunt ut quam.
`;

const LorIpsPara2 ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// const LorIpsPara3="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";


const MainContent = () => {
	return (
		<div>	
			<div className="m-auto container row">
				<div className="mb-5 pb-5 col-md-12 col-lg-8 mr-auto">
					<h5 className="font-weight-bold py-3">Justo nec facilisis leo bibendum</h5>
					<p style={{fontSize:"1.15em"}}>
						{LorIpsPara2}
					</p>
					<div className="mb-5 pb-5 text-black-50">
						<blockquote className="p-5 float-md-right font-italic font-weight-light" style={{display:"inline", width:"60%"}}>{LorIpsPara2}
							<footer className="float-md-right font-weight-normal p-3">
								— 
								<cite>
									John Doe
								</cite>
							</footer>
						</blockquote>
						<p style={{fontSize: "0.9em"}}>{LorIpsPara}</p>
					</div>		
					<SameSeries />
				</div>
				<div className="col-lg-3 d-none d-lg-block">
					<SubMenu />
					<ContactInfo />
					<MessageBox />
					<LocationMap />
				</div>
			</div>
			<div className="m-auto container row">
				<RelatedArticles />
			</div>
			<Modal />
		</div>
		);
};

export default MainContent;

// <blockquote cite="http://www.worldwildlife.org/who/index.html" style={{
// 						display:"inline-block", 
// 						marginLeft: "10%", color:"red", overflow: "auto", width:"50px"}}>
// 						For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
// 					</blockquote>


// <div className="float-right bg-dark">{LorIpsPara3}</div>