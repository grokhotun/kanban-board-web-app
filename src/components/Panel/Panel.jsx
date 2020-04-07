import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Card from '../Card/Card';
import AddForm from '../AddForm/AddForm';
import './Panel.scss';




const Panel = ({ items }) => {
    return (
        <div className="panel">
            <div className="panel__items">
                {
                    items && 
                    items.map(card => <Card>{card.text}</Card>)
                }
            </div>
            <AddForm />
        </div>
    )
}

Panel.propTypes = {
    text: PropTypes.string.isRequired
};


export default Panel;
