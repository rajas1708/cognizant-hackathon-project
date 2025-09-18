// // // import React, { useState, useEffect } from 'react';
// // // import { getAllPredictions } from '../api/authService';

// // // function PredictionsListPage() {
// // //   const [predictions, setPredictions] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchPredictions = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const { data } = await getAllPredictions();
// // //         setPredictions(data.data || []);
// // //       } catch (err) {
// // //         setError('Failed to fetch predictions.');
// // //         console.error("Error fetching predictions:", err);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchPredictions();
// // //   }, []);

// // //   if (loading) {
// // //     return <div className="p-6 text-center">Loading predictions...</div>;
// // //   }

// // //   if (error) {
// // //     return <div className="p-6 text-center text-red-500">{error}</div>;
// // //   }

// // //   return (
// // //     <div className="p-6">
// // //       <h1 className="text-3xl font-bold text-dark mb-6">Prediction History</h1>
// // //       <div className="bg-white rounded-2xl shadow-md p-4">
// // //         <div className="overflow-x-auto">
// // //           <table className="w-full table-auto">
// // //             <thead className="bg-gray-50">
// // //               <tr className="text-left text-gray-600 uppercase text-sm">
// // //                 <th className="p-3 font-semibold">Date</th>
// // //                 <th className="p-3 font-semibold">Device Type</th>
// // //                 <th className="p-3 font-semibold">Failure Probability</th>
// // //                 <th className="p-3 font-semibold">Confidence</th>
// // //                 <th className="p-3 font-semibold">Recommendation</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="divide-y divide-gray-200">
// // //               {predictions.length > 0 ? (
// // //                 predictions.map((p) => (
// // //                   <tr key={p._id} className="hover:bg-gray-50">
// // //                     <td className="p-3 text-gray-700">{new Date(p.createdAt).toLocaleString()}</td>
// // //                     <td className="p-3 text-gray-700">{p.inputData['Device type'] || 'N/A'}</td>
// // //                     <td className="p-3 text-gray-700">{Math.round(p.predictionResult.failure_probability)}%</td>
// // //                     <td className="p-3 text-gray-700">{Math.round(p.predictionResult.confidence_score)}%</td>
// // //                     <td className="p-3 text-gray-700">{p.predictionResult.maintenanceRecommendation}</td>
// // //                   </tr>
// // //                 ))
// // //               ) : (
// // //                 <tr>
// // //                   <td colSpan="5" className="p-3 text-center text-gray-500">No prediction history found.</td>
// // //                 </tr>
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default PredictionsListPage;

// // import React, { useState, useEffect } from 'react';
// // import { getAllPredictions } from '../api/authService';
// // import { FiAlertTriangle, FiCheckCircle, FiCpu, FiClock, FiZap, FiThermometer, FiDroplet, FiZapOff, FiTool } from 'react-icons/fi';

// // function PredictionsListPage() {
// //   const [predictions, setPredictions] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchPredictions = async () => {
// //       try {
// //         setLoading(true);
// //         const { data } = await getAllPredictions();
// //         setPredictions(data.data || []);
// //       } catch (err) {
// //         setError('Failed to fetch predictions.');
// //         console.error("Error fetching predictions:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchPredictions();
// //   }, []);

// //   const getRiskColor = (probability) => {
// //     if (probability >= 80) return 'text-red-500';
// //     if (probability >= 50) return 'text-yellow-500';
// //     return 'text-green-500';
// //   };

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center h-screen">
// //         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="flex justify-center items-center h-screen">
// //         <div className="text-center">
// //           <FiAlertTriangle className="mx-auto h-12 w-12 text-red-500" />
// //           <h2 className="mt-2 text-lg font-medium text-gray-800">{error}</h2>
// //           <p className="mt-1 text-sm text-gray-500">Please try again later.</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="p-6 sm:p-8">
// //       <h1 className="text-3xl font-bold text-gray-800 mb-8">Prediction History</h1>
// //       {predictions.length > 0 ? (
// //         <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
// //           {predictions.map((p) => (
// //             <div key={p._id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
// //               <div className={`p-4 border-l-4 ${getRiskColor(p.predictionResult.failure_probability).replace('text-', 'border-')}`}>
// //                 <div className="flex justify-between items-start">
// //                   <div>
// //                     <p className="text-sm font-semibold text-gray-500">{new Date(p.createdAt).toLocaleString()}</p>
// //                     <p className="text-xl font-bold text-gray-800">{p.inputData['Device type'] || 'N/A'}</p>
// //                   </div>
// //                   <div className={`flex items-center text-lg font-bold ${getRiskColor(p.predictionResult.failure_probability)}`}>
// //                     {p.predictionResult.failure_probability >= 50 ? <FiAlertTriangle className="mr-2" /> : <FiCheckCircle className="mr-2" />}
// //                     {Math.round(p.predictionResult.failure_probability)}%
// //                   </div>
// //                 </div>

