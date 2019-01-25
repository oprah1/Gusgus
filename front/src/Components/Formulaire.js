import React, {Component} from 'react';
import axios from 'axios';
import './Css/Formulaires.css'



class Formulaire extends Component {

  handleSubmit= (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/Commandes/addOrder',{
      name: e.target.name.value,
      firstName: e.target.firstName.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      deliveryDate: e.target.deliveryDate.value,
      deliveryHours: e.target.deliveryHours.value,
      email: e.target.email.value
    })
    .then((response) => {
      if(response.status === 200) {
        alert('message envoyer');
      }else alert('message failed')
  
    })
  }
  render (){
    return (
      <div>
        <h1>Demande d'essayage</h1>
          <form onSubmit={this.handleSubmit}> 
            <div className="Card">
              <input className="styleForm"
                name='name'
                placeholder='Nom'
                type='text'
              />
              <input className="styleForm"
                name='firstName'
                placeholder='Prénom'
                type='text'
              />
              <input className="styleForm"
                name='address'
                placeholder='Adresse'
                type='text'
              />
              <input className="styleForm"
                name='phone'
                placeholder='Téléphone'
                type='text'
              />
              <input className="styleForm"
                name='deliveryDate'
                type='Date'
              />
              <input className="styleForm"
                name='deliveryHours'
                type='Time'
              />
              <input className="styleForm"
                name='email'
                placeholder='email'
                type='email'
              />
              <button type="submit">Soumettre</button>
            </div>
          </form>
      </div>  
    )
  }
}

export default Formulaire;
