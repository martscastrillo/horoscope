import { Routes, Route, Link, NavLink } from "react-router-dom";

import "../styles/App.scss";
import Aries from "./Horoscopes/Aries";
import Tauro from "./Horoscopes/Tauro";
import Piscis from "./Horoscopes/Piscis";
import Capricornio from "./Horoscopes/Capricornio";
import Libra from "./Horoscopes/Libra";
import Escorpio from "./Horoscopes/Escorpio";
import Cancer from "./Horoscopes/Cancer";
import Sagitario from "./Horoscopes/Sagitario";
import Acuario from "./Horoscopes/Acuario";
import Virgo from "./Horoscopes/Virgo";
import Leo from "./Horoscopes/Leo";
import Geminis from "./Horoscopes/Geminis";
import tauro from "../images/horoscope-icon/tauro.png";
import leo from "../images/horoscope-icon/leo.png";
import escorpio from "../images/horoscope-icon/escorpio.png";
import geminis from "../images/horoscope-icon/geminis.png";
import libra from "../images/horoscope-icon/libra.png";
import aries from "../images/horoscope-icon/aries.png";
import piscis from "../images/horoscope-icon/piscis.png";
import capricornio from "../images/horoscope-icon/capricornio.png";
import acuario from "../images/horoscope-icon/acuario.png";
import cancer from "../images/horoscope-icon/cancer.png";
import virgo from "../images/horoscope-icon/virgo.png";
import sagitario from "../images/horoscope-icon/sagitario.png";
import handleft from "../images/handleft.png";
import handright from "../images/handright.png";

function App() {
	return (
		<>
		<ul className="nav">
			<li ><NavLink to='/contacto' className="nav__element" id='contact-link' target='_blank'>
  Inicio
</NavLink></li>
			<li><NavLink to='/contacto' className="nav__element" id='contact-link' target='_blank'>
 Horoscopos
</NavLink></li>
			<li><NavLink to='/contacto' className="nav__element" id='contact-link' target='_blank'>
  Famosos de tu signo
</NavLink></li>
		</ul>




			<Routes>
				<Route
					path="/"
					element={
						<div className="background-main">
							<header className="headermain">
								<img
									className="logomain"
									src={handleft}
									alt="logo"
									title="rick-and"
								/>
								<h1 className="h1main">horóscopo</h1>
								<img
									className="logomain"
									src={handright}
									alt="logo"
									title="rick-and"
								/>
							</header>
							<form action="" className="form">
								<input type="checkbox" />
								<label htmlFor=""> Fuego</label>
								<input type="checkbox" />
								<label htmlFor=""> Tierra</label>
								<input type="checkbox" />
								<label htmlFor=""> Aire</label>
								<input type="checkbox" />
								<label htmlFor=""> Agua</label>
							</form>
							<div className="mainhoroscope">
								<Link to="/Aries" className="onehoroscope">
									<p className="onehoroscope__name">aries</p>
									<img className="onehoroscope__img" src={aries} alt="" />
								</Link>
								<Link to="/Tauro" className="onehoroscope">
									<p className="onehoroscope__name">tauro</p>
									<img className="onehoroscope__img" src={tauro} alt="" />
								</Link>
								<Link to="/Geminis" className="onehoroscope">
									<p className="onehoroscope__name">geminis</p>
									<img className="onehoroscope__img" src={geminis} alt="" />
								</Link>
								<Link to="/Cancer" className="onehoroscope">
									<p className="onehoroscope__name">cancer</p>
									<img className="onehoroscope__img" src={cancer} alt="" />
								</Link>
								<Link to="/Leo" className="onehoroscope">
									<p className="onehoroscope__name">leo</p>
									<img className="onehoroscope__img" src={leo} alt="" />
								</Link>
								<Link to="/Virgo" className="onehoroscope">
									<p className="onehoroscope__name">virgo</p>
									<img className="onehoroscope__img" src={virgo} alt="" />
								</Link>
								<Link to="/Libra" className="onehoroscope">
									<p className="onehoroscope__name">libra</p>
									<img className="onehoroscope__img" src={libra} alt="" />
								</Link>
								<Link to="/Escorpio" className="onehoroscope">
									<p className="onehoroscope__name">escorpio</p>
									<img className="onehoroscope__img" src={escorpio} alt="" />
								</Link>
								<Link to="/Sagitario" className="onehoroscope">
									<p className="onehoroscope__name">sagitario</p>
									<img className="onehoroscope__img" src={sagitario} alt="" />
								</Link>
								<Link to="/Capricornio" className="onehoroscope">
									<p className="onehoroscope__name">capricornio</p>
									<img className="onehoroscope__img" src={capricornio} alt="" />
								</Link>
								<Link to="/Acuario" className="onehoroscope">
									<p className="onehoroscope__name">acuario</p>
									<img className="onehoroscope__img" src={acuario} alt="" />
								</Link>
								<Link to="/Piscis" className="onehoroscope">
									<p className="onehoroscope__name">piscis</p>
									<img className="onehoroscope__img" src={piscis} alt="" />
								</Link>
							</div>
						</div>
					}
				></Route>

				<Route path="/aries" element={<Aries />}></Route>
				<Route path="/tauro" element={<Tauro />}></Route>
				<Route path="/geminis" element={<Geminis />}></Route>
				<Route path="/cancer" element={<Cancer />}></Route>
				<Route path="/leo" element={<Leo />}></Route>
				<Route path="/virgo" element={<Virgo />}></Route>
				<Route path="/libra" element={<Libra />}></Route>
				<Route path="/escorpio" element={<Escorpio />}></Route>
				<Route path="/sagitario" element={<Sagitario />}></Route>
				<Route path="/capricornio" element={<Capricornio />}></Route>
				<Route path="/acuario" element={<Acuario />}></Route>
				<Route path="/piscis" element={<Piscis />}></Route>
			</Routes>
			<footer class="page__footer">
				<p class="footer">&copy; Marta Castrillo 2022</p>
			</footer>
		</>
	);
}

export default App;