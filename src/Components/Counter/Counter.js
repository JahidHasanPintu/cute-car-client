import React from 'react';
import './Counter.css';
import CountUp from 'react-countup';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxImg from './ParallaxImg/ParallaxImg';
import img1 from '../../images/car-bg.jpg';
const Counter = () => {
    return (
        <div>
			<ParallaxProvider>
				<ParallaxImg imgsrc={img1} height="500px" opacity=".5">

				</ParallaxImg>
			</ParallaxProvider>
        <section className="py-50 bg-img countnm-bx">

			
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-6 col-12 border-style">
					<div className="text-center">
						<div className="w-80 h-80 l-h-100  text-center mx-auto">
							<span className="text-white fs-40 icon-Selected-file"><span className="path1"></span><span className="path2"></span></span>
						</div>
						<h1 className="countnm my-10 text-white fw-300"><CountUp start={0} end={5428} /></h1>
						<div className="text-uppercase text-white">Jobs Posted</div>
					</div>
				</div>	
				<div className="col-lg-3 col-md-6 col-12 border-style">
					<div className="text-center">
						<div className="w-80 h-80 l-h-100  text-center mx-auto">
							<span className="text-white fs-40 icon-Edit"><span className="path1"></span><span className="path2"></span></span>
						</div>
						<h1 className="countnm my-10 text-white fw-300"><CountUp start={0} end={5428} /></h1>
						<div className="text-uppercase text-white">Jobs Filled</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-12 border-style">
					<div className="text-center">
						<div className="w-80 h-80 l-h-100  text-center mx-auto">
							<span className="text-white fs-40 icon-Briefcase"><span className="path1"></span><span className="path2"></span></span>
						</div>
						<h1 className="countnm my-10 text-white fw-300"><CountUp start={0} end={5428} /></h1>
						<div className="text-uppercase text-white">Companies</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-12 border-style">
					<div className="text-center">
						<div className="w-80 h-80 l-h-100 text-center mx-auto">
							<span className="text-white fs-40 icon-Add-user"><span className="path1"></span><span className="path2"></span></span>
						</div>
						<h1 className="countnm my-10 text-white fw-300"><CountUp start={0} end={5428} /></h1>
						<div className="text-uppercase text-white">Members</div>
					</div>
				</div>			
			</div>
		</div>
	</section>
        </div>
    );
};

export default Counter;