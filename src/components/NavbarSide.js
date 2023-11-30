import React from 'react'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";



const NavbarSide = () => {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <nav class="navbar  bg-light" style={{ borderRadius: '1rem' }}>

                <div class="container-fluid" style={{ margin: '0px' }}>

                    <ul class="navbar-nav" style={{ width: '100%', listStyle: 'none' }}>
                        <li class="nav-item" style={{ borderRadius: '0.8rem', textAlign: 'center', width: '100%', margin: '0.1rem', marginBottom: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <IoHomeOutline />
                            <Link class="nav-link" href="/" style={{ marginLeft: '0.8rem', color: 'black' }}>Home</Link>
                        </li>
                        <li class="nav-item" style={{ borderRadius: '0.8rem', textAlign: 'center', width: '100%', margin: '0.1rem', marginBottom: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <MdOutlineExplore />
                            <Link class="nav-link" href="/" style={{ marginLeft: '0.8rem', color: 'black' }}>Explore</Link>
                        </li>
                        <li class="nav-item" style={{ borderRadius: '0.8rem', textAlign: 'center', width: '100%', margin: '0.1rem', marginBottom: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <IoIosNotificationsOutline />
                            <Link class="nav-link" href="/" style={{ marginLeft: '0.8rem', color: 'black' }}>Notifications</Link>
                        </li>
                        <li class="nav-item" style={{ borderRadius: '0.8rem', textAlign: 'center', width: '100%', margin: '0.1rem', marginBottom: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <FiMessageCircle />
                            <Link class="nav-link" href="/" style={{ marginLeft: '0.8rem', color: 'black' }}>Messages</Link>
                        </li>
                        <li class="nav-item" style={{ borderRadius: '0.8rem', textAlign: 'center', width: '100%', margin: '0.1rem', marginBottom: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <CiBookmark />
                            <Link class="nav-link" href="/" style={{ marginLeft: '0.8rem', color: 'black' }}>Bookmarks</Link>
                        </li>
                        <li class="nav-item" style={{ borderRadius: '0.8rem', textAlign: 'center', width: '100%', margin: '0.1rem', marginBottom: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <IoSettingsOutline />
                            <Link class="nav-link" href="/" style={{ marginLeft: '0.8rem', color: 'black' }}>Settings</Link>
                        </li>
                    </ul>
                </div>

            </nav>
            <button style={{ width: '80%', margin: 'auto', borderRadius: '0.8rem', color: 'white', backgroundColor: 'blue', border: '2px solid blue', marginTop: '2rem' }}>
                Create Post
            </button>
        </div>
    )
}

export default NavbarSide
