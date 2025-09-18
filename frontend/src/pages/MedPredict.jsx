// // import React, { useState } from "react";
// // import { predict } from "../api/authService"; // Changed import

// // const DEFAULT_INPUTS = {
// //   age_months: 36,
// //   usage_hours_per_day: 8,
// //   operational_hours: 12400,
// //   temperature_avg: 22,
// //   humidity: 48,
// //   vibration_level_avg: 0.35,
// //   voltage_fluctuation_pct: 3.1,
// //   error_count_24h: 5,
// //   last_repair_cost: 1250,
// //   device_type: "MRI",
// // };

// // function ModelInputsForm() {
// //   const [inputs, setInputs] = useState(DEFAULT_INPUTS);
// //   const [prediction, setPrediction] = useState(null);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   function handleChange(e) {
// //     const { name, value } = e.target;
// //     setInputs({ ...inputs, [name]: value });
// //   }

// //   function handleReset() {
// //     setInputs(DEFAULT_INPUTS);
// //     setPrediction(null);
// //     setError(null);
// //   }

// //   function handleClear() {
// //     setInputs({
// //       age_months: "",
// //       usage_hours_per_day: "",
// //       operational_hours: "",
// //       temperature_avg: "",
// //       humidity: "",
// //       vibration_level_avg: "",
// //       voltage_fluctuation_pct: "",
// //       error_count_24h: "",
// //       last_repair_cost: "",
// //       device_type: "",
// //     });
// //     setPrediction(null);
// //     setError(null);
// //   }

// //   async function handleRunPrediction() {
// //     setIsLoading(true);
// //     setError(null);
// //     try {
// //       const result = await predict(inputs);
// //       setPrediction(result);
// //     } catch (error) {
// //       setError("Failed to get prediction. Please try again.");
// //       console.error("Prediction error:", error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   }

// //   return (
// //     <div className="p-4 sm:p-6 md:p-8 lg:p-10">
// //       <div className="max-w-4xl mx-auto">
// //         <div className="flex justify-between items-center mb-4">
// //           <h5 className="font-bold text-xl">Home</h5>
// //           <div>
// //             <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold mr-2">
// //               Model Inputs
// //             </button>
// //             <button
// //               className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-semibold"
// //               onClick={handleReset}
// //             >
// //               Reset
// //             </button>
// //           </div>
// //         </div>

// //         <div className="bg-white p-6 rounded-lg shadow-md">
// //           <h6 className="font-bold text-lg mb-3">
// //             Model Input Configuration
// //           </h6>
// //           <small className="mb-4 d-block text-gray-500">
// //             Enter values to predict medical equipment failure. These inputs can be
// //             saved as defaults.
// //           </small>
// //           <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {/* Input fields */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Age (months)
// //               </label>
// //               <input
// //                 type="number"
// //                 name="age_months"
// //                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 placeholder="e.g., 36"
// //                 value={inputs.age_months}
// //                 onChange={handleChange}
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Usage Hours/Day
// //               </label>
// //               <input
// //                 type="number"
// //                 name="usage_hours_per_day"
// //                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 placeholder="e.g., 8"
// //                 value={inputs.usage_hours_per_day}
// //                 onChange={handleChange}
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Operational Hours
// //               </label>
// //               <input
// //                 type="number"
// //                 name="operational_hours"
// //                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 placeholder="Total lifetime hours"
// //                 value={inputs.operational_hours}
// //                 onChange={handleChange}
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Temperature Avg (°C)
// //               </label>
// //               <input
// //                 type="number"
// //                 name="temperature_avg"
// //                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 placeholder="Past 7 days average"
// //                 value={inputs.temperature_avg}
// //                 onChange={handleChange}
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Humidity (%)
// //               </label>
// //               <input
// //                 type="number"
// //                 name="humidity"
// //                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 placeholder="Typical range 30-60"
// //                 value={inputs.humidity}
// //                 onChange={handleChange}
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Vibration Level Avg
// //               </label>
// //               <input
// //                 type="number"
// //                 name="vibration_level_avg"
// //                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 placeholder="RMS"
// //                 value={inputs.vibration_level_avg}
// //                 onChange={handleChange}
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Voltage Fluctuation (%)
// //               </label>
// //               <input
// //                 type="number"
// //                 name="voltage_fluctuation_pct"
// //                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 placeholder="Std dev as %"
// //                 value={inputs.voltage_fluctuation_pct}
// //                 onChange={handleChange}
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Error Count (24h)
// //               </label>
// //               <input
// //                 type="number"
// //                 name="error_count_24h"
// //                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 placeholder="Number of errors"
// //                 value={inputs.error_count_24h}
// //                 onChange={handleChange}
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Last Repair Cost ($)
// //               </label>
// //               <input
// //                 type="number"
// //                 name="last_repair_cost"
// //                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 placeholder="Most recent"
// //                 value={inputs.last_repair_cost}
// //                 onChange={handleChange}
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700">
// //                 Device Type
// //               </label>
// //               <select
// //                 name="device_type"
// //                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 value={inputs.device_type}
// //                 onChange={handleChange}
// //               >
// //                 <option value="">Select Device Type</option>
// //                 <option value="MRI">MRI</option>
// //                 <option value="Ultrasound">Ultrasound</option>
// //                 <option value="Ventilator">Ventilator</option>
// //                 <option value="X-ray">X-ray</option>
// //                 <option value="Dialysis">Dialysis</option>
// //               </select>
// //             </div>
// //           </form>
// //           <div className="flex justify-end gap-4 mt-6">
// //             <button
// //               className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-semibold"
// //               type="button"
// //               onClick={handleClear}
// //             >
// //               Clear
// //             </button>
// //             <button
// //               className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
// //               type="button"
// //               onClick={handleRunPrediction}
// //               disabled={isLoading}
// //             >
// //               {isLoading ? "Running..." : "Run Prediction"}
// //             </button>
// //           </div>
// //         </div>
// //         {prediction && (
// //           <div className="mt-6 bg-green-100 p-4 rounded-lg">
// //             <h6 className="font-bold text-lg mb-2">Prediction Result</h6>
// //             <pre className="text-sm text-green-800">
// //               {JSON.stringify(prediction, null, 2)}
// //             </pre>
// //           </div>
// //         )}
// //         {error && (
// //           <div className="mt-6 bg-red-100 p-4 rounded-lg">
// //             <h6 className="font-bold text-lg mb-2 text-red-800">Error</h6>
// //             <p className="text-sm text-red-800">{error}</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default ModelInputsForm;

