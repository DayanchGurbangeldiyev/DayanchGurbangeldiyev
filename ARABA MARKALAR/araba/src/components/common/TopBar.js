import Button from "@restart/ui/esm/Button";
import React from "react"
import { Container, Row, Col,  } from "react-bootstrap"
import {FiFacebook, FiInstagram, FiPhoneCall, FiTwitter, FiUser, FiYoutube} from "react-icons/fi"


/* ROW bir satir Col ise sutun anlamina geliyor */

const TopBar = () => {
    return (
        <Container className="topbar"> 
        
            <Row>             
              <Col ><FiPhoneCall size={15}/> CALL US +1 567 45 78</Col>
              <Col>
              <ul>
                  <li><FiYoutube/></li>
                  <li><FiTwitter/></li>
                  <li><FiFacebook/></li>
                  <li><FiInstagram/></li>
                  <li>
                      <Button>
                          <FiUser/> Login
                      </Button>
                  </li>
              </ul>
              </Col>
            </Row>
        </Container>
    );
};

export default TopBar;