// //                 <div className="mt-4">
// //                   <p className="text-sm text-gray-600 flex items-center"><FiTool className="mr-2 text-primary" /> Recommendation: <span className="font-semibold ml-1">{p.predictionResult.maintenanceRecommendation}</span></p>
// //                   <p className="text-sm text-gray-600">Confidence: {Math.round(p.predictionResult.confidence_score)}%</p>
// //                 </div>
// //               </div>

// //               <div className="px-4 py-2 bg-gray-50">
// //                 <details>
// //                   <summary className="cursor-pointer text-sm font-medium text-primary hover:underline">View Input Snapshot</summary>
// //                   <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-700">
// //                     <p className="flex items-center"><FiClock className="mr-1.5" /> Age: {p.inputData['Age (months)']} months</p>
// //                     <p className="flex items-center"><FiCpu className="mr-1.5" /> Usage: {p.inputData['Usage hrs/day']} hrs/day</p>
// //                     <p className="flex items-center"><FiZap className="mr-1.5" /> Voltage Fluctuation: {p.inputData['Voltage fluctuation']}</p>
// //                     <p className="flex items-center"><FiThermometer className="mr-1.5" /> Temp Avg: {p.inputData['Temperature Avg']}</p>
// //                     <p className="flex items-center"><FiDroplet className="mr-1.5" /> Humidity: {p.inputData.Humidity}</p>
// //                     <p className="flex items-center"><FiZapOff className="mr-1.5" /> Errors (24h): {p.inputData['Errors (24h)']}</p>
// //                   </div>
// //                 </details>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <div className="text-center py-16">
// //           <FiCpu className="mx-auto h-12 w-12 text-gray-400" />
// //           <h2 className="mt-2 text-lg font-medium text-gray-800">No predictions yet</h2>
// //           <p className="mt-1 text-sm text-gray-500">Run a new prediction to see the history here.</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default PredictionsListPage;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getAllPredictions } from '../api/authService';
// import { FiAlertTriangle, FiCpu, FiClock } from 'react-icons/fi';

// function PredictionsListPage() {
//   const [predictions, setPredictions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPredictions = async () => {
//       try {
//         setLoading(true);
//         const { data } = await getAllPredictions();
//         setPredictions(data.data || []);
//       } catch (err) {
//         setError('Failed to fetch predictions.');
//         console.error("Error fetching predictions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPredictions();
//   }, []);

//   const handleCardClick = (prediction) => {
//     // Navigate to dashboard and pass the prediction data in the state
//     navigate('/dashboard', { state: { prediction } });
//   };

//   const getRiskColor = (probability) => {
//     if (probability >= 80) return 'text-red-500';
//     if (probability >= 50) return 'text-yellow-500';
//     return 'text-green-500';
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-full">
//         <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-primary"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-full">
//         <div className="text-center">
//           <FiAlertTriangle className="mx-auto h-12 w-12 text-red-500" />
//           <h2 className="mt-2 text-lg font-medium text-gray-800">{error}</h2>
//           <p className="mt-1 text-sm text-gray-500">Please try again later.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 sm:p-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">Prediction History</h1>
//       {predictions.length > 0 ? (
//         <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
//           {predictions.map((p) => (
//             <div
//               key={p._id}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
//               onClick={() => handleCardClick(p)}
//             >
//               <div className="p-5">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-4">
//                      <div className={`p-3 rounded-full bg-opacity-10 ${getRiskColor(p.predictionResult.failure_probability).replace('text-', 'bg-')}`}>
//                          <FiCpu className={`h-6 w-6 ${getRiskColor(p.predictionResult.failure_probability)}`} />
//                      </div>
//                      <div>
//                         <p className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">{p.inputData['Device type'] || 'N/A'}</p>
//                         <p className="text-xs text-gray-500 flex items-center"><FiClock className="mr-1.5" /> {new Date(p.createdAt).toLocaleDateString()}</p>
//                      </div>
//                   </div>
//                   <div className="text-right">
//                      <p className={`text-2xl font-bold ${getRiskColor(p.predictionResult.failure_probability)}`}>
//                         {Math.round(p.predictionResult.failure_probability)}%
//                      </p>
//                      <p className="text-xs text-gray-500 -mt-1">Failure Risk</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-16">
//           <FiCpu className="mx-auto h-12 w-12 text-gray-400" />
//           <h2 className="mt-2 text-lg font-medium text-gray-800">No predictions yet</h2>
//           <p className="mt-1 text-sm text-gray-500">Run a new prediction to see the history here.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PredictionsListPage;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getAllPredictions } from '../api/authService';
// import { FiAlertTriangle, FiCpu, FiClock } from 'react-icons/fi';

