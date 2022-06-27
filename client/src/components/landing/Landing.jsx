import React from 'react';
import { Main } from './Styles'
import NavBar from '../layouts/NavBar';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const Landing = ({history}) => {
  useEffect(() => {
    const token = Cookies.get('token');
    if(token){
      history.push('/todos');
    }else{
      history.push('/signin');
    }
  }, [])
  
  return (
    <>
      <NavBar />
      <Main>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-12">
              <button className="btn" onClick={()=>{
                              

              }} >Get Started</button>
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}

export default Landing;
