import React,{useState} from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'


import Navbar from './components/Navbar';
import Header from './components/Header';
import Booklist from './components/Booklist';
import AddBooks from './components/AddBooks';

function App() { 

  const [showBook, setShowbook]=useState(false);

  const[Books, setBook] =useState([
    {
      id:1,
      bookName:'Bookname1',
      author:'Author1',
      price:'1200',
      forSale:false

    },
    
    {
      id:2,
      bookName:'Bookname2',
      author:'Author2',
      price:'1200',
      forSale:true

    },
    {
      id:3,
      bookName:'Bookname3',
      author:'Author3',
      price:'1200',
      forSale:true

    },
    {
      id:4,
      bookName:'Bookname4',
      author:'Author4',
      price:'1200',
      forSale:false

    }
  ]) 
  
  //delete 
  const deleteBook=(id)=>{
    if (window.confirm('Are you sure you wish to delete this item?'))
    setBook(Books.filter((book)=>book.id !==id));
  }

  //addbooks
  const addBook=(book)=>{
      const id =Math.floor(Math.random()*10000)+1

      const newBook ={id, ...book}
      setBook([...Books,newBook]);
  }

  return (
    <Router>
    <div >
     <Navbar  name="SJ-Books shop"/>
     <Header onShowBook={()=>setShowbook(!showBook)} onShow={showBook}  userName='Sanjsigan'/>
     {showBook && <AddBooks onAddbook={addBook}/>}
     <br/>
          <div className="container-fluid">
          {Books.length>0 ? <Booklist path="/book-list" onClickDelete={deleteBook} bookList={Books}/>:"No books available here"}
          </div>
    </div>
  
    </Router>
  );
}

export default App;
