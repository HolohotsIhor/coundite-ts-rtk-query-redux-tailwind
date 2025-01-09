import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { ITodo } from '../../models/todos';
import { Container } from '../../components/Container/Container';
import { useQueryState } from '../../hooks/useQueryState';
import { deleteTodo, fetchTodos, updateTodoItem } from '../../store/api/todos';

export const Todos = () => {
    const dispatch = useAppDispatch()
    const { todos, error, loading: isLoading} = useAppSelector(state => state.todos)
    const todoOnPage = 15

    useEffect(() => {
        dispatch(fetchTodos(todoOnPage))
    }, [dispatch]);

    const queryState = useQueryState({
        isLoading,
        error,
        loadingMessage: 'Todos loading...',
        errorMessage: "Error. Todo list can't load...",
    });

    return (
        <>
            <Header />
            <Container>
                { queryState || (
                    todos.length > 0 ? (
                        <div className='flex flex-col justify-center items-center'>
                            { todos.map((item: ITodo) => (
                                <div
                                    className='flex w-[400px] gap-2 items-keft cursor-pointer'
                                    key={item.id}
                                >
                                    <input
                                        type='checkbox'
                                        checked={item.completed}
                                        onClick={() => dispatch(updateTodoItem(item.id))}
                                        className='cursor-pointer'
                                    />
                                    {item.title}
                                    <span
                                        className='text-red-500 hover:text-red-800 transition-all'
                                        onClick={() => dispatch(deleteTodo(item.id))}
                                        tabIndex={0}
                                    >
                                        X</span>
                                </div>
                            ))}
                        </div>
                ) : (
                    <p>No todos in list.</p>
                ))}
            </Container>
        </>
    );
}
