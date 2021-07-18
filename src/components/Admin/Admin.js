import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPen, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const Admin = () => {
    const { register, handleSubmit, watch } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const addProduct = {
            name: data.name,
            price: data.price,
            wight: data.wight,
            image: imageURL
        };
        // const url = `https://dry-savannah-52659.herokuapp.com/addProduct`;
        const url = `http://localhost:5055/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
        .then(res => console.log('server site response', res))
    };

    const handleUploadImage = event => {
        console.log(event.target.files[0])
        const imageUpload = new FormData();
        imageUpload.set('key', '688c7ba26427700b29a03d8886d9a5d4')
        imageUpload.append('image', event.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageUpload)
            .then(function (response) {
                console.log(response.data.data.display_url)
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Container>
        <div className="admin">
            <div className="side-ber">
                <div className="side-ber-text">
                    <h3>Fresh Valley</h3>
                    <Link to="manageProduct" className="manage-product"><p><FontAwesomeIcon icon={faThLarge} /> Manage product</p></Link>
                    <Link to="admin" className="manage-product"><p><FontAwesomeIcon icon={faPlus} /> Add Product</p></Link>
                    <Link to="" className="manage-product"><p><FontAwesomeIcon icon={faPen} /> Edit Product</p></Link>
                    
                    
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="head"><h5 style={{ fontWeight: 'bold'}}>Add Product</h5></div>
                <div className="input-aria">
                        <Row>
                            <Col>
                                <div className="input-box">
                                    <p>Product Name</p>
                                    <input placeholder="Enter Name" {...register("name", { required: true })} />
                                </div>

                                <div className="input-box">
                                    <p>Add Price</p>
                                    <input placeholder="Enter Price" {...register("price", { required: true })} />
                                </div>
                            </Col>
                            <Col>
                                <div className="input-box">
                                    <p>Wight</p>
                                    <input placeholder="Enter Wight" {...register("wight", { required: true })} />
                                </div>

                                <div className="input-box">
                                    <p>Add Photo</p>
                                    <input type="file" onChange={handleUploadImage} />
                                </div>
                            </Col>
                        </Row>
                </div>
                <input className="submit-button" type="submit" />
            </form>
        </div >
      </Container>
    );
};

export default Admin;