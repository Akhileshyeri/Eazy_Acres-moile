import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link, useNavigate } from 'react-router-dom';
import { Store, MapPin, BedDouble, Bath } from 'lucide-react';
import Easy from '../assets/images/easy.png';
import banner from '../assets/homebanner.jpg';
import property from '../assets/property.jpg';
import villa from '../assets/images/villa.jpg';
import Appartment from '../assets/images/Appartment.jpg';
import beauty from '../assets/images/beautyfullview.jpg';
import England from '../assets/images/Englandhome.jpg';
import poolside from '../assets/images/poolside.jpg';
import Redhome from '../assets/images/redhome.jpg';
import normalhome from '../assets/images/normalhome.jpg';
import india from '../assets/images/india.jpg';
import Dubai from '../assets/images/dubai.jpg';
import Footer from './Footer';




const Homepage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();



    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div>
                {/* Header */}
                {/* Header */}
                {/* Header */}
                <div className="header is-fixed" style={{ background: '#fff' }}>
                    <div className="tf-container">
                        <div
                            className="tf-statusbar d-flex align-items-center"
                            style={{ width: '100%' }}
                        >
                            {/* Show logo only when NOT scrolled */}
                            {!isScrolled && (
                                <img
                                    src={Easy}
                                    style={{ width: '8rem', borderRadius: '0.5rem' }}
                                    alt="logo"
                                />
                            )}

                            {/* Show search bar only when SCROLLED */}
                            {isScrolled && (
                                <div style={{ flexGrow: 1, width: '100%', marginTop: "1px" }}>
                                    <div
                                        className="input-field"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginLeft: "17px",
                                            minWidth: '340px',
                                            background: '#fff',
                                            borderRadius: '12px',
                                            padding: '6px 12px',
                                            height: '40px',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.15)', // attractive modern shadow
                                            border: '1px solid #e0e0e0',
                                            gap: '10px',
                                        }}
                                    >
                                        <input
                                            className="search-field"
                                            type="text"
                                            placeholder="Search properties..."
                                            style={{
                                                border: 'none',
                                                outline: 'none',
                                                background: 'transparent',
                                                flex: 1,
                                                fontSize: '15px',
                                                color: '#333',
                                            }}
                                            onFocus={() => navigate('/search')} // Navigate when input is focused
                                        />

                                        <span
                                            className="icon-search"
                                            style={{ fontSize: '23px' }}
                                        ></span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                {/* Body */}
                {/* Body */}
                <div id="app-wrap">
                    {/* Banner with search bar overlay */}
                    <div className="banner-wrapper position-relative">
                        <img
                            src={banner}
                            alt="banner"
                            style={{
                                width: '100%',
                                height: '250px',
                                objectFit: 'cover',
                                borderRadius: '10px',
                            }}
                        />
                        {!isScrolled && (
                            <div
                                className="search-overlay"
                                style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '90%',
                                }}
                            >
                                <div
                                    className="input-field"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        background: '#fff',
                                        borderRadius: '10px',
                                        padding: '5px 10px',
                                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                                        height: '40px',
                                    }}
                                >
                                    <input
                                        className="search-field"
                                        type="text"
                                        placeholder='Search properties...'
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            background: 'transparent',
                                            flex: 1,
                                            fontSize: '14px',
                                        }}
                                        onFocus={() => navigate('/search')}
                                    />
                                    <span className="icon-search ms-2" style={{ fontSize: '23px' }}></span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>



                {/* Body */}
                <div className="tf-container mt-7">
                    <h2 className="fw-bold mb-3 " >Recommended For You</h2>

                    <Swiper

                        spaceBetween={15}
                        slidesPerView={1.2} // 1 full card + peek of next
                        pagination={{ clickable: true }}
                    >
                        {/* Card 1 */}
                        <SwiperSlide>
                            <div className="card shadow-sm" style={{ borderRadius: "10px", overflow: "hidden" }}>
                                <div className="position-relative">
                                    <span className="badge bg-secondary position-absolute m-2 bg-danger">SALE</span>
                                    <img
                                        src={villa}
                                        alt="card"
                                        style={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">RESIDENTIAL</h5>
                                    <p className="text-muted mb-2">
                                        <MapPin size={16} className="me-1" /> Chhattisgarh
                                    </p>

                                    {/* Guest User and Price Row */}
                                    <div
                                        className="d-flex justify-content-between align-items-center"
                                        style={{ fontWeight: "bold", fontSize: "1.1rem", color: "black" }}
                                    >
                                        <span className="fw-bold">Guests User</span>
                                        <span className="fw-bold">₹500.00</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* Card 2 */}
                        <SwiperSlide>
                            <div className="card shadow-sm border-0" style={{ borderRadius: "10px" }}>
                                <div className="position-relative">
                                    <span className="badge bg-secondary position-absolute m-2 bg-danger">SALE</span>
                                    <img
                                        src={poolside}
                                        alt="card"
                                        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }}
                                    />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">RESIDENTIAL</h5>
                                    <p className="text-muted mb-2">
                                        <MapPin size={16} className="me-1" /> Chhattisgarh
                                    </p>

                                    {/* Guest User and Price Row inside card-body */}
                                    <div className="d-flex justify-content-between align-items-center " style={{ fontWeight: 'bold', fontSize: '1.1rem', color: "black" }}>
                                        <span className="fw-bold">Guests User</span>
                                        <span className="fw-bold">₹500.00</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Card 3 */}
                        <SwiperSlide>
                            <div className="card shadow-sm border-0" style={{ borderRadius: "10px" }}>
                                <div className="position-relative">
                                    <span className="badge bg-secondary position-absolute m-2 bg-danger">SALE</span>
                                    <img
                                        src={normalhome}
                                        alt="card"
                                        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }}
                                    />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">RESIDENTIAL</h5>
                                    <p className="text-muted mb-2">
                                        <MapPin size={16} className="me-1" /> Chhattisgarh
                                    </p>

                                    {/* Guest User and Price Row inside card-body */}
                                    <div className="d-flex justify-content-between align-items-center " style={{ fontWeight: 'bold', fontSize: '1.1rem', color: "black" }}>
                                        <span className="fw-bold">Guests User</span>
                                        <span className="fw-bold">₹500.00</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>


                <div className="tf-container mt-7">
                    <h2 className="fw-bold mb-3 " >Joint Venture</h2>

                    <Swiper

                        spaceBetween={15}
                        slidesPerView={1.2} // 1 full card + peek of next
                        pagination={{ clickable: true }}
                    >
                        {/* Card 1 */}
                        <SwiperSlide>
                            <div className="card shadow-sm" style={{ borderRadius: "10px", overflow: "hidden" }}>
                                <div className="position-relative">
                                    <span className="badge bg-secondary position-absolute m-2 bg-danger">SALE</span>
                                    <img
                                        src={England}
                                        alt="card"
                                        style={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">RESIDENTIAL</h5>
                                    <p className="text-muted mb-2">
                                        <MapPin size={16} className="me-1" /> Chhattisgarh
                                    </p>

                                    {/* Guest User and Price Row */}
                                    <div
                                        className="d-flex justify-content-between align-items-center"
                                        style={{ fontWeight: "bold", fontSize: "1.1rem", color: "black" }}
                                    >
                                        <span className="fw-bold">Guests User</span>
                                        <span className="fw-bold">₹500.00</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Card 2 */}
                        <SwiperSlide>
                            <div className="card shadow-sm border-0" style={{ borderRadius: "10px" }}>
                                <div className="position-relative">
                                    <span className="badge bg-secondary position-absolute m-2 bg-danger">SALE</span>
                                    <img
                                        src={villa}
                                        alt="card"
                                        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }}
                                    />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">RESIDENTIAL</h5>
                                    <p className="text-muted mb-2">
                                        <MapPin size={16} className="me-1" /> Chhattisgarh
                                    </p>

                                    {/* Guest User and Price Row inside card-body */}
                                    <div className="d-flex justify-content-between align-items-center " style={{ fontWeight: 'bold', fontSize: '1.1rem', color: "black" }}>
                                        <span className="fw-bold">Guests User</span>
                                        <span className="fw-bold">₹500.00</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Card 3 */}
                        <SwiperSlide>
                            <div className="card shadow-sm border-0" style={{ borderRadius: "10px" }}>
                                <div className="position-relative">
                                    <span className="badge bg-secondary position-absolute m-2 bg-danger">SALE</span>
                                    <img
                                        src={normalhome}
                                        alt="card"
                                        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }}
                                    />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">RESIDENTIAL</h5>
                                    <p className="text-muted mb-2">
                                        <MapPin size={16} className="me-1" /> Chhattisgarh
                                    </p>

                                    {/* Guest User and Price Row inside card-body */}
                                    <div className="d-flex justify-content-between align-items-center " style={{ fontWeight: 'bold', fontSize: '1.1rem', color: "black" }}>
                                        <span className="fw-bold">Guests User</span>
                                        <span className="fw-bold">₹500.00</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="tf-container mt-7">
                    <h2 className="fw-bold mb-3 " >Apartments, Villas and more</h2>
                    <Swiper

                        spaceBetween={15}
                        slidesPerView={1.2} // 1 full card + peek of next
                        pagination={{ clickable: true }}
                    >
                        {/* Card 1 */}
                        <SwiperSlide>
                            <div onClick={() => {
                                navigate("/listing")
                            }}
                                className="card shadow-sm"
                                style={{ height: "200px", borderRadius: "10px" }}
                            >
                                <div className="position-relative" style={{ height: "200px" }}>
                                    <img
                                        src={Appartment}
                                        alt="card"
                                        style={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            borderRadius: "10px 10px 0 0",
                                        }}
                                    />
                                    {/* Text overlay at top */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "10px",
                                            left: "15px",
                                            color: "#000",
                                            fontWeight: "600",
                                            fontSize: "1.1rem",
                                            lineHeight: "1.3rem",
                                            backgroundColor: "rgba(255,255,255,0.6)",
                                            padding: "4px 8px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        Residential<br />Appartment
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>





                        <SwiperSlide>
                            <div
                                className="card shadow-sm"
                                style={{ height: "200px", borderRadius: "10px" }}
                            >
                                <div className="position-relative" style={{ height: "200px" }}>
                                    <img
                                        src={Appartment}
                                        alt="card"
                                        style={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            borderRadius: "10px 10px 0 0",
                                        }}
                                    />
                                    {/* Text overlay at top */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "10px",
                                            left: "15px",
                                            color: "#000",
                                            fontWeight: "600",
                                            fontSize: "1.1rem",
                                            lineHeight: "1.3rem",
                                            backgroundColor: "rgba(255,255,255,0.6)",
                                            padding: "4px 8px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        Villa
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="card shadow-sm"
                                style={{ height: "200px", borderRadius: "10px" }}
                            >
                                <div className="position-relative" style={{ height: "200px" }}>
                                    <img
                                        src={Appartment}
                                        alt="card"
                                        style={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            borderRadius: "10px 10px 0 0",
                                        }}
                                    />
                                    {/* Text overlay at top */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "10px",
                                            left: "15px",
                                            color: "#000",
                                            fontWeight: "600",
                                            fontSize: "1.1rem",
                                            lineHeight: "1.3rem",
                                            backgroundColor: "rgba(255,255,255,0.6)",
                                            padding: "4px 8px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        Studio
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="card shadow-sm"
                                style={{ height: "200px", borderRadius: "10px" }}
                            >
                                <div className="position-relative" style={{ height: "200px" }}>
                                    <img
                                        src={Appartment}
                                        alt="card"
                                        style={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            borderRadius: "10px 10px 0 0",
                                        }}
                                    />
                                    {/* Text overlay at top */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "10px",
                                            left: "15px",
                                            color: "#000",
                                            fontWeight: "600",
                                            fontSize: "1.1rem",
                                            lineHeight: "1.3rem",
                                            backgroundColor: "rgba(255,255,255,0.6)",
                                            padding: "4px 8px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        Plot
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="card shadow-sm"
                                style={{ height: "200px", borderRadius: "10px" }}
                            >
                                <div className="position-relative" style={{ height: "200px" }}>
                                    <img
                                        src={Appartment}
                                        alt="card"
                                        style={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            borderRadius: "10px 10px 0 0",
                                        }}
                                    />
                                    {/* Text overlay at top */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "10px",
                                            left: "15px",
                                            color: "#000",
                                            fontWeight: "600",
                                            fontSize: "1.1rem",
                                            lineHeight: "1.3rem",
                                            backgroundColor: "rgba(255,255,255,0.6)",
                                            padding: "4px 8px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        House
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="card shadow-sm"
                                style={{ height: "200px", borderRadius: "10px" }}
                            >
                                <div className="position-relative" style={{ height: "200px" }}>
                                    <img
                                        src={Appartment}
                                        alt="card"
                                        style={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            borderRadius: "10px 10px 0 0",
                                        }}
                                    />
                                    {/* Text overlay at top */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "10px",
                                            left: "15px",
                                            color: "#000",
                                            fontWeight: "600",
                                            fontSize: "1.1rem",
                                            lineHeight: "1.3rem",
                                            backgroundColor: "rgba(255,255,255,0.6)",
                                            padding: "4px 8px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        Office
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className="container my-3 ">
                    <h2 style={{ marginTop: "25px", marginBottom: "15px" }}>Our Location</h2>

                    {/* Flex container for cards */}
                    <div
                        className="d-flex justify-content-between"
                        style={{ gap: "10px", flexWrap: "wrap" }}
                    >
                        {/* Card 1 */}
                        <div
                            className="card shadow-sm border-0 position-relative text-white"
                            style={{
                                borderRadius: "10px",
                                flex: "1 1 48%",
                                minWidth: "140px",
                                maxWidth: "200px",
                                height: "180px",
                                backgroundImage: `url(${india})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                display: "flex",
                                alignItems: "flex-start", // <-- top alignment
                                justifyContent: "flex-start", // <-- left alignment
                                padding: "10px",
                            }}
                        >
                            <div>
                                <h6 className="fw-bold mb-1">India</h6>

                            </div>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="card shadow-sm border-0 position-relative text-white"
                            style={{
                                borderRadius: "10px",
                                flex: "1 1 48%",
                                minWidth: "140px",
                                maxWidth: "200px",
                                height: "180px",
                                backgroundImage: `url(${Dubai})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                display: "flex",
                                alignItems: "flex-start", // top
                                justifyContent: "flex-start", // left
                                padding: "10px",
                            }}
                        >
                            <div>
                                <h6 className="fw-bold mb-1">dubai</h6>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="tf-container mt-7">
                    <h2 className="fw-bold mb-3">Calculators</h2>

                    <div
                        className="row g-2"
                        style={{ justifyContent: "center" }}
                    >
                        {[
                            {
                                title: "EMI Calculator",
                                img: "images/logo/schedule.png",

                                link: "/emi",
                                width: 45,
                                height: 35,
                            },
                            {
                                title: "Construction Calculator",
                                img: "images/logo/calculator.png",

                                width: 35,
                                height: 30,
                            },
                            {
                                title: "Area Unit Calculator",
                                img: "images/logo/size.png",

                                link: "/area",
                                width: 35,
                                height: 30,
                            },
                            {
                                title: "Rent vs Buy",
                                img: "images/logo/contract.png",

                                link: "/rent",
                                width: 35,
                                height: 30,
                            },
                        ].map((card, idx) => (
                            <div key={idx} className="col-6">
                                <div
                                    className="card"
                                    style={{
                                        borderRadius: "8px",
                                        height: "100px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        border: "1px solid #eee",

                                        transition: "all 0.3s ease",
                                    }}
                                    onClick={() => navigate(card.link)}

                                >
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        style={{
                                            width: card.width,
                                            height: card.height,
                                            marginBottom: "10px",
                                        }}
                                    />
                                    <h6 className="fw-bold mb-1">{card.title}</h6>
                                    <small style={{ color: "#ED2027" }}>{card.desc}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>




                <div className="tf-container mt-7 mb-9 ">

                    <h2 className="fw-bold mb-5">Check The Blogs</h2>

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 2500, // 2.5 seconds per slide
                            disableOnInteraction: false,
                        }}

                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                    >
                        {/* Blog Card 1 */}
                        <SwiperSlide>
                            <div className="card border-0 shadow-sm" style={{ borderRadius: "10px" }}>
                                <div className="position-relative">
                                    <img
                                        src={villa}
                                        alt="Blog 1"
                                        style={{
                                            width: "100%",
                                            height: "220px",
                                            objectFit: "cover",
                                            borderRadius: "10px 10px 0 0",
                                        }}
                                    />
                                    <span
                                        className="position-absolute text-white px-3 py-1"
                                        style={{
                                            backgroundColor: "#e50914",
                                            bottom: 0,
                                            left: 0,
                                            fontSize: "0.75rem",
                                            borderRadius: "0 10px 0 0",
                                        }}
                                    >
                                        September 23, 2025
                                    </span>
                                </div>
                                <div className="card-body text-center">
                                    <p className="text-muted mb-1">Property</p>
                                    <h5 className="card-title fw-bold">
                                        Carpet Area, Built-Up Area And Super Built-Up: Key Differences
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Blog Card 2 */}
                        <SwiperSlide>
                            <div className="card border-0 shadow-sm" style={{ borderRadius: "10px" }}>
                                <div className="position-relative">
                                    <img
                                        src={poolside}
                                        alt="Blog 2"
                                        style={{
                                            width: "100%",
                                            height: "220px",
                                            objectFit: "cover",
                                            borderRadius: "10px 10px 0 0",
                                        }}
                                    />
                                    <span
                                        className="position-absolute text-white px-3 py-1"
                                        style={{
                                            backgroundColor: "#e50914",
                                            bottom: 0,
                                            left: 0,
                                            fontSize: "0.75rem",
                                            borderRadius: "0 10px 0 0",
                                        }}
                                    >
                                        September 23, 2025
                                    </span>
                                </div>
                                <div className="card-body text-center">
                                    <p className="text-muted mb-1">Property</p>
                                    <h5 className="card-title fw-bold">Home Maintenance</h5>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Blog Card 3 */}
                        <SwiperSlide>
                            <div className="card border-0 shadow-sm" style={{ borderRadius: "10px" }}>
                                <div className="position-relative">
                                    <img
                                        src={beauty}
                                        alt="Blog 3"
                                        style={{
                                            width: "100%",
                                            height: "220px",
                                            objectFit: "cover",
                                            borderRadius: "10px 10px 0 0",
                                        }}
                                    />
                                    <span
                                        className="position-absolute text-white px-3 py-1"
                                        style={{
                                            backgroundColor: "#e50914",
                                            bottom: 0,
                                            left: 0,
                                            fontSize: "0.75rem",
                                            borderRadius: "0 10px 0 0",
                                        }}
                                    >
                                        September 23, 2025
                                    </span>
                                </div>
                                <div className="card-body text-center">
                                    <p className="text-muted mb-1">Property</p>
                                    <h5 className="card-title fw-bold">Xfvxcvxcv</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <Footer />


            </div>

        </>
    );
}

export default Homepage


