import React from 'react'
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import Card from '../Card/Card';
import AddForm from '../AddForm/AddForm';
import './Panel.scss';
import removeSvg from '../../assets/remove.svg';



const Panel = ({ cards, title, addCard, panelIndex, addPanel, removePanel }) => {

    const removeElement = () => {
        if (global.confirm('Вы хотите удалить панель?')) {
            removePanel(panelIndex)
        }
    }


    return cards ? (
        <Droppable droppableId={`panel-${panelIndex}`}>
            {
                provided => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="panel">
                        {
                            <div className="panel__title">
                                <span>{title}</span>
                                <img onClick={removeElement} src={removeSvg} alt="Remove icon" />
                            </div>
                        }
                        <div className="panel__body">

                            <div className="panel__items">
                                {

                                    cards.map((card, index) => <Card key={index} cardIndex={index} panelIndex={panelIndex}>{card}</Card>)
                                }
                            </div>
                            {provided.placeholder}
                        </div>
                        <AddForm isEmptyPanel={false} addCard={addCard} panelIndex={panelIndex} addPanel={addPanel} />
                    </div >
                )
            }
        </Droppable>

    ) : (
            <div className="panel">
                <div className="panel__body">
                    <AddForm isEmptyPanel={true} addCard={addCard} panelIndex={panelIndex} addPanel={addPanel} />
                </div>
            </div>
        )
}

Panel.propTypes = {
    cards: PropTypes.node,
    title: PropTypes.string
};


export default Panel;
