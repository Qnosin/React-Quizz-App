import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss files/main.scss'
import flagFirst from './images/france-flag.png';
import flagSecond from './images/poland-flag.png';
import flagThird from './images/germany-flag.png';
import Answers from './answer';

class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : 1,
      point : 0
    }
  }
  render() {
     const questions = [
      {id : 1, question : 'What is the capitol of france?', answer : 'Paris'},
      {id : 2, question : 'What is the capitol of Poland?', answer : 'Warsaw'},
      {id : 3, question : 'What is the capitol of Germany?', answer : 'Berlin'},
   ]   
    return (
      <React.Fragment>
      <section className='App'>
          <article className= 'question-number'>{this.state.counter < 4 ? (this.state.counter) + '/3' : '3/3'}</article>
          <div className = 'Images'>
          { this.state.counter === 1 ? <img className='france' src={flagFirst}></img> : null}
          { this.state.counter === 2 ? <img className='france' src={flagSecond}></img> : null}
          { this.state.counter === 3 ? <img className='france' src={flagThird}></img> : null}
          </div>
          <article className='question'>
          {this.question(questions)}
          </article>
          </section>
          <section className='answers'>
           { this.state.counter === 1 ? <Answers info={questions[0].answer}></Answers> : null}
           { this.state.counter === 2 ? <Answers info={questions[1].answer}></Answers> : null}
           { this.state.counter === 3 ? <Answers info={questions[2].answer}></Answers> : null}
          </section>
      </React.Fragment>
      );
  }
  question = (props) =>{
    if(this.state.counter === 1){
      const elem = <h2>{props[0].question}</h2>
      return elem;
    }else if(this.state.counter === 2){
      const elem = <h2>{props[1].question}</h2>
      return elem;
    }else if(this.state.counter === 3){
      const elem = <h2>{props[2].question}</h2>
      return elem;
    }else if(this.state.counter === 4){
      const elem = <h2>Congratulations You win</h2>
      return (
        <React.Fragment>
        <h2>Congratulations You win</h2>
        <p>Your Score:{this.state.point}</p>
         <p className='Restart' onClick={this.HandleRestart}>Restart</p>
        </React.Fragment>
      )
    }
  }
  componentDidMount = (e) =>{
    document.addEventListener('click',(e)=>{
      const block = e.target;
      if(this.state.counter === 1 &&  block.firstChild.textContent == 'Paris'){
        this.setState({point : this.state.point += 1})
      }else if(this.state.counter === 2 &&  block.firstChild.textContent == 'Warsaw'){
        this.setState({point : this.state.point += 1})
      }else if(this.state.counter === 3 &&  block.firstChild.textContent == 'Berlin'){
        this.setState({point : this.state.point += 1})
      }
      if(block.classList.contains('texts')){
        setTimeout(()=>{
          this.setState({counter : this.state.counter += 1});
        },1000)
      }
    })
  }
  HandleRestart = ()=>{
    window.location.reload();
  }
}

export default App;