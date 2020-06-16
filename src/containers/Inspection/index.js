import React from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import Sidebar from '../../components/Sidebar';
import { Layout, Card, Col, Row, Select, Alert, Table, Switch,  Radio, Form, Breadcrumb, Tag, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;
const { Meta } = Card;
const { Search } = Input;

const gridStyle = {
    width: '100%',
    textAlign: 'center',
};

const columns = [
    {
        title: 'Area',
        dataIndex: 'area',
        // onFilter: (value, record) => record.area.indexOf(value) === 0,
        sorter: (a, b) => a.area.length - b.area.length,
        sortDirections: ['descend','ascend'],
    },
    {
        title: 'Team',
        dataIndex: 'team',
        // sorter: (a, b) => a.team.length - b.team.length,
        // sortDirections: ['descend','ascend'],
        filters: [
            {
                text: 'Team 1',
                value: 'Team 1',
            },
            {
                text: 'Team 2',
                value: 'Team 2',
            },
            {
                text: 'Team 3',
                value: 'Team 3',
            },
            {
                text: 'Team 5',
                value: 'Team 5',
            },
            {
                text: 'Team 7',
                value: 'Team 7',
            },
        ],
        onFilter: (value, record) => record.team.indexOf(value) === 0,
    },
    {
        title: 'Creator',
        dataIndex: 'creator',
        sorter: (a, b) => a.creator.length - b.creator.length,
        sortDirections: ['descend','ascend'],
    },
    {
        title: 'Created at',
        dataIndex: 'createdAt',
        // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
        // sortDirections: ['descend'],
    },
    {
        title: 'Priority',
        dataIndex: 'priority',
        filters: [
            {
                text: 'Critical',
                value: 'critical',
            },
            {
                text: 'High',
                value: 'high',
            },
            {
                text: 'Normal',
                value: 'normal',
            },
            {
                text: 'Low',
                value: 'low',
            },
        ],
        onFilter: (value, record) => record.priority.indexOf(value) === 0,
        sorter: (a, b) => a.priority.length - b.priority.length,
        sortDirections: ['descend','ascend'],
        defaultSortOrder: 'descend',
        render: priority => {
            let color = '';
            if (priority === 'critical') {
                color = '#f50';
            }
            if (priority === 'high') {
                color = '#ff9800';
            }
            if (priority === 'normal') {
                color = '#2db7f5';
            }
            if (priority === 'low') {
                color = '#b0bec5';
            }
            return (
                <Tag color={color}>
                    {priority.toUpperCase()}
                </Tag>
            );
        },
    },
    {
        title: 'Status',
        dataIndex: 'status',
        filters: [
            {
                text: 'Đang triển khai',
                value: 'on progress',
            },
            {
                text: 'Chậm tiến độ',
                value: 'Chậm tiến độ',
            },
            {
                text: 'Quá hạn',
                value: 'Quá hạn',
            },
            {
                text: 'Chờ đội đảm nhận',
                value: 'Chờ đội đảm nhận',
            },
        ],
        onFilter: (value, record) => record.status.indexOf(value) === 0,
        sorter: (a, b) => a.status.length - b.status.length,
        sortDirections: ['descend','ascend'],
        render: status => {
            let color = '';
            if (status === 'Đang triển khai') {
                color = '#87d068';
            }
            if (status === 'Chậm tiến độ') {
                color = '#ff9800';
            }
            if (status === 'Quá hạn') {
                color = '#f50';
            }
            if (status === 'Chờ đội đảm nhận') {
                color = '#b0bec5';
            }
            if (status === 'Đã hoàn thành') {
                color = '#2db7f5';
            }

            return (
                <Tag color={color}>
                    {status.toUpperCase()}
                </Tag>
            );
        },
    },
    {
        title: 'Progress',
        dataIndex: 'progress',
        // sorter: true,
    },
    {
        title: 'Address',
        // sorter: true,
        dataIndex: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <span>
                <a href='/alertdetail' style={{ marginRight: 16 }}>View</a>
                <a href='/alertdetail' style={{ marginRight: 16 }}>Edit</a>
                <a style={{ marginRight: 16 }}>Delete</a>
      </span>
        ),
    },
];

