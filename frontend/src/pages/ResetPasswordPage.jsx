import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FormInput from '../components/common/FormInput';
import Button from '../components/common/Button';
import { resetPassword } from '../api/authService';

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const token = location.state?.token;
    const [formData, setFormData] = useState({ newPassword: '', confirmPassword: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            return setError('Passwords do not match.');
        }
        setIsLoading(true);
        setError('');
        try {
            await resetPassword({ token, newPassword: formData.newPassword });
            setSuccess('Password reset successfully!');
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to reset password.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary">Set a new password</h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <FormInput label="New Password" type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} required />
                <FormInput label="Confirm New Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                {error && <p className="text-sm text-red-600">{error}</p>}
                {success && <p className="text-sm text-green-600">{success}</p>}
                <Button type="submit" isLoading={isLoading} fullWidth>Reset Password</Button>
            </form>
        </div>
    );
};

export default ResetPasswordPage;