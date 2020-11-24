import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridtem } from './GifGridtem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages);
    // }, [ category ]);



//   getGifs();

    return (
        
     <>
         <h3  className="animate__animated animate__heartBeat"> { category } </h3>

         { loading && <p>loading</p> }


         <div className="card-grid">
                 {
                     
                    images.map( img =>(
                         <GifGridtem  
                             key= {img.id } 
                             { ...img }
                          />
                     ))
                 }
           
             </div> 
        
     </>
   )


 }



   
  {/* una forma de hacerlo 
                      images.map(img =>(

                        <li key={img.id}>{ img.title } </li>
                     ))
                     
                      images.map( ( {id, title }) =>(
                         <li key={id}> { title } </li>
                     ))  */}