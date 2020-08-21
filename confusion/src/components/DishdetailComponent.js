import React,{ Component } from "react";
import { Card, CardImg,CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }
    renderDish(dish){
        return(    
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </Card>
        );
    }
    renderComments(comments){
        const cmnts= comments.map((c) => {
            return(
                <li key={c.id}>
                    <div>
                        <p>{c.comment}</p>
                        <p>{c.author}</p>
                        <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</p>
                    </div>
                </li>
            );
        });
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        );
    }
        
    render(){
        if (this.props.dishd!=undefined){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dishd)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dishd.comments)}
                        </div>
                    </div>
                </div>
                
                
            );   
        }
        else{
            return(
                <div></div>
            );
        }
        
    }
}
export default DishDetail;