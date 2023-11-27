import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../App";
const FormCheckout = () => {
  const [fakes,userDetails,openModal,setOpenModal,setUser] = useContext(Context);
  console.log(userDetails);
  const [formData, setFormData] = useState({

    student_id:"",
    department:"",
    batch:"",
    program:"",
    section:"",
    phone:"",
  });
  const parseStudentId = (studentId) => {
    const batch = studentId.slice(0, 2); // Extract the first two digits as batch
    const departmentCode = studentId[4]; // Extract the fourth digit as department code
    const programCode = studentId[5]; // Extract the fifth digit as program code
    const section = studentId.slice(-3,-2); // Extract the last digit as section
  
    // Define a mapping for department and program codes
    const departmentMap = {
      '2': 'Civil',
      '3': 'EEE',
      '4': 'CSE',
      // Add more department codes as needed
    };
  
    const programMap = {
      '1': 'CSE',
      '2':'Software'
      // Add more program codes as needed
    };
  
    // Create the final object with extracted information
    const parsedInfo = {
      batch,
      department: departmentMap[departmentCode] || 'Unknown Department',
      program: programMap[programCode] || 'Unknown Program',
      section,
    };
  
    return parsedInfo;
  };
useEffect(()=>{
    // if (userDetails.all_data_available) {
        if ( formData.student_id.length>0) {
            const  parsedInfo = parseStudentId(formData.student_id);
              setFormData((prevData) => ({
                  ...prevData,
                  batch:parsedInfo.batch,
                  department:parsedInfo.department,
                  program:parsedInfo.program,
                  section:parsedInfo.section,
                }));
                setUser((prevData) => ({
                    ...prevData,
                    batch:parsedInfo.batch,
                    department:parsedInfo.department,
                    program:parsedInfo.program,
                    section:parsedInfo.section,
                  }));
      
              
          }
    // }
  
},[formData.student_id])

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setUser((prevData) => ({
        ...prevData,
        [name]: value,
      }));

  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    var sending_data ={
        name: userDetails.userName,
        email:userDetails.UserEmail,
        id:userDetails.uid,
        image:userDetails.UserImage,
        student_id: formData.student_id,
        department: formData.department,
        batch: formData.batch,
        program: formData.program,
        section: formData.section,
        phone: formData.phone,
        all_data_available: true,

    }

    try {
      const response = await fetch('http://localhost:4545/updateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers as needed
        },
        body: JSON.stringify(sending_data),
      });

      if (response.ok) {
        // Successful submission logic
        console.log('Data successfully submitted to the backend!');
      } else {
        // Handle errors from the backend
        console.error('Error submitting data to the backend');
      }
    } catch (error) {
      // Handle fetch errors
      console.error('Error:', error);
    }
    console.log('Data successfully submitted to the backend!');
    console.log(userDetails);
  };

  return (
    <div>
      <form class="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-5 group">
          <input
            value={userDetails.userName}
            onChange={handleInputChange}
            type="text"
            name="name"
            id="floating_company"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_company"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            name
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            value={userDetails.UserEmail}
            onChange={handleInputChange}
            type="email"
            name="email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            value={userDetails.student_id}
            name="student_id"
            onChange={handleInputChange}
            id="floating_company"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_company"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Student ID
          </label>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
            value={userDetails.department}
              type="text"
              name="department"
                onChange={handleInputChange}
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Depratment
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              value={userDetails.batch}
                name="batch"
                onChange={handleInputChange}
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Batch
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              value={userDetails.program}
              name="program"
              onChange={handleInputChange}
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Program
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              value={userDetails.section}
              name="section"
              onChange={handleInputChange}
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Section
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="phone"
              value={userDetails.phone}
              onChange={handleInputChange}
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
         
        </div>
        <button
          type="submit"
          class="text-black  hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-2"
        >
          update
        </button>
        
      </form>
    </div>
  );
};

export default FormCheckout;
