
const initialValue = {
    tasks: [
        {
            task: "",
            id: null,
            completed: false
        }
    ]
}

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TASK':
            return { tasks: [...state.tasks, { 
                task: action.payload,
                id: Math.floor(Math.random() * 1000000000),
                completed: false
            }]};
        case 'TOGGLE_COMPLETE':
            return { tasks: state.tasks.map((item) => {
                if (item.id === action.payload) {
                    return {...item, completed: !item.completed};
                } return item;
            })}
        default: 
            return state;
    }
};

export {reducer, initialValue};