// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";
// import { Form, Button } from "react-bootstrap";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await fetch("http://localhost:4001/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response) {
//         const data = await response.json();
//         localStorage.setItem("token", data.token);
//         alert(data.message);
//         navigate("/Manageitem");
//       } else {
//         const errorData = await response.json();
//         console.error(errorData.message);
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   const handleregister = () => {
//     navigate("/Register");
//   };

//   return (
//     <>
//       <Form onSubmit={handleLogin}>
//         <Form.Group className="mb-3 col-md-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//           <Form.Text className="text-muted ">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3 col-md-3 " controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Login
//         </Button><br /><br />

//         <button onClick={handleregister}>Register</button>
//       </Form>
//     </>
//   );
// };

// export default Login;    

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Form, Button } from "react-bootstrap";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission


    try {
      const response = await fetch('https://vshoeinventorybackend.onrender.com/api/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });


      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        alert(data.message);
        navigate("/Manageitem")// Redirect or handle success as needed
      } else {
        const errorData = await response.json();
        console.error(errorData.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };


  const handleregister = () => {
    navigate("/Register");
  };


  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3 col-md-15" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3 col-md-15" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>


        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <br />


        <button onClick={handleregister}>Register</button>
      </Form>
    </>
  );
};
export default Login;












