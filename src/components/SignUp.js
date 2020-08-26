import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { appContext } from '../utilities/appContext';

// ***** STYLES *****
const Input = styled.input`
  background-color: rgba(33, 33, 33, 0.9);
  height: 2em;
  width: 20em;
  margin: 0 1em;
  border: 1px solid white;
  border-radius: 25px;
  text-align: center;
  font-size: 1em;
  margin-bottom: 1em;
  overflow: hidden;
  outline: none;
  color: #e8e8e8;
`;
const Title = styled.h1`
  margin-bottom: 2em;
`;
const SignUpButton = styled.button`
  width: 150px;
  height: 35px;
  padding-bottom: 5px;
  font-size: 1.25em;
  border-radius: 10px;
  background-color: rgba(29, 185, 84, 0.8);
`;
const SignUpText = styled.span`
  color: #b3b3b3;
  text-shadow: 1px 1px #212121;
`;
// ***** STYLES *****

export default function SignUp() {
  const { push } = useHistory();

  const initialState = {
    firstName: "",
    lastName: "",
    username:"",
    email: "",
    password: "",
  };
 
    const setIsLoggedIn = useContext(appContext).setIsLoggedIn;
  
 

  //set state for new member signing up
  const [newMember, setNewMember] = useState(initialState);
   //register credentials
   const [credentials, setCredentials] = useState({username: newMember.username, password: newMember.password})

  //temp. used to display response data
  const [members, setMembers] = useState([]);

  // state for whether our button should be disabled or not.
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // state for our errors
  const [errors, setErrors] = useState(initialState);

  // handle form submission



  //validation schema
  const formSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "Name must be at least 2 characters."),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(2, "Name must be at least 2 characters."),
    username: yup
      .string()
      .min(6, 'Must container at least 6 characters')
      .required('Must create username'),
    email: yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: yup
      .string()
      .required("Please create a password")
      .min(8, "Password must be at least 8 characters."),
  });


  //cofirm password settings
    const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
   
    const confirmPasswordSchema = yup.object().shape({
      confirmPassword: yup.string().required("Please confirm your password")
    });
   
    const confirmPasswordChanges = e =>{
      e.persist();
      e.preventDefault();
      setConfirmPassword(e.target.value);

      yup
      .reach(confirmPasswordSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setConfirmPasswordError("");
      })
      .catch(err => setConfirmPasswordError(err.errors[0] ));
      console.log("user info", confirmPassword )


    }


  //Activate that button if everything is ok!
  useEffect(() => {
    formSchema.isValid(newMember).then((isValid) => {
      setButtonDisabled(!isValid);
    });
  }, [newMember]);

  //validate the changes
  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  // handle changes
  const inputChange = (e) => {
    e.persist();
    console.log("input changed", e.target.value);
    const newMemberData = {
      ...newMember,
      [e.target.name]: e.target.value,
    };
    setCredentials({
      ...credentials,
      username: newMember.username,
      password: newMember.password
    })
    validateChange(e);
    setNewMember(newMemberData);
  };

  const formSubmit = (e) => {
    e.preventDefault();

        console.log("New member", newMember);
        // update state with value from API
        setPasswordsDontMatch(true)
        setMembers([...members, newMember]);
        console.log("members", members);
        
        console.log(credentials)
        
        push("/login");

        axios.post('https://spotify-song-suggestor-x.herokuapp.com/api/auth/register', credentials)
        .then(res=>{console.log(credentials, 'register success', res.data)})
        .catch(err=>{console.log(credentials,'register problem', err)})
        
  };

  return (
    <div className="signup">
      <Title>Sign Up</Title>
      <form onSubmit={formSubmit}>
        <label htmlFor="firstName">
          <Input
            //data-cy="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newMember.firstName}
            onChange={inputChange}
          />
        </label>{errors.firstName.length > 0 ? <p className="error">{errors.firstName}</p> : null}

        <label htmlFor="lastName">
          <Input
            // data-cy="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newMember.lastName}
            onChange={inputChange}
          />
        </label>{errors.lastName.length > 0 ? <p className = "error">{errors.lastName}</p>: null }

        <label htmlFor="email">
          <Input
            // data-cy="email"
            type="email"
            name="email"
            placeholder="Email"
            value={newMember.email}
            onChange={inputChange}
          />
        </label>{errors.email.length > 0 ? <p className = "error">{errors.email}</p>: null }

        <label>
          
          <Input
           //data-cy="firstName"
            type="text"
            name="username"
            placeholder="username"
            value={newMember.username}
            onChange={inputChange}
          />
        </label>{errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}


        <label htmlFor="password">
          <Input
            // data-cy="password"
            type="password"
            name="password"
            placeholder="Password"
            value={newMember.password}
            onChange={inputChange}
          />
        </label>{errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}


        <label htmlFor="confirmPassword">
          <Input
            // data-cy="password"
            type="password"
            name="confirmPassword"
            placeholder="Re-type Password"
            value={confirmPassword}
            onChange={confirmPasswordChanges}
          />

        </label>{confirmPasswordError.length > 0 ? <p className="error">{confirmPasswordError}</p> : null}
                {passwordsDontMatch ? <p>The passwords you entered do not match</p> : null}

        <button data-cy="submit" disabled={buttonDisabled} type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}
