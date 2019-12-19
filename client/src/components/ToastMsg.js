import React from "react";
import { Row, Col, Toast } from "react-bootstrap";
const ToastMsg = props => {
  return (
    <Row className="toast-row">
      <Col xs={6}>
        <Toast
          onClose={() => props.setShow(false)}
          show={props.showToast}
          delay={3000}
          autohide
        >
          <Toast.Body
            style={{
              fontWeight: 600
            }}
          >
            {props.massege}
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};

export default ToastMsg;
