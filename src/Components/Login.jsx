import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Api/api";

const Login = () => {
    const [countryCode, setCountryCode] = useState("+91"); // default India
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [showOtp, setShowOtp] = useState(false);
    const [timer, setTimer] = useState(0); // countdown state
    const [showotp, setShowotp] = useState(false);
    const [serverOtp, setServerOtp] = useState(""); // store OTP from API

    const navigate = useNavigate();

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // allow only digits
        setPhone(value);
    };

    const sendOtp = async () => {
        const fd = new FormData();
        fd.append("programType", "customerRegister");
        fd.append("username", countryCode + phone); // mobileNo
        fd.append("country", "india");

        try {
            const response = await api.post("/customers/customer", fd);

            // store OTP in state
            if (response.data?.data?.otp) {
                setServerOtp(response.data.data.otp);
            }

            setShowOtp(true); // show OTP input
            setTimer(30);
        } catch (error) {
            console.error("Error sending OTP:", error);
        }
    };


    const verifyOtp = async () => {
        const fd = new FormData();
        fd.append("programType", "verifyOTP");
        fd.append("username", countryCode + phone); // mobileNo
        fd.append("otp", otp);

        try {
            const response = await api.post("/customers/customer", fd);
            console.log("OTP Verify Response:", response.data);

            if (response.data.success) {

                localStorage.setItem("authToken", response.data.data.authToken || "Guest");
                navigate("/"); // go to home page
            } else {
                alert("Invalid OTP, please try again.");
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            alert("Failed to verify OTP. Try again.");
        }
    };

    const resendOtp = async () => {
        const fd = new FormData();
        fd.append("programType", "resendOtpForCustomer");
        fd.append("username", countryCode + phone);
        fd.append("country", "india");

        try {
            const response = await api.post("/customers/customer", fd);
            console.log("OTP resend:", response);
            setTimer(30); // restart timer
        } catch (error) {
            console.error("Error resending OTP:", error);
        }
    };

    const handleContinue = async (e) => {
        e.preventDefault();
        if (!showOtp) {
            if (phone.length === 10) {
                await sendOtp();
                setShowOtp(true); // show OTP input after sending
            }
        } else {
            if (otp.length > 0) {
                await verifyOtp(); // verify entered OTP
            }
        }
    };

    // countdown effect
    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    return (
        <div className="mt-7 login-section">
            <div className="tf-container" style={{ marginTop: "170px" }}>
                <form className="tf-form" onSubmit={handleContinue}>
                    <h1>Login</h1>

                    <div className="group-input">
                        <label>Phone Number</label>
                        <div style={{ display: "flex" }}>
                            <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                style={{
                                    width: "93px",
                                    borderRight: "none",
                                    borderTopLeftRadius: "8px",
                                    borderBottomLeftRadius: "8px",
                                    borderTopRightRadius: "0",
                                    borderBottomRightRadius: "0",
                                }}
                            >
                                <option value="+91">IN (+91)</option>
                                <option value="+971">AE (+971)</option>
                            </select>

                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={handlePhoneChange}
                                maxLength={10}
                                style={{
                                    flex: 1,
                                    borderLeft: "none",
                                    borderTopLeftRadius: "0",
                                    borderBottomLeftRadius: "0",
                                }}
                            />
                            
                        </div>
                        {serverOtp && (
                        <p style={{ color: "#ED2027", marginTop: "10px" }}>
                            Your OTP is: {serverOtp}
                        </p>
                    )}
                    </div>
                    

                    {showOtp && (
                        <div className="group-input">
                            <label>OTP</label>
                            <input
                                type="tel"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </div>
                    )}

                    {/* Timer above continue button */}
                    {showOtp && timer > 0 && (
                        <p className="mt-2" style={{ color: "#555", fontSize: "14px" }}>
                            Resend OTP in {timer}s
                        </p>
                    )}

                    <button
                        type="submit"
                        className="tf-btn accent large"
                        style={{
                            background: "#ED2027",
                            border: "none",
                            pointerEvents: "auto",
                            marginTop: "10px",
                        }}
                        onMouseEnter={(e) => e.preventDefault()}
                        onMouseOver={(e) => e.preventDefault()}
                    >
                        {!showOtp && phone.length === 10
                            ? "Send OTP"
                            : showOtp
                                ? "Verify OTP"
                                : "Log In"}
                    </button>

                    {/* Resend OTP button (only after timer ends) */}
                    {showOtp && timer === 0 && (
                        <p
                            className="mt-4"
                            onClick={resendOtp}
                            style={{
                                cursor: "pointer",
                                textDecoration: "none",
                                color: "#ED2027",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.textDecoration = "underline")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.textDecoration = "none")
                            }
                        >
                            Resend OTP
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
