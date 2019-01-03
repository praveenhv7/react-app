import React from 'react'
import {Media} from 'reactstrap';

function Home(props) {
  return(
    <div className="container">
    <div className="row">
      <div  className="col-12 mt-3">
        <Media >
          <Media left middle>
            <Media className="align-self-center"  object src="assets/images/praveen-small.jpg" alt = "Image not Loaded" />
          </Media>
            <Media body className = "ml-5">
              <Media heading>
                About Me
              </Media>
              <Media>
                <p>I have over 3.5 years of experience as a software engineer
                 and have worked at both small startups and large organizations.<br/>
                  I started my career with Infosys where I was trained in Java
                  and JEE along with database and JavaScript. This helped me
                  to develop myself as a full-stack Java developer.<br/> I have worked
                   in development and support projects which has allowed me
                    to think from both the perspectives and understand the SDLC.<br/>
                  While pursuing Masers I have interned at Affirmed Networks and Draftkings.
                  At Affirmed Networks I learned about software-defined networks, HTTP proxy servers
                  and mobile communication technologies my job was to write test suites for various
                  proxy features and upgrade them.<br/>
                  At DraftKings I got the opportunity to explore C#/.Net for the backend with React for
                  the front end. My work involved peer code review and development of REST API for new
                  features.
                </p>
              </Media>
            </Media>
        </Media>
      </div>
    </div>
  </div>

  );
}

export default Home;
