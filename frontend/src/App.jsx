

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import LandingPage from './pages/LandingPage';
// import LoginPage from './pages/LoginPage';
// import SignUpPage from './pages/SignUpPage';
// import ForgotPasswordPage from './pages/ForgotPasswordPage';
// import VerifyCodePage from './pages/VerifyCodePage';
// import ResetPasswordPage from './pages/ResetPasswordPage';
// import DashboardPage from './pages/DashboardPage';
// import NotFoundPage from './pages/NotFoundPage';
// import EmailVerificationPage from './pages/EmailVerificationPage';

// import AuthLayout from './components/layout/AuthLayout';
// import DashboardLayout from './components/layout/DashboardLayout';
// import ProtectedRoute from './components/layout/ProtectedRoute';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/signup" element={<SignUpPage />} /> {/* Moved to its own route */}

//       {/* Authentication Routes */}
//       <Route element={<AuthLayout />}>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//         <Route path="/verify-code" element={<VerifyCodePage />} />
//         <Route path="/reset-password" element={<ResetPasswordPage />} />
//         <Route path="/verify-email" element={<EmailVerificationPage />} />
//       </Route>

//       {/* Protected Dashboard Routes */}
//       <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <DashboardLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route index element={<DashboardPage />} />
//       </Route>

//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VerifyCodePage from './pages/VerifyCodePage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import Dashboard from './pages/DashboardPage'; // Import the new Dashboard component

import AuthLayout from './components/layout/AuthLayout';
import DashboardLayout from './components/layout/DashboardLayout';
import ProtectedRoute from './components/layout/ProtectedRoute';
import TermsPage from './pages/TermsPage';
import PredictionsListPage from './pages/PredictionsListPage';
import ModelInputsForm from './pages/MedPredict';
import AccountSettings from './pages/AccountSettings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/terms" element={<TermsPage />} />

      {/* Authentication Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-code" element={<VerifyCodePage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Route>

      {/* Protected Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Dashboard /> 
            </DashboardLayout>
          </ProtectedRoute>
        }
      >
       
        <Route index element={<DashboardPage />} />
        
      </Route>
 <Route
            path="/predictions"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <PredictionsListPage />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
           <Route
            path="/med-predict"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ModelInputsForm />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

  <Route
          path="/account-settings"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AccountSettings />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;