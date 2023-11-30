import React from 'react'
import NavbarSide from './NavbarSide'
import { FaRegCircleUser } from "react-icons/fa6";
import Stories from './Stories';
import sample_post1 from '../Images/sample_post.jpeg'
import sample_post2 from '../Images/sample_post2.jpeg'
import sample_post3 from '../Images/sample_post3.jpeg'

import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";





const Home = () => {
    return (
        <div className='mainCont' style={{ display: 'flex', flexDirection: 'row', height: '92vh', width: '100vw', justifyContent: 'space-around', backgroundColor: 'rgb(52 49 49)' }}>
            {/* Side Explore Tab */}
            <div style={{ height: '95%', backgroundColor: 'rgb(52 49 49)', width: '15%', margin: '0.5rem', borderRadius: '1rem', padding: '0.5rem', paddingTop: '2rem' }}>
                <div style={{ height: '2rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', border: '2px soild black', backgroundColor: 'white', borderRadius: '2rem', marginBottom: '1rem' }}>
                    <FaRegCircleUser />
                    User_Name
                </div>
                <NavbarSide></NavbarSide>
            </div>
            {/* Center Post Tab */}
            <div style={{ height: '95%', backgroundColor: 'rgb(52 49 49)', width: '65%', margin: '0.5rem', borderRadius: '1rem', padding: '1rem' }}>
                <div className="stories" style={{ height: '40%', width: '100%', backgroundColor: 'white', marginBottom: '0.5rem', borderRadius: '1.5rem' }}>
                    <Stories />
                </div>
                <div className="post" style={{ height: '60%', width: '100%', backgroundColor: 'white', marginTop: '0.5rem', borderRadius: '1rem' }}>
                    <div className="heading" style={{ height: '10%', backgroundColor: 'rgb(52 49 49)', textAlign: 'center', color: 'white', fontFamily: 'monospace', fontSize: '20px', fontWeight: 'bold' }}>
                        Your Recent Posts
                    </div>
                    <div className="posts" style={{ height: '80%', width: '100%', backgroundColor: 'white', padding: '0px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: '0.5rem' }}>
                        <img src={sample_post1} style={{ height: '100%', width: '30%', borderRadius: '1rem' }} />
                        <img src={sample_post2} style={{ height: '100%', width: '30%', borderRadius: '1rem' }} />
                        <img src={sample_post3} style={{ height: '100%', width: '30%', borderRadius: '1rem' }} />
                    </div>
                    <div className="iconshere" style={{ height: '10%', width: '100%', backgroundColor: 'white', objectFit: 'fill', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <div className="icongroup" style={{ display: 'flex' }}>
                            <div style={{ marginRight: '0.25rem' }}>
                                <FaRegHeart />
                            </div>
                            <div style={{ marginRight: '0.25rem', marginLeft: '0.25rem' }}>
                                <FaRegCommentDots />
                            </div>

                            <div style={{ marginLeft: '0.25rem' }}>
                                <MdOutlineShare />
                            </div>
                        </div>
                        <div className="icongroup" style={{ display: 'flex' }}>
                            <div style={{ marginRight: '0.25rem' }}>
                                <FaRegHeart />
                            </div>
                            <div style={{ marginRight: '0.25rem', marginLeft: '0.25rem' }}>
                                <FaRegCommentDots />
                            </div>

                            <div style={{ marginLeft: '0.25rem' }}>
                                <MdOutlineShare />
                            </div>
                        </div>
                        <div className="icongroup" style={{ display: 'flex' }}>
                            <div style={{ marginRight: '0.25rem' }}>
                                <FaRegHeart />
                            </div>
                            <div style={{ marginRight: '0.25rem', marginLeft: '0.25rem' }}>
                                <FaRegCommentDots />
                            </div>

                            <div style={{ marginLeft: '0.25rem' }}>
                                <MdOutlineShare />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{ height: '95%', backgroundColor: 'white', width: '18%', margin: '0.5rem', border: '2px solid black', borderRadius: '1rem', padding: '1rem' }}>
                <h4 style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Messages</h4>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '100%', borderRadius: '1rem', margin: 'auto' }} />
                </form>
                <div className="messageBox" style={{ height: '75%', border: '2px solid rgb(214 209 209)', borderRadius: '1.5rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}></div>
                <button style={{ width: '100%', borderRadius: '2rem', color: 'white', backgroundColor: 'blue' }}> SendMessage</button>
            </div>
        </div>
    )
}

export default Home
