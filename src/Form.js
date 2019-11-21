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
                        <p>Parent Email:
                            <input style={{float:"right"}}
                                id="email"
                                type="text"
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
                                type="text"
                            />
                        </p>
                    </div>
                    }
                </form>
            </div>
        )
    }
}

export default Form;