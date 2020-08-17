import React,{ Component } from "react";
import { Card, CardImg,CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }
    renderDish(dish){
        if (dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </Card>
                </div>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }
    renderComments(comments){
        if (comments!=null){
            const cmnts= comments.map((c) => {
                return(
                    <li key={c.id}>
                        <div>
                            <p>{c.comment}</p>
                            <p>{c.author} {c.date}</p>
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
        else{
            return (
                <div></div>
            );
        }
        
    }
    render(){
        return (
            <div className="row">
                {this.renderDish(this.props.dishd)}
                {this.renderComments(this.props.dishd.comments)}
            </div>
        );
    }
}
export default DishDetail;