import React from 'react'
import Section from '../components/Section';
import Container from '../components/Container';

const Signup: React.FC = () => {
  return (
    <div className="container mx-auto text-white">
      <Section>
        <Container>
          <h1 className="text-sm font-light mt-28">SingUp <span className="text-Brandlemon60">page</span> {`>`}</h1>
        </Container>
      </Section>
    </div>
  )
}

export default Signup;