// function PredictionsListPage() {
//   const [predictions, setPredictions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPredictions = async () => {
//       try {
//         setLoading(true);
//         const { data } = await getAllPredictions();
//         setPredictions(data.data || []);
//       } catch (err) {
//         setError('Failed to fetch predictions.');
//         console.error("Error fetching predictions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPredictions();
//   }, []);

//   const handleCardClick = (prediction) => {
//     // Navigate to dashboard and pass the prediction data in the state
//     navigate('/dashboard', { state: { prediction } });
//   };

//   const getRiskColor = (probability) => {
//     if (probability >= 80) return 'text-red-500';
//     if (probability >= 50) return 'text-yellow-500';
//     return 'text-green-500';
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-full p-6">
//         <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-primary"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-full p-6">
//         <div className="text-center">
//           <FiAlertTriangle className="mx-auto h-12 w-12 text-red-500" />
//           <h2 className="mt-2 text-lg font-medium text-gray-800">{error}</h2>
//           <p className="mt-1 text-sm text-gray-500">Please try again later.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 bg-[#e9ecef] sm:p-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">Prediction History</h1>
//       {predictions.length > 0 ? (
//         <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
//           {predictions.map((p) => (
//             <div
//               key={p._id}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
//               onClick={() => handleCardClick(p)}
//             >
//               <div className="p-5">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-4">
//                      <div className={`p-3 rounded-full bg-opacity-10 ${getRiskColor(p.predictionResult.failure_probability).replace('text-', 'bg-')}`}>
//                          <FiCpu className={`h-6 w-6 ${getRiskColor(p.predictionResult.failure_probability)}`} />
//                      </div>
//                      <div>
//                         {/* ✅ Updated to display device_type from backend data */}
//                         <p className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
//                           {p.inputData.device_type || p.inputData['Device type'] || 'Unknown Device'}
//                         </p>
//                         <p className="text-xs text-gray-500 flex items-center"><FiClock className="mr-1.5" /> {new Date(p.createdAt).toLocaleDateString()}</p>
//                      </div>
//                   </div>
//                   <div className="text-right">
//                      <p className={`text-2xl font-bold ${getRiskColor(p.predictionResult.failure_probability)}`}>
//                         {Math.round(p.predictionResult.failure_probability)}%
//                      </p>
//                      <p className="text-xs text-gray-500 -mt-1">Failure Risk</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-16">
//           <FiCpu className="mx-auto h-12 w-12 text-gray-400" />
//           <h2 className="mt-2 text-lg font-medium text-gray-800">No predictions yet</h2>
//           <p className="mt-1 text-sm text-gray-500">Run a new prediction to see the history here.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PredictionsListPage;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getAllPredictions } from '../api/authService';
// import { FiAlertTriangle, FiCpu, FiClock, FiHash } from 'react-icons/fi';

// function PredictionsListPage() {
//   const [predictions, setPredictions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPredictions = async () => {
//       try {
//         setLoading(true);
//         const { data } = await getAllPredictions();
//         setPredictions(data.data || []);
//       } catch (err) {
//         setError('Failed to fetch predictions.');
//         console.error("Error fetching predictions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPredictions();
//   }, []);

//   const handleCardClick = (prediction) => {
//     // Navigate to dashboard and pass the prediction data in the state
//     navigate('/dashboard', { state: { prediction } });
//   };

