import React, { Component } from 'react'
import {connect} from "react-redux"
import {getRooms,getMaxPrice,getMaxSize,setPrice,handleFilterChange,filterRooms} from "../../redux/Filter/filterActions";
import Bar from "../../components/FilterBar/Bar"
import PreviewSelection from "../../components/PreviewSelection/PreviewSelection"

class Zaredux extends Component {

      componentDidMount() {
        this.props.getRooms(this.props.data);
        this.props.getMaxPrice();
        this.props.getMaxSize();
        this.props.setPrice();
      }

    handleChange=event=>{
        const target=event.target;
        const value=target.type === "checkbox" ? target.checked : target.value;
        const name=target.name;

        this.props.handleFilterChange(name,value);
        this.props.filterRooms();
    }

    render() {
        return (
            <div>
                <h1>ZA REDUX RODACI PROVJERA STEJTA ALOO</h1>
                <Bar rooms={this.props.data} handleChange={this.handleChange}/>
                <PreviewSelection rooms={this.props.filter.sortedRooms}/>
            </div>
        )
    }
}
  
const mapStateToProps=state=>({
    data:state.data.rooms,
    filter:state.filter
  })

const mapDispatchToProps=dispatch=>({
    getRooms:(rooms)=>{dispatch(getRooms(rooms))},
    getMaxPrice:()=>{dispatch(getMaxPrice())},
    getMaxSize:()=>{dispatch(getMaxSize())},
    setPrice:()=>{dispatch(setPrice())},
    handleFilterChange:(name,value)=>{dispatch(handleFilterChange(name,value))},
    filterRooms:()=>{dispatch(filterRooms())}
})

export default connect(mapStateToProps,mapDispatchToProps)(Zaredux);







// import React, { Component } from 'react'
// import Bar from "../../components/FilterBar/Bar";
// import PreviewSelection from "../../components/PreviewSelection/PreviewSelection";
// import PreviewGallery from "../../components/PreviewGallery/PreviewGallery";
// import "./Preview.scss"
// import {connect} from "react-redux"

// class Preview extends Component {


//     state = {
//         rooms: [],
//         sortedRooms: [],
//         loading: true,
//         type: "all",
//         capacity: 1,
//         price: 0,
//         minPrice: 0,
//         maxPrice: 0,
//         minSize: 0,
//         maxSize: 0,
//         breakfast: false,
//         pets: false
//       };

//       componentDidMount() {
//         let rooms=this.props.data;

//         let maxPrice = Math.max(...rooms.map(item => item.fields.price));
//         let maxSize = Math.max(...rooms.map(item => item.fields.size));
//         this.setState({
//           rooms,
//           sortedRooms: rooms,
//           loading: false,
//           price: maxPrice,
//           maxPrice,
//           maxSize
//         });
//       }

//     handleChange=event=>{
//         const target=event.target;
//         const value=target.type === "checkbox" ? target.checked : target.value;
//         const name=target.name;

//         this.setState({
//             [name]:value
//         },
//         this.filterRooms
//         )
//     }

//     filterRooms =()=> {
//         let {
//           rooms,
//           type,
//         } = this.state;

        
//         let tempRooms = [...rooms];
//         if (type !== "all") {
//             tempRooms = tempRooms.filter(room => room.fields.type === this.state.type);
//           }
//           this.setState({
//             sortedRooms: tempRooms
//           });
//     };

//     render() {
//         return (
//             <div className="preview-collection">
//                 <PreviewGallery/>
//                <Bar rooms={this.state.rooms} handleChange={this.handleChange}/>
//                <PreviewSelection rooms={this.state.sortedRooms}/>
//             </div>
//         )
//     }
// }
  
// const mapStateToProps=state=>({
//     data:state.data.rooms
//   })

// export default connect(mapStateToProps)(Preview);
