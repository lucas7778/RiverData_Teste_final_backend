interface AuthToken {
    accessToken: string;
}

export const fetchAuthSession = (): Promise<AuthToken> => {
    return Promise.resolve({ accessToken: "token" });
};