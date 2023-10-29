import { useState } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../components/MyButton';
import axios from 'axios';

import './context.css'

function Context() {
    const [position, setPosition] = useState('');
    const [level, setLevel] = useState('');
    const [type, setType] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title: position,
            level: level,
            type: type,
        };
        axios.post('http://your-django-api-url/api/job-applications/', formData)
            .then(response => {
                console.log('Form submitted successfully', response.data);
            })
            .catch(error => {
                console.error('Form submission error', error);
            });
    }

    return (
        <div className="create">
            <h2> What position are you applying for? </h2>
            <form onSubmit = {handleSubmit}>
                <label> Title: </label>
                <input
                    type = "text"
                    required
                    value = {position}
                    onChange = {(e) => setPosition(e.target.value)}
                />
                <label> Level: </label>
                <select
                    type = "text"
                    required
                    value = {level}
                    onChange = {(e) => setLevel(e.target.value)}
                >
                    <option value="Intern">Intern</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Fulltime">Full-Time</option>
                </select>
                <label>Interview Type:</label>
                <select
                    value = {type}
                    onChange = {(e) => setType(e.target.value)}
                >
                    <option value = "Behavorial">Behavorial</option>
                    <option value = "Technical">Technical</option>
                    <option value = "Behavioral and Technical">Both</option>
                </select>
                <Link to="/interview">
                  <MyButton text = "Submit" className = "custom-button" />
                </Link>
            </form>
        </div>
    )
}

export default Context;
