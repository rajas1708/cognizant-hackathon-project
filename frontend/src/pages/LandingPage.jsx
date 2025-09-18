// // // // import React from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import Button from '../components/common/Button';
// // // // import { Logo } from '../components/icons/Icons';

// // // // const LandingPage = () => {
// // // //     return (
// // // //         <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
// // // //             <Logo className="h-16 w-16 text-primary mb-4" />
// // // //             <h1 className="text-5xl font-extrabold text-text-primary">
// // // //                 Welcome to MedPredict Portal
// // // //             </h1>
// // // //             <p className="mt-4 text-lg text-text-secondary max-w-2xl">
// // // //                 Access your dashboard to monitor equipment reliability, set up alerts, and gain insights from predictive models.
// // // //             </p>
// // // //             <div className="mt-8 flex gap-4">
// // // //                 <Link to="/login">
// // // //                     <Button variant="primary">Login</Button>
// // // //                 </Link>
// // // //                 <Link to="/signup">
// // // //                     <Button variant="secondary">Sign Up</Button>
// // // //                 </Link>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default LandingPage;

// // // import React from "react";
// // // import Navbar from "../components/navbar/navbar";
// // // import Footer from "../components/Footer/Footer";
// // // import heroImg from "../assets/images/hero.jpg";
// // // import featureImg from "../assets/images/feature.jpg";

// // // const LandingPage = () => (
// // //   <div className="min-h-screen bg-gray-50 flex flex-col items-center font-sans">
// // //     <Navbar />
// // //     <main className="container mx-auto flex flex-col gap-11 px-4 pt-16">
// // //       <section className="bg-gradient-to-b from-blue-50 to-gray-100 rounded-2xl shadow-xl p-8 md:p-14 text-center">
// // //         <h2 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-4">
// // //           AI-driven maintenance for medical equipment
// // //         </h2>
// // //         <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
// // //           Use predictive maintenance and reliability analytics to keep critical
// // //           devices online. Lower downtime and costs with automated alerts and
// // //           actionable insights.
// // //         </p>
// // //         <div className="flex justify-center gap-6 mb-4">
// // //           <button className="bg-blue-700 text-white font-semibold py-3 px-10 rounded-xl shadow-md hover:bg-blue-800 transition-all">
// // //             Sign Up
// // //           </button>
// // //           <button className="bg-blue-100 text-blue-700 font-semibold py-3 px-10 rounded-xl border-2 border-blue-700 hover:bg-blue-200 transition-all">
// // //             Login
// // //           </button>
// // //         </div>
// // //         <div className="text-gray-500 mt-5 mb-3">
// // //           Trusted by hospitals, clinics & labs
// // //         </div>
// // //         <img
// // //           src={heroImg}
// // //           alt="Medical Equipment Banner"
// // //           className="mt-8 mx-auto max-w-lg w-full rounded-2xl shadow-2xl"
// // //         />
// // //       </section>

