import { Link } from 'react-router-dom'
import './swapping.css'
function Swapping(){
    return <div className='swappingComp'>
        <p>Check out these other swaps whiles our<br/>
            AI mechanics are working on your Swap</p>
            <div className='swapVideos'>
            <Link to='/preview/45' className='link'>
                            <div>
                                <i className="fas fa-play-circle"></i>
                            </div>
                        </Link>
                        <Link to='/preview/45' className='link'>
                            <div>
                                <i className="fas fa-play-circle"></i>
                            </div>
                        </Link>
                        <Link to='/preview/45' className='link'>
                            <div>
                                <i className="fas fa-play-circle"></i>
                            </div>
                        </Link>
                        <Link to='/preview/45' className='link'>
                            <div>
                                <i className="fas fa-play-circle"></i>
                            </div>
                        </Link>
                        <Link to='/preview/45' className='link'>
                            <div>
                                <i className="fas fa-play-circle"></i>
                            </div>
                        </Link>
                        <Link to='/preview/45' className='link'>
                            <div>
                                <i className="fas fa-play-circle"></i>
                            </div>
                        </Link>
                        

            </div>
            <div className='quest'>
                <div className='perc'>
                    <p>47%</p>
                </div>
                <div className='inp'>
                    <label className='emailLab'>
                    Can’t wait?  Enter your email and we <br/>
                        will send it when ready
                    </label>
                        <input className='emailInp'></input>
                </div>
            </div>

    </div>
}
export default Swapping