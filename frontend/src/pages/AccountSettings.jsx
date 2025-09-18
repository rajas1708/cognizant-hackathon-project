// import React, { useState } from "react";

// function AccountSettings() {
//   const [profile] = useState({
//     name: "Felecia Burke",
//     location: "Hong Kong, China",
//     email: "example@mail.com",
//     phone: "+1 070123-4567",
//   });

//   const [account] = useState({
//     firstName: "James",
//     lastName: "Charles",
//     dob: "9-10-1997",
//     gender: "Female",
//   });

//   const [company] = useState({
//     name: "Artema Medical",
//     website: "https://www.artemamed.com",
//     description: "Surgical Instruments",
//     address: "Pune",
//   });

//   return (
//     <div className="w-full min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Profile</h2>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Profile Section */}
//         <div className="lg:col-span-1">
//           <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
//             <img
//               src="https://randomuser.me/api/portraits/women/44.jpg"
//               alt="client"
//               className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
//             />
//             <h3 className="text-xl font-semibold text-gray-900">{profile.name}</h3>
//             <p className="text-gray-500">{profile.location}</p>
//             <p className="text-gray-500">{profile.email}</p>
//             <p className="text-gray-500">{profile.phone}</p>
//             <button
//               className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//               onClick={() => alert("Edit Profile (not implemented)")}
//             >
//               Edit Info
//             </button>
//           </div>
//         </div>

//         {/* Account and Company Section */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Account Section */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-xl font-semibold mb-4 text-gray-900">Account Details</h3>
//             <div className="space-y-2">
//               <p>
//                 <b className="font-medium text-gray-900">First Name:</b> {account.firstName}
//               </p>
//               <p>
//                 <b className="font-medium text-gray-900">Last Name:</b> {account.lastName}
//               </p>
//               <p>
//                 <b className="font-medium text-gray-900">Date of Birth:</b> {account.dob}
//               </p>
//               <p>
//                 <b className="font-medium text-gray-900">Gender:</b> {account.gender}
//               </p>
//             </div>
//             <button
//               className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//               onClick={() => alert("Edit Account (not implemented)")}
//             >
//               Edit Info
//             </button>
//           </div>

//           {/* Company Section */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-xl font-semibold mb-4 text-gray-900"> Organization Information</h3>
//             <div className="space-y-2">
//               <p>
//                 <b className="font-medium text-gray-900"> Organization Name:</b> {company.name}
//               </p>
//               <p>
//                 <b className="font-medium text-gray-900">Website:</b>{" "}
//                 <a
//                   href={company.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   {company.website.replace(/^https?:\/\//, "")}
//                 </a>
//               </p>
//               <p>
//                 <b className="font-medium text-gray-900">Description:</b> {company.description}
//               </p>
//               <p>
//                 <b className="font-medium text-gray-900">Address:</b> {company.address}
//               </p>
//             </div>
//             <button
//               className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//               onClick={() => alert("Edit Company (not implemented)")}
//             >
//               Edit Info
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AccountSettings;

// import React, { useState, useEffect } from "react";
// import authService from "../api/authService";
// import Spinner from "../components/common/Spinner";

