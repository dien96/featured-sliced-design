export interface User {
    id: string;
    email: string;
}

export interface UserState {
    isLoading: boolean;
    user: User | null;
}