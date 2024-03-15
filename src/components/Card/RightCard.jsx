import DesignCard from "../designcard/DesignCard";




function RightCard({button}) {
    console.log(button);
    // const totalPrice = buttons.reduce((total, button) => total + button.price, 0);
    
//    console.log(name);
    // console.log(buttons[0].name);
  return (
    <div className='bg-[#f0f0f0] p-10 m-2'>
     {/* <DesignCard buttons={buttons}></DesignCard> */}
  <h1 className="pb-4 font-bold">Credit our remming 7 hours</h1>
  <div className="divider"></div>
  <h2 className="font-bold pt-4">Course Name</h2>
  <div className="divider"></div>
  <div>
    <h5>Total credit hour : </h5>
  </div>
  <div className="divider"></div> 
  <div>
    { <h5>Total Price :{buttons.length}  </h5> }
  </div> 
  </div>

  )
}

export default RightCard