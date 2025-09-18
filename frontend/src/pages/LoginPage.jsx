import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import FormInput from '../components/common/FormInput';
import Button from '../components/common/Button';
import { MailIcon } from '../components/icons/Icons';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            await login(formData);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="text-center">
            <span className="inline-block bg-blue-100 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                Authentication
            </span>
            <h2 className="mt-4 text-2xl font-bold text-text-primary">Welcome back</h2>
            <p className="mt-2 text-sm text-text-secondary">
                Access your dashboard to monitor equipment reliability.
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <FormInput label="Email or Hospital ID" type="email" name="email" placeholder="name@hospital.org or HID12345" value={formData.email} onChange={handleChange} Icon={MailIcon} required />
                <FormInput label="Password" type="password" name="password" placeholder="Min 8 characters" value={formData.password} onChange={handleChange} required />
                {error && <p className="text-sm text-red-600">{error}</p>}
                <Button type="submit" isLoading={isLoading} fullWidth variant="deafult">
                    Login
                </Button>
            </form>
            <div className="mt-6 flex justify-between items-center text-sm">
                <Link to="/forgot-password" className="font-medium text-secondary hover:text-secondary-hover">Forgot Password?</Link>
                <Link to="/signup" className="font-medium text-secondary hover:text-secondary-hover">Don't have an account? Sign Up</Link>
            </div>
        </div>
    );
};

export default LoginPage;