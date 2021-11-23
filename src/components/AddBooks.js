import React,{useState} from 'react'

function AddBooks({onAddbook}) { 
const [bookName, setBookname]=useState('');
const [authorName, setAuthorname]=useState('');
const [price, setPrice]=useState('');
const[forSale, setForsale]=useState(false);

const onSubmit=(e)=>{
    e.preventDefault();

    if(!bookName){
         alert('please enter book name')
         return;
    } 

    if(!authorName){
         alert('please enter author name');
         return;
    }
    if(!price){
         alert('please enter price');
         return;
    }
    if(!forSale){
         alert('please eneter sale or not');
         return;
    }

    onAddbook({bookName,authorName,price,forSale})
}

    return (
       <form className="container col-lg-4" onSubmit={onSubmit}>
           <div className="form-group">
                <label>Book Name:</label>
                <input value={bookName} onChange={(e)=> setBookname(e.target.value)} className="form-control" type="text" placeholder="Add book name"/>
           </div> 

           <div className="form-group">
                <label>Author Name:</label>
                <input value={authorName} onChange={(e)=>setAuthorname(e.target.value)} className="form-control" type="text" placeholder="Add author name"/>
           </div> 

           <div className="form-group">
                <label>Price:</label>
                <input value={price} onChange={(e)=>setPrice(e.target.value)} className="form-control" type="text" placeholder="Add price"/>
           </div>
           <div className="form-group">
                <label>For available:</label>
                <input value={forSale} onChange={(e)=>setForsale(e.target.checked)} className="form-control form-check-input" type="checkbox" placeholder="Add price"/>
           </div>
            <br/>
            <input className="form-control btn btn-primary" type="submit" value="Add details" />
       </form>
    )
}

export default AddBooks
