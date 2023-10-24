import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Bone Fletcher</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to='/cards'>
          <Navbar.Brand>Products</Navbar.Brand>
          </Link>
          <Link to='/hidden-text'>
          <Navbar.Brand>Hidden-Text</Navbar.Brand>
          </Link>
          <Link to='/scroll-bar'>
          <Navbar.Brand>Scroll-Bar</Navbar.Brand>
          </Link>
          <Link to='/pagination'>
          <Navbar.Brand>Pagination</Navbar.Brand>
          </Link>
          <Link to='/rating'>
          <Navbar.Brand>Rating</Navbar.Brand>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header