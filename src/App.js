import React, { useState } from "react";
import "./App.css";


function App() {
 const [counters, setCounters] = useState([0]) ;
 return (
 <>
 
 <h4 className="titre_compteur" >React Counter V2<span> by Tidjane </span> </h4>   

 <section className="container-fluid">


 <div class="container_compt">
 {counters.map((counter,index) => {
   return(
     <div className="div_contain">

       <span className="titre_compt_int" >Compteur prêt</span>       

       <section className="section_compteur_view">
       <button className="btn_moooin btn" onClick={() =>{
         const newCounter = [...counters] ;
         newCounter[index]-- ;
         setCounters(newCounter);
       }}>  -  </button>

       <div className="counTer">{counter}</div>

       <button className="btn_pluus btn" onClick={() =>{
         const newCounter = [...counters] ;
         newCounter[index]++ ;
         setCounters(newCounter);
       }}> + </button>
       </section>
       
      
     </div>
   )
 })}
  </div>

<div className="section_push_pop">
  <button className="btn_adding" onClick={() => {
        
         let addCounter = [...counters] ;
         addCounter.push(0) 

         if(addCounter.length < 4){
           setCounters(addCounter) ;
         }else{
           alert("Le nombre maximum de Compteur viens d'être dépasser !!! ") ;    
          }

       }}>add Counter</button>

  <button className="btn_deleting" onClick={() => {

           let addCounter = [...counters] ;
               addCounter.pop()
                  setCounters(addCounter) ;

       }}>Delete Counter</button>

</div>

 </section>
 </>

  );
}

export default App;
