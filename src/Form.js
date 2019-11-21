import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age: 20,
        };
        this.agehandler = this.agehandler.bind(this);
    }

    agehandler(e){
        const value = parseInt(e.target.value, 10);
        if(Number.isInteger(value)){
            this.setState({age: value});
        }
    }

    render(){
        return(
            <div style={{padding:'10px'}}>
                <form style={{width:"300px"}}>
                    <p>Age:
                        <input style={{float:"right"}}
                            id="age"
                            onChange={this.agehandler}
                            type="number"
                        />
                    </p>
                    {this.state.age < 18 ?
                    <div>
                        <p>Parent Name:
                            <input style={{float:"right"}}
                                id="name"
                                type="text"
                            />
                        </p>
                        <p>Parent Phone:
                            <input style={{float:"right"}}
                                id="phone"
                                type="tel"
                                pattern="[0-9]{9}"
                                title="Phone number should by 9 digits long"
                                required="required"
                            />
                        </p>
                    </div>
                    :
                    <div>
                        <p>Name:
                            <input style={{float:"right"}}
                                id="name"
                                type="text"
                            />
                        </p>
                        <p>Email:
                            <input style={{float:"right"}}
                                id="email"
                                type="email"
                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                title="Enter proper email address"
                                required="required"
                            />
                        </p>
                    </div>
                    }
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;