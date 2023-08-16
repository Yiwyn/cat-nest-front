import type {MenuProps} from "antd";

const items: MenuProps['items'] = [
    {
        label: '🏠首页',
        key: 'nest',
        // icon: <MailOutlined/>,
    },
    {
        label: '🐱猫窝',
        key: 'my',
        // icon: <AppstoreOutlined/>,
        disabled: false,
    }
]

export {
    items
}