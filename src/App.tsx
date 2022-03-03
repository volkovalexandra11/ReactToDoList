import React, {useState} from 'react'
import {View, Text, Button, ScrollView, TextInput} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import {observer} from 'mobx-react-lite'
import {nanoid} from 'nanoid'
import TodoStore from './TodoList'

const Todo = observer(() => {
    const [text, setText] = useState('')

    return (
        <ScrollView>
            <TextInput
                style={{height: 40}}
                placeholder="Create your new todo"
                onChangeText={t => setText(t)} defaultValue={text}
            />
            <Button
                title="Add Todo" onPress={
                () => TodoStore.createTodo({id: nanoid(), title: text, completed: false})}
            />
            <Button
                title="Show only done"
                onPress={() => TodoStore.todos.filter(t => t.completed)}
            />
            <Button
                title="Show only undone"
                onPress={() => TodoStore.todos.filter(t => !t.completed)}
            />

            {TodoStore.todos.map(({id, title, completed}) => (
                <View
                    style={{
                        flexDirection: 'row',
                        width: 350,
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                    key={id}
                >
                    <CheckBox value={completed} onValueChange={() => TodoStore.completeTodo(id)}/>
                    <Text>{title}</Text>
                    <Button title="Delete" onPress={() => TodoStore.deleteTodo(id)}/>
                </View>
            ))}
        </ScrollView>
    )
})

export default Todo