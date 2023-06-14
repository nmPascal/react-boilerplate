import { ISettingsHelperProps } from "../interfaces";
import { strings } from "../utils";

export const SettingsHelper: ISettingsHelperProps = {
    getString: (key: string): string => {
        return strings[key];
    }
};