// // //       <section className="bg-blue-50 rounded-2xl shadow-lg p-8 md:p-12 mb-12">
// // //         <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">
// // //           Why MedPredict
// // //         </h3>
// // //         <div className="grid md:grid-cols-3 gap-8">
// // //           <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
// // //             <h4 className="text-xl font-semibold text-blue-800 mb-2">
// // //               Predict Failure Risk
// // //             </h4>
// // //             <p className="text-gray-600">
// // //               Detect issues before breakdowns and plan maintenance for high
// // //               device uptime.
// // //             </p>
// // //           </div>
// // //           <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
// // //             <h4 className="text-xl font-semibold text-blue-800 mb-2">
// // //               Automate Care
// // //             </h4>
// // //             <p className="text-gray-600">
// // //               Generate personalized care schedules and reminders with AI.
// // //             </p>
// // //           </div>
// // //           <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
// // //             <h4 className="text-xl font-semibold text-blue-800 mb-2">
// // //               Secure Access
// // //             </h4>
// // //             <p className="text-gray-600">
// // //               Data privacy and role-based access for hospitals and clinical
// // //               teams.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <section className="bg-blue-50 rounded-3xl shadow-xl p-8 md:p-12 my-14 max-w-4xl mx-auto">
// // //         <h2 className="text-4xl font-bold text-blue-800 text-center mb-8">
// // //           How it works
// // //         </h2>
// // //         <div className="flex flex-col md:flex-row items-center gap-8">
// // //           <img
// // //             src={featureImg}
// // //             alt="How It Works"
// // //             className="w-full md:w-1/3 h-48 object-cover rounded-2xl shadow-lg"
// // //           />
// // //           <div className="flex-1">
// // //             <div className="text-2xl font-bold text-blue-800 mb-4">
// // //               Simple & Configurable
// // //             </div>
// // //             <div className="text-lg text-gray-700 mb-6">
// // //               Connect devices, monitor status, and set up predictive maintenance
// // //               with minimal effort.
// // //               <br />
// // //               Real-time tracking and automated notifications for your whole team.
// // //             </div>
// // //             <div className="flex gap-4">
// // //               <button className="bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:bg-blue-800 transition-all">
// // //                 Sign Up
// // //               </button>
// // //               <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-xl border-2 border-blue-700 hover:bg-blue-100 transition-all">
// // //                 Login
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <section className="text-center my-16">
// // //         <h4 className="text-2xl font-bold text-blue-800 mb-4">
// // //           Ready to prevent the next failure?
// // //         </h4>
// // //         <p className="text-lg text-gray-600 mb-6">
// // //           Get started with MedPredict and optimize your equipment performance.
// // //         </p>
// // //         <div className="flex justify-center gap-4">
// // //           <button className="bg-blue-700 text-white font-semibold py-3 px-10 rounded-2xl shadow-lg hover:bg-blue-800 transition-all">
// // //             Sign Up
// // //           </button>
// // //           <button className="bg-white text-blue-700 font-semibold py-3 px-10 rounded-2xl border-2 border-blue-700 hover:bg-blue-100 transition-all">
// // //             Login
// // //           </button>
// // //         </div>
// // //       </section>
// // //     </main>
// // //     <Footer />
// // //   </div>
// // // );

// // // export default LandingPage;

// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import Navbar from "../components/navbar/navbar";
// // import Footer from "../components/Footer/Footer";
// // import heroImg from "../assets/images/hero.jpg";
// // import featureImg from "../assets/images/feature.jpg";

// // const LandingPage = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col items-center font-sans">
// //       <Navbar />
// //       <main className="container mx-auto flex flex-col gap-11 px-4 pt-16 max-w-5xl">
// //         <section className="bg-gradient-to-b from-blue-50 to-gray-100 rounded-2xl shadow-xl p-8 md:p-14 text-center">
// //           <h2 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-4">
// //             AI-Driven Maintenance for Medical Equipment
// //           </h2>
// //           <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
// //             Use predictive maintenance and reliability analytics to keep critical
// //             devices online. Lower downtime and costs with automated alerts and
// //             actionable insights.
// //           </p>
// //           <div className="flex justify-center gap-6 mb-4">
// //             <button
// //               onClick={() => navigate('/signup')}
// //               className="bg-blue-700 text-white font-semibold py-3 px-10 rounded-xl shadow-md hover:bg-blue-800 transition-all transform hover:-translate-y-1"
// //             >
// //               Sign Up
// //             </button>
// //             <button
// //               onClick={() => navigate('/login')}
// //               className="bg-blue-100 text-blue-700 font-semibold py-3 px-10 rounded-xl border-2 border-blue-700 hover:bg-blue-200 transition-all transform hover:-translate-y-1"
// //             >
// //               Login
// //             </button>
// //           </div>
// //           <div className="text-gray-500 mt-5 mb-3">
// //             Trusted by hospitals, clinics & labs
// //           </div>
// //           <img
// //             src={heroImg}
// //             alt="Medical Equipment Banner"
// //             className="mt-8 mx-auto max-w-lg w-full rounded-2xl shadow-2xl"
// //           />
// //         </section>

