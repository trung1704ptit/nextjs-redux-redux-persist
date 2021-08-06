// Packages
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Col } from 'styled-bootstrap-grid'
import { ArrowRightShort } from 'react-bootstrap-icons'
import _ from 'lodash'

// Components
import Layout from '../components/Layout'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'

// Style
import { Container, SlimWrapper, VerticalBox } from '../styles/global'
import { Background, FormWrapper, FormRow } from '../styles/index'
import { Title } from '../styles/typography'

export default function Home() {
  const [form_values, updateFormValues] = useState({
      first_name: '',
      last_name: '',
      email_address: '',
      password: '',
    }),
    [loading, setLoading] = useState(false),
    router = useRouter(),
    fields = [
      {
        col: 12,
        lg: 6,
        type: 'text',
        label: 'First Name',
        id: 'first_name',
      },
      {
        col: 12,
        lg: 6,
        type: 'text',
        label: 'Last Name',
        id: 'last_name',
      },
      {
        col: 12,
        lg: 12,
        type: 'email',
        label: 'Email Address',
        id: 'email_address',
      },
      {
        col: 12,
        lg: 12,
        type: 'password',
        label: 'Password',
        id: 'password',
      },
    ]

  useEffect(() => {
    setLoading(false)
  }, [])

  const onSubmit = () => {
    const hasEmptyValues = _.some(form_values, _.isEmpty)

    if (hasEmptyValues) {
      // Alert user.
      alert('Please enter all fields!')
    } else {
      setLoading(true)

      setTimeout(() => {
        router.push('/greeting')
      }, 3500)
    }
  }

  return (
    <Layout title="Redux Sample Form -- Local State">
      <Container>
        <Background
          gradients={[
            ['royalblue', 'coral'],
            ['magenta', 'gold'],
            ['violet', 'royalblue'],
          ]}
          property="background"
          duration={12000}
          angle="45deg"
          className="background2"
        />

        <SlimWrapper>
          <VerticalBox>
            <FormWrapper>
              <Title style={{ textAlign: 'center', marginBottom: '2rem' }}>
                Create an account
              </Title>
              <FormRow alignItems="center" loading={loading}>
                {fields.map(({ lg, col, type, label, id }) => (
                  <Col col={col} lg={lg}>
                    <Input
                      type={type}
                      label={label}
                      value={form_values[id]}
                      onChange={(event) => {
                        updateFormValues({
                          ...form_values,
                          [id]: event.target.value,
                        })
                      }}
                    />
                  </Col>
                ))}
              </FormRow>
              <Button
                title={loading ? 'Submitting' : 'Sign up'}
                onClick={onSubmit}
                icon={<ArrowRightShort />}
                loading={loading}
                disabled={loading}
              />
            </FormWrapper>
          </VerticalBox>
        </SlimWrapper>
      </Container>
    </Layout>
  )
}
