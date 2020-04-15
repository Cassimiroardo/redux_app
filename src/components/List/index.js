import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

export default function List() {
  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const activeLesson = (module, lesson) => {
    dispatch({
      type: 'ACTIVE_LESSON',
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

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  list: {
    width: '90%',
  },
  title: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 22,
  },
  text: {
    color: 'gray',
    padding: 20,
    width: '100%',
    fontSize: 16,
  },
});
