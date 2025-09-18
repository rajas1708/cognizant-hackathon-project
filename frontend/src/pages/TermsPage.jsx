// // import React from "react";
// // import { Link } from "react-router-dom";

// // const TermsPage = () => (
// //   <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
// //     <header className="bg-white flex justify-between items-center p-5 border-b border-gray-200 shadow-sm sticky top-0 z-10">
// //       <span className="text-xl font-bold text-blue-800">MedPredict</span>
// //       <Link to="/" className="text-blue-600 font-semibold hover:underline">
// //         Back to Home
// //       </Link>
// //     </header>

// //     <main className="flex-grow container mx-auto p-6 md:p-10">
// //       <div className="bg-white rounded-lg shadow-md p-8">
// //         <h1 className="text-2xl font-bold text-gray-800 mb-2">Terms and Conditions</h1>
// //         <p className="text-sm text-gray-500 mb-6">Last updated: September 4, 2025</p>
        
// //         <div className="space-y-4 text-gray-700">
// //           <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">1. Acceptance of Terms</h2>
// //             <p>By accessing and using MedPredict, you agree to be bound by these Terms and Conditions and our Privacy Policy...</p>
// //           </div>
// //           <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">2. Definitions</h2>
// //             <p>'Service' means our MedPredict web application...</p>
// //           </div>
// //           <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">3. Eligibility and Accounts</h2>
// //             <p>You must be at least 18...</p>
// //           </div>
// //           <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">4. Use of the Service</h2>
// //             <p>Use the service only for lawful purposes...</p>
// //           </div>
// //            <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">5. Medical Disclaimer</h2>
// //             <p>MedPredict does not provide medical advice...</p>
// //           </div>
// //           <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">6. Data and Privacy</h2>
// //             <p>We collect and process data...</p>
// //           </div>
// //            <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">7. Intellectual Property</h2>
// //             <p>All MedPredict intellectual property...</p>
// //           </div>
// //            <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">8. Subscriptions and Payment</h2>
// //             <p>Fees, if any, are disclosed at checkout...</p>
// //           </div>
// //            <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">9. Acceptable Use and Prohibited Conduct</h2>
// //             <p>No unlawful, harmful, or abusive content...</p>
// //           </div>
// //            <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">10. Third-Party Services</h2>
// //             <p>We do not control third-party links or services...</p>
// //           </div>
// //            <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">11. Disclaimers</h2>
// //             <p>Service is provided 'as is' without warranty...</p>
// //           </div>
// //           <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">12. Limitation of Liability</h2>
// //             <p>We are not liable for damages...</p>
// //           </div>
// //            <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">13. Indemnification</h2>
// //             <p>You agree to indemnify and hold MedPredict harmless...</p>
// //           </div>
// //            <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">14. Suspension and Termination</h2>
// //             <p>We reserve the right to suspend or terminate access...</p>
// //           </div>
// //           <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">15. Governing Law and Dispute Resolution</h2>
// //             <p>These Terms are governed by applicable law...</p>
// //           </div>
// //           <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">16. Changes to Terms</h2>
// //             <p>We may update these Terms from time to time...</p>
// //           </div>
// //           <div className="bg-gray-50 p-4 rounded-lg">
// //             <h2 className="font-semibold text-gray-800 mb-1">17. Contact</h2>
// //             <p>Contact us at support@medpredict.example</p>
// //           </div>
// //         </div>
// //       </div>
// //     </main>
// //   </div>
// // );

// // export default TermsPage;

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaFileContract, FaBook, FaUserCheck, FaGavel, FaExclamationTriangle,
//   FaShieldAlt, FaCopyright, FaCreditCard, FaBan, FaLink,
//   FaRegTimesCircle, FaBalanceScale, FaUndo, FaEnvelope
// } from "react-icons/fa";

// const Section = ({ icon, title, children }) => (
//   <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//     <div className="flex items-center mb-2">
//       <div className="text-blue-600 mr-3 text-xl">{icon}</div>
//       <h2 className="font-bold text-lg text-gray-800">{title}</h2>
//     </div>
//     <p className="text-gray-600 leading-relaxed">{children}</p>
//   </div>
// );

