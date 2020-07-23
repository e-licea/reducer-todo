export const initialState =  {

    todos: [
        {
          item: "Learn About Reducers",
          completed: false,
          ID: 3892987589
        },
    
        {
          item: "Reducers Todo 2",
          completed: false,
          ID: 3890000000
        }
      ]

};

export const TodoReducer = function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
              ...state,
              todos: state.todos.concat({
                item: action.payload,
                completed: false,
                ID: state.todos.length+1
              })
            };
        case "TOGGLE_COMPLETED":    
            return {
              ...state,
              todos: state.todos.map(todo => {
                if (todo.ID === action.payload) {
                  return {
                    ...todo,
                    completed: !todo.completed
                  };
                } else {
                  return todo;
                }
              })
        }   
        case "CLEAR_COMPLETED":
          return {...state, todos: state.todos.filter(todo => !todo.completed)}     
        default:
            return state
    }
}; 