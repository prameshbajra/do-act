import React from "react";
import { connect } from "react-redux";

import { setSearchText, toggleShowCompleted } from "Actions";

class TodoSearch extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { dispatch, showCompleted, searchText } = this.props;
        return (
            <div className="container-header">
                <div>
                    <input type="search" value={searchText} onChange={(e) => {
                        const searchText = e.target.value;
                        dispatch(setSearchText(searchText));
                    }} placeholder="Search for a todo ..." />
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={showCompleted} onChange={(e) => {
                            dispatch(toggleShowCompleted());
                        }} />
                        Show completed task.
                </label>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        showCompleted: state.showCompleted,
        searchText: state.searchText
    }
})(TodoSearch); 