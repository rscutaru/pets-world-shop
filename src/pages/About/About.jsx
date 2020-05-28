import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';

function About() {
    return(
        <div>
            <Layout>
                <h1>About</h1>
                <p> 
                    I am Roxana, an aspiring Front-End Developer. <br/>
                    This is my first important project written in Java Script, using React, React-Router, Redux.<br/>
                    Below, you can find out more about me. <br/>
                    <br/>
                </p>
                {/* <Link to ='/' >Home</Link>
                <Footer/> */}
            </Layout>
        </div>
    );
}
export default About;