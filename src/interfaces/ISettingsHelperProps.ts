export interface ISettingsHelperProps {
    getString: (key: string) => string;
}

export interface IStrings {
    [key: string]: string;
}