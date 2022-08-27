import { Layout } from "antd";
import Header from "../Header";
import Logo from "../Logo";
import Sidebar from "../Sidebar";
import { useStyles } from "./styles";
import PageRouter from "../PageRouter";

const { Sider } = Layout;

const App = () => {
  const styles = useStyles();

  return (
    <Layout>
      <Sider collapsed={false} className={styles.sider} width={208}>
        <Logo />
        <Sidebar />
      </Sider>
      <Layout className={styles.rightContainer}>
        <Header />
        <PageRouter />
      </Layout>
    </Layout>
  );
};

export default App;
