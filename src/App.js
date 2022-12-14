import MaterialTable from "material-table";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import './App.css'
import { IconButton } from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";

function App() {
  // this data coming from backend to be displayed on table
  const RowData = [
    {
      sno: 1,
      message:
        "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel",
      from: "Engineering",
      status: "accepted",
    },
    {
      sno: 2,
      message:
        "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam mus vivamus vestibulum sagittis sapien ",
      from: "Human Resources",
      status: "inProgress",
    },
    {
      sno: 3,
      message:
        "vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla i praesent blandit nam nulla i praesent blandit nam nulla i",
      from: "Training",
      status: "rejected",
    },
    {
      sno: 4,
      message:
        "erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque",
      from: "Legal",
      status: "accepted",
    },
    {
      sno: 5,
      message:
        "sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at praesent blandit nam nulla i",
      from: "Engineering",
      status: "inProgress",
    },
  ];

  // this is the column defination means what to show on each column and data binding to that column
  const ColumnSchema = [
    {
      title: "Sno",
      field: "sno",
    },
    {
      title: "Message",
      field: "message",
    },
    {
      title: "From",
      field: "from",
    },
    {
      title: "Status",
      field: "status",
      // render: (args) => {
      //   return (
      //     <h5
      //       style={{
      //         color: "blue",
      //       }}
      //     >
      //       {args.status}
      //     </h5>
      //   );
      // },
    },
  ];

  // Icons to be used in table
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  return (
    <div className="App">
      <h1>hello</h1>

      {/* <MaterialTable 
      title="Basic Table" 
      data={RowData} 
      columns={ColumnSchema}
      icons={tableIcons}
      options={{
        search:false,
        paging:false,
        filtering:true,
        exportButton:true
      }}
      /> */}

      {/* <MaterialTable
        title="Column Or Cell Customization"
        data={RowData}
        columns={ColumnSchema}
        icons={tableIcons}
        options={{
          search: false,
          paging: false,
        }}
      /> */}

      <MaterialTable
        title="Component Overriding Row"
        data={RowData}
        columns={ColumnSchema}
        icons={tableIcons}
        options={{
          search: false,
          paging: false,
        }}
        components={{
          Row:(args)=>{
            return <tr className="AnnexRow">
              <td className="AnnexSno">{args.data.sno}</td>
              <td className="AnnexMsg">{args.data.message}</td>
              <td className="AnnexFrom">{args.data.from}</td>
              <td className="AnnexStatus">{args.data.status}</td>
              <td style={{
                 width:'0%'
              }}>
                <div className="AnnexHoverBtn">
                  <IconButton>
                    <EditOutlined/>
                  </IconButton>
                  <IconButton>
                    <DeleteOutline/>
                  </IconButton>
                </div>
              </td>
            </tr>
          },
          Header:(args)=>{
            console.log(args)
            return null
          }
        }}
      />
    </div>
  );
}

export default App;

// MATERIAL TABLE

// 1. to use the icon either import in html by link tag and install the package but if we have installed the package then in this case we have to pass icon props which contain code for every icon to be used in the table

// 2. to remove search option pass props options object which take search as false or to remove paging pass paging as false or to enable filter pass filter as true or to enable export as csv pass exportButton as true

// 3. to customize a particular column like column template we add aditional value in column schema object called lookUp but it can change only value as replacement not the component to change the component render in cell we pass another value in column schema called render which is take  a callback function that have access to that particular row data which we can show and return a jsx to be displayed as new cell

// 4. to perform Crud operation on table based on mentione way in doc have to pass prop to table called editable which is object which take proeprty like onRowAdd , onRowDelete and onRowUpdate which are basicallly a function which get info about row on which we are performing crud oepration and return a promise which need to be resolved otherwise it will show loading in table 

// 5. to perform Component overriding we pass prop called component to table , to know how many component we can ovveride just go to documentation
