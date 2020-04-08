const initialState = [
    {
        title: "План на месяц",
        cards: [
            "Пройти курс по React",
            "Отметить день рождения",
            "Записаться на курсы английского языка, чтобы уехать жить в Лондон",
            "Пройти курс по React",
            "Отметить день рождения",
            "Записаться на курсы английского языка, чтобы уехать жить в Лондон",
            "Пройти курс по React",
            "Отметить день рождения",
            "Записаться на курсы английского языка, чтобы уехать жить в Лондон",
        ]
    },
    {
        title: "План на день",
        cards: [
            "Записаться на курс по React",
            "Забронировать тир на субботу",
            "Накидать тем для статей в блог",
            "Сделать колонку Итоги"
        ]
    }
];

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CARD":
            return state.map((item, index) => {
                if (action.payload.index === index) {
                    return {
                        ...item,
                        cards: [...item.cards, action.payload.text]
                    };
                }
                return item;
            })


        case "ADD_PANEL":
            return [
                ...state,
                {
                    title: action.payload,
                    cards: []
                }
            ];

        case "REMOVE_PANEL":
            return console.log('hihihi') || state.filter(( e , index) => action.payload !== index)

        default:
            return state;
    }
}