import React from 'react';

import { connect } from 'react-redux';
import Panel from '../components/Panel/Panel';

const Panels = ({items}) => {
    return items.map((item, index)=> <Panel key={index} title={item.title} cards={item.cards}/>);     
}


const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}



export default connect((state) => ({ items: state.items }))(Panels);
