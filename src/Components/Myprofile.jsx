import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import api from '../Api/api';
import toast from 'react-hot-toast';

const MyProfile = () => {
    const authToken = localStorage.getItem("authToken") || "Guest";
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        country: "",
        state: "",
        city: "",
        postalCode: "",
        address: "",
        file: null,
    });
    const [avatar, setAvatar] = useState(localStorage.getItem("userProfile"));
    const [loading, setLoading] = useState(true);
    const [btnLoading, setBtnLoading] = useState(false);

    const fileInputRef = useRef(null); // For triggering file input

    // Redirect if not logged in
    useEffect(() => {
        if (!authToken || authToken === "Guest") {
            toast.error("Please Login");
        }
    }, [authToken]);

    // Fetch user details on mount
    useEffect(() => {
        const getCustomerDetails = async () => {
            const fd = new FormData();
            fd.append("programType", "getPersonalDetailsOfCustomer");
            fd.append("authToken", authToken);

            try {
                setLoading(true);
                const response = await api.post("customers/customerProfile", fd);

                if (response.data?.success) {
                    const user = response.data.data;

                    const profileUrl = user.profile
                        ? user.profile.startsWith("http")
                            ? user.profile
                            : `${api.imageUrl}/${user.profile}`
                        : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=";

                    setAvatar(profileUrl);
                    localStorage.setItem("userProfile", profileUrl);

                    setFormData({
                        firstName: user.firstName || "",
                        lastName: user.lastName || "",
                        phone: user.mobile || "",
                        email: user.email || "",
                        country: user.country || "",
                        state: user.state || "",
                        city: user.city || "",
                        postalCode: user.postalCode || "",
                        address: user.address || "",
                        file: null,
                    });
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                toast.error("Failed to fetch profile");
            } finally {
                setLoading(false);
            }
        };

        getCustomerDetails();
    }, [authToken]);

    // Handle input change
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "file") {
            if (files.length > 0) {
                const selectedFile = files[0];
                setFormData((prev) => ({ ...prev, file: selectedFile }));
                const objectUrl = URL.createObjectURL(selectedFile);
                setAvatar(objectUrl); // preview
                updateProfileWithAvatar(selectedFile); // auto-update profile
            }
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    // Trigger mobile gallery
    const handleAvatarClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    // Update profile when user selects a new avatar
    const updateProfileWithAvatar = async (file) => {
        const fd = new FormData();
        fd.append("programType", "updateCustomer");
        fd.append("authToken", authToken);
        fd.append("firstName", formData.firstName);
        fd.append("lastName", formData.lastName);
        fd.append("email", formData.email);
        fd.append("mobile", formData.phone);
        fd.append("country", formData.country);
        fd.append("state", formData.state);
        fd.append("city", formData.city);
        fd.append("address", formData.address);
        fd.append("postalCode", formData.postalCode);
        fd.append("file", file);

        try {
            setBtnLoading(true);
            const response = await api.post("customers/customerProfile", fd);

            if (response.data.success) {
                 toast.success("Profile updated successfully");
                const profileUrl = URL.createObjectURL(file);
                setAvatar(profileUrl);
                localStorage.setItem("userProfile", profileUrl);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error updating avatar:", error);
            toast.error("Something went wrong!");
        } finally {
            setBtnLoading(false);
        }
    };

    // Update other profile details
    const handleUpdate = async (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("programType", "updateCustomer");
        fd.append("authToken", authToken);
        fd.append("firstName", formData.firstName);
        fd.append("lastName", formData.lastName);
        fd.append("email", formData.email);
        fd.append("mobile", formData.phone);
        fd.append("country", formData.country);
        fd.append("state", formData.state);
        fd.append("city", formData.city);
        fd.append("address", formData.address);
        fd.append("postalCode", formData.postalCode);
        if (formData.file) fd.append("file", formData.file);

        try {
            setBtnLoading(true);
            const response = await api.post("customers/customerProfile", fd);
            console.log("Update Response:", response.data);

            if (response.data.success) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("Something went wrong!");
        } finally {
            setBtnLoading(false);
        }
    };

    return (
        <div>
            <div className="header header-st2">
                <div className="tf-container">
                    <div className="tf-statusbar br-none d-flex align-items-center" style={{ position: "relative" }}>
                        <Link to="/profile" className="back-btn"><i className="icon-left"></i></Link>
                        <h3 style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", margin: 0, fontWeight: "600" }}>Profile</h3>
                    </div>
                </div>
            </div>

            <div className="mt-1">
                <div className="tf-container">
                    <div className="box-user">
                        <div className="inner d-flex flex-column align-items-center justify-content-center">
                            <div className="box-avatar" onClick={handleAvatarClick} style={{ cursor: "pointer" }}>
                                <img src={avatar || "images/user/profile1.jpg"} alt="avatar" />
                                <span className="icon-camera-to-take-photos"></span>
                                <input
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleChange}
                                    style={{ display: 'none' }}
                                />
                            </div>
                        </div>
                    </div>

                    <form className="mt-5" onSubmit={handleUpdate}>
                        {[ 
                            { name: "firstName", placeholder: "First Name", icon: "icon-user" },
                            { name: "lastName", placeholder: "Last Name", icon: "icon-user" },
                            { name: "phone", placeholder: "Phone Number", icon: "icon-phone", type: "tel" },
                            { name: "email", placeholder: "Email", icon: "icon-email", type: "email" },
                            { name: "country", placeholder: "Country", icon: "icon-flag" },
                            { name: "state", placeholder: "State", icon: "icon-map" },
                            { name: "city", placeholder: "City", icon: "icon-location" },
                            { name: "postalCode", placeholder: "Postal Code", icon: "icon-credit-card2" },
                            { name: "address", placeholder: "Address", icon: "icon-home" },
                        ].map((field, idx) => (
                            <div key={idx} className="list-user-info" style={{ position: "relative", marginBottom: "15px" }}>
                                <input
                                    type={field.type || "text"}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    style={{ paddingLeft: "35px" }}
                                />
                                <span className={field.icon} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}></span>
                            </div>
                        ))}

                        <div className="text-center my-1">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={btnLoading}
                                style={{
                                    padding: "10px 25px",
                                    borderRadius: "8px",
                                    fontWeight: "600",
                                    background: "#ED2027",
                                    border: "none",
                                }}
                            >
                                {btnLoading ? "Updating..." : "Update"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
