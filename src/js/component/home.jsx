import React from "react";

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import CardRow from "./CardRow";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="row">
				<div className="col-2"></div>
				<div className="col-8">
					<Jumbotron />
				</div>	
				<div className="col-2"></div>
			</div>
			<CardRow />
			<Footer />
		</>
	);
};

export default Home;
