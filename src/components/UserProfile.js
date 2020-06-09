import React, { Component } from 'react';
import '../UserProfile.css';


export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            gender: '',
            age: '',
            birthday: '',
            image: '',
            location: '',
            username: '',
            password: ''
        }
    }
    
    componentDidMount() {
        this.getNewProfile();
    }

    getNewProfile = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then(r => r.json())
            .then(r => {
                const results = r.results[0];
                this.setState({
                    firstName: results.name.first,
                    lastName: results.name.last,
                    title: results.name.title,
                    gender: results.gender,
                    age: results.dob.age,
                    image: results.picture.large,
                    username: results.login.username,
                    password: results.login.password,
                    location: `${results.location.city}, ${results.location.country}`
                }, () => console.log(this.state))
            })
    }

    render() {
        return (
            <div className="UserCard">
                <img style={{margin: "10px"}} src={this.state.image} alt='' />
                <p><b>{`${this.state.title} ${this.state.firstName} ${this.state.lastName}`}</b></p>
                <p>{`Username: ${this.state.username}`}</p>
                <p>{`Password: ${this.state.password}`}</p>
                <p><b>DONT STEAL ^^^^</b></p>
                <p>{this.state.location}</p>
                <ul>
                    <li>{this.state.gender}</li>
                    <li>{`${this.state.age} years old`}</li>
                </ul>
                <button style={{width: "75%", margin: "10px"}} onClick={this.getNewProfile}>Get New Profile</button>
            </div>
        )
    }
}