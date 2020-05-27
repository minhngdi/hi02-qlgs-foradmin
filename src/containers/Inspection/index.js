import React from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import Sidebar from '../../components/Sidebar';
import { Layout, Card, Col, Row, Select, Alert, Table, Switch,  Radio, Form, Breadcrumb, Tag } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;
const { Meta } = Card;

const gridStyle = {
    width: '100%',
    textAlign: 'center',
};

const columns = [
    {
        title: 'Area',
        dataIndex: 'area',
        sorter: true,
    },
    {
        title: 'Team',
        dataIndex: 'team',
        sorter: true,
    },
    {
        title: 'Creator',
        dataIndex: 'creator',
        sorter: true,
    },
    {
        title: 'Created at',
        dataIndex: 'createdAt',
        sorter: true,
    },
    {
        title: 'Priority',
        dataIndex: 'priority',
        sorter: true,
        filters: [
            {
                priority: 'critical',
            },
            {
                value: 'high',
            },
            {
                value: 'normal',
            },
            {
                value: 'low',
            },
        ],
        // onFilter: (value, record) => record.address.indexOf(value) === 0,
        render: priority => {
            let color = '';
            console.log(priority, priority === 'critical');
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
        title: 'Progress',
        dataIndex: 'progress',
        sorter: true,
    },
    // {
    //     title: 'Age',
    //     dataIndex: 'age',
    //     sorter: (a, b) => a.age - b.age,
    // },
    {
        title: 'Address',
        sorter: true,
        dataIndex: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <span>
                <a style={{ marginRight: 16 }}>View</a>
                <a style={{ marginRight: 16 }}>Edit</a>
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
        createdAt: '20/10/2020',
        priority: 'critical',
        progress: '20%',
        address: 'Đại Cồ Việt - Hai Bà Trưng',
    },
    {
        key: '2',
        area: 'Trạm Bách Khoa',
        team: 'Team 1' ,
        creator: 'Auto',
        createdAt: '20/10/2020',
        priority: 'high',
        progress: '20%',
        address: 'Đại Cồ Việt - Hai Bà Trưng',
    },
    {
        key: '3',
        area: 'Trạm Bách Khoa',
        team: 'Team 1' ,
        creator: 'Auto',
        createdAt: '20/10/2020',
        priority: 'normal',
        progress: '20%',
        address: 'Đại Cồ Việt - Hai Bà Trưng',
    },
    {
        key: '4',
        area: 'Trạm Bách Khoa',
        team: 'Team 1' ,
        creator: 'Auto',
        createdAt: '20/10/2020',
        priority: 'low',
        progress: '20%',
        address: 'Đại Cồ Việt - Hai Bà Trưng',
    },
    {
        key: '5',
        area: 'Trạm Bách Khoa',
        team: 'Team 1' ,
        creator: 'Nguyen Dinh Minh',
        createdAt: '20/10/2020',
        priority: 'normal',
        progress: '20%',
        address: 'Đại Cồ Việt - Hai Bà Trưng',
    },
    {
        key: '6',
        area: 'Trạm Bách Khoa',
        team: 'Team 1' ,
        creator: 'Auto',
        createdAt: '20/10/2020',
        priority: 'low',
        progress: '20%',
        address: 'Đại Cồ Việt - Hai Bà Trưng',
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
        top: 'topRight',
        bottom: 'none',
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
                        <p>Lọc theo dự án &nbsp; &nbsp;
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Chọn loại dự án"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="suachua">Sửa chữa</Option>
                                <Option value="baotri">Bảo trì</Option>
                                <Option value="kiemtra">Kiếm tra</Option>
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
                            &nbsp; theo người quản lý &nbsp; &nbsp;
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Chọn tên"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="vana">Nguyễn Vân Á</Option>
                                <Option value="tritue">Trần Trí Tuệ</Option>
                                <Option value="nhannghia">Trọng Nhân Nghĩa</Option>
                            </Select>
                        </p>

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
