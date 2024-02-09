
import React, { useState } from 'react'



import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';






function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })



    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  {/* if(alert !== setAlert){
    showAlert();
  }
  else{
    showAlert(null)
  }*/}

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - DarkMode'

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = 'TextUtils- LightMode'

    }
    setInterval(() => {
      document.title = 'TextUtils'
    }, 1000);


  }



  return (



    <>
      <div className="container1">
        <BrowserRouter>


          <Navbar title="TextUtils" home="Home" aboutText="AboutUs" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container my-3">

            <Routes>

              <Route exact path="/about" element={<About mode={mode} />} >
              </Route>

              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />}>
              </Route>


            </Routes>


          </div>


        </BrowserRouter>
      </div>

    </>



  );
}
export default App;