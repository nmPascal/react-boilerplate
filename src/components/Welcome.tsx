import { FC } from "react";
import { SettingsHelper } from "../helpers";
import styles from "../styles/main.module.scss";

export const Welcome: FC = (): JSX.Element => {
    return (
        <div className={styles.welcome}>
            {[...Array(80).keys()].map((index) => (
                <div key={index} className={`${styles.welcome__star}`}></div>
            ))}
            <div className={styles.welcome__astronaut}>
                <div className={styles.welcome__astronaut__head}></div>
                <div className={styles.welcome__astronaut__arm}></div>
                <div className={styles.welcome__astronaut__arm}></div>
                <div className={styles.welcome__astronaut__body}>
                    <div className={styles.welcome__astronaut__body__panel}></div>
                </div>
                <div className={styles.welcome__astronaut__leg}></div>
                <div className={styles.welcome__astronaut__leg}></div>
                <div className={styles.welcome__astronaut__schoolbag}></div>
            </div>
            <div className={styles.welcome__text}>
                <h1>{SettingsHelper.getString("welcome_title")}</h1>
                <h3>{SettingsHelper.getString("welcome_subtitle")}</h3>
            </div>
        </div>
    );
};
