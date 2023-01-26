import { useState } from 'react';
import './App.css';
import MyForm from './component/myForm'
import MyList from './component/myList';

function App() {
  const [results, setResults] = useState([])

  function submitForm(data){
    setResults([data,...results])
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='first-box'>
          <div className='titre'>
          <h1>Formulaire</h1>
        </div>
        <div className='form'>
        <MyForm onSave={submitForm}/>
        </div>
        </div>
      </header>
      <MyList data={results}/>
    </div>
  );
}

export default App;
