import { Link } from 'react-router-dom'
import './homepage.css'
function Homepage(){
    return<div className='homepageComp'>
        <div className='videoComp'>
            <i className="fas fa-play-circle"></i>
        </div>
        <Link to='page/45'>
            <button className='btn'>Let's Go</button>
        </Link>
    </div>
}
export default Homepage