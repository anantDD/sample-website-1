import React from 'react';

//dummy Content
const series =[{
	title: "Quis nostrud exercitation ullamco",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
	src: "https://res.cloudinary.com/dvsnoxmcd/image/upload/v1530139303/steak-1323125_fxljdi.jpg",
	series: "chicken"
		},{
	title: "Quis nostrud exercitation ullamco",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
	src: "https://res.cloudinary.com/dvsnoxmcd/image/upload/v1530139251/rich-chololate-sweet-for-desert-1631999_z3dzv2.jpg",
	seriesName: "chicken"
	}];

class SameSeries extends React.Component {

	render(){
		let articlesInSeries = series.map((article, i)=>{
				return (<div className="h-card row ml-0 mt-2" key={i} >
							<div className="imageContainer col-3">
						    	<img className="float-left" src={article.src} alt="Card image cap" style={{width:"90%", height:"100%"}}/>
						    </div>
							<div className="h-card-body col-9">
								<h5 className="card-title text-info">{article.title}</h5>
							    <p className="card-text d-inline">{article.content}</p>
						    </div>
						</div>
						);						
		});

		return(
			<div id="SameSeries">
				<h4 className="decorated mb-3"><span>More in this series</span></h4>
				{articlesInSeries}
			</div>
			);
	}
}

export default SameSeries;