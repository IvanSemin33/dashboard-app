import { useCallback, useEffect, useMemo, useState } from "react";
import { DashboardOutlined, TableOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import type { MenuProps } from "antd";

import { useStyles } from "./styles";

type MenuItem = Required<MenuProps>["items"][number];

const Sidebar = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeKey, setActiveKey] = useState(location.pathname.split("/")[1]);

  useEffect(() => {
    setActiveKey(location.pathname.split("/")[1]);
  }, [location.pathname]);

  const onSelect = useCallback(
    (key: string) => {
      navigate(key, { replace: true });
    },
    [navigate]
  );

  const items: MenuItem[] = useMemo(
    () => [
      {
        key: "dashboard",
        icon: <DashboardOutlined />,
        label: "Dashboard",
        className:
          activeKey === "dashboard" ? styles.menuItemActive : styles.menuItem,
      },
      {
        key: "statistics",
        icon: <TableOutlined />,
        label: "Statistics",
        className:
          activeKey === "statistics" ? styles.menuItemActive : styles.menuItem,
      },
    ],
    [activeKey, styles]
  );

  return (
    <Menu
      activeKey={activeKey}
      mode="inline"
      items={items}
      className={styles.sidebar}
      onSelect={({ key }) => onSelect(key)}
    />
  );
};

export default Sidebar;
