import styles from "./App.module.scss";
import HeaderComponent from "./HeaderComponent";

export default function App() {
  const headerText = "This is a header";

  return (
    <>
      <h1 className={headerText.length > 5 ? styles.header : null}>
        {headerText}
      </h1>
      <HeaderComponent />
    </>
  );
}
