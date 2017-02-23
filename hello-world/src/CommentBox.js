import React, { Component } from 'react';
import './App.css';

class Comment extends Component {
  render() {
    return (
      <div className="perro">
        <p>name: {this.props.name}</p>
        <p>age: {this.props.edad}</p>
        <textarea defaultValue={this.props.body}></textarea>
        </div>
    );
  }
}

class CommentForm extends Component {
  render() {
    return (
      <form onSubmit={this._updateList.bind(this)}>
        <input name = "Nombre" ref={(input)=>{this.name=input}}></input>
        <br/>
        <textarea name="Comment" ref={(lupe)=>{this.body=lupe}}></textarea>
        <input type="submit"/>
      </form>
    );
  }

  _updateList(event){
    event.preventDefault()
    let name = this.name
    let body = this.body
    this.props.addComment(
      body.value,name.value
    )
  }
}

class CommentBox extends Component {
  constructor(){
    super()
    this.state = {
      showForm:false,
      lista:[
        {id:1, name:"Hola", edad:29, body:"saco los chispos"},
        {id:2, name:"que", edad:9, body:"oda"},
        {id:3, name:"hace", edad:2, body:"chido"},
      ]
    }
  }

  render() {
    let showForm
    if(!this.state.showForm){
      showForm = <CommentForm addComment={this._addComment.bind(this)}/>
    } else {
      showForm = <em>nel</em>
    }

    return (
      <article className = "contenedor">
        <div className="stateTest">
          <button onClick={this._showForm.bind(this)}>Presiona</button>
          {showForm}
        </div>
        <div className="perros">
          {this._getComments()}
        </div>
      </article>
    );
    }

_addComment(body, name){
  const comment = {
    edad:20,
    body,
    name,
    id:this.state.lista.lenght+1
  }
  this.setState({
    lista:this.state.lista.concat([comment])
  })
}

_showForm(){
    this.setState({showForm:!this.state.showForm})
    return
}

_getComments(){
  return this.state.lista.reverse().map((comment) => {
    return (
      <Comment body={comment.body} name={comment.name} edad={comment.edad} key={comment.id}/>
    );
  });
  }
}

export default CommentBox;
