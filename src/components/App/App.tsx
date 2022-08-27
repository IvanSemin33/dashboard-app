import { Layout } from "antd";
import Header from "../Header";
import Logo from "../Logo";
import PageContent from "../PageContent";
import Sidebar from "../Sidebar";
import { useStyles } from "./styles";

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
        <PageContent />
      </Layout>
    </Layout>
  );
};

export default App;
