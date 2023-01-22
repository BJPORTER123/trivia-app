import './App.css';
import MainBox from './container/Main';

function App() {
  const categories =[
    {name : "All", url : "https://opentdb.com/api.php?amount=10&type=multiple"},
    {name : "General Knowledge", url : "https://opentdb.com/api.php?amount=10&category=9&type=multiple"},
    {name : "Film", url : "https://opentdb.com/api.php?amount=10&category=11&type=multiple"},
    {name : "Video Games", url : "https://opentdb.com/api.php?amount=10&category=15&type=multiple"},
    {name : "Science & Nature", url : "https://opentdb.com/api.php?amount=10&category=17&type=multiple"},
    {name : "Animal", url : "https://opentdb.com/api.php?amount=10&category=27&type=multiple"},
    {name : "Geography", url : "https://opentdb.com/api.php?amount=10&category=22&type=multiple"},
    {name : "Computers", url : "https://opentdb.com/api.php?amount=10&category=18"}
  ]
  return (
    <div className="App">
      <MainBox categories={categories}/>
    </div>
  );
}

export default App;
  


