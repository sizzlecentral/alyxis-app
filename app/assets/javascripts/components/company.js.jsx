var Company = React.createClass({

  getInitialState() {
    return {
      id: this.props.id,
      archived: this.props.archived,
      name: this.props.name,
      url: this.props.url,
      image: this.props.image,
    };
  },

  sendCompanyId(e){
    this.props.showCompany(e.target.value)
  },

  cardGuts() {
    return (
      <div>
        <a href={this.props.url} target='_blank'>
          <div id='company-image'>
            <img src={this.props.image} alt={this.props.name} />
          </div>
          <div id='company-name'>
            {this.props.name}
          </div>
        </a>
        <div>
          <button id='view' value={this.props.id} onClick={this.sendCompanyId}>View Details</button>
        </div>
      </div>
    )
  },

  render() {

    if (this.props.archived != 'true') {

      return (
        <div id='company-card'>
          {this.cardGuts()}
        </div>
      );

    } else {

      return (
        <div id='company-card-archive'>
          {this.cardGuts()}
        </div>
      );

    }

  }
});
