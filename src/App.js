import './App.css';
import Card from './components/Card';
import Herosection from './components/Herosection';
// import Login from './components/Login';
import Main from './components/Main';

import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
// import Signup from './components/Signup';

import Footer from './components/Footer';


function App() {
  


  return (
    <>
    
    <Navbar />
    <Searchbar />
    <Main />
    <Herosection />

      <Card class='' title='Science Vital Vitamin Neutral'
            price='$201' 
            src="https://www.junkybooks.com/administrator/bookimages/62fea89f0c7408.31196739.PNG"
              />
             
      <Card id='book_two' title='POWER ATTRACTION POWER PLAY'
            price='$103'
            src='https://www.junkybooks.com/administrator/bookimages/62fa877a259223.67348900.PNG' />
            
      <Card title='Naturalism Scientific METHODOLOGY' 
            price='$506' 
            src='https://press.uchicago.edu/dam/ucp/books/jacket/978/02/26/29/9780226294834.jpg' />
          
      <Card title='The New phycology of a lost ART' 
            price='$901 '
            src=' https://images.pexels.com/photos/4245012/pexels-photo-4245012.jpeg?auto=compress&cs=tinysrgb&w=600'  />
           
      <Card title='New Approach to Reasoning '
            price='$561.25 ' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSayh2tydu0801WVVrCHYck1zq5FHKdwLMMVw&usqp=CAU ' />
           
      <Card title=' ARTIFICIAL INTELLIGENCE By Sumitha Arora '
            price='$978.212 ' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHZ5qL_qeYiD6_4hFD22n6IIbxtm_1BEz_Q&usqp=CAU' />
      <div>
      
      <Footer />
        </div>      

           

    

    </>
  );
}




export default App;
