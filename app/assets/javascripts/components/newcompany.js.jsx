var NewCompany= React.createClass({

  addCompany() {
  },

  render() {

    return (
      <div id='new-company-form'>
        <h2>Add a new company:</h2>
        <div>
          <input ref='name' placeholder='Enter name of the company' />
        </div>
        <br />
        <div>
          <input ref='url' placeholder='Enter link to company website' />
        </div>
        <br />
        <div>
          <input ref='image' placeholder='Enter link to company image' />
        </div>
        <br />
        <div>
          <button onClick={this.addCompany}>Submit</button>
        </div>
      </div>
    )
  }
});
