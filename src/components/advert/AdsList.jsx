import React, { Component } from 'react';
import { Card, ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../css/styles.css';


//import Movie from '../Movies/Movies'


export default class AdsList extends Component {
   

render() {

    return (
    <React.Fragment>
            
                <div className="card-grid">
                {this.props.ads.map(ad => (
                    
                <Card key={ad._id} style={{flex: 1, width: 350}}>
                    <Link to={`/advert/${ad._id}`} className="card-header-title"> <Card.Img variant="top" fluid='true' src={`http://localhost:3001/${ad.photo}`     } /> </Link>
                    
                    <Card.Body>
                        <Link to={`/advert/${ad._id}`} className="card-header-title"><Card.Title>{ad.name}</Card.Title> </Link>
                        <Card.Text>{ad.description}</Card.Text>
                        <Card.Text>{ad.price}€</Card.Text>
                        <Button className="adTypeButton" variant="outline-secondary" >{ad.type}</Button>
                        <Link to={`/editnew/${ad._id}`}><Card.Text><Button variant="outline-primary">EDIT</Button></Card.Text></Link>
                        <ButtonToolbar>
                        {
                            ad.tags.map(tag => (
                            
                            <Button key={tag} className="tagButton" variant="outline-secondary"  size="sm">{tag}</Button>
                            ))
                            
                        
                        }
                        </ButtonToolbar>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Created: {ad.createdAt.split('T')[0]}</small>
                        <br></br>
                    </Card.Footer>
                </Card>
               ))}
                </div>
            
    </React.Fragment>
  );
  }





}