

import React, { Component } from 'react';
import ProductServices from './ProductServices';


class ListProductComponent extends Component {

    constructor(){
        super();
        this.state= {
            products : []
        }
    }

componentDidMount(){
    ProductServices.getProducts().then((res)=>
    {
        this.setState({products: res.data});
    }
    );
}

    render() {
        return (
            <div>
                <h2 className="text-center">Product List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <th>Product Name </th>
                                <th>Description  </th>
                                <th>Cost </th>
                                
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                this.state.products.map(
                                    products=> 
                                    <tr key={products.id}>
                                        <td>{products.productName}</td>
                                        <td>{products.description}</td>
                                        <td>{products.cost}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListProductComponent;