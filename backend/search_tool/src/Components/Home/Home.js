import React from 'react';
import axios from 'axios';
import { Button, Form, Card} from "react-bootstrap";
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      searchBar: '',
      opis: '',
      uspjeh: ''
    };
  } 

  handleInputChange = (event) => {
    event.preventDefault()
      this.setState({
        [event.target.name] : event.target.value
      });
  };
  handleClick = (e) => {
    e.preventDefault();
    axios.get("http://localhost:5000/sinonimi/" + this.state.searchBar).then((res)=> {
        this.setState({
            uspjeh: res.data,
            searchBar: ""
        });
        this.state.uspjeh = "";
    })
    .catch(()=> {
        this.setState({ 
            searchBar: "",
            uspjeh: ""
        });
    });
}
   render() {
    return (
      <div className="main-div" id="div">
          <Card style={{ width: '55rem' }} id="prva">
              <Card.Body>
                <Card.Title id="naslov"> Welcome to the  <br></br>synonyms search tool </Card.Title>
                <Card.Text id="tekst">
                  Search synonyms
                </Card.Text>
                  <Form>
                    <Form.Control type="text" placeholder="Enter a word" id="bar" name= "searchBar"  onChange= {this.handleInputChange}/>
                    <Button onClick={this.handleClick} variant="warning" id="search">Search</Button>
                  </Form>
                  <Button href="/addsynonym"variant="warning" id="add"> Add your synonyms </Button>
                  
                  <span className="poruka">{this.state.uspjeh}</span>
              </Card.Body>
            </Card>
      </div>
    );
  }
}
export default Home;