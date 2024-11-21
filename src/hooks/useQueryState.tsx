import React from 'react';
import { Container } from '../components/container/container';

interface UseQueryStateProps {
    isLoading: boolean;
    error: unknown;
    loadingMessage?: string;
    errorMessage?: string;
}

export const useQueryState = ({
    isLoading,
    error,
    loadingMessage = 'Loading...',
    errorMessage = 'Error. Can\'t load data...' }: UseQueryStateProps): React.ReactNode | null => {

    if (isLoading) {
        return (
            <Container classes="flex items-start justify-between">
                <p className="text-red-600">{loadingMessage}</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container classes="flex items-start justify-between">
                <p className="text-red-600">{errorMessage}</p>
            </Container>
        );
    }

    return null;
}
