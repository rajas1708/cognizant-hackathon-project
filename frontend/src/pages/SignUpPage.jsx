

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/common/FormInput';
import Button from '../components/common/Button';
import { useAuth } from '../hooks/useAuth';
import { Logo } from '../components/icons/Icons';

// Simple SVG icons to match the design
const CheckCircleIcon = () => (
  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BellIcon = () => (
  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const DocumentSearchIcon = () => (
    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l-2.5-2.5m0 0l2.5-2.5m-2.5 2.5h5" />
    </svg>
);


const SignUpPage = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        organization: '',
        agree: false,
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            return setError('Passwords do not match.');
        }
        if (!formData.agree) {
            return setError('You must agree to the Terms and Privacy Policy.');
        }
        setIsLoading(true);
        setError('');
        setSuccess('');
        try {
            const { confirmPassword, agree, ...signupData } = formData;
            await signup(signupData);
            setSuccess('Account created! Please check your email to verify your account.');
            setTimeout(() => navigate('/login'), 3000);
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="w-full max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-lg shadow-xl">
                    {/* Form Section */}
                    <div className="p-8 order-2 lg:order-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <Logo className="h-6 w-6 text-primary" />
                            <span className="text-xl font-semibold text-text-primary">MediPredict</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800">Create your account</h2>
                        <p className="text-sm text-gray-600 mt-2">Set up access to dashboards, alerts, and equipment insights.</p>
                        
                        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                                <FormInput label="First name" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Alex" required />
                                <FormInput label="Last name" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Rivera" required />
                            </div>
                            <FormInput label="Work email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="alex.rivera@hospital.org" required />
                            <FormInput label="Password" type="password" name="password" value={formData.password} onChange={handleChange} helperText="8+ characters with a number and symbol." required />
                            <FormInput label="Confirm password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                            <FormInput label="Organization" name="organization" value={formData.organization} onChange={handleChange} placeholder="St. Mary Medical Center" required />
                            
                            <div className="flex items-start">
                                <input id="agree" name="agree" type="checkbox" checked={formData.agree} onChange={handleChange} className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded mt-1" />
                                <label htmlFor="agree" className="ml-3 text-sm font-medium text-gray-700">I agree to the <a href="#" className="text-primary hover:underline">Terms and Privacy Policy</a>.</label>
                            </div>

                            {error && <p className="text-sm text-red-600 text-center">{error}</p>}
                            {success && <p className="text-sm text-green-600 text-center">{success}</p>}
                            
                            <Button type="submit" isLoading={isLoading} fullWidth variant="primary" >Create Account</Button>
                        </form>

                        <p className="mt-6 text-center text-sm text-gray-600">
                            Already have an account? <Link to="/login" className="font-medium text-primary hover:underline">Sign in</Link>
                        </p>
                        <p className="mt-4 text-xs text-gray-500 text-center">
                            By creating an account, your role will be verified by your organization's admin.
                        </p>
                    </div>

                    {/* Info Section */}
                    <div className="bg-gray-50 p-8 order-1 lg:order-2">
                        <h3 className="text-lg font-semibold text-gray-800">Secure access for care teams</h3>
                        <ul className="mt-8 space-y-6 text-sm text-gray-600">
                            <li className="flex items-start">
                                <CheckCircleIcon />
                                <div className="ml-4">
                                    <p><strong>Enterprise SSO and 2FA supported.</strong></p>
                                    <p>Role-based access for clinical and maintenance teams.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <BellIcon />
                                <div className="ml-4">
                                    <p><strong>Monitor high-risk equipment in real time.</strong></p>
                                    <p>Configure alert thresholds and escalation paths.</p>
                                    <p>Receive notifications via email, SMS, and push.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                               <DocumentSearchIcon />
                                <div className="ml-4">
                                    <p><strong>Predictive models highlight failure risks early.</strong></p>
                                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">HIPAA-conscious design</span>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-10 w-full h-56 rounded-lg overflow-hidden">
                           <img 
                             src="https://media.istockphoto.com/id/1641262510/photo/hospital-radiology-room-with-mri-scanner-machine.jpg?s=612x612&w=0&k=20&c=iCA67m7-eiatN5NAao-zxUL-p6tDDZGQyNN0ljM_isk=" 
                             alt="Medical Equipment Monitor" 
                             className="w-full h-full object-cover"
                           />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;