// import React, { useState } from "react";
// import { getPrediction } from "../api/authService"; // Changed to getPrediction

// const DEFAULT_INPUTS = {
//   age_months: 36,
//   usage_hours_per_day: 8,
//   operational_hours: 12400,
//   temperature_avg: 22,
//   humidity: 48,
//   vibration_level_avg: 0.35,
//   voltage_fluctuation_pct: 3.1,
//   error_count_24h: 5,
//   last_repair_cost: 1250,
//   device_type: "MRI",
// };

// function ModelInputsForm() {
//   const [inputs, setInputs] = useState(DEFAULT_INPUTS);
//   const [prediction, setPrediction] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//   }

//   function handleReset() {
//     setInputs(DEFAULT_INPUTS);
//     setPrediction(null);
//     setError(null);
//   }

//   function handleClear() {
//     setInputs({
//       age_months: "",
//       usage_hours_per_day: "",
//       operational_hours: "",
//       temperature_avg: "",
//       humidity: "",
//       vibration_level_avg: "",
//       voltage_fluctuation_pct: "",
//       error_count_24h: "",
//       last_repair_cost: "",
//       device_type: "",
//     });
//     setPrediction(null);
//     setError(null);
//   }

//   async function handleRunPrediction() {
//     setIsLoading(true);
//     setError(null);
//     try {
//       // Use the corrected function
//       const response = await getPrediction(inputs);
//       // Axios wraps the response data in a `data` property
//       setPrediction(response.data);
//     } catch (error) {
//       setError("Failed to get prediction. Please try again.");
//       console.error("Prediction error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <div className="p-4 sm:p-6 md:p-8 lg:p-10">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex justify-between items-center mb-4">
//           <h5 className="font-bold text-xl">Home</h5>
//           <div>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold mr-2">
//               Model Inputs
//             </button>
//             <button
//               className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-semibold"
//               onClick={handleReset}
//             >
//               Reset
//             </button>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h6 className="font-bold text-lg mb-3">
//             Model Input Configuration
//           </h6>
//           <small className="mb-4 d-block text-gray-500">
//             Enter values to predict medical equipment failure. These inputs can be
//             saved as defaults.
//           </small>
//           <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Input fields */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Age (months)
//               </label>
//               <input
//                 type="number"
//                 name="age_months"
//                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="e.g., 36"
//                 value={inputs.age_months}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Usage Hours/Day
//               </label>
//               <input
//                 type="number"
//                 name="usage_hours_per_day"
//                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="e.g., 8"
//                 value={inputs.usage_hours_per_day}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Operational Hours
//               </label>
//               <input
//                 type="number"
//                 name="operational_hours"
//                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Total lifetime hours"
//                 value={inputs.operational_hours}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Temperature Avg (°C)
//               </label>
//             	<input
//               	type="number"
//               	name="temperature_avg"
//               	className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               	placeholder="Past 7 days average"
//               	value={inputs.temperature_avg}
//               	onChange={handleChange}
//             	/>
//           	</div>
//           	<div>
//             	<label className="block text-sm font-medium text-gray-700">
//               	Humidity (%)
//             	</label>
//             	<input
//               	type="number"
//               	name="humidity"
//               	className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               	placeholder="Typical range 30-60"
//               	value={inputs.humidity}
//               	onChange={handleChange}
//             	/>
//           	</div>
//           	<div>
//             	<label className="block text-sm font-medium text-gray-700">
//               	Vibration Level Avg
//             	</label>
//             	<input
//               	type="number"
//               	name="vibration_level_avg"
//               	className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               	placeholder="RMS"
//               	value={inputs.vibration_level_avg}
//               	onChange={handleChange}
//             	/>
//           	</div>
//           	<div>
//             	<label className="block text-sm font-medium text-gray-700">
//               	Voltage Fluctuation (%)
//             	</label>
//             	<input
//               	type="number"
//               	name="voltage_fluctuation_pct"
//               	className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               	placeholder="Std dev as %"
//               	value={inputs.voltage_fluctuation_pct}
//               	onChange={handleChange}
//             	/>
//           	</div>
//           	<div>
//             	<label className="block text-sm font-medium text-gray-700">
//               	Error Count (24h)
//             	</label>
//             	<input
//               	type="number"
//               	name="error_count_24h"
//               	className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               	placeholder="Number of errors"
//               	value={inputs.error_count_24h}
//               	onChange={handleChange}
//             	/>
//           	</div>
//           	<div>
//             	<label className="block text-sm font-medium text-gray-700">
//               	Last Repair Cost ($)
//             	</label>
//             	<input
//               	type="number"
//               	name="last_repair_cost"
//               	className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               	placeholder="Most recent"
//               	value={inputs.last_repair_cost}
//               	onChange={handleChange}
//             	/>
//           	</div>
//           	<div>
//             	<label className="block text-sm font-medium text-gray-700">
//               	Device Type
//             	</label>
//             	<select
//               	name="device_type"
//               	className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               	value={inputs.device_type}
//               	onChange={handleChange}
//             	>
//               	<option value="">Select Device Type</option>
//               	<option value="MRI">MRI</option>
//               	<option value="Ultrasound">Ultrasound</option>
//               	<option value="Ventilator">Ventilator</option>
//               	<option value="X-ray">X-ray</option>
//               	<option value="Dialysis">Dialysis</option>
//             	</select>
//           	</div>
//         	</form>
//         	<div className="flex justify-end gap-4 mt-6">
//         		<button
//             	className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-semibold"
//             	type="button"
//             	onClick={handleClear}
//           	>
//             	Clear
//           	</button>
//           	<button
//             	className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
//             	type="button"
//             	onClick={handleRunPrediction}
//             	disabled={isLoading}
//           	>
//             	{isLoading ? "Running..." : "Run Prediction"}
//           	</button>
//         	</div>
//     		</div>
//     		{prediction && (
//       		<div className="mt-6 bg-green-100 p-4 rounded-lg">
//         		<h6 className="font-bold text-lg mb-2">Prediction Result</h6>
//         		<pre className="text-sm text-green-800">
//           		{JSON.stringify(prediction, null, 2)}
//           		</pre>
//       		</div>
//     		)}
//     		{error && (
//       		<div className="mt-6 bg-red-100 p-4 rounded-lg">
//         		<h6 className="font-bold text-lg mb-2 text-red-800">Error</h6>
//         		<p className="text-sm text-red-800">{error}</p>
//       		</div>
//     		)}
//   			</div>
//   		</div>
//   );
// }

