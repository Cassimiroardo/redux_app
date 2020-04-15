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
# Utilizaço dos Hooks
