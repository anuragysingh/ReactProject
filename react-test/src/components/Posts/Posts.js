import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import FullPost from '../FullPost/FullPost';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// Only this post will use this custom axios and other request will use global axios
import axios from '../../axios';

class Posts extends Component {
    state = {
        columnDefs: [
            { headerName: "User ID", field: "userId", checkboxSelection: true },
            { headerName: "ID", field: "id" },
            { headerName: "Title", field: "title" },
            { headerName: "Body", field: "body" }
        ],
        rowData: [],
        showPosts: false,
        selectedPostId: null
    }
    componentDidMount() {
        axios.get("/posts")
            .then(response => {
                this.setState({
                    rowData: response.data
                });
            })
    }

    togglePostHandler = () => {
        const doesShow = this.state.showPosts;
        this.setState({ showPosts: !doesShow });
    }

    gridRowSelection = () =>{
        const selectedNodes = this.gridApi.getSelectedNodes();
        const selectedData = selectedNodes.map(node=>node.data);
        const selectedDataId = selectedData.map(node=> node.id);
        this.setState({selectedPostId: selectedDataId[0]});
    }

    render() {
        let postsDisplay = null;
        if (this.state.showPosts) {
            postsDisplay = (
                <div className="ag-theme-alpine" style={{ height: '200px', width: '600px' }}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        onGridReady={params=> this.gridApi = params.api}
                        >
                    </AgGridReact>
                </div>
            );

        }
        return (
            <div>
                <h2>Post grid demo</h2>
                <Button onClick={this.togglePostHandler}>
                    Toggle Posts
		</Button>
                <div>
                    <Button onClick={this.gridRowSelection}>Show selected data</Button>
                    {postsDisplay}
                    <FullPost id={this.state.selectedPostId} />
                </div>

            </div>
        );
    }
}

export default Posts;