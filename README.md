# Exemplo de Redux aplicado em React Native utilizando React Hooks

A pasta Store aqui possui toda a lógica do Redux, na pasta Reducers, dentro de store, será criado um arquivo pra cada funcionalidade, aqui temos apenas a funcionalidade de curso, portanto apenas o arquivo course.js, o arquivo index.js dentro de reducers serve para amarrar todas as outras funcionalidades juntas e disponibiliza-las para o arquivo Store/index.js, que é o arquivo que cria os "estados" que precisamos.

>src>store>reducers>index.js
```javascript
import {combineReducers} from 'redux';
//importando a funcionalidade de curso
import course from './course';
//combinando, ou amarrando todos as nossas funcionalidades e exportando
export default combineReducers({
  course,
});

```
>src>store>index.js
```javascript
import {createStore} from 'redux';
//todos as funcionalidades juntas
import rootReducer from './reducers';
//criando o nosso store
const store = createStore(rootReducer);
//exportando
export default store;
```
>src>app.js
```jsx
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <View style={style.content}>
      <StatusBar barStyle="light-content" backgroundColor="green" />
      {/*a tag provider vai compartilhar o nosso store com todos os componentes dentro dela */}
      <Provider store={store}>
        <List />
        <Main />
      </Provider>
    </View>
  );
};
```
# Utilizando dos Hooks
```jsx
import {useSelector, useDispatch} from 'react-redux';

import actions from '../../store/actions/course';

export default function List() {
  // variavel course recebendo o estado inicial do nosso store de course
  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();

  // mandando um module e uma lesson para o state de course para ser atualizado
  const activeLesson = (module, lesson) => {
    dispatch({
      type: actions.ACTIVE_LESSON,
      module,
      lesson,
    });
  };

  return (
    <FlatList
      style={style.list}
      showsVerticalScrollIndicator={true}
      data={course.modules}
      renderItem={({item}) => (
        <View style={style.container}>
          <Text style={style.title}>{item.title}</Text>
          {item.lessons.map((lesson) => (
            <TouchableOpacity
              key={lesson.id}
              onPress={() => activeLesson(item, lesson)}>
              <Text style={style.text}>{lesson.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    />
  );
}
```

