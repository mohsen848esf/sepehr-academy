import React, { Component } from 'react'

export class Educations extends Component {
    constructor(props  ){
        super(props);
        this.state={
            data: JSON.stringify(this.props, null, 2),
            loc:    this.props.location.pathname
        }
    }

    render() {
        return (
            <div>
                    <pre className="bg-warning ltr p-4">{this.state.data}</pre>
                    {this.state.loc}

            </div>
        )
    }
}

export default Educations