// //         <section className="bg-blue-50 rounded-2xl shadow-lg p-8 md:p-12 mb-12">
// //           <h3 className="text-3xl font-bold text-blue-800 text-center mb-6">
// //             Why MedPredict
// //           </h3>
// //           <div className="grid md:grid-cols-3 gap-8">
// //             <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
// //               <h4 className="text-xl font-semibold text-blue-800 mb-2">
// //                 Predict Failure Risk
// //               </h4>
// //               <p className="text-gray-600">
// //                 Detect issues before breakdowns and plan maintenance for high
// //                 device uptime.
// //               </p>
// //             </div>
// //             <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
// //               <h4 className="text-xl font-semibold text-blue-800 mb-2">
// //                 Automate Care
// //               </h4>
// //               <p className="text-gray-600">
// //                 Generate personalized care schedules and reminders with AI.
// //               </p>
// //             </div>
// //             <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all">
// //               <h4 className="text-xl font-semibold text-blue-800 mb-2">
// //                 Secure Access
// //               </h4>
// //               <p className="text-gray-600">
// //                 Data privacy and role-based access for hospitals and clinical
// //                 teams.
// //               </p>
// //             </div>
// //           </div>
// //         </section>

// //         <section className="bg-blue-50 rounded-3xl shadow-xl p-8 md:p-12 my-14 max-w-4xl mx-auto">
// //           <h2 className="text-4xl font-bold text-blue-800 text-center mb-8">
// //             How It Works
// //           </h2>
// //           <div className="flex flex-col md:flex-row items-center gap-8">
// //             <img
// //               src={featureImg}
// //               alt="How It Works"
// //               className="w-full md:w-1/3 h-48 object-cover rounded-2xl shadow-lg"
// //             />
// //             <div className="flex-1">
// //               <div className="text-2xl font-bold text-blue-800 mb-4">
// //                 Simple & Configurable
// //               </div>
// //               <div className="text-lg text-gray-700 mb-6">
// //                 Connect devices, monitor status, and set up predictive maintenance
// //                 with minimal effort.
// //                 <br />
// //                 Real-time tracking and automated notifications for your whole team.
// //               </div>
// //               <div className="flex gap-4">
// //                 <button
// //                   onClick={() => navigate('/signup')}
// //                   className="bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:bg-blue-800 transition-all"
// //                 >
// //                   Sign Up
// //                 </button>
// //                 <button
// //                   onClick={() => navigate('/login')}
// //                   className="bg-white text-blue-700 font-bold py-3 px-8 rounded-xl border-2 border-blue-700 hover:bg-blue-100 transition-all"
// //                 >
// //                   Login
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         <section className="text-center my-16">
// //           <h4 className="text-2xl font-bold text-blue-800 mb-4">
// //             Ready to prevent the next failure?
// //           </h4>
// //           <p className="text-lg text-gray-600 mb-6">
// //             Get started with MedPredict and optimize your equipment performance.
// //           </p>
// //           <div className="flex justify-center gap-4">
// //             <button
// //               onClick={() => navigate('/signup')}
// //               className="bg-blue-700 text-white font-semibold py-3 px-10 rounded-2xl shadow-lg hover:bg-blue-800 transition-all"
// //             >
// //               Sign Up
// //             </button>
// //             <button
// //               onClick={() => navigate('/login')}
// //               className="bg-white text-blue-700 font-semibold py-3 px-10 rounded-2xl border-2 border-blue-700 hover:bg-blue-100 transition-all"
// //             >
// //               Login
// //             </button>
// //           </div>
// //         </section>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default LandingPage;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/navbar/navbar";
// import Footer from "../components/Footer/Footer";
// import heroImg from "../assets/images/hero.jpg";
// import featureImg from "../assets/images/feature.jpg";

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center font-sans overflow-hidden">
//       <Navbar />
      
//       {/* Hero Section */}
//       <section className="w-full relative pt-24 pb-16 md:pt-32 md:pb-24 px-4">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-400/10 transform -skew-y-3 -translate-y-16"></div>
//         <div className="container mx-auto max-w-6xl relative z-10">
//           <div className="flex flex-col md:flex-row items-center gap-10">
//             <div className={`flex-1 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-6">
//                 Smart Predictions for <span className="text-blue-600">Smarter Healthcare</span>
//               </h1>
//               <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
//                 Prevent costly medical device breakdowns with AI-powered predictive maintenance. 
//                 Enhance patient safety, cut downtime, and improve operational efficiency.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <button
//                   onClick={() => navigate('/signup')}
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//                 >
//                   Get Started Now
//                 </button>
//                 <button
//                   onClick={() => navigate('/login')}
//                   className="bg-white text-blue-600 border-2 border-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
//                 >
//                   See How It Works
//                 </button>
//               </div>
//             </div>
//             <div className={`flex-1 transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
//               <div className="relative">
//                 <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl blur-lg opacity-30"></div>
//                 <img
//                   src={heroImg}
//                   alt="Medical Equipment Banner"
//                   className="relative rounded-2xl shadow-2xl w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Problem Statement */}
//       <section className="w-full py-16 bg-white px-4">
//         <div className="container mx-auto max-w-5xl">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">The Challenge in Healthcare</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Medical devices are the backbone of healthcare facilities. But unexpected failures can have serious consequences.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-10">
//             <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:-translate-y-2 transition-all duration-300">
//               <h3 className="text-xl font-bold text-red-800 mb-3">Unexpected Failures</h3>
//               <p className="text-gray-700">
//                 Equipment breakdowns delay critical treatments and put patient safety at risk.
//               </p>
//             </div>
            
