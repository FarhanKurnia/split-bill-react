import { createContext, useReducer } from "react";

// 1️⃣ Definisikan initial state
const initialState = {
  dataPerson: []
};

// 2️⃣ Reducer function untuk mengatur perubahan state
function personReducer(state, action) {
  switch (action.type) {
    case "ADD_PERSON":
      return { 
        ...state, 
        dataPerson: [...state.dataPerson, action.payload] 
      };
    default:
      return state;
  }
}

// 3️⃣ Buat context
export const PersonContext = createContext();

export function PersonProvider({ children }) {
  const [state, dispatch] = useReducer(personReducer, initialState);

  return (
    <PersonContext.Provider value={{ dataPerson: state.dataPerson, dispatch }}>
      {children}
    </PersonContext.Provider>
  );
}
