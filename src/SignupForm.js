import React from 'react'
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import './SignupForm.css';

export function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async data => {
    try {
      // preparing request payload
      console.log('Posting to backend:', data);
      // posting (and waiting) request to backend
      let res = await fetch("https://httpbin.org/post", { method: "POST", data });
      // handling response
      console.log('response', res);
      if (res.status === 200) {
        alert("User created successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack className="SignupForm shadow mb-3" gap={3}>
      <a href="#" type="submit" className="btn btn-info p-3 mb-2">
        <strong>Try it free 7 days</strong>
        then 20$/mo because fuck you!
      </a>

      <Stack gap={3} className="p-4 rounded">
        <Form onSubmit={handleSubmit(onSubmit)}>

          <Form.Group className="mb-3">
            <Form.Control id="name" placeholder="Name"
              {...register('name', { required: true, minLength: 2 })}
              className={errors.name ? 'p-3 is-invalid' : 'p-3'} />
            {errors.name?.type === 'required' && <div className="invalid-feedback">Name is required.</div>}
            {errors.name?.type === 'minLength' && <div className="invalid-feedback">Name needs to be longer.</div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control id="email" placeholder="Email address"
              {...register('email', { required: true, pattern: { value: /\S+@\S+\.\S+/ } })}
              className={errors.email ? 'p-3 is-invalid' : 'p-3'} />
            {errors.email?.type === 'required' && <div className="invalid-feedback">Email is required.</div>}
            {errors.email?.type === 'pattern' && <div className="invalid-feedback">Email format is invalid.</div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control id="password" placeholder="Password"
              {...register('password', { required: true, minLength: 8 })}
              className={errors.password ? 'p-3 is-invalid' : 'p-3'} />
            {errors.password?.type === 'required' && <div className="invalid-feedback">Password is required.</div>}
            {errors.password?.type === 'minLength' && <div className="invalid-feedback">Password needs to be longer.</div>}
          </Form.Group>

          <Button variant="success" type="submit" className="form-control p-3 fw-bold text-uppercase mb-4">
            Claim your free trial
          </Button>

          <div className="text-center">
            <small className="form-text text-muted p-2">
              By clicking the button, you are agreeing to our <a href="#">Terms and Services</a>
            </small>
          </div>
        </Form>
      </Stack>
    </Stack>
  );
}