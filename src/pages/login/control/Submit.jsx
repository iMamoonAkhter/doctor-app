import { Button } from 'react-login-page';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AppContext } from '../../../context/AppContext';

export const Submit = (props) => {
  const { keyname = 'submit', ...elmProps } = props;
  const { setEmail, setPassword } = useContext(AppContext); // Get setEmail and setPassword from context
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the email and password values from the input fields
    const emailInput = elmProps.name === 'email' ? elmProps.value : '';
    const passwordInput = elmProps.name === 'password' ? elmProps.value : '';

    // Store email and password in context
    setEmail(emailInput);
    setPassword(passwordInput);

    // Call your login API here (this is just a placeholder)
    const isSuccess = true; // Replace with actual API call
    if (isSuccess) {
      navigate('/admin'); // Redirect to AdminHome on successful login
    }
  };

  if (!elmProps.children) {
    elmProps.children = <div>Log in</div>;
  } else {
    elmProps.children = <div>{elmProps.children}</div>;
  }

  return <Button type="submit" {...elmProps} keyname={keyname} onClick={handleSubmit} />;
};

Submit.displayName = 'Login.Submit';
