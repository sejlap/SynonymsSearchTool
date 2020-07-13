import React from 'react';
import { Button, Form,  Card} from "react-bootstrap";
import axios from 'axios';

class AddSynonym extends React.Component {
  constructor(props){
    super(props);
    this.state={
      word: '',
      synonym: '',
      uspjeh: '',
      opis: ''
    };
  } 
 handleSubmit = (event) => {
    event.preventDefault();
    let reqBody = {
      word: this.state.word,
      synonym: this.state.synonym
    };
    axios.post("http://localhost:5000/sinonimi", reqBody)
         .then(res=> { 
          this.setState({
            word: "",
            synonym: "",
            uspjeh: res.data
          });
          this.state.uspjeh = "";
         })
         .catch(error => {
            this.setState({ 
              word: "",
             synonym: ""
        });

    });
  }
  /*componentDidMount() {
    axios.get('http://localhost:5000/sinonimi')
      .then(response => this.setState({items: response.data}))
      .catch(err => { 
        this.setState({errorMessage: err.message});
      })
  }*/
  handleInputChange = (event) => {
    event.preventDefault()
      this.setState({
        [event.target.name] : event.target.value
      });
  };
 
  render() {
    const { word, synonym} = this.state
  
    return (
      <div className="main-div" id="div">
            <Card style={{ width: '55rem' }} id="prva">
              <Card.Body>
                <Card.Title id="naslov"> Add your synonym </Card.Title>
    
                  <Form onSubmit= {this.handleSubmit}  id="forma" >
                    <Form.Text className="label"> Add a word</Form.Text>
                    <Form.Control type="text1" placeholder="Enter a word" className="bar" id="input1" name= "word" value={word} onChange= {this.handleInputChange}/>
                    <Form.Text className="label"> Add a synonym</Form.Text>
                    <Form.Control type="text2" placeholder="Enter synonyms with whitespaces" className="bar" id="input2" name= "synonym" value={synonym} onChange= {this.handleInputChange}/>
                    <Button type="submit" variant="warning" id="save" >Save</Button>
                    <Button href="/"variant="warning" id="search1"> Search </Button>
                  </Form>
                  
                  <span className="poruka">{this.state.uspjeh}</span>
              </Card.Body>
            </Card>
      </div>
    );
  }
}

export default AddSynonym;