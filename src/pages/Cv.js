import React from 'react';

import Layout from '../components/Layout';

import picMe from '../assets/images/profile-picture.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id='main'>
      <header>
        <h2>My CV</h2>
      </header>
      <section className='wrapper style5'>
        <div className='inner-small'>
          <h3>Personal Information</h3>
          <div className='row'>
            <div className='col-4 col-6-small'><span className='image fit'><img src={picMe} alt='' /></span></div>
            <div className='table-wrapper col-8 col-12-small'>
              <table className='plain'>
                <tbody>
                <tr>
                  <th>Name</th>
                  <td>Benedikt Straube</td>
                </tr>
                <tr>
                  <th>Location</th>
                  <td>Nuremberg, Germany</td>
                </tr>
                <tr>
                  <th>Birthdate</th>
                  <td>25.05.1993</td>
                </tr>
                </tbody>
                <tfoot>
                </tfoot>
              </table>
            </div>
          </div>

          <hr />

          <h3>Employment History</h3>
          <div className='row'>
            <div className='table-wrapper col-12'>
              <table className='plain'>
                <tbody>
                <tr>
                  <th>11/2019 – now</th>
                  <td>
                    <span><b>Business & Technology Delivery Specialist</b></span><br />
                    <span>Accenture GmbH</span>
                  </td>
                </tr>
                <tr>
                  <th>04/2018 – 10/2019</th>
                  <td>
                    <span><b>Software Architect</b></span><br />
                    <span>Atos Information Technology GmbH</span>
                  </td>
                </tr>
                <tr>
                  <th>10/2015 – 03/2018</th>
                  <td>
                    <span><b>Test Engineer</b></span><br />
                    <span>Atos Information Technology GmbH</span>
                  </td>
                </tr>
                <tr>
                  <th>10/2014 – 09/2015</th>
                  <td>
                    <span><b>Junior Consultant</b></span><br />
                    <span>Atos Information Technology GmbH</span>
                  </td>
                </tr>
                <tr>
                  <th>09/2011 – 09/2014</th>
                  <td>
                    <span><b>Corporate Student</b></span><br />
                    <span>Atos Information Technology GmbH</span><br />
                    <span>DHBW Mannheim</span>
                  </td>
                </tr>
                </tbody>
                <tfoot>
                </tfoot>
              </table>
            </div>
          </div>

          <h3>Education</h3>
          <div className='row'>
            <div className='table-wrapper col-12'>
              <table className='plain'>
                <tbody>
                <tr>
                  <th>10/2016 – now</th>
                  <td>
                    <span><b>Masters's Degree - Economic Computer Science</b></span><br />
                    <span>Otto-Friedrich-Universität Bamberg</span>
                  </td>
                </tr>
                <tr>
                  <th>09/2011 – 09/2014</th>
                  <td>
                    <span><b>Bachelor's Degree - Applied Computer Science</b></span><br />
                    <span>DHBW Mannheim</span>
                  </td>
                </tr>
                <tr>
                  <th>09/2011 – 09/2014</th>
                  <td>
                    <span><b>Training</b></span><br />
                    <span>Siemens Professional Education</span>
                  </td>
                </tr>
                </tbody>
                <tfoot>
                </tfoot>
              </table>
            </div>
          </div>

          <hr />

          <h3>Qualification</h3>
          <div className='row'>
            <div className='table-wrapper col-12'>
              <table className='plain'>
                <tbody>
                <tr>
                  <th>2019</th>
                  <td>
                    <span>Product Owner by borisgloger</span>
                  </td>
                </tr>
                <tr>
                  <th>2018</th>
                  <td>
                    <span>CPRE Foundation</span>
                  </td>
                </tr>
                <tr>
                  <th>2015</th>
                  <td>
                    <span>ISTQB Certified Tester - Foundation Level</span><br />
                    <span>ISTQB Certified Tester - Technical Test Analyst</span><br />
                    <span>iSQI Certified Agile Essentials</span><br />
                    <span>Gamification Design 2015 MOOC - Iversity GmbH</span><br />
                    <span>Gamification MOOC - Coursera</span>
                  </td>
                </tr>
                <tr>
                  <th>2013</th>
                  <td>
                    <span>ITIL V3 Foundation Examination</span>
                  </td>
                </tr>
                <tr>
                  <th>2012</th>
                  <td>
                    <span>LCCI Level 2 - English for Busiiness</span>
                  </td>
                </tr>
                </tbody>
                <tfoot>
                </tfoot>
              </table>
            </div>
          </div>

          <h3>Qualification</h3>
          <div className='row'>
            <div className='col-12'>
              <h4>Software Architecture</h4>
              <p>
                Microservices,
                Docker,
                Message Driven Architecture,
                24*7 Availability Systems,
                NoSQL Infrastructure,
                Web Application Architecture,
                Enterprise Integration Patterns,
                Architecture Prototyping,
                C4 Model,
                UML,
                PlantUML
              </p>
              <h4>Software Development</h4>
              <p>
                Java,
                SQL,
                JavaScript,
                TypeScript,
                C#,
                Angular,
                Search Engines,
                LaTex,
                V-Model XT,
                Agile,
                Scrum,
                DevOps
              </p>
              <h4>Quality Assurance</h4>
              <p>
                Test Design,
                Test Automation,
                Requirements Analysis,
                Exploratory Testing,
                Agile Testing,
                Load and Performance Testing,
                Protractor,
                Selenium
              </p>
              <h4>Languages</h4>
              <p>
                German,
                English
              </p>
            </div>
          </div>

        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
