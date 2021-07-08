import { Link } from 'react-router-dom'
import './ready.css'
function Ready(){
    return <div className='readyComp'>
               <h2>Your Action Debut is Ready!</h2>
               <div className='readyVid'>
                    <i className="fas fa-play-circle"></i>
               </div>
               <div className='readyBtns'>
                   <Link to='/swapping/45'>
                       <button className='readyBtn'>Take Again</button>
                   </Link>
                   <Link to='/'>
                       <button className='readyBtn'>Share</button>
                   </Link>
               </div>
         </div>
}
export default Ready