//             <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl shadow-lg border-l-4 border-amber-500 hover:-translate-y-2 transition-all duration-300">
//               <h3 className="text-xl font-bold text-amber-800 mb-3">High Costs</h3>
//               <p className="text-gray-700">
//                 Emergency repairs and replacements drain hospital budgets unnecessarily.
//               </p>
//             </div>
            
//             <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:-translate-y-2 transition-all duration-300">
//               <h3 className="text-xl font-bold text-blue-800 mb-3">Manual Processes</h3>
//               <p className="text-gray-700">
//                 Traditional checks often miss early warning signs of impending failures.
//               </p>
//             </div>
            
//             <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 hover:-translate-y-2 transition-all duration-300">
//               <h3 className="text-xl font-bold text-purple-800 mb-3">Patient Safety</h3>
//               <p className="text-gray-700">
//                 Device malfunctions during procedures can compromise patient care.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Solution Section */}
//       <section className="w-full py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white px-4">
//         <div className="container mx-auto max-w-5xl">
//           <div className="flex flex-col md:flex-row items-center gap-10">
//             <div className="flex-1">
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">Predict Failures Before They Happen</h2>
//               <p className="text-lg text-blue-100 mb-6">
//                 Our platform combines AI, machine learning, and real-time monitoring to forecast device failures. 
//                 By analyzing patterns in usage, environment, and error logs, the system alerts healthcare teams 
//                 before problems occur.
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="bg-blue-600 p-2 rounded-full mr-4 mt-1">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg">Save Time</h3>
//                     <p className="text-blue-100">Avoid long repair downtime with proactive maintenance</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-blue-600 p-2 rounded-full mr-4 mt-1">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg">Save Lives</h3>
//                     <p className="text-blue-100">Keep critical devices available for patients when needed most</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-blue-600 p-2 rounded-full mr-4 mt-1">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg">Save Costs</h3>
//                     <p className="text-blue-100">Reduce emergency repair and replacement expenses significantly</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex-1">
//               <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
//                 <img
//                   src={featureImg}
//                   alt="AI Prediction Visualization"
//                   className="rounded-xl shadow-2xl w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="w-full py-20 bg-white px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Features That Make a Difference</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Our comprehensive platform offers everything you need to maintain medical equipment proactively
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: "📡", title: "Live Device Monitoring", desc: "Track device status 24/7 in real-time" },
//               { icon: "🔔", title: "Early Risk Alerts", desc: "Predict failures with actionable notifications" },
//               { icon: "📊", title: "Smart Analytics Dashboard", desc: "Visual reports for technicians & administrators" },
//               { icon: "🧠", title: "AI-Powered Models", desc: "Continuously learns and improves predictions" },
//               { icon: "🔐", title: "Secure & Reliable", desc: "HIPAA-compliant for healthcare data security" },
//               { icon: "🌍", title: "Scalable Solution", desc: "Works for small clinics to large hospitals" }
//             ].map((feature, index) => (
//               <div 
//                 key={index}
//                 className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
//               >
//                 <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
//                 <h3 className="text-xl font-bold text-blue-800 mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="w-full py-20 bg-gradient-to-br from-blue-50 to-teal-50 px-4">
//         <div className="container mx-auto max-w-5xl">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Simple four-step process to transform your equipment maintenance
//             </p>
//           </div>
          
//           <div className="relative">
//             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300 hidden md:block"></div>
            
