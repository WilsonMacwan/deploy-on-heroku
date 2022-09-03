import React from 'react';
import './App.css';

function App() {
  React.useEffect(()=>{
    console.log("Hellooo......")
  }, [])
  return (
    <div className="App">
      <h2>First App Deployed on Heroku</h2>
    </div>
  );
}

export default App;
