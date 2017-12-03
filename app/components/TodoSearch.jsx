import React from "react";

class TodoSearch extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSearch = (e) => {
        const isChecked = e.target.checked;
        const searchText = e.target.value;
        { this.props.onSearch(isChecked, searchText); }
    }
    render() {
        return (
            <div>
                <div>
                    <input type="search" onChange={this.handleSearch} placeholder="Search for a todo ..." />
                </div>
                <div>
                    <label>
                        <input type="checkbox" onChange={this.handleSearch} />
                        Show completed task.
                    </label>
                </div>
            </div>
        );
    }
}

export default TodoSearch;