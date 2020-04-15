const INITIAL_STATE = {
  activeLesson: {name: 'Curso Redux'},
  activeModule: {title: 'react-native'},
  modules: [
    {
      id: '1',
      title: 'Módulo 1',
      lessons: [
        {id: 1, name: 'Aula 1'},
        {id: 2, name: 'Aula 2'},
      ],
    },
    {
      id: '2',
      title: 'Módulo 2',
      lessons: [
        {id: 3, name: 'Aula 3'},
        {id: 4, name: 'Aula 4'},
      ],
    },
    {
      id: '3',
      title: 'Módulo 3',
      lessons: [
        {id: 5, name: 'Aula 5'},
        {id: 6, name: 'Aula 6'},
      ],
    },
    {
      id: '4',
      title: 'Módulo 4',
      lessons: [
        {id: 7, name: 'Aula 7'},
        {id: 8, name: 'Aula 8'},
      ],
    },
  ],
};

import actions from '../actions/course';

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.ACTIVE_LESSON:
      return {
        ...state,
        activeLesson: action.lesson,
        activeModule: action.module,
      };
    default:
      return state;
  }
}
