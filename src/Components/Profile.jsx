import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'


const Profile = () => {


    return (
        <>

            <div class="header mb-1 is-fixed">
                <div class="tf-container">
                    <div class="tf-statusbar d-flex justify-content-center align-items-center">
                        <Link to="/" class="back-btn"> <i class="icon-left"></i> </Link>
                        <h3>Profile</h3>
                    </div>
                </div>
            </div>
            <div id="app-wrap " style={{ marginTop: '50px' }}>
                <Link to="/myprofile" class="box-profile mt-1" href="70_profile-detail.html">
                    <div class="inner d-flex align-items-center">
                        <div class="box-avatar">
                            <img src="images/user/profile1.jpg" alt="image" />
                            <span class="icon-camera-to-take-photos"></span>
                        </div>
                        <div class="info">
                            <h2 class="fw_8">Themesflat</h2>
                            <p>0321  0000 2342 2424 <i class="icon-copy1"></i></p>
                        </div>
                    </div>
                    <span><i class="icon-right"></i></span>

                </Link>


                <ul class="box-settings-profile mt-1 mb-8">


                    <li>
                        <a href="" class="list-setting-profile">
                            <span class="icon icon-wlet"></span>
                            <p>Dashboard</p>
                            <i class="icon-right"></i>
                        </a>
                    </li>
                    <li>
                        <a href="" class="list-setting-profile">
                            <span class="icon icon-wlet"></span>
                            <p>My properties</p>
                            <i class="icon-right"></i>
                        </a>
                    </li>


                    <li>
                        <a href="" class="list-setting-profile">
                            <span class="icon icon-user3"></span>
                            <p>My favorites</p>
                            <i class="icon-right"></i>
                        </a>
                    </li>
                    <li>
                        <a href="" class="list-setting-profile">
                            <span class="icon icon-user3"></span>
                            <p>Recent Activity</p>
                            <i class="icon-right"></i>
                        </a>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            onClick={() => {
                                localStorage.removeItem("authToken"); // clear token
                            }}
                            className="list-setting-profile"
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px", // adjust spacing between icon and text
                                padding: 0,
                                textDecoration: "none", // remove underline
                                color: "inherit", // keep text color same as button
                            }}
                        >
                            <span className="icon icon-setting1"></span>
                            <p style={{ margin: 0 }}>Logout</p>
                            <i className="icon-right"></i>
                        </Link>
                    </li>
                </ul>

                <Footer />
            </div>
        </>

    )
}

export default Profile
