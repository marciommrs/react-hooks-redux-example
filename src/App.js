import React from 'react';
import { Provider } from 'react-redux'

//Disponibilizar o store de forma global na aplicação.
import store from './store';

import CourseList from './components/CourseList';

function App() {
  return (
    //Todos os elementos que estão dentro do provider tem acesso ao store.
    <Provider store={store}>
      <CourseList />
    </Provider>
  );
}

export default App;
