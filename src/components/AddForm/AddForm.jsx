import React, { useState, useRef, useEffect } from 'react';

import Card from '../Card/Card';
import Button from '../Button/Button';

import './AddForm.scss';
import addSVG from '../../assets/add.svg';
import clearSVG from '../../assets/clear.svg';

const AddForm = () => {

    const [showForm, setShowForm] = useState(false);
    const textareaRef = useRef(null);

    useEffect( () => {
        if(textareaRef.current) {    
            textareaRef.current.focus();
        }
    },[showForm])

    return (
        <React.Fragment>
            {
                showForm
                    ? (
                        <div className="add-form">
                            <div className="add-form__input">
                                <Card>
                                <textarea 
                                    placeholder="Введите название карточки"
                                    ref={textareaRef} rows="5" ></textarea>
                                </Card>
                                <div className="add-form__bottom">
                                    <Button>Добавить карточку</Button>
                                    <img
                                        onClick={() => { setShowForm(false) }}
                                        src={clearSVG} alt="Clear icon" />
                                </div>
                            </div>
                        </div>
                    )
                    : (
                        <div
                            onClick={() => { setShowForm(true) }}
                            className="panel__bottom">
                            <div className="panel__bottom-add-btn">
                                <img
                                    src={addSVG} alt="Add icon" />
                                <span>Добавить карточку...</span>
                            </div>
                        </div>
                    )
            }
        </React.Fragment>
    )
}

export default AddForm;