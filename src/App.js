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
      author:'sanjsigan',
      price:'1200',
      forSale:false

    },
    {
      id:2,
      bookName:'Bookname2',
      author:'sanjsigan',
      price:'1200',
      forSale:true

    },
    {
      id:3,
      bookName:'Bookname3',
      author:'sanjsigan',
      price:'1200',
      forSale:true

    },
    {
      id:4,
      bookName:'Bookname4',
      author:'sanjsigan',
      price:'1200',
      forSale:false

    }
  ]) 
  
  //delete 
  const deleteBook=(id)=>{
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
     {Books.length>0 ? <Booklist path="/book-list" onClick={deleteBook} bookList={Books}/>:'Sorry no books are available here'}

    </div>
  
    </Router>
  );
}

export default App;
