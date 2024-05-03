"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";

export default function NavbarComponent() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="navbar bg-body-tertiary"
      //   variant="dark"
      //   data-bs-theme=""
      //   style={{ backgroundColor: "#171717" }}
    >
      <Container>
        <Navbar.Brand>
          <div className=" w-24 h-12">
            <img className="w-full h-full object-cover" src="/logo.svg" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/services">Our Sevice</Nav.Link>
            <Nav.Link href="/teams">Our Teams</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
