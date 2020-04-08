import React, { Fragment } from 'react';
import { connect } from 'react-redux';


import { addCard, addPanel, removePanel } from '../actions/panels';
import Panel from '../components/Panel/Panel';



const Panels = ({ items, addCard, addPanel, removePanel }) => {

    // console.log(items.map((item, index) => console.log(item, index)));

    return <Fragment>
        {items.map((item, index) => <Panel key={index} {...item} addCard={addCard} panelIndex={index} removePanel={removePanel} />)};
             <Panel addCard={addCard} addPanel={addPanel} />
    </Fragment>
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
        // debugger;
        dispatch(removePanel(index))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Panels);
