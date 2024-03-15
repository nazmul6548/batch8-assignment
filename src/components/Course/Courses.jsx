import React, { useState } from 'react';

// import RightCard from "../Card/RightCard";
import DesignCard from "../designcard/DesignCard";



function Courses({courses}) {
  const [buttons,setButton] = useState([]);


  const handlebutton =course => {
    // console.log("mis");
    const newButton = [...buttons,course]
    // console.log(course);
setButton(newButton)

console.log(button);
  }
  
  // console.log(courses);
  return (
    <>
    <h1 className="text-center text-4xl font-bold mt-2">Course Registratioin</h1>
<div className="grid grid-cols-12 gap-10 mt-10">
  
<div className="grid grid-cols-3 gap-16 col-span-9">

{
courses.map(course => (<DesignCard key={courses.id} course={course} handlebutton={handlebutton}></DesignCard>))
}

</div>
<div className="grid col-span-3">
  
 <DesignCard buttons={buttons}></DesignCard>
  
</div>
</div>
  </>
  );
}

 export default Courses
// export { Courses, DesignCard };
// export { Courses, DesignCard };
// Courses.prototype ={
//   course : prototype.object.isRequired,
//   courses :prototype.func
// }