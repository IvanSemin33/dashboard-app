import { DashboardOutlined, TableOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useStyles } from "./styles";
import { useMemo, useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const Sidebar = () => {
  const styles = useStyles();

  const [activeKey, setActiveKey] = useState("1");

  const items: MenuItem[] = useMemo(
    () => [
      {
        key: "1",
        icon: <DashboardOutlined />,
        label: "Dashboard",
        className: activeKey === "1" ? styles.menuItemActive : styles.menuItem,
      },
      {
        key: "2",
        icon: <TableOutlined />,
        label: "Statistics",
        className: activeKey === "2" ? styles.menuItemActive : styles.menuItem,
      },
    ],
    [activeKey, styles]
  );

  return (
    <Menu
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
      className={styles.menu}
      onSelect={(item) => setActiveKey(item.key)}
    />
  );
};

export default Sidebar;
