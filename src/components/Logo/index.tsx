import { useStyles } from "./styles";
import logoImg from "../../assets/images/logo.svg";

const Logo = () => {
  const styles = useStyles();

  return (
    <div className={styles.logo}>
      <img src={logoImg} alt="logo" className={styles.logoImg} />
    </div>
  );
};

export default Logo;
