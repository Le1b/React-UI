var PersonForm = React.createClass({
    typeSort: {
        firstName: false,
        lastName: false,
        phone: false,
        gender: false,
        age: false
    },

    getInitialState: function () {
        return {data: []};
    },

    onAddPersonHandler: function (person) {
        var data = this.state.data;
        data.push(person);

        this.setState({
            data: data
        });
    },

    deletePerson: function (index) {
        var data = this.state.data;
        data.splice(index, 1);

        this.setState({
            data: data
        });
    },

    sortTable: function (type) {
        var self = this;
        this.typeSort[type] = !this.typeSort[type];
        var data = this.state.data;

        data.sort(function (a, b) {

            return self.typeSort[type] ? a[type] > b[type] : b[type] > a[type];
        });

        this.setState({data: data});
    },

    render: function () {
        return (
            <div>
                <div className="col-md-2">
                    <Forms onAddPerson={this.onAddPersonHandler} />
                </div>
                <div className="col-md-9">
                    <table className="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th>First name
                                    <span className="fa fa-arrows-v pull-right" onClick={this.sortTable.bind(this, 'firstName')}></span>
                                </th>
                                <th>Last name
                                    <span className="fa fa-arrows-v pull-right" onClick={this.sortTable.bind(this, 'lastName')}></span>
                                </th>
                                <th>Phone
                                    <span className="fa fa-arrows-v pull-right" onClick={this.sortTable.bind(this, 'phone')}></span>
                                </th>
                                <th>Gender
                                    <span className="fa fa-arrows-v pull-right" onClick={this.sortTable.bind(this, 'gender')}></span>
                                </th>
                                <th>Age
                                    <span className="fa fa-arrows-v pull-right" onClick={this.sortTable.bind(this, 'age')}></span>
                                </th>
                            </tr>
                        </thead>
                        <Tables data={this.state.data} deletePerson={this.deletePerson} />
                    </table>
                </div>
            </div>
        );
    }
});

React.render(<PersonForm />, document.getElementById('content'));