const data = [
    {
        key: '1',
        area: 'Trạm Bách Khoa',
        team: 'Team 1' ,
        creator: 'Auto',
        createdAt: '2020-12-24 23:12:00',
        priority: 'critical',
        progress: '20%',
        address: 'Đại Cồ Việt - Hai Bà Trưng',
        status: 'Chậm tiến độ',
    },
    {
        key: '2',
        area: 'Trạm Cầu Giấy',
        team: 'Team 5' ,
        creator: 'Trần Văn Cường',
        createdAt: '2016-12-24 23:12:00',
        priority: 'high',
        progress: '50%',
        address: 'Phạm Hùng - Cầu Giấy',
        status: 'Đang triển khai',
    },
    {
        key: '3',
        area: 'Trạm Bắc Từ Liêm',
        team: 'Team 7' ,
        creator: 'Lê Văn A',
        createdAt: '2020-10-23 13:22:00',
        priority: 'normal',
        progress: '90%',
        address: 'Trần Phú - Bắc Từ Liêm',
        status: 'Đang triển khai',
    },
    {
        key: '4',
        area: 'Trạm Nam Từ Liêm',
        team: 'Team 1' ,
        creator: 'Auto',
        createdAt: '2020-04-14 20:02:00',
        priority: 'low',
        progress: '100%',
        address: '20 Phạm Hùng - Nam Từ Liêm',
        status: 'Đã hoàn thành',
    },
    {
        key: '5',
        area: 'Trạm Cầu Diễn',
        team: 'Team 3' ,
        creator: 'Nguyen Dinh Minh',
        createdAt: '2020-01-25 13:12:00',
        priority: 'normal',
        progress: '30%',
        address: 'Cầu Diễn',
        status: 'Đang triển khai',
    },
    {
        key: '6',
        area: 'Trạm Thanh Xuân',
        team: 'Team 2' ,
        creator: 'Auto',
        createdAt: '2020-02-10 10:12:00',
        priority: 'low',
        progress: '20%',
        address: 'Nguyễn Trãi - Thanh Xuân',
        status: 'Quá hạn',
    },
    {
        key: '7',
        area: 'Trạm Hà Đông',
        team: 'Team 1' ,
        creator: 'Auto',
        createdAt: '2020-02-15 16:12:00',
        priority: 'low',
        progress: '0%',
        address: 'Đại Mỗ - Hà Đông',
        status: 'Chờ đội đảm nhận',
    },
];

const expandable = { expandedRowRender: record => <p>{record.description}</p> };
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const pagination = { position: 'bottom' };

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}

class Inspection extends React.Component {
    state = {
        bordered: true,
        loading: false,
        pagination,
        size: 'middle',
        expandable: undefined,
        title: undefined,
        showHeader,
        footer: undefined,
        rowSelection: undefined,
        scroll: 'scroll',
        hasData: true,
        tableLayout: undefined,
        top: 'none',
        bottom: 'bottomRight',
    };

    handleToggle = prop => enable => {
        this.setState({ [prop]: enable });
    };

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    handleTableLayoutChange = e => {
        this.setState({ tableLayout: e.target.value });
    };

    handleExpandChange = enable => {
        this.setState({ expandable: enable ? expandable : undefined });
    };

    handleEllipsisChange = enable => {
        this.setState({ ellipsis: enable });
    };

    handleTitleChange = enable => {
        this.setState({ title: enable ? title : undefined });
    };

    handleHeaderChange = enable => {
        this.setState({ showHeader: enable ? showHeader : false });
    };

    handleFooterChange = enable => {
        this.setState({ footer: enable ? footer : undefined });
    };

    handleRowSelectionChange = enable => {
        this.setState({ rowSelection: enable ? {} : undefined });
    };

    handleYScrollChange = enable => {
        this.setState({ yScroll: enable });
    };

    handleXScrollChange = e => {
        this.setState({ xScroll: e.target.value });
    };

    handleDataChange = hasData => {
        this.setState({ hasData });
    };

