import React from 'react';
var width = Math.max(window.screen.width, window.innerWidth);

const relatedArticles =[{
	title: "Quis nostrud exercitation ullamco",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
	src: "https://res.cloudinary.com/dvsnoxmcd/image/upload/v1530139487/traditional-hot-italian-pizza-1632122_me8vwp.jpg",
	series: "chicken"
		},{
	title: "Quis nostrud exercitation ullamco",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
	src: "https://res.cloudinary.com/dvsnoxmcd/image/upload/v1530139228/turkish-beef-lamb-and-pork-kebabs-with-potato-on-skewers-1632072_nzk5yy.jpg",
	seriesName: "chicken"
	},{
	title: "Quis nostrud exercitation ullamco",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
	src: "https://res.cloudinary.com/dvsnoxmcd/image/upload/v1530139161/healthy-food-steak-potatoes-and-salad-1632126_mg7h5i.jpg",
	seriesName: "chicken"
	},{
	title: "Quis nostrud exercitation ullamco",
	content: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
	src: "https://res.cloudinary.com/dvsnoxmcd/image/upload/v1530139048/japanese-food-gourmet-raw-sushi-king-tiger-prawns-1632098_ipsgwu.jpg",
	seriesName: "chicken"
	},{
	title: "Quis nostrud exercitation ullamco",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
	src: "https://res.cloudinary.com/dvsnoxmcd/image/upload/v1530139117/chicken-and-prawn-rice-1632395_yi14vs.jpg",
	seriesName: "chicken"
	}];

class RelatedArticles extends React.Component {
	constructor(props){
		super(props);
	}

	render(){

		let allArticles = relatedArticles.map((article, i)=>{
						return (
						<div className="col-md-4 col-6 p-2" >
							<div className="col-12 card">
							  <img className="card-img-top " src={article.src} />
							  <div className="card-body p-2">
							    <h4 className="card-title text-info">{article.title}</h4>
							    <p className="card-text text-secondary">{article.content}</p>
							  </div>
						  </div>
						</div>
						);						
		});

		//making a new array with 2 or 3 <div> tags in between with a className "w-100", inorder to provide proper layout.
		const renderedArticles=[];
		let index=0;
		let articlesPerRow = width>576 ? 3 : 2;
		while(index<allArticles.length){
			if((index+1)%articlesPerRow==0){
				renderedArticles.push(allArticles[index]);				
				renderedArticles.push(<div className="w-100"></div>)
					index++}
			else{
				renderedArticles.push(allArticles[index]);
				index++;
			
			}
		}

		return(
			<div id="RelatedArticles">
				<h4 className="decorated mb-1"><span>Related Articles</span></h4>
				<div className="row">
					{renderedArticles}
				</div>
			</div>
			);
	}
}

export default RelatedArticles;