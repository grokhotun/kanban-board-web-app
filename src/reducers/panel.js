import { onDragEnd } from "../helpers/onDragEnd";

const initialState = [
    {
        title: "План на месяц",
        cards: [
            "Пройти курс по React",
            "Отметить день рождения",
            "Купить машину",
            "Изучить основый thunk",
            "Подать заявление на курсы js",
            "Записаться на курсы английского языка, чтобы уехать жить в Лондон",
        ]
    },
    {
        title: "План на день",
        cards: [
            "Купить молоко",
            "Купить сыр и хлеб",
            "Забронировать тир на субботу",
            "Позвонить в поликлинику",
        ]
    },
    {
        title: "Гитара",
        cards: [
            "Выучить аккорды",
            "Научиться зажимать  барэ",
            "Научиться играть соло",
            "Научиться делать перкуссию",
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

        case "DRAG_DROP": {
            return onDragEnd(action.payload, state);
            
        }

        case "REMOVE_PANEL":
            return state.filter(( e , index) => action.payload !== index)
            // console.log(state.filter(( e , index) => action.payload !== index));

        default:
            return state;
    }
}