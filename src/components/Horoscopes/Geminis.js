import "../../styles/GenericHorocscope.scss";
import { Link } from "react-router-dom";

import geminismarco from "../../images/marco/geminismarco.png"
const Geminis = () => {
	return (
		
			<div className="background">

		<div className="generichoroscope">
			<div className="generichoroscope__divivage">
				<img src={geminismarco}alt="" className="generichoroscope__divimage__image"/>
			</div>
			<div>
			<div className="generichoroscope__text">
			<h2 className="generichoroscope__h2">Características</h2>
				<p className='generichoroscope-paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui maiores
				consequatur dolor aperiam fugiat voluptas, soluta, repellendus assumenda
				asperiores exercitationem minus labore ducimus unde quo veniam
				doloremque itaque tempora eum?</p>
				<p className='generichoroscope-paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui maiores
				consequatur dolor aperiam fugiat voluptas, soluta, repellendus assumenda
				asperiores exercitationem minus labore ducimus unde quo veniam
				doloremque itaque tempora eum?</p>
				<p className='generichoroscope-paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui maiores
				consequatur dolor aperiam fugiat voluptas, soluta, repellendus assumenda
				asperiores exercitationem minus labore ducimus unde quo veniam
				doloremque itaque tempora eum?</p>
				
			</div>
			<Link to="/" className="link">
				
					<i className="fa-solid fa-chevron-left"></i>Return
				</Link>
				</div>
		</div>
		</div>
	);
};
export default Geminis;