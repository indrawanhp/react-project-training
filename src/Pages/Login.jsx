import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    navigate.push("/home");
  };
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <Form action="/#" method="POST" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label id="email">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  // isValid={!errors.email}
                  isInvalid={errors.email}
                  aria-invalid={errors.email ? "true" : "false"}
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                />
                {errors.email && <Form.Text className="text-danger">{errors.email?.message}</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label id="password">Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  // isValid={!errors.email}
                  isInvalid={errors.email}
                  aria-invalid={errors.password ? "true" : "false"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && <Form.Text className="text-danger">{errors.password?.message}</Form.Text>}
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                  Login
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
