import React from 'react';
import './ImageLinkForm.css';
import Logo from '../Logo/Logo'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <Logo></Logo>
            <p className='try-it'>
            {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='center submit'>
                    <input className='input' type='text' placeholder='Insert picture URL here' onChange={onInputChange}/>
                    <button
                        className='detect'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
    </div>
  );
}

export default ImageLinkForm;