//             <div className="flex flex-col md:grid md:grid-cols-2 gap-10 relative">
//               {[
//                 { step: "1", title: "Collect Data", desc: "Device logs, usage history, environment conditions" },
//                 { step: "2", title: "AI Model Analysis", desc: "Detects abnormal patterns and risks" },
//                 { step: "3", title: "Prediction Alerts", desc: "Notifies staff before breakdowns happen" },
//                 { step: "4", title: "Preventive Action", desc: "Schedule timely maintenance and avoid downtime" }
//               ].map((item, index) => (
//                 <div 
//                   key={index} 
//                   className={`flex ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10 md:mt-20'} transition-all duration-500 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//                 >
//                   <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300">
//                     <div className="text-4xl font-bold text-blue-600 mb-2">{item.step}</div>
//                     <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
//                     <p className="text-gray-600">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Use Cases */}
//       <section className="w-full py-20 bg-white px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Designed for All Critical Devices</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Our solution works across various medical equipment types
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: "🫁", title: "Ventilators", desc: "Predict failures due to vibration & repeated error counts" },
//               { icon: "💧", title: "Dialysis Machines", desc: "Detect humidity-related issues early" },
//               { icon: "⚡", title: "X-Ray & MRI Scanners", desc: "Spot risks from power surges & voltage drops" },
//               { icon: "🩻", title: "Ultrasound Machines", desc: "Monitor for performance degradation" },
//               { icon: "🧪", title: "Laboratory Equipment", desc: "Prevent breakdowns in testing devices" },
//               { icon: "❤️", title: "Patient Monitors", desc: "Ensure continuous monitoring without interruptions" }
//             ].map((device, index) => (
//               <div 
//                 key={index}
//                 className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
//               >
//                 <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{device.icon}</div>
//                 <h3 className="text-xl font-bold text-blue-800 mb-2">{device.title}</h3>
//                 <p className="text-gray-600">{device.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="w-full py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white px-4">
//         <div className="container mx-auto max-w-5xl">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Predictive Maintenance for Healthcare?</h2>
//             <p className="text-lg text-blue-200 max-w-3xl mx-auto">
//               Transform your medical equipment management with AI-driven insights
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: "🏥", title: "Improved Patient Care", desc: "Devices always ready when needed" },
//               { icon: "⚙️", title: "Operational Efficiency", desc: "Reduce emergency downtime significantly" },
//               { icon: "💰", title: "Lower Maintenance Costs", desc: "Plan service ahead of time" },
//               { icon: "📈", title: "Data-Driven Decisions", desc: "Gain insights into device performance" },
//               { icon: "🔒", title: "Safety & Compliance", desc: "Maintain healthcare quality standards" },
//               { icon: "⏱️", title: "Time Savings", desc: "Reduce manual monitoring efforts by 70%" }
//             ].map((benefit, index) => (
//               <div 
//                 key={index}
//                 className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group"
//               >
//                 <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
//                 <p className="text-blue-100">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="w-full py-20 bg-white px-4">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
//             Keep Your Medical Devices Healthy. Keep Your Patients Safe.
//           </h2>
//           <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
//             Get predictive insights that empower healthcare providers to act early, save costs, and protect lives.
//           </p>
          
//           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
//             <button
//               onClick={() => navigate('/signup')}
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//             >
//               Request a Free Demo
//             </button>
//             <button
//               onClick={() => navigate('/login')}
//               className="bg-white text-blue-600 border-2 border-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
//             >
//               Create Account
//             </button>
//           </div>
          
