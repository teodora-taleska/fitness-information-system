import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { FaCalendar, FaCalendarCheck, FaCreditCard, FaDyalog, FaEnvelope, FaGooglePay, FaIdCard, FaInfo, FaLocationPin, FaLock, FaLockOpen, FaPaypal, FaPhone, FaSdCard, FaShield, FaUser } from 'react-icons/fa6';

const Register = () => {
  const [part, setPart] = useState(1);
  const [selectedMembership, setSelectedMembership] = useState(null);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showPassPopup, setShowPassPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [err, setError] = useState(null);
  const [passMatch, setPassMatch] = useState(true);
  const [password, setPassword] = useState('');
  const [pass2, setPass2] = useState('');
  const PORT = process.env.PORT || 5067

  const[inputs, setInputs] = useState({
    name:"",
    surname:"",
    email:"",
    password:"",
    role:"member",
    phoneNumber:""
  })

  const navigate = useNavigate()

  const handleChange = e => {
    const {name, value} = e.target;

    setInputs(prev=>(
      {...prev,
        // [e.target.name]: e.target.value
        [name]: value
      }))
        // console.log(inputs)

    if (name === 'password') {
      setPassword(value);
      // console.log(password)

    } else if (name === 'pass2') {
      setPass2(value);
      // console.log(pass2)
    }
  
    // Check if passwords match
    if (password !== pass2){
      setPassMatch(false)
    } 
    
    if(password === pass2){
      setPassMatch(true)    
    }
    
  }

  

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

  const handleConfirmTransaction = async e => {
    e.preventDefault()
    setShowConfirmationPopup(false)

    if (!passMatch){
      setShowPassPopup(true);

      return;
    }
    
    try{
      const res = await axios.post(`http://88.200.63.148:${PORT}/api/auth/register`, inputs)
      console.log(res)
      if (res.data === "User has been created!"){
        setShowSuccessPopup(true);

      } else {
         setError(res.data)
         setShowErrorPopup(true)
      
      }
     
    } catch(err){
      setShowErrorPopup(true);
      setError(err.response.data);

    }
     
    // After successful processing, show the success popup
    setShowConfirmationPopup(false);
    
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
              <h3>Create An Account</h3>
              {/* Form fields */}
             
             <div className='input-container'>
                <p>First name*</p>
                <FaUser/> <input type="text" id="nameInput" name="name" placeholder="Enter your first name" required
                                    onChange={handleChange}/>
             </div>
                
             <div  className='input-container'>
              <p>Last name*</p>
              <FaUser />
                <input type="text" id="surname" name="surname" placeholder="Enter your last name" required
                                    onChange={handleChange}/>
             </div>
                
            <div className='input-container'>
              <p>Email*</p>
              <FaEnvelope />
               <input type="email" id="email" name="email" placeholder="Enter your e-mail" required
                    onChange={handleChange}/>
            </div>
                
            <div className='input-container'>
              <p>Password*</p>
              <FaLockOpen />
              <input type="password" id="password" name="password" placeholder="Enter password" required
                    onChange={handleChange}/>
            </div>   

            <div className={`input-container  ${err ? 'error' : ''} `}>
                <p>Confirm password*</p>
                <FaLock />
                <input type="password" id="pass2" name="pass2" placeholder="Confirm your password" required
                        onChange={handleChange}/>
            </div>

             <div className='input-container'>
              <p>Phone number*</p>
              <FaPhone />
               <input type="text" id="phone" name="phoneNumber" placeholder="Ex. 071292929" required
                    onChange={handleChange}/>
             </div>       
            
                
                  
              <button onClick={handleNext} className="next one">Next</button>
              
               
                
                <p className='bottom'>You already have an account? <Link to="/" className='llink'><i>Login</i></Link></p>
             
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

            <h3>Choose Your Best Plan</h3>
            {/* Membership options */}
            <div className='mem'>

            
              <div
                className={`membership-option ${selectedMembership === 'basic' ? 'selected' : ''}`}
                onClick={() => handleMembershipClick('basic')}
              >
                <h3>Basic Membership</h3>
                <p>Unlimited gym entrances<br/>
                Cost: 30 €/month</p>
              </div>

              <div
                className={`membership-option ${selectedMembership === 'standard' ? 'selected' : ''}`}
                onClick={() => handleMembershipClick('standard')}
              >
                <h3>Standard Membership</h3>
                <p>15 tickets plus unlimited gym entrances<br/>
                Cost: 45 €/month</p>
              </div>

              <div
                className={`membership-option ${selectedMembership === 'premium' ? 'selected' : ''}`}
                onClick={() => handleMembershipClick('premium')}
              >
                <h3>Premium Membership</h3>
                <p>30 tickets plus unlimited gym entrances<br/>
                Cost: 60 €/month</p>
              </div>
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

            <h3>Enter Your Payment Information</h3>
            {/* Payment form fields */}
            <div className='input-container'>
              <p>Card Number*</p>
              <FaCreditCard/>            
              <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter your card number" required/>
            </div>
            
            <div className='input-container'>
              <p>Expiration Date*</p>
              <FaCalendarCheck />      
              <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YY" required/>
            </div>

            <div className='input-container'>
              <p>CVV*</p>
              <FaShield />            
              <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required/>
            </div>

            <div className='input-container'>
              <p>Cardolder Name*</p>
              <FaUser/>            
              <input type="text" id="cardholderName" name="cardholderName" placeholder="Enter cardholder's name" required/>
            </div>
            
            <div className='input-container'>
              <p>Billing Address*</p>
              <FaLocationPin />            
              <input type="text" id="billingAddress" name="billingAddress" placeholder="Enter billing address" required/>
            </div>


            <div className='buttons payment'>
                <button onClick={handleBack} className='back'>Back</button>
                <button onClick={handleDone} className="login">Submit</button>
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
            <div className="buttons">
              <button onClick={() => setShowConfirmationPopup(false)}>Cancel</button>
            <button onClick={handleConfirmTransaction}>Yes</button>
            </div>
            
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Profile successfully created!</p>
            <Link to="/"><button>OK</button></Link>
          </div>
        </div>
      )}

      {/* Password error Popup */}
      {showPassPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Passwords do not match!</p>
            <button onClick={() => setShowPassPopup(false)}>OK</button>
          </div>
        </div>
      )}

      {/* User already exists ERROR Popup */}
      {showErrorPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{err}</p>
            <button onClick={() => setShowErrorPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
