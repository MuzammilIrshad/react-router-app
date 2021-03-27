import React, { useContext } from 'react';
import Navbar from './Navbar';
import './home.css';
import Product from './Product';
import Cart from './Cart';
import { GlobalContext } from './Reducer';


export default function Home() {
	let { addShoes, delShoes } = useContext(GlobalContext);
	return (
		//<GlobalProvider>
		<div>
			<div id='mission'>
				<h1 id='missionheading'> <img src='https://cdn160.picsart.com/upscale-273617642016211.png?r1024x1024'/>MISSION</h1>
			     <br/>
				<h3>Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making our products more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work.

Based in Beaverton, Oregon, NIKE, Inc. includes the Nike, Converse, and Jordan brands.</h3>
			</div>
			<div id='image'>
				<img src='https://th.bing.com/th/id/OIP.Rd7TIYbDsQn40J4JfF1gcwHaEA?pid=ImgDet&rs=1'/>
			</div>
			
		</div>
//		</GlobalProvider>
	);
}