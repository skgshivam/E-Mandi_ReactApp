import React from 'react';
import { Card} from 'react-bootstrap';
import { connect } from 'react-redux';
import SmallBid from './SmallBid';
import TrashIcon from 'react-ionicons/lib/MdTrash';
import Button from 'react-bootstrap/Button';
import Aux from '../../hoc/Aux'

const Order_Card = props => (
    <Card >
        <Card.Body>
            <Card.Text>
                <td className="col-md-2 align-middle">{props.CropName}</td>
                <td className="col-md-2">{props.CropVariety}</td>
                <td className="col-md-1">{props.Quantity}</td>
                
                {Object.values(props.bids).map(x=>{return <td className="col-md-1"><SmallBid price={x.price}/></td>;})}
                { Object.keys(props.bids).length == "0" ?  <Aux><td className="col-md-1"><SmallBid price="0"/></td> <td className="col-md-1"><SmallBid price="0"/></td> <td className="col-md-1"><SmallBid price="0"/></td> </Aux> : ""}
                { Object.keys(props.bids).length == "1" ?  <Aux><td className="col-md-1"><SmallBid price="0"/></td> <td className="col-md-1"><SmallBid price="0"/></td> </Aux> : ""}
                { Object.keys(props.bids).length == "2" ?  <Aux><td className="col-md-1"><SmallBid price="0"/></td> </Aux> : ""}

                <td className="col-md-1">
                    {props.BasePrice}
                </td>
                {props.bids.length ?
                    <td className="col-md-2">
                        <Button variant="success" className="btn-sm" style={{margin:"0px"}} onClick={props.onOrderExecuted}>Sell</Button>
                    </td>
                    :
                    <td className="col-md-2">
                        No Bid
                    </td>
                }
                <td className="col-md-1">
                    <TrashIcon ></TrashIcon>
                </td>
            </Card.Text>
        </Card.Body>
    </Card>
)

const mapStateToProps = state => {
    return{
        username:state.auth.username,
        accountbalance:state.auth.accountbalance,
        availablebalance:state.auth.availablebalance,
    }
}

export default connect(mapStateToProps,null)(Order_Card);