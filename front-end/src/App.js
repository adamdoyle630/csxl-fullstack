import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserAvatar from './components/UserAvatar';
import Link from "./components/link/Link";

const NAME = "Adam";

// Base page formatting... feel free to edit!
const StyledApp = styled.div`
  background: linear-gradient(135deg, #e66465, #9198e5);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: 'Poppins', sans-serif;
  gap: 16px;
`

function App() {
  //Fetch links from API and store them to display on page!

  const [Links, setLinks] = useState([]);

  function fetchLinks() {
    fetch("http://localhost:8000/api/links")
    .then(response => response.json())
    .then(response => {
      setLinks(response)
    })
  }
  useEffect(() => fetchLinks(), [])

  return (
    <StyledApp>
      <h1>{NAME}'s XLinks</h1>
      <UserAvatar src="https://campusrec.unc.edu/wp-content/uploads/2015/08/image.jpg" alt="old well"/>
      <Link url="https://cookout.com" display_name="Cookout"></Link>
      <Link url="https://unc.edu" display_name="UNC Website"></Link>
      
      <p>Hello, dev! We are going to create a webpage here later.</p>
    </StyledApp>
  );
}

export default App;
