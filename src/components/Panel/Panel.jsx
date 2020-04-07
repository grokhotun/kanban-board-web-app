import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Card from '../Card/Card';
import AddForm from '../AddForm/AddForm';
import './Panel.scss';


const Panel = ({ cards, title }) => {
    return (
        <div className="panel">
            <div className="panel__title">{title}</div>
            <div className="panel__items">
                {
                    cards && 
                    cards.map((card, index) => <Card key={index}>{card}</Card>)
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
