import React, {Component} from 'react';
import Navigation from './components/Navigation'
import Form from './components/form/Form'
import './App.css';
import Clarifai from 'clarifai'
import FaceRecognition from './components/faceRecognition/FaceRecognition'

const app = new Clarifai.App({
  apiKey: '378b861234f8416793e39b54bb6d171c'
 });

class App extends Component {

  state = {
    input:'',
    imageUrl:''
  }

  onInputChange = (e) => {
    this.setState({input:e.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
    function(response) {
      console.log(response)
    },
    function(err) {
      // there was an error
    }
  );
  }


  render() {
    return (
      <div className="App">
        <Navigation />
        <Form onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