//   const getRiskColor = (probability) => {
//     if (probability >= 80) return 'text-red-500';
//     if (probability >= 50) return 'text-yellow-500';
//     return 'text-green-500';
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-full p-6">
//         <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-primary"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-full p-6">
//         <div className="text-center">
//           <FiAlertTriangle className="mx-auto h-12 w-12 text-red-500" />
//           <h2 className="mt-2 text-lg font-medium text-gray-800">{error}</h2>
//           <p className="mt-1 text-sm text-gray-500">Please try again later.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 bg-[#e9ecef] sm:p-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">Prediction History</h1>
//       {predictions.length > 0 ? (
//         <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
//           {predictions.map((p) => (
//             <div
//               key={p._id}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
//               onClick={() => handleCardClick(p)}
//             >
//               <div className="p-5">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-4">
//                     <div className={`p-3 rounded-full bg-opacity-10 ${getRiskColor(p.predictionResult.failure_probability).replace('text-', 'bg-')}`}>
//                       <FiCpu className={`h-6 w-6 ${getRiskColor(p.predictionResult.failure_probability)}`} />
//                     </div>
//                     <div>
//                       <p className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
//                         {p.inputData.device_type || p.inputData['Device type'] || 'Unknown Device'}
//                       </p>
//                       {/* ✅ Added device ID display */}
//                       <p className="text-xs text-gray-500 flex items-center"><FiHash className="mr-1.5" />
//                         {p.inputData.device_id || p.inputData['Device ID'] || 'N/A'}
//                       </p>
//                       <p className="text-xs text-gray-500 flex items-center mt-1"><FiClock className="mr-1.5" /> {new Date(p.createdAt).toLocaleDateString()}</p>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className={`text-2xl font-bold ${getRiskColor(p.predictionResult.failure_probability)}`}>
//                       {Math.round(p.predictionResult.failure_probability)}%
//                     </p>
//                     <p className="text-xs text-gray-500 -mt-1">Failure Risk</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-16">
//           <FiCpu className="mx-auto h-12 w-12 text-gray-400" />
//           <h2 className="mt-2 text-lg font-medium text-gray-800">No predictions yet</h2>
//           <p className="mt-1 text-sm text-gray-500">Run a new prediction to see the history here.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PredictionsListPage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPredictions } from '../api/authService';
import { FiAlertTriangle, FiCpu, FiClock, FiDatabase } from 'react-icons/fi';

function PredictionsListPage() {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        setLoading(true);
        const { data } = await getAllPredictions();
        setPredictions(data.data || []);
      } catch (err) {
        setError('Failed to fetch predictions.');
        console.error("Error fetching predictions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPredictions();
  }, []);

  const handleCardClick = (prediction) => {
    navigate('/dashboard', { state: { prediction } });
  };

  const getRiskColor = (probability) => {
    if (probability >= 80) return 'text-red-500';
    if (probability >= 50) return 'text-yellow-500';
    return 'text-green-500';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full p-6">
        <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full p-6">
        <div className="text-center">
          <FiAlertTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="mt-2 text-lg font-medium text-gray-800">{error}</h2>
          <p className="mt-1 text-sm text-gray-500">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#e9ecef] sm:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Prediction History</h1>
      {predictions.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {predictions.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => handleCardClick(p)}
            >
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full bg-opacity-10 ${getRiskColor(p.predictionResult.failure_probability).replace('text-', 'bg-')}`}>
                      <FiCpu className={`h-6 w-6 ${getRiskColor(p.predictionResult.failure_probability)}`} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
                        {p.inputData.device_type || p.inputData['Device type'] || 'Unknown Device'}
                      </p>
                      {/* ✅ Updated to show a shortened version of the ID */}
                      <p className="text-xs text-gray-500 flex items-center mt-1"><FiDatabase className="mr-1.5" />
                         <span className="font-mono" title={p._id}>{p._id.slice(0, 8)}...</span>
                      </p>
                      <p className="text-xs text-gray-500 flex items-center mt-1"><FiClock className="mr-1.5" /> {new Date(p.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${getRiskColor(p.predictionResult.failure_probability)}`}>
                      {Math.round(p.predictionResult.failure_probability)}%
                    </p>
                    <p className="text-xs text-gray-500 -mt-1">Failure Risk</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <FiCpu className="mx-auto h-12 w-12 text-gray-400" />
          <h2 className="mt-2 text-lg font-medium text-gray-800">No predictions yet</h2>
          <p className="mt-1 text-sm text-gray-500">Run a new prediction to see the history here.</p>
        </div>
      )}
    </div>
  );
}

export default PredictionsListPage;