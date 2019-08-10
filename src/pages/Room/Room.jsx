import React, { Component } from "react";
import { connect } from "react-redux";
import { getRoom } from "../../redux/Data/dataActions";
import Carousel from "../../components/Carousel/Carousel"
import "./Room.scss";

class Room extends Component {
  componentDidMount() {
    this.props.getRoom(this.props.match.params.id);
  }

  render() {
    const roomData = this.props.room.map(item => item.fields);
    const roomDetails = roomData[0];

    return (
      <div>
        {
        roomDetails ? 
        <div className="room">
          <Carousel
            images={roomDetails.images.map(img => img.fields.file.url)}
          />
        </div> :null
        }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  room: state.data.room
});
const mapDispatchToProps = dispatch => ({
  getRoom: id => {
    dispatch(getRoom(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);
