import { ChangeEvent, useState } from 'react';

interface IInput {
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const useInput = (initialValue = ''): IInput => {
    const [value, setValue] = useState<string>(initialValue)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

    return {
        value,
        onChange
    }
}