// export default ModelInputsForm;

import React, { useState } from "react";
import { getPrediction } from "../api/authService"; // Changed to getPrediction
import { useNavigate } from "react-router-dom";

const DEFAULT_INPUTS = {
  age_months: 36,
//   usage_hours_per_day: 8,
  operational_hours: 12400,
  temperature_avg: 22,
  humidity: 48,
  vibration_level_avg: 0.35,
  voltage_fluctuation_pct: 3.1,
  error_count_24h: 5,
  last_repair_cost: 1250,
  device_type: "MRI",
};

function ModelInputsForm() {
  const [inputs, setInputs] = useState(DEFAULT_INPUTS);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  function handleReset() {
    setInputs(DEFAULT_INPUTS);
    setPrediction(null);
    setError(null);
  }

  function handleClear() {
    setInputs({
      age_months: "",
    //   usage_hours_per_day: "",
      operational_hours: "",
      temperature_avg: "",
      humidity: "",
      vibration_level_avg: "",
      voltage_fluctuation_pct: "",
      error_count_24h: "",
      last_repair_cost: "",
      device_type: "",
    });
    setPrediction(null);
    setError(null);
  }
const navigate = useNavigate();
  async function handleRunPrediction() {
    
    setIsLoading(true);
    setError(null);
    try {
      const response = await getPrediction(inputs);
      setPrediction(response.data); // Store response
      navigate("/dashboard");
      
    } catch (error) {
      setError("Failed to get prediction. Please try again.");
      console.error("Prediction error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-4 bg-[#e9ecef] sm:p-6 md:p-8 lg:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h5 className="font-bold text-xl">Home</h5>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold mr-2">
              Model Inputs
            </button>
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-semibold"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h6 className="font-bold text-lg mb-3">Model Input Configuration</h6>
          <small className="mb-4 d-block text-gray-500">
            Enter values to predict medical equipment failure. These inputs can
            be saved as defaults.
          </small>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age (months)
              </label>
              <input
                type="number"
                name="age_months"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="e.g., 36"
                value={inputs.age_months}
                onChange={handleChange}
              />
            </div>

            {/* Usage Hours/Day */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Usage Hours/Day
              </label>
              <input
                type="number"
                name="usage_hours_per_day"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="e.g., 8"
                value={inputs.usage_hours_per_day}
                onChange={handleChange}
              />
            </div> */}

            {/* Operational Hours */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Operational Hours
              </label>
              <input
                type="number"
                name="operational_hours"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Total lifetime hours"
                value={inputs.operational_hours}
                onChange={handleChange}
              />
            </div>

            {/* Temperature */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Temperature Avg (°C)
              </label>
              <input
                type="number"
                name="temperature_avg"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Past 7 days average"
                value={inputs.temperature_avg}
                onChange={handleChange}
              />
            </div>

            {/* Humidity */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Humidity (%)
              </label>
              <input
                type="number"
                name="humidity"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Typical range 30-60"
                value={inputs.humidity}
                onChange={handleChange}
              />
            </div>

            {/* Vibration */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Vibration Level Avg
              </label>
              <input
                type="number"
                name="vibration_level_avg"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="RMS"
                value={inputs.vibration_level_avg}
                onChange={handleChange}
              />
            </div>

            {/* Voltage Fluctuation */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Voltage Fluctuation (%)
              </label>
              <input
                type="number"
                name="voltage_fluctuation_pct"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Std dev as %"
                value={inputs.voltage_fluctuation_pct}
                onChange={handleChange}
              />
            </div>

            {/* Error Count */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Error Count (24h)
              </label>
              <input
                type="number"
                name="error_count_24h"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Number of errors"
                value={inputs.error_count_24h}
                onChange={handleChange}
              />
            </div>

            {/* Last Repair Cost */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Repair Cost ($)
              </label>
              <input
                type="number"
                name="last_repair_cost"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Most recent"
                value={inputs.last_repair_cost}
                onChange={handleChange}
              />
            </div>

            {/* Device Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Device Type
              </label>
              <select
                name="device_type"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={inputs.device_type}
                onChange={handleChange}
              >
                <option value="">Select Device Type</option>
                <option value="MRI">MRI</option>
                <option value="Ultrasound">Ultrasound</option>
                <option value="Ventilator">Ventilator</option>
                <option value="X-Ray">X-Ray</option>
                <option value="Dialysis">Dialysis</option>
              </select>
            </div>
          </form>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-semibold"
              type="button"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
              type="button"
              onClick={handleRunPrediction}
              disabled={isLoading}
            >
              {isLoading ? "Running..." : "Run Prediction"}
            </button>
          </div>
        </div>

        {/* Result Messages */}
        {prediction && (
          <div className="mt-6 bg-green-100 p-4 rounded-lg">
            <h6 className="font-bold text-lg mb-2 text-green-900">
              Prediction Result
            </h6>
            <p className="text-green-800 text-sm">
              ✅ Prediction completed successfully.
            </p>
          </div>
        )}

        {error && (
          <div className="mt-6 bg-red-100 p-4 rounded-lg">
            <h6 className="font-bold text-lg mb-2 text-red-800">Error</h6>
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModelInputsForm;
