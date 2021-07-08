import { Link } from 'react-router-dom'
import './swap.css'
function Swap(){
    return<div className='swapComp'>
        <div className='instruction'>
            <h2>Instructions</h2>

            <ul className='instUl'>
            <p>Instructions</p>
                <li>Good lighting</li>
                <li>Straight face, don’t smile</li>
                <li>NO Glasses, hats </li>
                <li>Beards may interfere</li>
            </ul>
            <div className='example'>
                <h3>Example</h3>
                <div className='exPic'></div>
            </div>
        </div>
        <div className='showPic'>
            <div className='takePic'>
                <div className='circul'></div>
            </div>
            <label className='cond'>
                <input type="checkbox"  ></input>
                 Agree to terms and conditions*
            </label>
            <Link to='/error'>
                <button className='takePhotoBtn'>Take Photo</button>
            </Link>
        </div>
        </div>

}
export default Swap