    render() {
        const { xScroll, yScroll, ...state } = this.state;

        const scroll = {};
        if (yScroll) {
            scroll.y = 240;
        }
        if (xScroll) {
            scroll.x = '100vw';
        }

        const tableColumns = columns.map(item => ({ ...item, ellipsis: state.ellipsis }));
        if (xScroll === 'fixed') {
            tableColumns[0].fixed = true;
            tableColumns[tableColumns.length - 1].fixed = 'right';
        }

        return (
            <div>
                {/* <Layout >
                <Header className="title">
                    <p>HI02_Quản lý giám sát - IT4442_2019II</p>
                </Header>
            </Layout> */}
                <Layout>
                    <PageHeader />
                </Layout>
                <Layout>
                    <Sider>
                        <Sidebar />
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Manage Monitoring</Breadcrumb.Item>
                            <Breadcrumb.Item>Inspection</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="body-mod">
                        {/* Filter */}
                        <p>Lọc theo trạng thái &nbsp; &nbsp;
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Chọn trạng thái"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="suachua">Đang triển khai</Option>
                                <Option value="baotri">Chậm tiến độ</Option>
                                <Option value="kiemtra">Quá hạn</Option>
                                <Option value="waiting">Chờ đội đảm nhận</Option>
                            </Select>
                            &nbsp; Theo độ ưu tiên &nbsp; &nbsp;
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Chọn độ ưu tiên"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="critical">Critical</Option>
                                <Option value="high">High</Option>
                                <Option value="normal">Normal</Option>
                                <Option value="low">Low</Option>
                            </Select>
                            &nbsp; theo đội đảm nhận &nbsp; &nbsp;
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Chọn đội"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="doi1">Đội 1</Option>
                                <Option value="doi2">Đội 2</Option>
                                <Option value="doi3">Đội 3</Option>
                            </Select>
                        </p>
                            <br />
                            <Search
                                placeholder="Nhập tên khu vực, tên đội,..."
                                onSearch={value => console.log(value)}
                                style={{ width: 400, marginBottom: 20, float: 'right', position: 'relative', zIndex: 99}}
                                enterButton
                            />
                            <div>
                            {/*<Form*/}
                            {/*    layout="inline"*/}
                            {/*    className="components-table-demo-control-bar"*/}
                            {/*    style={{ marginBottom: 16 }}*/}
                            {/*>*/}
                            {/*    <Form.Item label="Bordered">*/}
                            {/*        <Switch checked={state.bordered} onChange={this.handleToggle('bordered')} />*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="loading">*/}
                            {/*        <Switch checked={state.loading} onChange={this.handleToggle('loading')} />*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="Title">*/}
                            {/*        <Switch checked={!!state.title} onChange={this.handleTitleChange} />*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="Column Header">*/}
                            {/*        <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange} />*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="Footer">*/}
                            {/*        <Switch checked={!!state.footer} onChange={this.handleFooterChange} />*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="Expandable">*/}
                            {/*        <Switch checked={!!state.expandable} onChange={this.handleExpandChange} />*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="Checkbox">*/}
                            {/*        <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="Fixed Header">*/}
                            {/*        <Switch checked={!!yScroll} onChange={this.handleYScrollChange} />*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="Has Data">*/}
                            {/*        <Switch checked={!!state.hasData} onChange={this.handleDataChange} />*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="Ellipsis">*/}
                            {/*        <Switch checked={!!state.ellipsis} onChange={this.handleEllipsisChange} />*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="Size">*/}
                            {/*        <Radio.Group value={state.size} onChange={this.handleSizeChange}>*/}
                            {/*            <Radio.Button value="default">Default</Radio.Button>*/}
                            {/*            <Radio.Button value="middle">Middle</Radio.Button>*/}
                            {/*            <Radio.Button value="small">Small</Radio.Button>*/}
                            {/*        </Radio.Group>*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="Table Scroll">*/}
                            {/*        <Radio.Group value={xScroll} onChange={this.handleXScrollChange}>*/}
                            {/*            <Radio.Button value={undefined}>Unset</Radio.Button>*/}
                            {/*            <Radio.Button value="scroll">Scroll</Radio.Button>*/}
                            {/*            <Radio.Button value="fixed">Fixed Columns</Radio.Button>*/}
                            {/*        </Radio.Group>*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="Table Layout">*/}
                            {/*        <Radio.Group value={state.tableLayout} onChange={this.handleTableLayoutChange}>*/}
                            {/*            <Radio.Button value={undefined}>Unset</Radio.Button>*/}
                            {/*            <Radio.Button value="fixed">Fixed</Radio.Button>*/}
                            {/*        </Radio.Group>*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="Pagination Top">*/}
                            {/*        <Radio.Group*/}
                            {/*            value={this.state.top}*/}
                            {/*            onChange={e => {*/}
                            {/*                this.setState({ top: e.target.value });*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*            <Radio.Button value="topLeft">TopLeft</Radio.Button>*/}
                            {/*            <Radio.Button value="topCenter">TopCenter</Radio.Button>*/}
                            {/*            <Radio.Button value="topRight">TopRight</Radio.Button>*/}
                            {/*            <Radio.Button value="none">None</Radio.Button>*/}
                            {/*        </Radio.Group>*/}
                            {/*    </Form.Item>*/}
                            {/*    <Form.Item label="Pagination Bottom">*/}
                            {/*        <Radio.Group*/}
                            {/*            value={this.state.bottom}*/}
                            {/*            onChange={e => {*/}
                            {/*                this.setState({ bottom: e.target.value });*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*            <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>*/}
                            {/*            <Radio.Button value="bottomCenter">BottomCenter</Radio.Button>*/}
                            {/*            <Radio.Button value="bottomRight">BottomRight</Radio.Button>*/}
                            {/*            <Radio.Button value="none">None</Radio.Button>*/}
                            {/*        </Radio.Group>*/}
                            {/*    </Form.Item>*/}
                            {/*</Form>*/}
                            <Table
                                {...this.state}
                                pagination={{ position: [this.state.top, this.state.bottom] }}
                                columns={tableColumns}
                                dataSource={state.hasData ? data : null}
                                scroll={scroll}
                            />
                        </div>
                        {/* Top-Card */}

                        {/* Location-Card */}

                    </Content>
                    </Layout>
                </Layout>
            </div >

        );
    }
}

export default Inspection;
