import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss files/main.scss'
import {infoFromAnswers} from './App.js';

class answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.text = React.createRef()
    }
    render() {
        const info = this.props.info;
        return (
            <React.Fragment>
                {this.componentDidMount(info,'Berlin')}
                {this.componentDidMount(info,'Califronia')}
                {this.componentDidMount(info,'Paris')}
                {this.componentDidMount(info,'Warsaw')}
            </React.Fragment>
          );
    }
    componentDidMount = (props,text) =>{
        if(props === 'Paris'){
        return (
        <section ref={this.text} className='texts' onClick={ (e) => this.clickHandle(text,e)}>
        <p>{text}</p>
        </section>
        )
        }else if(props === 'Warsaw'){
            return(
              <section ref={this.text} className='texts' onClick={ (e) => this.clickHandleWarsaw(text,e)}>
              <p>{text}</p>
              </section>
            )
        }else if(props === 'Berlin'){
            return(
              <section ref={this.text} className='texts' onClick={ (e) => this.clickHandleBerlin(text,e)}>
              <p>{text}</p>
              </section>
            )
        }
    }
    clickHandle(props,e){
        const target = e.target;
        if(props === 'Paris'){
            target.style.backgroundColor = 'green';
        }else{
            target.style.backgroundColor = 'red';
        }
    }
     clickHandleWarsaw(props,e){
        const target = e.target;
        if(props === 'Warsaw'){
            target.style.backgroundColor = 'green';
        }else{
            target.style.backgroundColor = 'red';
        }
    }
    clickHandleBerlin(props,e){
        const target = e.target;
        target.style.color = 'black'
     
        if(props === 'Berlin'){
            target.style.backgroundColor = 'green';
        }else{
            target.style.backgroundColor = 'red';
         }
        
    }
}
 
export default answer;