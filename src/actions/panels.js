export const addCard = (index, text) => ({
    type: 'ADD_CARD',
    payload: {
        index, 
        text
    }
})

export const addPanel = (name) => ({
    type: 'ADD_PANEL',
    payload: name
})

export const removePanel = (index) => ({
    type: 'REMOVE_PANEL',
    payload: index
})