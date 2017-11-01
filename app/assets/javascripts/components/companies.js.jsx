var Companies = React.createClass({

  getDefaultProps() {
    return {
      data: []
    };
  },

  getInitialState() {
    return {
      data: this.props.companies
    }
  },

  handleCompanySubmit(company) {
    var that = this
    $.ajax({
      url:      '/companies',
      dataType: 'json',
      type:     'POST',
      headers: {
        'X-Transaction': 'POST',
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      data:      { company: company },
      success: function(data) {
        var newData = that.state.data.concat([data]);
        that.setState({data: newData});
      }
    });
  },

  handleCompanyEdit(company) {
    var that = this
    $.ajax({
      url:      `/companies/${company.id}`,
      dataType: 'json',
      type:     'PUT',
      headers: {
        'X-Transaction': 'PUT',
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      data:      { company: company },
      success: function(resData) {
        var newData = that.state.data
        for (var i = 0; i < newData.length; i++) {
          if (newData[i].company.id === company.id) {
            newData.splice(i, 1, resData)
          }
        }
        that.setState({data: newData});
      }
    });
  },

  handleCompanyDelete(id, index) {
    var that = this
    $.ajax({
      url:      `/companies/${id}`,
      dataType: 'json',
      type:     'DELETE',
      headers: {
        'X-Transaction': 'DELETE',
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      data:      { company: { id: id } },
      success: function(data) {
        var newData = that.state.data;
        newData.splice(index, 1);
        that.setState({data: newData});
      }
    });
  },

  render() {
    return (
      <div>

        <div id='header'>
          <Header />
        </div>

        <div id='company-list'>
          <NewCompany
            onCompanySubmit={this.handleCompanySubmit}
          />
          <CompanyList
            data={this.state.data}
            onCompanyEdit={this.handleCompanyEdit}
            onCompanyDelete={this.handleCompanyDelete}
          />
        </div>

        <div id='footer'>
          <Footer />
        </div>

      </div>
    )
  }

});