//           <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
//             <p className="text-blue-800 font-medium">
//               "The AI predictions helped us reduce ventilator failures by 40%." 
//               <span className="block text-blue-600 mt-1">- ICU Technician, St. Mary's Hospital</span>
//             </p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/Footer/Footer";
import heroImg from "../assets/images/hero.jpg";
import featureImg from "../assets/images/feature.jpg";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Testimonial auto-rotation
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(testimonialInterval);
    };
  }, []);

  const testimonials = [
    {
      text: "The AI predictions helped us reduce ventilator failures by 40%.",
      author: "ICU Technician",
      hospital: "St. Mary's Hospital"
    },
    {
      text: "Now we can plan maintenance in advance instead of waiting for breakdowns.",
      author: "Hospital Engineer",
      hospital: "City Medical Center"
    },
    {
      text: "MedPredict has transformed how we manage our equipment inventory.",
      author: "Chief Nursing Officer",
      hospital: "Regional Healthcare"
    }
  ];

  const features = [
    { icon: "📡", title: "Live Device Monitoring", desc: "Track device status 24/7 in real-time" },
    { icon: "🔔", title: "Early Risk Alerts", desc: "Predict failures with actionable notifications" },
    { icon: "📊", title: "Smart Analytics Dashboard", desc: "Visual reports for technicians & administrators" },
    { icon: "🧠", title: "AI-Powered Models", desc: "Continuously learns and improves predictions" },
    { icon: "🔐", title: "Secure & Reliable", desc: "HIPAA-compliant for healthcare data security" },
    { icon: "🌍", title: "Scalable Solution", desc: "Works for small clinics to large hospitals" }
  ];

  const devices = [
    { icon: "🫁", title: "Ventilators", desc: "Predict failures due to vibration & repeated error counts" },
    { icon: "💧", title: "Dialysis Machines", desc: "Detect humidity-related issues early" },
    { icon: "⚡", title: "X-Ray & MRI Scanners", desc: "Spot risks from power surges & voltage drops" },
    { icon: "🩻", title: "Ultrasound Machines", desc: "Monitor for performance degradation" },
    { icon: "🧪", title: "Laboratory Equipment", desc: "Prevent breakdowns in testing devices" },
    { icon: "❤️", title: "Patient Monitors", desc: "Ensure continuous monitoring without interruptions" }
  ];

  const benefits = [
    { icon: "🏥", title: "Improved Patient Care", desc: "Devices always ready when needed" },
    { icon: "⚙️", title: "Operational Efficiency", desc: "Reduce emergency downtime significantly" },
    { icon: "💰", title: "Lower Maintenance Costs", desc: "Plan service ahead of time" },
    { icon: "📈", title: "Data-Driven Decisions", desc: "Gain insights into device performance" },
    { icon: "🔒", title: "Safety & Compliance", desc: "Maintain healthcare quality standards" },
    { icon: "⏱️", title: "Time Savings", desc: "Reduce manual monitoring efforts by 70%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center font-sans overflow-hidden">
      <Navbar />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-200/20 animate-pulse"
            style={{
              width: `${100 + i * 100}px`,
              height: `${100 + i * 100}px`,
              top: `${20 + i * 10}%`,
              left: `${i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + i * 5}s`
            }}
          ></div>
        ))}
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-teal-200/20 animate-ping"
            style={{
              width: `${50 + i * 50}px`,
              height: `${50 + i * 50}px`,
              top: `${40 + i * 10}%`,
              right: `${i * 15}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${10 + i * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Hero Section */}
      <section className="w-full relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-400/10 transform -skew-y-3 -translate-y-16"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className={`flex-1 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 animate-pulse">
                  AI-Driven
                </span> Maintenance for Medical Equipment
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Prevent costly medical device breakdowns with AI-powered predictive maintenance. 
                Enhance patient safety, cut downtime, and improve operational efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/signup')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-bounce-slow"
                >
                  Get Started Now
                </button>
                <button
                  onClick={() => navigate('/login')}
                  className="bg-white text-blue-600 border-2 border-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  See How It Works
                </button>
              </div>
            </div>
            <div className={`flex-1 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
                <img
                  src={heroImg}
                  alt="Medical Equipment Banner"
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-4 animate-float">
                  <div className="text-2xl text-blue-600 font-bold">98%</div>
                  <div className="text-sm text-gray-600">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        className="w-full py-16 bg-white px-4 opacity-0 transition-opacity duration-1000 z-10"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">The Challenge in Healthcare</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Medical devices are the backbone of healthcare facilities. But unexpected failures can have serious consequences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:-translate-y-2 transition-all duration-300 group hover:shadow-xl">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚠️</div>
              <h3 className="text-xl font-bold text-red-800 mb-3">Unexpected Failures</h3>
              <p className="text-gray-700">
                Equipment breakdowns delay critical treatments and put patient safety at risk.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl shadow-lg border-l-4 border-amber-500 hover:-translate-y-2 transition-all duration-300 group hover:shadow-xl">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💸</div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">High Costs</h3>
              <p className="text-gray-700">
                Emergency repairs and replacements drain hospital budgets unnecessarily.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:-translate-y-2 transition-all duration-300 group hover:shadow-xl">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔧</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Manual Processes</h3>
              <p className="text-gray-700">
                Traditional checks often miss early warning signs of impending failures.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 hover:-translate-y-2 transition-all duration-300 group hover:shadow-xl">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">👨‍⚕️</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Patient Safety</h3>
              <p className="text-gray-700">
                Device malfunctions during procedures can compromise patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        className="w-full py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white px-4 opacity-0 transition-opacity duration-1000 z-10"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Predict Failures Before They Happen</h2>
              <p className="text-lg text-blue-100 mb-6">
                Our platform combines AI, machine learning, and real-time monitoring to forecast device failures. 
                By analyzing patterns in usage, environment, and error logs, the system alerts healthcare teams 
                before problems occur.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                  <div className="bg-blue-600 p-2 rounded-full mr-4 mt-1 animate-pulse">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Save Time</h3>
                    <p className="text-blue-100">Avoid long repair downtime with proactive maintenance</p>
                  </div>
                </div>
                
                <div className="flex items-start animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <div className="bg-blue-600 p-2 rounded-full mr-4 mt-1 animate-pulse">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Save Lives</h3>
                    <p className="text-blue-100">Keep critical devices available for patients when needed most</p>
                  </div>
                </div>
                
                <div className="flex items-start animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  <div className="bg-blue-600 p-2 rounded-full mr-4 mt-1 animate-pulse">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Save Costs</h3>
                    <p className="text-blue-100">Reduce emergency repair and replacement expenses significantly</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-transform duration-700">
                <img
                  src={featureImg}
                  alt="AI Prediction Visualization"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl blur-lg opacity-20 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={el => sectionRefs.current[2] = el}
        className="w-full py-20 bg-white px-4 opacity-0 transition-opacity duration-1000 z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Features That Make a Difference</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform offers everything you need to maintain medical equipment proactively
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section 
        ref={el => sectionRefs.current[3] = el}
        className="w-full py-20 bg-gradient-to-br from-blue-50 to-teal-50 px-4 opacity-0 transition-opacity duration-1000 z-10"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple four-step process to transform your equipment maintenance
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300 hidden md:block"></div>
            
            <div className="flex flex-col md:grid md:grid-cols-2 gap-10 relative">
              {[
                { step: "1", title: "Collect Data", desc: "Device logs, usage history, environment conditions" },
                { step: "2", title: "AI Model Analysis", desc: "Detects abnormal patterns and risks" },
                { step: "3", title: "Prediction Alerts", desc: "Notifies staff before breakdowns happen" },
                { step: "4", title: "Preventive Action", desc: "Schedule timely maintenance and avoid downtime" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10 md:mt-20'} animate-fade-in-up`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 group">
                    <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">{item.step}</div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section 
        ref={el => sectionRefs.current[4] = el}
        className="w-full py-20 bg-white px-4 opacity-0 transition-opacity duration-1000 z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Designed for All Critical Devices</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our solution works across various medical equipment types
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devices.map((device, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{device.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{device.title}</h3>
                <p className="text-gray-600">{device.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        ref={el => sectionRefs.current[5] = el}
        className="w-full py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white px-4 opacity-0 transition-opacity duration-1000 z-10"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Predictive Maintenance for Healthcare?</h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Transform your medical equipment management with AI-driven insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        ref={el => sectionRefs.current[6] = el}
        className="w-full py-20 bg-white px-4 opacity-0 transition-opacity duration-1000 z-10"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Healthcare Professionals Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from those who have transformed their medical equipment maintenance
            </p>
          </div>
          
          <div className="relative h-64 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-lg text-center">
                  <div className="text-4xl mb-4">❝</div>
                  <p className="text-xl text-gray-700 italic mb-6">{testimonial.text}</p>
                  <div className="font-bold text-blue-800">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.hospital}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-2 ${index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'}`}
                onClick={() => setActiveTestimonial(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        ref={el => sectionRefs.current[7] = el}
        className="w-full py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white px-4 opacity-0 transition-opacity duration-1000 z-10"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Keep Your Medical Devices Healthy. <span className="text-teal-300">Keep Your Patients Safe.</span>
          </h2>
          <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto">
            Get predictive insights that empower healthcare providers to act early, save costs, and protect lives.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-pulse"
            >
              Request a Free Demo
            </button>
            <button
              onClick={() => navigate('/login')}
              className="bg-transparent text-white border-2 border-white font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Create Account
            </button>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          opacity: 1 !important;
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounceSlow 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;