import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export default function Main() {
  const course = useSelector((state) => state.course);

  return (
    <View style={style.container}>
      <Text style={style.title}>{course.activeModule.title}</Text>
      <Text style={style.text}>{course.activeLesson.name}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: '30%',
    width: '65%',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
