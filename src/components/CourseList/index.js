import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addCourseAction(title) {
  return { type: 'ADD_COURSE', title };
}

function CourseList() {

  /*
  //Forma de monitorar a atualizaçõ vinculado a uma variável.
  const qty = 2;
  const courses = useSelector(
    state => state.data.slice(0,2), 
    [qty]
  );
  */

  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  function addCourse() {
    //dispatch({ type: 'ADD_COURSE', title: 'GraphQL' });
    dispatch(addCourseAction('GraphQL'));
  }

  return(
    <>
      <ul>
        {courses.map(course => <li key={course}>{course}</li>)}
      </ul>
      <button type='button' onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  );
}

export default CourseList;