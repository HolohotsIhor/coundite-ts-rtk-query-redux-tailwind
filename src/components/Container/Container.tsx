import React, { FC, PropsWithChildren } from 'react';

interface ContainerProps {
    classes?: string;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, classes }) => {
    return (
        <div className={`max-w-screen-xl mx-auto ${classes}`}>
            { children }
        </div>
    );
}
