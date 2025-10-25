 import React, { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const ResponseForm = () => {
  const [entryType, setEntryType] = useState("");
  const [teamSize, setTeamSize] = useState(2);
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([
    { name: "", roll: "", phone: "", email: "" }
  ]);

  const generateTeamId = () => {
    return "TEAM-" + crypto.randomUUID().slice(0, 8).toUpperCase();
  };

  const handleEntryTypeChange = (e) => {
    const type = e.target.value;
    setEntryType(type);
    setTeamName("");
    if (type === "solo") {
      setMembers([{ name: "", roll: "", phone: "", email: "" }]);
    } else {
      setMembers(
        Array(teamSize).fill({ name: "", roll: "", phone: "", email: "" })
      );
    }
  };

  const handleTeamSizeChange = (e) => {
    const size = parseInt(e.target.value);
    setTeamSize(size);
    setMembers(
      Array(size).fill({ name: "", roll: "", phone: "", email: "" })
    );
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const teamId = generateTeamId();
      await addDoc(collection(db, "responses"), {
        teamId,
        entryType,
        teamName: entryType === "team" ? teamName : "Solo",
        members,
        timestamp: new Date()
      });

      alert(`Response submitted successfully! Your Team ID: ${teamId}`);

      setEntryType("");
      setTeamSize(2);
      setTeamName("");
      setMembers([{ name: "", roll: "", phone: "", email: "" }]);
    } catch (error) {
      console.error("Error submitting response:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Submit Your Response
        </h2>

        <div className="flex gap-6 mb-6 justify-center">
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <input
              type="radio"
              name="entryType"
              value="solo"
              checked={entryType === "solo"}
              onChange={handleEntryTypeChange}
              required
              className="accent-green-500"
            />
            Solo
          </label>
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <input
              type="radio"
              name="entryType"
              value="team"
              checked={entryType === "team"}
              onChange={handleEntryTypeChange}
              className="accent-green-500"
            />
            Team
          </label>
        </div>

        {entryType === "team" && (
          <div className="mb-6 text-center flex flex-col items-center gap-4">
            <label className="text-gray-700 font-medium w-full max-w-sm text-left">
              Team Name:
              <input
                type="text"
                value={teamName}
                placeholder="Enter Team Name"
                onChange={(e) => setTeamName(e.target.value)}
                required
                className="ml-2 w-full px-3 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-green-400"
              />
            </label>

            <label className="text-gray-700 font-medium">
              Number of team members (2-4):
              <input
                type="number"
                min="2"
                max="4"
                value={teamSize}
                onChange={handleTeamSizeChange}
                className="ml-2 w-16 px-2 py-1 border rounded-md border-gray-300 focus:ring-2 focus:ring-green-400"
              />
            </label>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col gap-3"
            >
              <h3 className="font-semibold text-gray-700 mb-2 text-center">
                Member {idx + 1}
              </h3>
              <input
                type="text"
                placeholder="Name"
                value={member.name}
                onChange={(e) =>
                  handleMemberChange(idx, "name", e.target.value)
                }
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Roll Number"
                value={member.roll}
                onChange={(e) =>
                  handleMemberChange(idx, "roll", e.target.value)
                }
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={member.phone}
                onChange={(e) =>
                  handleMemberChange(idx, "phone", e.target.value)
                }
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email"
                value={member.email}
                onChange={(e) =>
                  handleMemberChange(idx, "email", e.target.value)
                }
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 font-semibold rounded-lg transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResponseForm;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './styles.css'; // Ensure styles.css is imported
// import { db } from './firebase'; // Import Realtime Database instance
// import { ref, set, push } from 'firebase/database';


// const Registration = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     teamName: '',
//     leader: { name: '', roll: '', year: '', email: '' },
//     member2: { name: '', roll: '', year: '', email: '' },
//     member3: { name: '', roll: '', year: '', email: '' },
//     member4: { name: '', roll: '', year: '', email: '' },
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const [key, field] = name.split('-');
//     setFormData((prev) => {
//       if (field) {
//         return { ...prev, [key]: { ...prev[key], [field]: value } };
//       }
//       return { ...prev, [key]: value };
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newTeamRef = push(ref(db, 'teams')); // Create a unique ID for the new team
//       await set(newTeamRef, formData); // Write data to Realtime Database
//       alert('Team Registered Successfully!');
//     } catch (error) {
//       console.error('Error adding data: ', error);
//       alert('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="background-container">
//       <div className="container">
//         <h1 className="custom-heading">WDS 10.0 Registration</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="teamName">Team Name</label>
//             <input
//               type="text"
//               id="teamName"
//               name="teamName"
//               placeholder="Enter Team Name"
//               required
//               onChange={handleChange}
//             />
//           </div>

//           <h2 className="custom-head">Team Leader Details</h2>
//           <div className="form-group">
//             <label htmlFor="leader-name">Name</label>
//             <input
//               type="text"
//               id="leader-name"
//               name="leader-name"
//               placeholder="Enter Name"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="leader-roll">Roll Number</label>
//             <input
//               type="text"
//               id="leader-roll"
//               name="leader-roll"
//               placeholder="Enter Roll Number"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="leader-year">Year</label>
//             <input
//               type="text"
//               id="leader-year"
//               name="leader-year"
//               placeholder="Enter Year"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="leader-email">Email</label>
//             <input
//               type="email"
//               id="leader-email"
//               name="leader-email"
//               placeholder="Enter Email"
//               required
//               onChange={handleChange}
//             />
//           </div>

//           <h2 className="custom-head">Member 2 Details</h2>
//           <div className="form-group">
//             <label htmlFor="member2-name">Name</label>
//             <input
//               type="text"
//               id="member2-name"
//               name="member2-name"
//               placeholder="Enter Name"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="member2-roll">Roll Number</label>
//             <input
//               type="text"
//               id="member2-roll"
//               name="member2-roll"
//               placeholder="Enter Roll Number"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="member2-year">Year</label>
//             <input
//               type="text"
//               id="member2-year"
//               name="member2-year"
//               placeholder="Enter Year"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="member2-email">Email</label>
//             <input
//               type="email"
//               id="member2-email"
//               name="member2-email"
//               placeholder="Enter Email"
//               required
//               onChange={handleChange}
//             />
//           </div>

//           <h2 className="custom-head">Member 3 Details</h2>
//           <div className="form-group">
//             <label htmlFor="member3-name">Name</label>
//             <input
//               type="text"
//               id="member3-name"
//               name="member3-name"
//               placeholder="Enter Name"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="member3-roll">Roll Number</label>
//             <input
//               type="text"
//               id="member3-roll"
//               name="member3-roll"
//               placeholder="Enter Roll Number"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="member3-year">Year</label>
//             <input
//               type="text"
//               id="member3-year"
//               name="member3-year"
//               placeholder="Enter Year"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="member3-email">Email</label>
//             <input
//               type="email"
//               id="member3-email"
//               name="member3-email"
//               placeholder="Enter Email"
//               required
//               onChange={handleChange}
//             />
//           </div>

//           <h2 className="custom-head">Member 4 Details</h2>
//           <div className="form-group">
//             <label htmlFor="member4-name">Name</label>
//             <input
//               type="text"
//               id="member4-name"
//               name="member4-name"
//               placeholder="Enter Name"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="member4-roll">Roll Number</label>
//             <input
//               type="text"
//               id="member4-roll"
//               name="member4-roll"
//               placeholder="Enter Roll Number"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="member4-year">Year</label>
//             <input
//               type="text"
//               id="member4-year"
//               name="member4-year"
//               placeholder="Enter Year"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="member4-email">Email</label>
//             <input
//               type="email"
//               id="member4-email"
//               name="member4-email"
//               placeholder="Enter Email"
//               required
//               onChange={handleChange}
//             />
//           </div>

//           <button
//   onClick={() => navigate('/register')}
//   aria-label="Register for the event"
//   className="register-button"
// >
//   Register
// </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Registration;
