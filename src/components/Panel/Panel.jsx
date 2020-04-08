import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Card from '../Card/Card';
import AddForm from '../AddForm/AddForm';
import './Panel.scss';
import removeSvg from '../../assets/remove.svg';



const Panel = ({ cards, title, addCard, panelIndex, addPanel, removePanel  }) => {
    
    const removeElement = () => {
        if (global.confirm('Вы хотите удалить панель?')) {
            removePanel(panelIndex)
        }
    }
    
    

    return (
        <div className="panel">
            {
                title && 
                <div className="panel__title">
                    <span>{title}</span>
                    <img onClick={removeElement} src={removeSvg} alt="Remove icon"/>
                </div>
            }
            <div className="panel__items">
                {
                    cards && 
                    cards.map((card, index) => <Card key={index}>{card}</Card>)
                }
            </div>
            <AddForm isEmptyPanel={cards} addCard={addCard} panelIndex={panelIndex} addPanel={addPanel} />
        </div>
    )
}

Panel.propTypes = {
    cards: PropTypes.node,
    title: PropTypes.string
};


export default Panel;
