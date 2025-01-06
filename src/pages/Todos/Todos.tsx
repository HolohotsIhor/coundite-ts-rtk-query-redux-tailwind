import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { SectionIntro } from '../../components/SectionIntro/SectionIntro';
import { fetchTodos } from '../../store/slices/todo';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { ITodo } from '../../models/todos';
import { Container } from '../../components/Container/Container';

export const Todos = () => {
    const dispatch = useAppDispatch()
    const todos = useAppSelector(state => state.todos.todos)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch]);

    return (
        <>
            <Header />
            <SectionIntro />
            <Container>
                { todos.length > 0 ? (
                    <div className='flex flex-col justify-center items-center'>
                        { todos.map((item: ITodo) => (
                            <div
                                className='flex w-[400px] gap-2 items-keft cursor-pointer'
                                key={item.id}
                            >
                                <input
                                    type='checkbox'
                                    checked={item.completed}
                                />
                                {item.title}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Error...</p>
                )}
            </Container>
        </>
    );
}
