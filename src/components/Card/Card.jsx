import React from 'react'
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import './Card.scss';


const Card = ({ children, cardIndex, panelIndex }) => {
    return typeof cardIndex !== "undefined" ? (
        <Draggable key={cardIndex} draggableId={`card-${cardIndex}-${panelIndex}`} index={cardIndex}>
            {
                (provided) => {
                    return (
                        <div className="card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            {children}
                        </div>
                    )
                }
            }
        </Draggable>
    ): (
        <div className="card">{children}</div>
      );
}

Card.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};


export default Card;
