import React from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import html from "./images/html-5.png";
import gs from "./images/gs.jpg";
import cal from "./images/cal.png";
import parakh from "./images/parakh.jpeg";
import htm from "./images/htm.png";
import coding from "./images/coding.png";
import mozilla from "./images/mozilla.jpg";
import gdg from "./images/gdg.jpg";
import visualstudiocode from "./images/vscode.png";
import codesandbox from "./images/codesandbox.png";
import firebase from "./images/firebase.png";
import githublogo from "./images/githublogo.png";
import css from "./images/css.png";
import jquery from "./images/jquery.png";
import Javascript from "./images/javascript.png";
import react from "./images/react.png";
import developer from "./images/dev.jpg";
import gmail from "./images/gmail.png";
import snapchat from "./images/snapchat.png";
import linkedin from "./images/linkedinogo.png";
import github from "./images/github.png";
import instagram from "./images/instalogo.png";
import computer from "./images/computer.png";
import gym from "./images/gym.png";
import twitter from "./images/twitter.png";
import background from "./images/background.jpg";
import learn from "./images/learn.png";
import MyVerticallyCenteredModal from "./Modal";
import "./styles.css";
import Navbars from "./Navbar";
function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container id="top" style={{ padding: "25px" }}>
      <Navbars />
      <h1 id="name">ANMOL RESHI</h1>
      <h2 class="line-1 ss anim-typewriter">Aspiring Web Developer</h2>
      <Row className="lines-1 spacex">
        <img style={skilllogo} alt="computer" src={computer} />
        &nbsp; Web Developer by&nbsp;<b> Heart</b>
      </Row>
      <Row className="lines-1">
        <img style={skilllogo} alt="learning" src={learn} />
        &nbsp; Learning and Evolving&nbsp;<b> Everyday</b>
      </Row>
      <Row className="lines-1">
        <img style={skilllogo} alt="computer" src={gym} />
        &nbsp; Loves To spend Time at&nbsp;<b>Gym</b>
      </Row>
      <Row className="lines-1 space-1">
        <a href="mailto:anmolreshi@gmail.com">
          <Button id="work" style={{ backgroundColor: "black" }}>
            <b>Work With Me</b>
          </Button>
        </a>
      </Row>

      <Row className="center space headingtitle">
        <b>Organization I have worked/Working for</b>{" "}
      </Row>
      <Row className="space-1" style={{ display: "flex" }}>
        <Col xl={3} lg={4} md={4} xs={5}>
          <img className="skilllogo1" alt="coding-ninjas" src={coding} />
        </Col>
        <Col xl={2} lg={4} md={4} xs={4}>
          <img className="skilllogo1" alt="htm" src={htm} />
        </Col>
        <Col xl={1} lg={4} md={4} xs={3}>
          <img className="skilllogo1" alt="googledevelopergroup" src={gdg} />
        </Col>
        <Col xl={2} lg={4} xs={6}>
          <img className="skilllogo1" alt="mozilla" src={mozilla} />
        </Col>
        <Col xl={2} lg={4} xs={3}>
          <img className="skilllogo1" alt="girlscript" src={gs} />
        </Col>

        <Col id="Projectwork" xl={2} lg={4} xs={3}>
          <img className="skilllogo1" alt="parakh" src={parakh} />
        </Col>
      </Row>

      <Row className="center space headingtitle">
        <b>Project Work</b>
      </Row>
      <Row className="space-1">
        <Col xl={1} md={2} lg={2}>
          {" "}
        </Col>
        <Col xl={5} lg={4} md={4} xs={12}>
          <div>
            <Card>
              <CardImg
                top
                className="projectimage"
                src={cal}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Calculator using JS</CardTitle>
                <CardText
                  style={{ textAlign: "justify", justifyContent: "justify" }}
                >
                  An Interactive Ui based calucator performing basic functions
                  and operations.
                </CardText>
                <Button
                  href="https://github.com/Anmolreshi/Calculator-webdev"
                  color="warning"
                >
                  <b>Project Link</b>
                </Button>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xl={5} lg={4} md={4} xs={12}>
          <div>
            <Card>
              <CardImg
                top
                className="projectimage"
                src={cal}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Ipod App Using React</CardTitle>
                <CardText
                  style={{ textAlign: "justify", justifyContent: "justify" }}
                >
                  App made using React Js .Included many features like music ,
                  games etc.
                </CardText>
                <Button
                  href="https://github.com/Anmolreshi/Ipod-Reactjs-Project"
                  color="warning"
                >
                  <b>Project Link</b>
                </Button>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xl={1} lg={2}></Col>
      </Row>
      <br />
    
    
    
    <Row className="space-1">
        <Col xl={1} md={2} lg={2}>
          {" "}
        </Col>
        <Col xl={5} lg={4} md={4} xs={12}>
          <div>
            <Card>
              <CardImg
                top
                className="projectimage"
                src={cal}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">To Do List</CardTitle>
                <CardText
                  style={{ textAlign: "justify", justifyContent: "justify" }}
                >
                  An Interactive Ui based To do List Storing daily Tasks and with features.
                </CardText>
                <Button
                  href="https://github.com/Anmolreshi/TodoList-ReactHooks"
                  color="warning"
                >
                  <b>Project Link</b>
                </Button>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xl={5} lg={4} md={4} xs={12}>
          <div>
            <Card>
              <CardImg
                top
                className="projectimage"
                src={cal}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">  Covid Tracker Using React Hooks</CardTitle>
                <CardText
                  style={{ textAlign: "justify", justifyContent: "justify" }}
                >
                 Made Covid Tracker for J & k which would be fetching Real time data from API.
    
                </CardText>
                <Button
                  href="https://github.com/Anmolreshi/CovidTracker"
                  color="warning"
                >
                  <b>Project Link</b>
                </Button>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xl={1} lg={2}></Col>
      </Row>
    
    <br/>
      <Row>
        <Col xl={1} md={2} lg={2}>
          {" "}
        </Col>
        <Col xl={5} lg={4} md={4} xs={12}>
          <div>
            <Card>
              <CardImg
                top
                className="projectimage"
                src={cal}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Covid Warriors Website</CardTitle>
                <CardText>
                  Worked with Team of 7 memebes on developeing App for covid
                  Warriors as a thankful gesture to them.
                </CardText>
                <Button
                  href="https://github.com/dkots111/team-barfi"
                  color="warning"
                >
                  <b>Project Link</b>
                </Button>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xl={5} lg={4} md={4} xs={12}>
          <div>
            <Card>
              <CardImg
                top
                className="projectimage"
                src={cal}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Dog Image generator API</CardTitle>
                <CardText>
                  Made a website which display random dog images using dog API.
    Made it using react and designing done through Reactstrap.
                </CardText>
                <Button
                  id="skills"
                  href="https://github.com/Anmolreshi/randomdogapi"
                  color="warning"
                >
                  <b>Project Link</b>
                </Button>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xl={1} lg={2}></Col>
      </Row>

      <Row className="center space headingtitle">
        <b>My Web Stack</b>
      </Row>
      <Row className="space-1" style={{ display: "flex" }}>
        <Col xl={2} lg={2} xs={2}>
          <img style={skilllogo} alt="coding-ninjas" src={html} />
        </Col>
        <Col xl={2} lg={2} xs={2}>
          <img style={skilllogo} alt="coding-ninjas" src={css} />
        </Col>
        <Col xl={2} lg={2} xs={2}>
          <img style={skilllogo} alt="coding-ninjas" src={Javascript} />
        </Col>
        <Col xl={2} lg={2} xs={2}>
          <img style={skilllogo} alt="coding-ninjas" src={jquery} />
        </Col>
        <Col xl={2} lg={2} xs={2}>
          <img style={skilllogo} alt="coding-ninjas" src={react} />
        </Col>
        {/* <Col xl={2} lg={2} xs={2}>
          <img style={skilllogo} alt="coding-ninjas" src={computer} />
        </Col> */}
      </Row>

      <Row className="center space headingtitle">
        <b>Development Tools</b>
      </Row>
      <Row className="space-1">
        <Col xl={2} lg={2} md={2} xs={6}>
          <img style={skilllogo} alt="coding-ninjas" src={firebase} />
        </Col>
        <Col xl={2} lg={3} md={2} xs={6}>
          <img style={skilllogo} alt="coding-ninjas" src={githublogo} />
        </Col>
        <Col xl={2} lg={3} md={3} xs={6}>
          <img style={skilllogo} alt="coding-ninjas" src={codesandbox} />
        </Col>
        <Col xl={2} lg={2} md={2} xs={6}>
          <img style={skilllogo} alt="coding-ninjas" src={visualstudiocode} />
        </Col>
      </Row>

      <Row id="about" className="center space">
        <img alt="myimages" className="imagemy" src={background} />
      </Row>
      <br />
      <Row>
        <Col xl={12} lg={12} sm={12} xs={12}>
          <p style={{ textAlign: "justify", justifyContent: "justify" }}>
            <span>
              Hey! I am Anmol Reshi, a Web Developer with 1+ years of experience
              in the web industry. In past 1 years, I've learnt and gained a lot
              of experience from Various documentation, videos, online courses
              to making pratical implementation at my work.I Love to contribute
              in Open source and help Student Community Around me and help them
              to give guided path.
            </span>{" "}
            <br />
            <br />
            <span>
              I am a people's person and I love sharing my experiences to
              Student Community and learning from Students. I believe one of my
              favourite quotes describe it very well, "You Learn More From
              Failure Than From Success. Don’t Let It Stop You. Failure Builds
              Character.".
            </span>{" "}
            <br />
            <br />
            <span>
              I always maintain good relations with my folks, and that is why I
              can say, My friends, acquaintances and my network are one of
              biggest strengths as a person. Right now I am looking for
              opportunities to move to a completely new place anywhere in the
              world and begin a new adventure, make more friends and grow
              further as a person.. And in case you were wondering, I am more of
              a Book person, my favourite food are Burger and Rajma Chawal and I
              am 6 feet tall.
            </span>
            <br />
            <br /> Keep your kindness alive. Cheers.
            <br />
            Anmol reshi.
          </p>
        </Col>
      </Row>
      <Row id="Connect" className="center space headingtitle">
        <b>Let's Connect</b>
      </Row>
      <Row className="center space-1">
        Feel free to reach out for collaborations/queries
      </Row>
      <Row className="center space-1">
        <Button color="danger" onClick={() => setModalShow(true)}>
          Contact Me
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Row>
      <Row className="center space">Follow me on the web</Row>
      <Row className="center space-1">
        <Col xl={1} lg={1} sm={2} xs={2}>
          <a href="https://github.com/Anmolreshi">
          <img className="socialmedia" alt="email" src={github} />
            </a>
        </Col>
        <Col xl={1} lg={1} sm={2} xs={2}>
          <a href="mailto:anmolreshi@gmail.com">
          <img className="socialmedia" alt="email" src={gmail} />
            </a>
        </Col>
        <Col xl={1} lg={1} sm={2} xs={2}>
          <a href="https://www.instagram.com/iamanmolreshi_20/">
          <img className="socialmedia" alt="email" src={instagram} />
            </a>
        </Col>
        <Col xl={1} lg={1} sm={2} xs={2}>
          <img className="socialmedia" alt="email" src={snapchat} />
        </Col>
        <Col xl={1} lg={1} sm={2} xs={2}>
            <a href="https://www.linkedin.com/in/anmolreshi/">
          <img className="socialmedia" alt="email" src={linkedin} />
            </a>
        </Col>
        <Col xl={1} lg={1} sm={2} xs={2}>
          <a href="https://twitter.com/AnmolreshiAnmol">
          <img className="socialmedia" alt="email" src={twitter} />
            </a>
        </Col>
      </Row>
      <Row className="space"></Row>
      <hr />
      <Row className="center ">Designed and Developed</Row>
      <Row className="center">By Yours Truly</Row>
      <Row className="center">
        <b> &copy;Anmolreshi 2021</b>
      </Row>
    </Container>
  );
}
const skilllogo = {
  height: "7vh",
  marginRight: "30px",
  verticalAlign: "middle",
  marginTop: "-5px"
};
export default App;
