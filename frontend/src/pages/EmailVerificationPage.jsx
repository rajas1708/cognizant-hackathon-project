import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyEmail } from '../api/authService';
import Spinner from "../components/common/Spinner";

const EmailVerificationPage = () => {
    const [isVerifying, setIsVerifying] = useState(true);
    const [verificationMessage, setVerificationMessage] = useState("Verifying your email...");
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleEmailVerification = useCallback(async () => {
        const params = new URLSearchParams(location.search);
        const token = params.get("token");

        if (!token) {
            setVerificationMessage("No verification token found.");
            setError(true);
            setIsVerifying(false);
            return;
        }

        try {
            await verifyEmail(token);
            setVerificationMessage("Email verified successfully! Redirecting to login...");
            setError(false);
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        } catch (err) {
            setVerificationMessage(err.response?.data?.message || "An error occurred during verification.");
            setError(true);
        } finally {
            setIsVerifying(false);
        }
    }, [location.search, navigate]);

    useEffect(() => {
        handleEmailVerification();
    }, [handleEmailVerification]);

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary">Email Verification</h2>
            <div className="mt-6">
                {isVerifying && <Spinner />}
                <p className={`mt-4 text-sm ${error ? 'text-red-600' : 'text-green-600'}`}>
                    {verificationMessage}
                </p>
            </div>
        </div>
    );
};

export default EmailVerificationPage;