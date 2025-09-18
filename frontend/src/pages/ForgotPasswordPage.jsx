import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/common/FormInput';
import Button from '../components/common/Button';
import { forgotPassword } from '../api/authService';
import { MailIcon, BuildingOfficeIcon } from '../components/icons/Icons';

const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', organization: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccess('');
        try {
            await forgotPassword(formData);
            setSuccess('A verification code has been sent to your email.');
            setTimeout(() => {
                 navigate('/verify-code', { state: { email: formData.email, organization: formData.organization } });
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to send code.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary">Forgot your password?</h2>
            <p className="mt-2 text-sm text-text-secondary">Enter your email and organization to receive a code.</p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} Icon={MailIcon} required />
                <FormInput label="Organization" type="text" name="organization" value={formData.organization} onChange={handleChange} Icon={BuildingOfficeIcon} required />
                {error && <p className="text-sm text-red-600">{error}</p>}
                {success && <p className="text-sm text-green-600">{success}</p>}
                <Button type="submit" isLoading={isLoading} fullWidth>Send verification code</Button>
            </form>
            <div className="mt-6 text-sm">
                <Link to="/login" className="font-medium text-secondary hover:text-secondary-hover">Back to Login</Link>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;