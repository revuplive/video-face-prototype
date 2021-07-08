import { Link } from 'react-router-dom'
import './errInfo.css'
function ErrInfo(){
    return <div className='errInfoComp'>
        <p>*tip if you get a crazy result our  AI mechanics didn’t get a good<br/>
            view of your beautiful face. Try retaking with better lighting.</p>
            <div className='errPic'>
                <div className='circul'>

                </div>
            </div>
        <div className='errBtns'>
            <Link to='/swapping/45'>
                <button className='errBtn'>Take Again</button>
            </Link>
            <Link to='/swapping'>
                <button className='errBtn'>Swap</button>
            </Link>
        </div>
    </div>
}
export default ErrInfo