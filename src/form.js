var Forms = React.createClass({
  isFieldValid: {
    firstName: false,
    lastName : false,
    phone    : false,
    gender   : false,
    age      : false
  },

  validateField: function(field, e) {
    var regex,
      res;

    switch (field) {
      case 'firstName':
      {
      }
      case 'lastName':
      {
        regex = /^[a-zA-Z]{1,30}$/;
        break;
      }
      case 'phone':
      {
        regex = /^[0-9]{1,18}$/;
        break;
      }
      case 'gender':
      {
        regex = /^[a-zA-Z]{1,10}$/;
        break;
      }
      case 'age':
      {
        regex = /^[1-9]{1,1}$|^[1-9]{1,1}[0-9]{1,2}$/;
        break;
      }
    }

    res = regex.test(e.target.value);
    this.isFieldValid[field] = res;
    e.target.parentElement.className = res ? 'form-group has-success' : 'form-group  has-error';
  },

  handleSubmit: function(e) {
    e.preventDefault();

    for (var field in this.isFieldValid) {
      if (!this.isFieldValid[field])
        return;
    }

    this.props.onAddPerson({
      firstName: React.findDOMNode(this.refs.firstName).value,
      lastName : React.findDOMNode(this.refs.lastName).value,
      phone    : React.findDOMNode(this.refs.phone).value,
      gender   : React.findDOMNode(this.refs.gender).value,
      age      : React.findDOMNode(this.refs.age).value
    });

    for (var field in this.refs) {
      React.findDOMNode(this.refs[field]).value = '';
      React.findDOMNode(this.refs[field]).parentElement.className = 'form-group';
    }
  },

  render: function() {
    return <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label className="control-label" htmlFor="firstName">First name</label>
        <input type="text" className="form-control sd" placeholder="Jane" ref="firstName"  onChange={this.validateField.bind(this, 'firstName')} />
      </div>
      <div className="form-group">
        <label className="control-label" htmlFor="lastName">Last name</label>
        <input type="text" className="form-control" placeholder="Doe" ref="lastName"  onChange={this.validateField.bind(this, 'lastName')} />
      </div>
      <div className="form-group">
        <label className="control-label" htmlFor="phone">Phone</label>
        <input type="text" className="form-control" ref="phone"  onChange={this.validateField.bind(this, 'phone')} />
      </div>
      <div className="form-group">
        <label className="control-label" htmlFor="gender">Gender</label>
        <input type="text" className="form-control" ref="gender"  onChange={this.validateField.bind(this, 'gender')} />
      </div>
      <div className="form-group">
        <label className="control-label" htmlFor="age">Age</label>
        <input type="text" className="form-control" ref="age" onChange={this.validateField.bind(this, 'age')} />
      </div>
      <button type="submit" className="btn btn-primary btn-block">Add</button>
    </form>;
  }
});