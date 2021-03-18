import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

// import picMe from '../assets/images/profile-picture.jpg';
import picMe from '../assets/images/madrid.jpg';
import picPrivate from '../assets/images/hobby.jpg';
import picBlog from '../assets/images/blog.jpg';
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
            Currently I am especially interested in software architecture around modern and scalable web applications.
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
              <Link to={`/Cv`} className='button fit primary'>
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

    <section id='three' className='wrapper style3 special'>
      <div className='inner'>
        <header className='major'>
          <h2>My way of working</h2>
          <p>
            There are some principles I follow during my daily work.
            <br/>
            Most of them established from me feeling passionate about them and seeing them lead to success.
          </p>
        </header>
        <ul className='features'>
          <li className='icon fa-flag'>
            <h3>Build complete Solutions</h3>
            <p>
              I am motivated by planning and realizing complete solutions to see them come to life.
              For that it is necessary to solve a multitude of diverse problems and
              combine different building blocks to deliver a satisfying solution.
            </p>
          </li>
          <li className='icon solid fa-code'>
            <h3>Maintainability in Mind</h3>
            <p>
              Most systems spend way more time in maintenance or continuous improvement than in their initial development phase.
              So, in my opinion it is necessary to keep those aspects in mind, right at the beginning of the design.
            </p>
          </li>
          <li className='icon fa-user'>
            <h3>User centric</h3>
            <p>
              Fore me, it is very motivating to design and work on a solution,
              which is putting the user at the center of development.
              Challenging ideas with that in mind will always lead to a better result.
            </p>
          </li>
          <li className='icon fa-lightbulb'>
            <h3>Knowledge work</h3>
            <p>
              Working most of the time with unique problems and new challenges is both very demanding and rewarding.
              Acquiring new knowledge therefore is necessary as well as a chance for coming up with new and innovative ideas.
            </p>
          </li>
          <li className='icon fa-paper-plane'>
            <h3>Constant improvement</h3>
            <p>
              I think there is always a way to be more efficient or effective.
              Relying on the status quo therefore is a missed chance to achieve something better.
              To get to this point, self-reflection and constructive feedback can’t be important enough.
            </p>
          </li>
          <li className='icon fa-heart'>
            <h3>Fun</h3>
            <p>
              The result won’t be good, when you don't have some fun building it.
              If the fun is missing, motivation will be next.
              So, with your team you should celebrate achievements and take tough times with enough humor.
            </p>
          </li>
        </ul>
      </div>
    </section>

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
