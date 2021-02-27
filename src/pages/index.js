import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

// import picMe from '../assets/images/profile-picture.jpg';
import picMe from '../assets/images/madrid.jpg';
import picPrivate from '../assets/images/hobby.jpeg';
import picBlog from '../assets/images/blog.jpeg';
import config from '../../config';
import Link from 'gatsby-link';

const IndexPage = () => (
  <Layout>
    <section id='banner'>
      <div className='inner'>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className='actions special'>
          <li>
            <Scroll type='id' element='one'>
              <a href='/#' className='button primary'>
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type='id' element='one'>
        <a href='#one' className='more'>
          Learn More
        </a>
      </Scroll>
    </section>

    <section id='one' className='wrapper style1 special'>
      <div className='inner'>
        <header className='major'>
          <h2>
            Welcome to my personal space in the wide web,
            <br />
            I am glad you found your way here
          </h2>
          <p>
            I am very passionate about a lot of different topics in the area of software development.
            Currently I am especially interested in software architecture around modern and scalable web.
            applications.
            In this area I enjoy designing the system architecture as well as doing frontend and backend
            development.
            Because of all that I am working as a software architect at Accenture.
          </p>
          <p>
            Next to my job I am currently studying economic computer science and working on my master’s degree.
            I am doing this remotely at the University of Bamberg through their online program.
          </p>
          <p>
            I am living in Nuremberg, Germany since 2015 and love the area, the people and the tech community here a
            lot.
          </p>
        </header>
        {/*<ul className='icons major'>*/}
        {/*  <li>*/}
        {/*    <span className='icon fa-gem major style1'>*/}
        {/*      <span className='label'>Lorem</span>*/}
        {/*    </span>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <span className='icon fa-heart major style1'>*/}
        {/*      <span className='label'>Ipsum</span>*/}
        {/*    </span>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <span className='icon solid fa-code major style1'>*/}
        {/*      <span className='label'>Dolor</span>*/}
        {/*    </span>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </div>
    </section>

    <section id='two' className='wrapper alt style2'>
      <section className='spotlight'>
        <div className='image'>
          <img src={picMe} alt='Myself in Madrid' />
        </div>
        <div className='content'>
          <h2>
            Profession
          </h2>
          <p>
            I am spending my time in the domain of software development since the beginning of my bachelors degree in computer science.
          </p>
          <p>
            Since then I have worked on different projects, for different clients and different companies, most of the time as a consultant.
          </p>
          <p>
            This all lead to my current role in Accenture.
          </p>
          <ul className='actions stacked'>
            <li>
              <Link to={`/cv`} className='button fit primary'>
                More Details in my CV
              </Link>
            </li>
            <li>
              <a href='https://www.accenture.com/' className='button fit'>
                About Accenture
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className='spotlight'>
        <div className='image'>
          <img src={picPrivate} alt='Some dice in the sun' />
        </div>
        <div className='content'>
          <h2>
            Private
          </h2>
          <p>
            In private I enjoy a lot of things nerdy, which includes
          </p>
          <ul>
            <li>Programming (yes, also in private)</li>
            <li>Storytelling and Design</li>
            <li>Tabletop RPGs</li>
            <li>Videogames</li>
            <li>Reading</li>
            <li>Climbing</li>
          </ul>
        </div>
      </section>
      <section className='spotlight'>
        <div className='image'>
          <img src={picBlog} alt='Different things to read' />
        </div>
        <div className='content'>
          <h2>
            Something to read
          </h2>
          <p>
            Im working on a few things to read for you, so stay tuned...
          </p>
          {/*<Link to={`/blog`} className='button fit'>*/}
          {/*  Blog*/}
          {/*</Link>*/}
        </div>
      </section>
    </section>

    {/*<section id='three' className='wrapper style3 special'>*/}
    {/*  <div className='inner'>*/}
    {/*    <header className='major'>*/}
    {/*      <h2>My way of working</h2>*/}
    {/*      <p>*/}
    {/*        Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet*/}
    {/*        eleifend*/}
    {/*        <br />*/}
    {/*        fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus*/}
    {/*        ullamcorper.*/}
    {/*      </p>*/}
    {/*    </header>*/}
    {/*    <ul className='features'>*/}
    {/*      <li className='icon fa-paper-plane'>*/}
    {/*        <h3>Arcu accumsan</h3>*/}
    {/*        <p>*/}
    {/*          Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem*/}
    {/*          tincidunt nullam amet leo Aenean ligula consequat consequat.*/}
    {/*        </p>*/}
    {/*      </li>*/}
    {/*      <li className='icon solid fa-laptop'>*/}
    {/*        <h3>Ac Augue Eget</h3>*/}
    {/*        <p>*/}
    {/*          Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem*/}
    {/*          tincidunt nullam amet leo Aenean ligula consequat consequat.*/}
    {/*        </p>*/}
    {/*      </li>*/}
    {/*      <li className='icon solid fa-code'>*/}
    {/*        <h3>Mus Scelerisque</h3>*/}
    {/*        <p>*/}
    {/*          Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem*/}
    {/*          tincidunt nullam amet leo Aenean ligula consequat consequat.*/}
    {/*        </p>*/}
    {/*      </li>*/}
    {/*      <li className='icon solid fa-headphones-alt'>*/}
    {/*        <h3>Mauris Imperdiet</h3>*/}
    {/*        <p>*/}
    {/*          Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem*/}
    {/*          tincidunt nullam amet leo Aenean ligula consequat consequat.*/}
    {/*        </p>*/}
    {/*      </li>*/}
    {/*      <li className='icon fa-heart'>*/}
    {/*        <h3>Aenean Primis</h3>*/}
    {/*        <p>*/}
    {/*          Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem*/}
    {/*          tincidunt nullam amet leo Aenean ligula consequat consequat.*/}
    {/*        </p>*/}
    {/*      </li>*/}
    {/*      <li className='icon fa-flag'>*/}
    {/*        <h3>Tortor Ut</h3>*/}
    {/*        <p>*/}
    {/*          Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem*/}
    {/*          tincidunt nullam amet leo Aenean ligula consequat consequat.*/}
    {/*        </p>*/}
    {/*      </li>*/}
    {/*    </ul>*/}
    {/*  </div>*/}
    {/*</section>*/}

    {/*<section id='cta' className='wrapper style4'>*/}
    {/*  <div className='inner'>*/}
    {/*    <header>*/}
    {/*      <h2>Arcue ut vel commodo</h2>*/}
    {/*      <p>*/}
    {/*        Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet*/}
    {/*        eleifend fringilla.*/}
    {/*      </p>*/}
    {/*    </header>*/}
    {/*    <ul className='actions stacked'>*/}
    {/*      <li>*/}
    {/*        <a href='/#' className='button fit primary'>*/}
    {/*          Activate*/}
    {/*        </a>*/}
    {/*      </li>*/}
    {/*      <li>*/}
    {/*        <a href='/#' className='button fit'>*/}
    {/*          Learn More*/}
    {/*        </a>*/}
    {/*      </li>*/}
    {/*    </ul>*/}
    {/*  </div>*/}
    {/*</section>*/}
  </Layout>
);

export default IndexPage;
