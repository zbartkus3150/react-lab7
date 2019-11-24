import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age: 20,
            name: "",
            input: "",
            isValid: false,
            validationError: ""
        };
        this.agehandler = this.agehandler.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePhone = this.validatePhone.bind(this);
        this.validate = this.validate.bind(this);
    }

    agehandler(e){
        const value = parseInt(e.target.value, 10);
        if(Number.isInteger(value)){
            this.setState({age: value});
        }
    }

    validateEmail(e){
        this.validate(
            e.target.value,
            /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})+$/,
            "Enter proper email address"
        );
    }

    validatePhone(e){
        this.validate(
            e.target.value,
            /^[0-9]{9}$/,
            "Phone number should be 9 digits long"
        )
    }

    validate(value, pattern, message){
        let err = "";
        let valid = true;
        const patt = new RegExp(pattern);
        if(!patt.test(value)){
            err = message;
            valid = false;
        }
        this.setState({
            validationError: err,
            isValid: valid,
            input: value
        });
    }

    render(){
        const {
            age,
            name,
            input,
            validationError,
            isValid
          } = this.state;

        return(
            <div style={{padding:'10px'}}>
                <form style={{width:"300px"}}>
                    <p>Age:
                        <input style={{float:"right"}}
                            id="age"
                            onChange={this.agehandler}
                            type="number"
                            required="required"
                        />
                    </p>
                    {this.state.age < 18 ?
                    <div>
                        <p>Parent Name:
                            <input style={{float:"right"}}
                                id="name"
                                type="text"
                                value={name}
                                onChange={e => this.setState({name: e.target.value})}
                            />
                        </p>
                        <p>Parent Phone:
                            <input style={{float:"right"}}
                                id="phone"
                                type="tel"
                                pattern="[0-9]{9}"
                                title="Phone number should by 9 digits long"
                                required="required"
                                value={input}
                                onChange={this.validatePhone}
                            />
                        </p>
                        <p style={{color:"red"}}>{validationError}</p>
                    </div>
                    :
                    <div>
                        <p>Name:
                            <input style={{float:"right"}}
                                id="name"
                                type="text"
                                value={name}
                                onChange={e => this.setState({name: e.target.value})}
                            />
                        </p>
                        <p>Email:
                            <input style={{float:"right"}}
                                id="email"
                                type="email"
                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                title="Enter proper email address"
                                required="required"
                                value={input}
                                onChange={this.validateEmail}
                            />
                        </p>
                        <p style={{color:"red"}}>{validationError}</p>
                    </div>
                    }
                    <button
                        disabled={isValid ? "" : "diabled"}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default Form;