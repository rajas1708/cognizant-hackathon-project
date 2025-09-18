import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import { verifyResetCode, forgotPassword } from '../api/authService';

const VerifyCodePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email, organization } = location.state || {};
    const [code, setCode] = useState(new Array(6).fill(''));
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [resendCooldown, setResendCooldown] = useState(60);
    const inputsRef = useRef([]);

    useEffect(() => {
        if (!email) navigate('/forgot-password');
    }, [email, navigate]);

    useEffect(() => {
        const timer = resendCooldown > 0 && setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
        return () => clearTimeout(timer);
    }, [resendCooldown]);

    const handleChange = (element, index) => {
        if (/^[0-9]$/.test(element.value)) {
            const newCode = [...code];
            newCode[index] = element.value;
            setCode(newCode);
            if (element.nextSibling) element.nextSibling.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !code[index] && inputsRef.current[index - 1]) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            const response = await verifyResetCode({ email, code: code.join('') });
            setSuccess('Code verified! Redirecting...');
            setTimeout(() => navigate('/reset-password', { state: { token: response.data.data.resetToken } }), 1500);
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid code.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendCode = async () => {
        if (resendCooldown > 0) return;
        try {
            await forgotPassword({ email, organization });
            setSuccess('A new code has been sent.');
            setResendCooldown(60);
        } catch (err) {
            setError('Failed to resend code.');
        }
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary">Check your email</h2>
            <p className="mt-2 text-sm text-text-secondary">We sent a 6-digit code to {email}.</p>
            <form className="mt-8" onSubmit={handleSubmit}>
                <div className="flex justify-center space-x-2 mb-6">
                    {code.map((digit, index) => (
                        <input key={index} type="text" maxLength="1" value={digit} onChange={e => handleChange(e.target, index)} onKeyDown={e => handleKeyDown(e, index)} ref={el => inputsRef.current[index] = el} className="w-12 h-12 text-center border rounded-md" />
                    ))}
                </div>
                {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
                {success && <p className="text-sm text-green-600 mb-4">{success}</p>}
                <Button type="submit" isLoading={isLoading} fullWidth>Verify Code</Button>
            </form>
            <div className="mt-6 text-sm flex justify-between">
                <p>Didn't receive it?</p>
                <button onClick={handleResendCode} disabled={resendCooldown > 0} className="font-medium text-secondary hover:underline disabled:opacity-50">
                    {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend code'}
                </button>
            </div>
        </div>
    );
};

export default VerifyCodePage;