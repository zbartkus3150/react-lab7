import React from 'react'
import AllEmployees from './AllEmployees'
import Form from './Form'
class Data extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            employees: [],
            isLoading: false,
        };
        this.componentGet = this.componentGet.bind(this);
	}

	componentDidMount() {
        this.componentGet();
    }

    componentGet(){
        this.setState({ isLoading: true, adding: false });

        fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(response => this.setState({ employees: response}))
        .then(() => this.setState({isLoading: false}));
        
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
		return (
            <div>
                Data loaded: {this.state.employees.length}<br/>
                <Form/>
                <AllEmployees employee={this.state.employees}/>
            </div>

		)
	}
}

export default Data 