import React, {Component} from 'react';
import Navigation from './components/Navigation'
import Form from './components/form/Form'
import './App.css';
import Clarifai from 'clarifai'
import FaceRecognition from './components/faceRecognition/FaceRecognition'


// https://samples.clarifai.com/celebrity.jpeg

const app = new Clarifai.App({
  apiKey: '378b861234f8416793e39b54bb6d171c'
 });

class App extends Component {

  state = {
    input:'',
    imageUrl:undefined,
    name:'',
    percentage:''
  }

  showResult = (response) => {
    console.log('hit!!!')
    this.setState({name:response.outputs[0].data.regions[0].data.concepts[0].name})
    console.log(this.state.name)
    const percentage = (response.outputs[0].data.regions[0].data.concepts[0].value)*100
   this.setState({percentage})
   
  }

  onInputChange = (e) => {
    this.setState({input:e.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.
      predict(
        Clarifai.CELEBRITY_MODEL, 
        this.state.input)
      .then(response => this.showResult(response))
      .catch(err => console.log(err));
  }

    

  render() {
    return (
      <div className="App">
        <Navigation />
        <Form onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        {this.state.imageUrl === undefined ? '': 
        <FaceRecognition imageUrl={this.state.imageUrl} name={this.state.name} percentage={this.state.percentage}/>}
        
      </div>
    );
  }
}

export default App;
