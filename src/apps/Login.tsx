import React from 'react'
import Section from '../components/Section';
import Container from '../components/Container';

const Login: React.FC = () => {
  return (
    <div className="container mx-auto text-white">
      <Section>
        <Container>
          <h1 className="text-sm font-light mt-28">LogIn <span className='text-Brandlemon60'>page</span> {`>`}</h1>
          <form>
            {/* form fields here */}
          </form>
        </Container>
      </Section>
    </div>
  )
}

export default Login;