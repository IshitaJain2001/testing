 import React from 'react'
 
 function Child({fn}) {
    console.log("child comp re rendered ");
    
    fn()
   return (
     <div>home </div>
   )
 }
 

  export default React.memo(Child)


 // git init 
//  git add . 
// git commit -m ""
//git branch -M main
// remote origin
//git push -u origin main