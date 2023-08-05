import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [part, setPart] = useState(1);
  const [selectedMembership, setSelectedMembership] = useState(null);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);


  const handleNext = () => {
    if (part < 3) {
      setPart(part + 1);
    }
  };

  const handleBack = () => {
    if (part > 1) {
      setPart(part - 1);
    }
  };

  const handleMembershipClick = (membership) => {
    setSelectedMembership(membership);
  };

  

  const handleDone = () => {
    setShowConfirmationPopup(true);
  };

  const handleConfirmTransaction = () => {
    // After successful processing, show the success popup
    setShowConfirmationPopup(false);
    setShowSuccessPopup(true);
  };

  const renderForm = () => {
    switch (part) {
      case 1:
        return (
          <div className='form-m'>
           
            {/* Part 1: User Details */}
            {/* Display the line with dots */}
            <div className="progress-dots">
              <span className={part === 1 ? 'active' : ''}></span>
              <span className={part === 2 ? 'active' : ''}></span>
              <span className={part === 3 ? 'active' : ''}></span>
            </div>
            <h3>Create an account</h3>
            {/* Form fields */}
            <label htmlFor='nameInput'>First name*</label>
            <input type="text" id="nameInput" name="name" placeholder="Enter your first name" required/>
            

            <label htmlFor='surname'>Last name*</label>
            <input type="text" id="surname" name="surname" placeholder="Enter your last name" required/>

            <label htmlFor='email'>E-mail*</label>
            <input type="email" id="email" name="email" placeholder="Enter your e-mail" required/>

            <label htmlFor='pass'>Password*</label>
            <input type="password" id="password" name="password" placeholder="Enter password" required/>

            <label htmlFor='pass2'>Confirm password*</label>
            <input type="password" id="pass2" name="pass2" placeholder="Confirm your password" required/>

            <label htmlFor='phone'>Phone number*</label>
            <input type="text" id="phone" name="phone" placeholder="Enter your phone number" required/>
            
            <button onClick={handleNext} className="next">Next</button>
            
            <p className='bottom'>You alredy have an account?<Link to="/"><i>Login</i></Link></p>
          </div>
        );

      case 2:
        return (
            <div className='form-m'>
            {/* Part 2: Membership Selection */}
            <div className="progress-dots">
              <span className={part === 1 ? 'active' : ''}></span>
              <span className={part === 2 ? 'active' : ''}></span>
              <span className={part === 3 ? 'active' : ''}></span>
            </div>

            <h3>Choose your best plan</h3>
            {/* Membership options */}
            <div
              className={`membership-option ${selectedMembership === 'basic' ? 'selected' : ''}`}
              onClick={() => handleMembershipClick('basic')}
            >
              <h3>Basic Membership</h3>
              <p>Unlimited gym entrances</p>
              <p>Cost: 30 €/month</p>
            </div>

            <div
              className={`membership-option ${selectedMembership === 'standard' ? 'selected' : ''}`}
              onClick={() => handleMembershipClick('standard')}
            >
              <h3>Standard Membership</h3>
              <p>15 tickets plus unlimited gym entrances</p>
              <p>Cost: 45 €/month</p>
            </div>

            <div
              className={`membership-option ${selectedMembership === 'premium' ? 'selected' : ''}`}
              onClick={() => handleMembershipClick('premium')}
            >
              <h3>Premium Membership</h3>
              <p>30 tickets plus unlimited gym entrances</p>
              <p>Cost: 60 €/month</p>
            </div>

            <div className='buttons'>
                <button onClick={handleBack} className="back">Back</button>
                <button
                onClick={handleNext}
                className="next"
                disabled={!selectedMembership} // Disable the button if no membership is selected
                >
                Next
                </button>
            </div>
          </div>
        );

      case 3:
        return (
            <div className='form-m'>
            {/* Part 3: Payment Details */}
            <div className="progress-dots">
              <span className={part === 1 ? 'active' : ''}></span>
              <span className={part === 2 ? 'active' : ''}></span>
              <span className={part === 3 ? 'active' : ''}></span>
            </div>

            {/* Payment form fields */}
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter your card number" required/>

            <label htmlFor="expirationDate">Expiration Date:</label>
            <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YY" required/>

            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required/>

            <label htmlFor="cardholderName">Cardholder's Name:</label>
            <input type="text" id="cardholderName" name="cardholderName" placeholder="Enter cardholder's name" required/>

            <label htmlFor="billingAddress">Billing Address:</label>
            <input type="text" id="billingAddress" name="billingAddress" placeholder="Enter billing address" required/>

            <div className='buttons'>
                <button onClick={handleBack} className='back'>Back</button>
                <button onClick={handleDone} className="login">Done</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="auth">
   
      {renderForm()}

      {/* Confirmation Popup */}
      {showConfirmationPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to proceed with the transaction?</p>
            <button onClick={handleConfirmTransaction}>Yes</button>
            <button onClick={() => setShowConfirmationPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Profile successfully created!</p>
            <Link to="/home"><button>OK</button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
