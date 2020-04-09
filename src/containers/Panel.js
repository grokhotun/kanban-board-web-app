import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';


import { addCard, addPanel, removePanel, onDragEnd } from '../actions/panels';
import Panel from '../components/Panel/Panel';



const Panels = ({ items, addCard, addPanel, removePanel, onDragEnd }) => {

    return (
        <Fragment>
            <DragDropContext onDragEnd={result => onDragEnd(result)}>
                {
                    items.map((item, index) => <Panel {...item} key={index} addCard={addCard} panelIndex={index} removePanel={removePanel} />)
                }
            </DragDropContext>
            <Panel {...items} addCard={addCard} addPanel={addPanel} />
        </Fragment>
    );
}



const mapStateToProps = (panels) => {   
    return {
        items: panels
    }
}

const mapDispatchToProps = dispatch => ({
    addCard: (index, text) => {
        dispatch(addCard(index, text))
    },
    addPanel: (name) => {
        dispatch(addPanel(name))
    },
    removePanel: (index) => {
        dispatch(removePanel(index))
    },
    onDragEnd: (result) => {
        dispatch(onDragEnd(result))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Panels);