// const TermsPage = () => (
//   <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
//     <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">
//       <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
//         <div className="text-center mb-10">
//             <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Terms and Conditions</h1>
//             <p className="text-md text-gray-500">Last updated: September 4, 2025</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <Section icon={<FaFileContract />} title="1. Acceptance of Terms">
//             By accessing and using MedPredict, you agree to be bound by these Terms and Conditions and our Privacy Policy...
//           </Section>
//           <Section icon={<FaBook />} title="2. Definitions">
//             'Service' means our MedPredict web application, which provides predictive analytics for medical equipment maintenance...
//           </Section>
//           <Section icon={<FaUserCheck />} title="3. Eligibility and Accounts">
//             You must be at least 18 years of age and a qualified professional to create an account and use this service...
//           </Section>
//           <Section icon={<FaGavel />} title="4. Use of the Service">
//             You agree to use the service only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Service...
//           </Section>
//           <Section icon={<FaExclamationTriangle />} title="5. Medical Disclaimer">
//             MedPredict does not provide medical advice. The information and predictions are for informational purposes only...
//           </Section>
//           <Section icon={<FaShieldAlt />} title="6. Data and Privacy">
//             We are committed to protecting your data. Our collection and use of personal and device information is governed by our Privacy Policy...
//           </Section>
//           <Section icon={<FaCopyright />} title="7. Intellectual Property">
//             All content, trademarks, and data on our platform, including the underlying models and software, are the property of MedPredict...
//           </Section>
//           <Section icon={<FaCreditCard />} title="8. Subscriptions and Payment">
//             Certain features of the Service may be subject to payments. All fees are disclosed at the point of subscription or purchase...
//           </Section>
//           <Section icon={<FaBan />} title="9. Prohibited Conduct">
//             You agree not to engage in any of the following prohibited activities: copying, distributing, or disclosing any part of the service...
//           </Section>
//           <Section icon={<FaLink />} title="10. Third-Party Services">
//             Our Service may contain links to third-party websites or services that are not owned or controlled by MedPredict...
//           </Section>
//           <Section icon={<FaRegTimesCircle />} title="11. Disclaimers">
//             The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Use of the Service is at your own risk...
//           </Section>
//           <Section icon={<FaBalanceScale />} title="12. Limitation of Liability">
//             In no event shall MedPredict, nor its directors, employees, or partners, be liable for any indirect, incidental, or consequential damages...
//           </Section>
//           <Section icon={<FaUndo />} title="13. Indemnification">
//             You agree to indemnify and hold MedPredict harmless from any claims, damages, liabilities, and expenses arising from your use of the Service...
//           </Section>
//           <Section icon={<FaEnvelope />} title="14. Contact">
//             For any questions about these Terms, please contact us at support@medpredict.example.
//           </Section>
//         </div>
//       </div>
//     </main>
//   </div>
// );

// export default TermsPage;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaFileContract, FaBook, FaUserCheck, FaGavel, FaExclamationTriangle,
  FaShieldAlt, FaCopyright, FaCreditCard, FaBan, FaLink,
  FaRegTimesCircle, FaBalanceScale, FaUndo, FaEnvelope
} from "react-icons/fa";

const Section = ({ icon, title, children }) => (
  <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">
    <div className="flex items-center mb-3">
      <div className="text-blue-600 bg-blue-100 p-2 rounded-full mr-3 text-xl shadow-sm">
        {icon}
      </div>
      <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-600 leading-relaxed text-sm">{children}</p>
  </div>
);

const TermsPage = () => (
  <div className="flex flex-col min-h-screen  bg-[#e9ecef] font-sans">
    <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-10">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-md text-gray-500">
            Last updated: <span className="font-medium">September 4, 2025</span>
          </p>
          <div className="mt-4">
            <Link
              to="/dashboard"
              className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Section icon={<FaFileContract />} title="1. Acceptance of Terms">
            By accessing and using MedPredict, you agree to be bound by these Terms and Conditions and our Privacy Policy...
          </Section>
          <Section icon={<FaBook />} title="2. Definitions">
            'Service' means our MedPredict web application, which provides predictive analytics for medical equipment maintenance...
          </Section>
          <Section icon={<FaUserCheck />} title="3. Eligibility and Accounts">
            You must be at least 18 years of age and a qualified professional to create an account and use this service...
          </Section>
          <Section icon={<FaGavel />} title="4. Use of the Service">
            You agree to use the service only for lawful purposes and in a way that does not infringe the rights of others...
          </Section>
          <Section icon={<FaExclamationTriangle />} title="5. Medical Disclaimer">
            MedPredict does not provide medical advice. The information and predictions are for informational purposes only...
          </Section>
          <Section icon={<FaShieldAlt />} title="6. Data and Privacy">
            We are committed to protecting your data. Our collection and use of personal and device information is governed by our Privacy Policy...
          </Section>
          <Section icon={<FaCopyright />} title="7. Intellectual Property">
            All content, trademarks, and data on our platform, including the underlying models and software, are the property of MedPredict...
          </Section>
          <Section icon={<FaCreditCard />} title="8. Subscriptions and Payment">
            Certain features of the Service may be subject to payments. All fees are disclosed at the point of subscription or purchase...
          </Section>
          <Section icon={<FaBan />} title="9. Prohibited Conduct">
            You agree not to engage in any of the following prohibited activities: copying, distributing, or disclosing any part of the service...
          </Section>
          <Section icon={<FaLink />} title="10. Third-Party Services">
            Our Service may contain links to third-party websites or services that are not owned or controlled by MedPredict...
          </Section>
          <Section icon={<FaRegTimesCircle />} title="11. Disclaimers">
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Use of the Service is at your own risk...
          </Section>
          <Section icon={<FaBalanceScale />} title="12. Limitation of Liability">
            In no event shall MedPredict, nor its directors, employees, or partners, be liable for any indirect, incidental, or consequential damages...
          </Section>
          <Section icon={<FaUndo />} title="13. Indemnification">
            You agree to indemnify and hold MedPredict harmless from any claims, damages, liabilities, and expenses arising from your use of the Service...
          </Section>
          <Section icon={<FaEnvelope />} title="14. Contact">
            For any questions about these Terms, please contact us at <span className="text-blue-600 font-medium">support@medpredict.example</span>.
          </Section>
        </div>
      </div>
    </main>
  </div>
);

export default TermsPage;


