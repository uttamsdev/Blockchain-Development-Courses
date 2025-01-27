import React, { useContext, useEffect } from 'react'
import {MdOutlinePreview} from "react-icons/md";
import { FeedbackContext } from '../../../Context/Context';
const AllCourses = () => {
    const {getCourses, allCourses} = useContext(FeedbackContext);
    const courses = [{username: "uttam", pass:"123"}];
    console.log(allCourses);

    useEffect(()=>{
        getCourses();
    },[])
    return (
        <div className='bg-[#F5F5F5] calc-height rounded-b-3xl'>
        <p className='text-white text-2xl mb-10 font-bold bg-[#039BE5] h-24 flex items-center rounded-t-xl'><MdOutlinePreview className='ml-5 mr-3 w-6 h-6'/>All Courses</p>
       <div>
       <div className="container mx-auto px-4 sm:px-8">
        <div className="py-4">
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
               Faculty
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Course Code
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Course Title
              </th>
            </tr>
          </thead>
          <tbody>
            {
                allCourses?.map(course => <tr>
                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://img.favpng.com/1/20/4/computer-icons-teacher-professor-education-lecturer-png-favpng-1BNAzeu8934LbrrczvkSnnZ2B.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                     {course?.facultyName}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{course?.courseCode}</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{course?.courseTitle}</p>
              </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
</div>
    // </div>
    )
}

export default AllCourses;