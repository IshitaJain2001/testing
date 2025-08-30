 import React from 'react'
 
 function Child({fn}) {
    console.log("child comp re rendered ");
    
    fn()
   return (
     <div>Child</div>
   )
 }
 

  export default React.memo(Child)