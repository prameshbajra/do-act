import React from "react";

class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <br />
                <h1 className="text-center">Todo App</h1>
                <hr />
                <div className="row">
                    <div className="columns small-centered small-10 medium-6 large-4">
                        <button className="button expanded hollow info">
                            Login with your Github Account
                        </button>
                        <button className="button expanded hollow info disabled">
                            Others coming soon, Or that's what you believe
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;