import React, { createContext, useReducer } from 'react'

export const AppContext = createContext<AppContextType>({} as AppContextType)

export interface AppStateType {
    selectedInterest:
        | 'social_work'
        | 'music'
        | 'painting'
        | 'pottery'
        | 'cooking'
        | null
}

export interface AppContextType extends AppStateType {
    setInterest: (interest: AppStateType['selectedInterest']) => void
}

function appReducer(
    state: AppStateType,
    action: { type: 'INTEREST'; payload: AppStateType['selectedInterest'] },
): AppStateType {
    switch (action.type) {
        case 'INTEREST':
            return { ...state, selectedInterest: action.payload }
        default:
            return state
    }
}

export function AppState({ children }: { children: React.ReactNode }) {
    const initialState: AppStateType = {
        selectedInterest: null,
    }

    const [state, dispatch] = useReducer(appReducer, initialState)

    function setInterest(interest: AppStateType['selectedInterest']) {
        dispatch({ type: 'INTEREST', payload: interest })
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                setInterest,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
