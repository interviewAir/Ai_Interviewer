import { useState } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../components/MyButton';

import './context.css'

function Context() {
    const [position, setPosition] = useState('');
    const [level, setLevel] = useState('');
    const [type, setType] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {position, level, type}
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
                <input
                    type = "text"
                    required
                    value = {level}
                    onChange = {(e) => setLevel(e.target.value)}
                />
                <label> Behavorial or technical interview?</label>
                <select
                    value = {type}
                    onChange = {(e) => setType(e.target.value)}
                >
                    <option value = "Behavorial">Behavorial</option>
                    <option vlaue = "Technical">Technical</option>
                </select>
                <Link to="/interview">
                  <MyButton text = "Submit" className = "custom-button" />
                </Link>
            </form>
        </div>
    )
}

export default Context;