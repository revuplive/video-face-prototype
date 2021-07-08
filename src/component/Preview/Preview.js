import { Link } from 'react-router-dom'
import './preview.css'
function Preview(){
    return<div className='previewComp'>
            <h2>Swap With Jimmy the Body Builder </h2>
            <div className='video'>
                <i className="fas fa-play-circle"></i>
            </div>
            <div className='btns'>
                <Link to='/page/45'>
                    <button className='btn'>Go Back</button>
                </Link>
                <Link to='/swapping/45' >
                    <button className='btn'>Start Swapping</button>
                </Link>
            </div>

    </div>
}
export default Preview