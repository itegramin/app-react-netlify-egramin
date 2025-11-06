import { Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="py-5">
      <Container>
        <div className="title mb-4">
          <h3>Contact <span>Us</span></h3>
        </div>
        
        <div className="row">          
          <div className="col-md-6">
            <div className="card p-4">
              <h5>Contact Information</h5>
              
              <div className="d-flex mb-3">
                <span className="me-2">🏠</span>
                <div>
                  <strong>Address:</strong><br />
                  e-Gramin Services Pvt. Ltd<br />
                  House No. 39, Sapta Swahid Path<br />
                  Dispur, Guwahati - 781006<br />
                  Assam, India
                </div>
              </div>
              
              <div className="d-flex mb-3">
                <span className="me-2">✉️</span>
                <div>
                  <strong>Email:</strong><br />
                  helpdesk[dot]egramin[at]gmail[dot]com
                </div>
              </div>
              
              <div className="d-flex mb-3">
                <span className="me-2">📞</span>
                <div>
                  <strong>Phone:</strong><br />
                  0361-3511441
                </div>
              </div>
              
              <div className="mt-4">
                <h6>Business Hours</h6>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;