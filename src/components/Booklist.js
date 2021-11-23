import React from 'react'
import image from '../accets/Book.jpeg'
import { FaEraser,FaCheckDouble } from "react-icons/fa";

function Booklist({bookList,onClick}) {
    return (
        <div className="container-fluid col-11 ">
            <div className="row">
            {bookList.map((Books)=>( 
              
                  <div className="card" style={{width:'18rem', marginBottom:'5px'}}>
                  <img className="card-img-top" src={image} alt="Card image cap"  style={{width:'18rem'}}/>
                  <div className="card-body">
                  <h5 className="card-title">{Books.bookName}</h5>
                  <p className="card-text"><span style={{fontWeight:'bold'}}>Author:</span>{Books.author}</p>
                  <p className="card-text"><span style={{fontWeight:'bold'}}>Price:</span>{Books.price}</p>
                  <p className="card-text"><span style={{fontWeight:'bold'}}>For available:</span><FaCheckDouble style={{color:Books.forSale?'red':'green',fontSize:'20px'}}/></p>
                  <FaEraser style={{color:'red', cursor:'pointer'}} onClick={()=>onClick(Books.id)}/>
                 
               </div>
              </div>
            ))}
          </div>
      </div>
    )
}

export default Booklist
