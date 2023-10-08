import './Overlay.css'
import {BiAward, BiScan, BiHome, BiCurrentLocation, BiCog, BiInfoCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function Overlay({isOpen, onClose}){
    return (
        <>
            {
                isOpen ? (
                    <div className='overlay'>
                        <div onClick={onClose}/>
                            <div className='overlay-controls'>
                                <button className='overlay-close' type='button' onClick={onClose}/>
                            </div>
                        <div style={{padding: '10px', marginTop: '2rem'}}>
                            <Link style={{color: '#A6BB8D'}} to={'/home'} className='overlay-align'>
                                <h2>Home</h2>
                                <BiHome size={20}/>
                            </Link>
                            <Link style={{color: '#A6BB8D'}} to={'/badges'} className='overlay-align'>
                                <h2>Badges</h2>
                                <BiAward size={20}/>
                            </Link>
                            <Link style={{color: '#A6BB8D'}} to={'/scanner'} className='overlay-align'>
                                <h2>Scan</h2>
                                <BiScan size={20}/>
                            </Link>
                            <Link style={{color: '#A6BB8D'}} to={'/map'} className='overlay-align'>
                                <h2>Map</h2>
                                <BiCurrentLocation size={20}/>
                            </Link>
                            <Link style={{color: '#A6BB8D'}} className='overlay-align'>
                                <h2>Settings</h2>
                                <BiCog size={20}/>
                            </Link>
                            <Link style={{color: '#A6BB8D'}} className='overlay-align'>
                                <h2>About</h2>
                                <BiInfoCircle size={20}/>
                            </Link>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}