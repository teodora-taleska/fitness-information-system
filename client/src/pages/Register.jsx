import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

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
<<<<<<< HEAD
=======
  const PORT = process.env.PORT || 5067
>>>>>>> b265ed0617dceee4f6f43271a1c1583eb0226558

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

<<<<<<< HEAD
  const handleNext1 = async e => {
    e.preventDefault()

    if (!passMatch){
      setShowPassPopup(true);

      return;
    }
    
    try{
      const res = await axios.post("http://88.200.63.148:5066/api/auth/register", inputs)
      console.log(res)
      setShowErrorPopup(true)
      setError(res.data)
       if (res.data==="User has been created!" && part < 3) {
        setPart(part + 1);
      }
    } catch(err){
      setShowErrorPopup(true);
      setError(err.response.data);

    }
     
  }

=======
>>>>>>> b265ed0617dceee4f6f43271a1c1583eb0226558
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
              <h3>Create an account</h3>
              {/* Form fields */}
             
                <label htmlFor='nameInput'>First name*</label>
                <input type="text" id="nameInput" name="name" placeholder="Enter your first name" required
                    onChange={handleChange}/>
                

                <label htmlFor='surname'>Last name*</label>
                <input type="text" id="surname" name="surname" placeholder="Enter your last name" required
                    onChange={handleChange}/>

                <label htmlFor='email'>E-mail*</label>
                <input type="email" id="email" name="email" placeholder="Enter your e-mail" required
                    onChange={handleChange}/>

                <label htmlFor='pass'>Password*</label>
                <input type="password" id="password" name="password" placeholder="Enter password" required
                    onChange={handleChange}/>

              {/* <label htmlFor='role'>Role*</label>
                <input type="text" id="role" name="role" placeholder="Enter role: ex. Member" required
                    onChange={handleChange}/> */}

                <label htmlFor='pass2'>Confirm password*</label>
                <input type="password" id="pass2" name="pass2" placeholder="Confirm your password" required
                    onChange={handleChange}/>

                
                

                <label htmlFor='phone'>Phone number*</label>
                <input type="text" id="phone" name="phoneNumber" placeholder="Ex. 071292929" required
                    onChange={handleChange}/>
                
                  
                   <button onClick={handleNext} className="next">Next</button>
              
               
                
                <p className='bottom'>You alredy have an account?<Link to="/" className='llink'><i>Login</i></Link></p>
             
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
