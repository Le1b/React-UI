var Tables = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  deletePerson: function(index) {
    this.props.deletePerson(index);
  },

  render: function() {
    var self = this;
    var nodes = this.props.data.map(function(row, index) {
      return (<tr>
        <td>{row.firstName}</td>
        <td>{row.lastName}</td>
        <td>{row.phone}</td>
        <td>{row.gender}</td>
        <td>{row.age} <span className="delete-btn pull-right fa fa-2x fa-times text-danger"  onClick={self.deletePerson.bind(self, index)}></span></td>
      </tr>);
    });

    return (<tbody>{nodes}</tbody>);
  }
});