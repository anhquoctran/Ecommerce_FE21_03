import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { actionDeleteProduct } from '../actions';

const CartItem = ({ cart, deleteProduct }) => {
  const { id, name, price, image_url } = cart.product;

  const countTotal = (price, quantity) => {
    return price * quantity;
  }

  const handleDelete = cart => {
    deleteProduct(cart);
  }

  return (
    <tr>
      <td>
        <Link to={`/products/${id}`}>
          <img className="table-cart__img" src={image_url} alt={name} />
        </Link>
      </td>
      <td>{name}</td>
      <td className="table-cart__price">{price.new}<sup className="text-lowercase">đ</sup></td>
      <td>{cart.quantity}</td>
      <td className="table-cart__price">{countTotal(price.new, cart.quantity)}<sup className="text-lowercase">đ</sup></td>
      <td><button onClick={() => handleDelete(cart.product)} className="btn btn-link"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
    </tr>
  )
}

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    deleteProduct: (product) => {
      dispatch(actionDeleteProduct(product));
    }
  }
}


export default connect(null, mapDispathToProps)(CartItem);
