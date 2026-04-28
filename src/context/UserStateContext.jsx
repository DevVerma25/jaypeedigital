import { createContext, useContext, useState } from 'react';

const UserStateContext = createContext();

export function UserStateProvider({ children }) {
    // 'guest' | 'student' | 'faculty'
    const [userState, setUserState] = useState('guest');

    const isLoggedIn = userState !== 'guest';

    const currentUser = userState === 'faculty'
        ? { name: 'Dr. Sharma', role: 'Faculty', institution: 'AIIMS New Delhi', initials: 'DS' }
        : { name: 'Rahul', role: 'Student', institution: 'AIIMS New Delhi', initials: 'R' };

    return (
        <UserStateContext.Provider value={{ userState, setUserState, isLoggedIn, currentUser }}>
            {children}
        </UserStateContext.Provider>
    );
}

export function useUserState() {
    return useContext(UserStateContext);
}
