import React, { useState, useRef, useEffect } from 'react';

import Card from '../Card/Card';
import Button from '../Button/Button';

import './AddForm.scss';
import addSVG from '../../assets/add.svg';
import clearSVG from '../../assets/clear.svg';

const AddForm = ({ isEmptyPanel, addCard, panelIndex, addPanel }) => {

    const [showForm, setShowForm] = useState(false);
    const [value, setValue] = useState('');
    const textareaRef = useRef(null);


    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [showForm])


    const addElement = () => {
        if (!isEmptyPanel) {
            addPanel(value);
        } else {
            addCard(panelIndex, value)
        }
        setValue('');
        setShowForm(false);
    }

    return (
        <React.Fragment>
            {
                showForm
                    ? (
                        <div className="add-form">
                            <div className="add-form__input">
                                <Card>
                                    <textarea
                                        onChange={e => console.log(e.target.value) || setValue(e.target.value)}
                                        value={value}
                                        placeholder={!isEmptyPanel ? "Введите название колонки" : "Введите название карточки"}
                                        ref={textareaRef} rows="5" ></textarea>
                                </Card>
                                <div className="add-form__bottom">
                                    <Button
                                        onClick={addElement}
                                    >{!isEmptyPanel ? "Добавить колонку" : "Добавить карточку"}</Button>
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
                                <img src={addSVG} alt="Add icon" />
                                <span>{!isEmptyPanel ? "Добавить колонку..." : "Добавить карточку..."}</span>
                            </div>
                        </div>
                    )
            }
        </React.Fragment>
    )
}

export default AddForm;