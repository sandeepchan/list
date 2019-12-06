import React, {Component, Fragment} from 'react'
import axios from 'axios'
import Logout from './signout/signout'
import './List.css'

class List extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.getDataFromDb();
    }
    
    getDataFromDb = () => {
        axios.get('http://localhost:5000/users')
          
          .then((res) => this.setState({ data: res.data }));
      };
      edituser= (item) =>{
        // let data = this.state.data[i];
         //alert("user name is "+ JSON.stringify(item))
        // console.log(data.name)
        
        this.props.history.push({pathname: '/editForm/',
      state: {data:item}})
      }
   render() {
    const { data } = this.state;
       return (
         <Fragment>
           <Logout></Logout>
          <table className="width">
            <tr className= "tablerow">
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {data.map((item) =>
            
            <tr key={item.id} className="myList">
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td><button onClick={()=>this.edituser(item)} className="myListButton">Edit </button></td>
              <td><button className="myDeleteButton">Delete </button></td>
            </tr>
          )}
        </table>
         </Fragment>
       )
   }
}
export default List;