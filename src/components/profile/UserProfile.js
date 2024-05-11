import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        // Typically, you might load data from an API here
        this.setState({
            user: {
                name: "John Doe",
                bio: "Love to cook!",
            }
        });
    }

    render() {
        const { user } = this.state;

        return (
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold">User Profile</h2>
                {user && (
                    <>
                        <p>Name: {user.name}</p>
                        <p>Bio: {user.bio}</p>
                    </>
                )}
            </div>
        );
    }
}

export default UserProfile;
