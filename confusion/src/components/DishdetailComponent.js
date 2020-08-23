import React from "react";
import { Card, CardImg,CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}){
        return(    
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </Card>
        );
    }
function RenderComments({comments}){
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
        
const DishDetail = (props) => {
    if (props.dishd!=undefined){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dishd}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dishd.comments}/>
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

        
export default DishDetail;