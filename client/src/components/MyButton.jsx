import React from 'react';
import Button from '@mui/material/Button';

function MyButton(props) {
    return (
        <Button variant="contained" color="primary"> {props.text} </Button>
    )
}

export default MyButton;