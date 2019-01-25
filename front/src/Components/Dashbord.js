import React, {Component} from 'react'
import './Css/Dashbord.css'
import axios from 'axios';

class Dashbord extends Component {
    state= {
        mescommandes: []
    }

componentDidMount() {    
    axios.get('http://localhost:3000/Commandes/showOrder')
    .then(res => {
    this.setState({
        mescommandes: res.data
    })
    
    }
)
}

handleClick = (id) => {
    axios.get(`http://localhost:3000/Commandes/accepter/${id}`)

}

handleDelete = (e) =>{
    console.log("VA DANS SUPPRIMER", e);
    axios.post(`http://localhost:3000/Commandes/deleteOrder/${e}`)
    .then(res => {
        this.setState({
            mescommandes: res.data
        })
    } ) 
}
    render(){
    
        if (this.state.mescommandes[0] !== undefined) {
            return(
                <div>
                    <h2>Liste des commandes</h2>
                    <table>
                        <thead>
                        <tr className='headTab'>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Adresse</th>
                            <th>Téléphone</th>
                            <th>Date</th>
                            <th>Heure</th>
                            <th>Valider</th>
                            <th>Refuser</th>
                            <th>Supprimer</th>
                        </tr>
                        </thead>
                        <tbody>

                        {this.state.mescommandes.map(commande => {
                            return (
                                <tr className='headTab'>
                                <td>{commande.name}</td>
                                <td>{commande.firstName}</td>
                                <td>{commande.address}</td>
                                <td>{commande.phone}</td>
                                <td>{commande.deliveryDate}</td>
                                <td>{commande.deliveryHours}</td>
                                <td>
                                    <button onClick={() => this.handleClick(commande.id)}>Accepter</button>
                                </td>
                                <td>
                                    <button>Refuser</button>
                                </td>
                                <td>
                                    <button onClick={() => this.handleDelete(commande.id)}>X</button>
                                </td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>    
            )
        } else return null

    }
}

export default Dashbord;