// function AccountSettings() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     location: "",
//     phone: "",
//     dob: "",
//     gender: "",
//     organization: {
//       name: "",
//       website: "",
//       description: "",
//       address: "",
//     },
//   });
//   const [initialData, setInitialData] = useState({}); // To store original data for cancel
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState("");
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const { data } = await authService.getUserProfile();
//         const userData = {
//           firstName: data.firstName || "",
//           lastName: data.lastName || "",
//           email: data.email || "",
//           location: data.location || "",
//           phone: data.phone || "",
//           dob: data.dob ? new Date(data.dob).toISOString().split('T')[0] : "",
//           gender: data.gender || "",
//           organization: {
//             name: data.organization?.name || "",
//             website: data.organization?.website || "",
//             description: data.organization?.description || "",
//             address: data.organization?.address || "",
//           },
//         };
//         setFormData(userData);
//         setInitialData(userData); // Save initial data
//         setError(null);
//       } catch (err) {
//         setError(err.response?.data?.message || "Failed to fetch user profile.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleOrgChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       organization: { ...prev.organization, [name]: value },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess("");
//     setError(null);
//     try {
//       const { data } = await authService.updateUserProfile(formData);
//        const updatedUserData = {
//           firstName: data.firstName || "",
//           lastName: data.lastName || "",
//           email: data.email || "",
//           location: data.location || "",
//           phone: data.phone || "",
//           dob: data.dob ? new Date(data.dob).toISOString().split('T')[0] : "",
//           gender: data.gender || "",
//           organization: {
//             name: data.organization?.name || "",
//             website: data.organization?.website || "",
//             description: data.organization?.description || "",
//             address: data.organization?.address || "",
//           },
//         };
//       setFormData(updatedUserData);
//       setInitialData(updatedUserData);
//       setSuccess("Profile updated successfully!");
//       setIsEditing(false);
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to update profile.");
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   const handleCancel = () => {
//     setFormData(initialData); // Revert to initial data
//     setIsEditing(false);
//     setError(null);
//     setSuccess("");
//   };

//   if (loading && !formData.email) {
//     return <div className="flex justify-center items-center h-screen"><Spinner /></div>;
//   }

//   if (error && !formData.email) {
//     return <div className="flex justify-center items-center h-screen"><p className="text-red-500">{error}</p></div>;
//   }

//   const renderField = (label, name, value, isOrg = false, type = "text") => (
//     <div>
//       <label className="block text-sm font-medium text-gray-700">{label}</label>
//       {isEditing ? (
//         <input
//           type={type}
//           name={name}
//           value={value}
//           onChange={isOrg ? handleOrgChange : handleChange}
//           className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         />
//       ) : (
//         <p className="mt-1 text-gray-900 h-10 flex items-center">{value || "-"}</p>
//       )}
//     </div>
//   );

//   return (
//     <div className="w-full min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
//         {!isEditing && (
//           <button
//             onClick={() => setIsEditing(true)}
//             className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//           >
//             Edit Profile
//           </button>
//         )}
//       </div>

//       {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">{success}</div>}
//       {error && !success && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
//               <img
//                 src="https://randomuser.me/api/portraits/women/44.jpg"
//                 alt="client"
//                 className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
//               />
//               <h3 className="text-xl font-semibold text-gray-900">{`${formData.firstName} ${formData.lastName}`}</h3>
//                <div className="w-full text-left mt-4 space-y-4">
//                 {renderField("Location", "location", formData.location)}
//                 <div>
//                    <label className="block text-sm font-medium text-gray-700">Email</label>
//                    <p className="mt-1 text-gray-500">{formData.email}</p>
//                 </div>
//                 {renderField("Phone", "phone", formData.phone)}
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-2 space-y-6">
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-semibold mb-4 text-gray-900">Account Details</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {renderField("First Name", "firstName", formData.firstName)}
//                 {renderField("Last Name", "lastName", formData.lastName)}
//                 {renderField("Date of Birth", "dob", formData.dob, false, "date")}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Gender</label>
//                   {isEditing ? (
//                      <select name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
//                         <option value="">Select...</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                         <option value="Other">Other</option>
//                      </select>
//                   ) : (
//                     <p className="mt-1 text-gray-900 h-10 flex items-center">{formData.gender || "-"}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-semibold mb-4 text-gray-900">Organization Information</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {renderField("Organization Name", "name", formData.organization.name, true)}
//                 {renderField("Website", "website", formData.organization.website, true)}
//                 {renderField("Description", "description", formData.organization.description, true)}
//                 {renderField("Address", "address", formData.organization.address, true)}
//               </div>
//             </div>
//           </div>
//         </div>
//         {isEditing && (
//           <div className="mt-6 flex justify-end gap-4">
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition disabled:opacity-50"
//             >
//               {loading ? <Spinner /> : "Save Changes"}
//             </button>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }

// export default AccountSettings;

import React, { useState, useEffect } from "react";
import { getUserProfile, updateUserProfile } from "../api/authService";
import Spinner from "../components/common/Spinner";

function AccountSettings() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    phone: "",
    dob: "",
    gender: "",
    organization: {
      name: "",
      website: "",
      description: "",
      address: "",
    },
  });
  const [initialData, setInitialData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Add this useEffect to check if user is logged in
// useEffect(() => {
//   const userInfo = JSON.parse(localStorage.getItem('user'));
//   if (!userInfo) {
//     navigate('/login');
//   }
// }, [navigate]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await getUserProfile();
        const userData = {
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          location: data.location || "",
          phone: data.phone || "",
          dob: data.dob ? new Date(data.dob).toISOString().split("T")[0] : "",
          gender: data.gender || "",
          organization: {
            name: data.organization?.name || "",
            website: data.organization?.website || "",
            description: data.organization?.description || "",
            address: data.organization?.address || "",
          },
        };
        setFormData(userData);
        setInitialData(userData);
        setError(null);
      } catch (err) {
        setError(
          err.response?.data?.message || "Failed to fetch user profile."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrgChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      organization: { ...prev.organization, [name]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError(null);
    try {
      const { data } = await updateUserProfile(formData);
      const updatedUserData = {
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        email: data.email || "",
        location: data.location || "",
        phone: data.phone || "",
        dob: data.dob ? new Date(data.dob).toISOString().split("T")[0] : "",
        gender: data.gender || "",
        organization: {
          name: data.organization?.name || "",
          website: data.organization?.website || "",
          description: data.organization?.description || "",
          address: data.organization?.address || "",
        },
      };
      setFormData(updatedUserData);
      setInitialData(updatedUserData);
      setSuccess("Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData(initialData);
    setIsEditing(false);
    setError(null);
    setSuccess("");
  };

  if (loading && !formData.email) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (error && !formData.email) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const renderField = (label, name, value, isOrg = false, type = "text") => (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {isEditing ? (
        <input
          type={type}
          name={name}
          value={value}
          onChange={isOrg ? handleOrgChange : handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      ) : (
        <p className="mt-1 text-gray-900 h-10 flex items-center">
          {value || "-"}
        </p>
      )}
    </div>
  );

  return (
    <div className="w-full bg-[#e9ecef] min-h-screen  p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>
        )}
      </div>

      {success && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          {success}
        </div>
      )}
      {error && !success && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
              <img
                src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg"
                alt="client"
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900">{`${formData.firstName} ${formData.lastName}`}</h3>
              <div className="w-full text-left mt-4 space-y-4">
                {renderField("Location", "location", formData.location)}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <p className="mt-1 text-gray-500">{formData.email}</p>
                </div>
                {renderField("Phone", "phone", formData.phone)}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Account Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderField("First Name", "firstName", formData.firstName)}
                {renderField("Last Name", "lastName", formData.lastName)}
                {renderField("Date of Birth", "dob", formData.dob, false, "date")}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  {isEditing ? (
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Select...</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <p className="mt-1 text-gray-900 h-10 flex items-center">
                      {formData.gender || "-"}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Organization Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderField(
                  "Organization Name",
                  "name",
                  formData.organization.name,
                  true
                )}
                {renderField(
                  "Website",
                  "website",
                  formData.organization.website,
                  true
                )}
                {renderField(
                  "Description",
                  "description",
                  formData.organization.description,
                  true
                )}
                {renderField(
                  "Address",
                  "address",
                  formData.organization.address,
                  true
                )}
              </div>
            </div>
          </div>
        </div>
        {isEditing && (
          <div className="mt-6 flex justify-end gap-4">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? <Spinner /> : "Save Changes"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default AccountSettings;


