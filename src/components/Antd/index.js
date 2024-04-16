import {Table, Tag, Input, Modal} from "antd"
import {SearchOutlined, EditOutlined, DeleteOutlined} from "@ant-design/icons"
import {useState} from "react"
import "./index.css"

const Antd = () => {
    const [userInput, setUserInput] = useState("")
    const campaignReport = {
        id: Math.ceil(Math.random() * 1000),
        name: "",
        uploaded: "",
        qualified: "",
        rectified: "",
        disqualified: "",
        valid: "",
        tbd: "",
        zb: "",
        e_rejected: "",
        date: "2024-04-24 09:00 PM"
    }
    const data = [
        {
            id: 123,
            name: "Google",
            uploaded:10,
            qualified:10,
            rectified:10,
            disqualified:10,
            valid:10,
            tbd:10,
            zb:10,
            e_rejected:10,
            date: "2024-04-24 09:00 PM"
        },
        {
            id: 1234,
            name: "Microsoft",
            uploaded:120,
            qualified:10,
            rectified:8,
            disqualified:10,
            valid:10,
            tbd:10,
            zb:10,
            e_rejected:6,
            date: "2024-04-24 09:00 PM"
        },{
            id: 1235,
            name: "Google",
            uploaded:20,
            qualified:10,
            rectified:9,
            disqualified:10,
            valid:10,
            tbd:10,
            zb:10,
            e_rejected:10,
            date: "2024-04-24 09:00 PM"
        },
        {
            id: 1236,
            name: "Microsoft",
            uploaded:100,
            qualified:10,
            rectified:6,
            disqualified:10,
            valid:10,
            tbd:10,
            zb:10,
            e_rejected:10,
            date: "2024-04-24 09:00 PM"
        },
        {
            id: 1237,
            name: "Google",
            uploaded:150,
            qualified:8,
            rectified:10,
            disqualified:2,
            valid:10,
            tbd:10,
            zb:10,
            e_rejected:10,
            date: "2024-04-24 09:00 PM"
        }
    ]
    const [editCampaign, setEditCampaign] = useState({})
    const [addCampaign, setAddCampaign] = useState(campaignReport)
    const [addModalDisplay, setAddModalDisplay] = useState(false)
    const [editModalDisplay, setEditModalDisplay] = useState(false)
    const [campaignList, setCampaignList] = useState(data)
    const columns = [
        {
            title:"ID",
            dataIndex: "id",
            key: "id",
            sorter: (a,b) => a.id - b.id
        },
        {
            title:"NAME",
            dataIndex: "name",
            key: "name",
            filters:[
                {text:"Google", value:"Google"},
                {text:"Microsoft", value:"Microsoft"}
            ],
            onFilter:(value, record) => {
                return record.name === value
            }
        },
        {
            title:"UPLOADED",
            dataIndex: "uploaded",
            key: "uploaded",
            sorter: (a,b) => a.id - b.id,
            render : (uploaded) => <Tag className="upload allBoxes" >{uploaded}</Tag>
        },
        {
            title:"QUALIFIED",
            dataIndex: "qualified",
            key: "qualified",
            sorter: (a,b) => a.id - b.id,
            render : (qualified) => <Tag className="qualified allBoxes">{qualified}</Tag>
        },
        {
            title:"RECTIFIED",
            dataIndex: "rectified",
            key: "rectified",
            sorter: (a,b) => a.id - b.id,
            render : (rectified) => <Tag className="rectified allBoxes">{rectified}</Tag>
        },
        {
            title:"DISQUALIFIED",
            dataIndex: "disqualified",
            key: "disqualified",
            sorter: (a,b) => a.id - b.id,
            render : (rectified) => <Tag className="disqualified allBoxes">{rectified}</Tag>
        },
        {
            title:"VALID",
            dataIndex: "valid",
            key: "valid",
            sorter: (a,b) => a.id - b.id,
            render : (valid) => <Tag className="valid allBoxes">{valid}</Tag>
        },
        {
            title:"TBD",
            dataIndex: "tbd",
            key: "tbd",
            sorter: (a,b) => a.id - b.id,
            render : (tbd) => <Tag className="tbd allBoxes">{tbd}</Tag>
        },
        {
            title:"ZB",
            dataIndex: "zb",
            key: "zb",
            sorter: (a,b) => a.id - b.id,
            render : (zb) => <Tag className="zb allBoxes">{zb}</Tag>
        },
        {
            title:"E_REJECTED",
            dataIndex: "e_rejected",
            key: "e_rejected",
            sorter: (a,b) => a.id - b.id,
            render : (e_rejected) => <Tag className="e_rejected allBoxes">{e_rejected}</Tag>
        },
        {
            title:"CREATED DATE",
            dataIndex: "date",
            key:"date"
        },
        {
            title:"ACTIONS",
            key:"actions",
            render: (record)=>(
                <>
                    <EditOutlined style={{color:"blue", fontSize:"20px", marginRight:"10px"}} onClick={() =>{
                        onEditCampaign(record)
                    }}/>
                    <DeleteOutlined onClick={() => {
                        onDeleteCampaign(record)
                    }} style={{color:"red", fontSize:"20px", marginRight:"10px"}}/>
                </>
            )
        }
    ]

    const onDeleteCampaign = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this Campaign?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                setCampaignList(prevCampaign => {
                    return prevCampaign.filter(campaign => campaign.id !== record.id)
                })
            }
        })
    }

    const onAddCampaign = () => {
        setAddModalDisplay(true)
    }

    const onEditCampaign = (record) => {
        setEditModalDisplay(true)
        setEditCampaign(record)
    }
    const onEditName = (event) => {
        setEditCampaign(prev => ({...prev, name:event.target.value}))
    }
    const onEditUploaded = (event) => {
        setEditCampaign(prev => ({...prev, uploaded:event.target.value}))
    }
    const onEditQualified = (event) => {
        setEditCampaign(prev => ({...prev, qualified:event.target.value}))
    }
    const onEditRectified= (event) => {
        setEditCampaign(prev => ({...prev, rectified:event.target.value}))
    }
    const onEditDisqualified = (event) => {
        setEditCampaign(prev => ({...prev, disqualified:event.target.value}))
    }
    const onEditValid = (event) => {
        setEditCampaign(prev => ({...prev, valid:event.target.value}))
    }
    const onEditTbd = (event) => {
        setEditCampaign(prev => ({...prev, tbd:event.target.value}))
    }
    const onEditZb = (event) => {
        setEditCampaign(prev => ({...prev, zb:event.target.value}))
    }
    const onEditErejected = (event) => {
        setEditCampaign(prev => ({...prev, e_rejected:event.target.value}))
    }

    const onAddName = (event) => {
        setAddCampaign(prev => ({...prev, name:event.target.value}))
    }
    const onAddUploaded = (event) => {
        setAddCampaign(prev => ({...prev, uploaded:event.target.value}))
    }
    const onAddQualified = (event) => {
        setAddCampaign(prev => ({...prev, qualified:event.target.value}))
    }
    const onAddRectified= (event) => {
        setAddCampaign(prev => ({...prev, rectified:event.target.value}))
    }
    const onAddDisqualified = (event) => {
        setAddCampaign(prev => ({...prev, disqualified:event.target.value}))
    }
    const onAddValid = (event) => {
        setAddCampaign(prev => ({...prev, valid:event.target.value}))
    }
    const onAddTbd = (event) => {
        setAddCampaign(prev => ({...prev, tbd:event.target.value}))
    }
    const onAddZb = (event) => {
        setAddCampaign(prev => ({...prev, zb:event.target.value}))
    }
    const onAddErejected = (event) => {
        setAddCampaign(prev => ({...prev, e_rejected:event.target.value}))
    }
    
    const changeData = event => {
        setUserInput(event.target.value)
    }
    return(
        <>
            <div className="main-container">
                <h1 className="heading">Campaign Reports</h1>
                <div>
                    <button onClick={onAddCampaign} type="button" className="add-button">Add Campaign Report</button>
                    <Input
                        placeholder="SEARCH RECORDS"
                        prefix={<SearchOutlined />}
                        className="input-element"
                        onChange={changeData}
                    ></Input>
                </div>
            </div>
                <Modal
                    title="Edit Campaign"
                    open={editModalDisplay}
                    onCancel={() => {
                        setEditModalDisplay(false)
                    }}
                    onOk = {()=>{
                        setCampaignList(prev => prev.map(campaign => {
                            if (campaign.id === editCampaign.id){
                                return editCampaign
                            }
                            return campaign
                        }))
                        setEditModalDisplay(false)
                    }}
                >
                    <Input value={editCampaign.name} placeholder="Name" style={{marginBottom:"5px"}} onChange={onEditName} />
                    <Input value={editCampaign.uploaded} placeholder="Uploaded" style={{marginBottom:"5px"}} onChange={onEditUploaded} />
                    <Input value={editCampaign.qualified} placeholder="Qualified" style={{marginBottom:"5px"}} onChange={onEditQualified} />
                    <Input value={editCampaign.rectified} placeholder="Rectified" style={{marginBottom:"5px"}} onChange={onEditRectified} />
                    <Input value={editCampaign.disqualified} placeholder="DisQualified" style={{marginBottom:"5px"}} onChange={onEditDisqualified} />
                    <Input value={editCampaign.valid} placeholder="Valid" style={{marginBottom:"5px"}} onChange={onEditValid} />
                    <Input value={editCampaign.tbd} placeholder="Tbd" style={{marginBottom:"5px"}} onChange={onEditTbd} />
                    <Input value={editCampaign.zb} placeholder="Zb" style={{marginBottom:"5px"}} onChange={onEditZb} />
                    <Input value={editCampaign.e_rejected} placeholder="E_Rejected" style={{marginBottom:"5px"}} onChange={onEditErejected} />
                </Modal>
                <Modal
                    title="Add Campaign"
                    open={addModalDisplay}
                    onCancel={() => {
                        setAddModalDisplay(false)
                    }}
                    onOk = {()=>{
                        setCampaignList(prev => ([...prev, addCampaign]))
                        setAddModalDisplay(false)
                        setAddCampaign(campaignReport)
                    }}
                >
                    <Input value={addCampaign.name} placeholder="Name" style={{marginBottom:"5px"}} onChange={onAddName} />
                    <Input value={addCampaign.uploaded} placeholder="Uploaded" style={{marginBottom:"5px"}} onChange={onAddUploaded} />
                    <Input value={addCampaign.qualified} placeholder="Qualified" style={{marginBottom:"5px"}} onChange={onAddQualified} />
                    <Input value={addCampaign.rectified} placeholder="Rectified" style={{marginBottom:"5px"}} onChange={onAddRectified} />
                    <Input value={addCampaign.disqualified} placeholder="DisQualified" style={{marginBottom:"5px"}} onChange={onAddDisqualified} />
                    <Input value={addCampaign.valid} placeholder="Valid" style={{marginBottom:"5px"}} onChange={onAddValid} />
                    <Input value={addCampaign.tbd} placeholder="Tbd" style={{marginBottom:"5px"}} onChange={onAddTbd} />
                    <Input value={addCampaign.zb} placeholder="Zb" style={{marginBottom:"5px"}} onChange={onAddZb} />
                    <Input value={addCampaign.e_rejected} placeholder="E_Rejected" style={{marginBottom:"5px"}} onChange={onAddErejected} />
                </Modal>
            <Table rowClassName="rowStyles" pagination={false} columns={columns} dataSource={campaignList.filter(eachData => eachData.name.includes(userInput))} >
            
            </Table>
        </>
    )
}

export default Antd;