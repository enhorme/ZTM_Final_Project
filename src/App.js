import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css'
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';




const app = new Clarifai.App({
  apiKey: '49f7464fac52423db4bb3b5894c4aa29'
})


const particleOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

export class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: ''
    };
  }

  onInputChange = (e) => {
    this.setState({input: e.target.value})
  };

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    console.log(this.state.imageUrl)
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
      )
      .then(
        function (response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function (err) {
          console.log(err);
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particle" params={particleOptions} />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
         <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App

