import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Route, Link} from 'react-router-dom';
import Blog from '../../components/Blog/Blog';
import NewPost from '../../components/NewPost/NewPost';
import Posts from '../../components/Posts/Posts';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/addpost">Add post </Link></Nav.Link>
                        <Nav.Link><Link to="/postgrid">Post - Grid </Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>            

			<Route path="/" exact component={Blog} />
            <Route path="/addpost" exact component={NewPost} />
            <Route path="/postgrid" exact component={Posts} />
        </div>
    );
}

export default Header;