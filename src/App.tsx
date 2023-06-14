import { Welcome } from "./components";
import styles from "./styles/main.module.scss";

function App() {
    return (
        <div className={styles.app}>
            <Welcome />
        </div>
    );
}

export default App;
