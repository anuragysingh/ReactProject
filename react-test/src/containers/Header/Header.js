import React, { Suspense } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'; // Nav is used for providing styling to the link
import Posts from '../../components/Posts/Posts';
import './Header.css';
import NotFound from '../NotFound/NotFound';

// lazy loading on client side
const NewPost = React.lazy(()=>import('../../components/NewPost/NewPost'));
const Blog = React.lazy(()=>import('../../components/Blog/Blog'));

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto link">
                        <Nav.Link>
                            <NavLink 
                                to="/" 
                                exact
                                activeClassName="active-header"
                                >Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/addpost" exact>Add post </NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/postgrid" exact>Post - Grid </NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>            

            {/* Route loads all the component which are matched
            Switch loads one component which matches so the order matters */}
        <Switch>
           
			<Route path="/" exact render={()=><Suspense fallback={<div>Loading...</div>}><Blog /></Suspense>} />
            {/* Lazy loading */}
            <Route path="/addpost" exact render={()=><Suspense fallback={<div>Loading...</div>}><NewPost /></Suspense>} />
            <Route path="/postgrid" exact component={Posts} /> 

            {/* to handle 404 error            */}
            <Route component = {NotFound} /> 
            {/* <Redirect from="/" to="/addpost" /> */}
            {/* <Route path="/:id" exact component={FullPost} /> */}            
        </Switch>
        </div>
    );
}

export default Header;