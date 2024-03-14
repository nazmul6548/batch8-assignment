import DesignCard from "../designcard/DesignCard";


function Courses({courses}) {
  
  // console.log(courses);
  return (
    <>
    <h1 className="text-center text-4xl font-bold mt-2">Course Registratioin</h1>
<div className="grid grid-cols-12 gap-10 mt-10">
  
<div className="grid grid-cols-3 gap-16 col-span-9">

{
courses.map(course => (<DesignCard key={courses.id} course={course}></DesignCard>))
}

</div>
<div className="grid col-span-3">
  <div className="">
  <h1 className="pb-4 font-bold">Credit our remming 7 hours</h1>
  <hr />
  <h2 className="font-bold pt-4">Course Name</h2>
  </div>
</div>
</div>
  </>
  );
}

 export default Courses
// export { Courses, DesignCard };