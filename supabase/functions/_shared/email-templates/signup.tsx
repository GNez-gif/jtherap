/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface SignupEmailProps {
  siteName: string
  siteUrl: string
  recipient: string
  confirmationUrl: string
}

export const SignupEmail = ({
  siteName,
  siteUrl,
  recipient,
  confirmationUrl,
}: SignupEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Confirm your email for {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Welcome aboard 🚛</Heading>
        <Text style={text}>
          Thanks for signing up with{' '}
          <Link href={siteUrl} style={link}><strong>{siteName}</strong></Link>{' '}
          — Wellness Behind the Wheel.
        </Text>
        <Text style={text}>
          Please confirm your email address (
          <Link href={`mailto:${recipient}`} style={link}>{recipient}</Link>
          ) so we can get you set up:
        </Text>
        <Button style={button} href={confirmationUrl}>Confirm Email</Button>
        <Text style={footer}>
          If you didn't create an account, you can safely ignore this email.
          <br />Drive safe out there — The {siteName} Team
        </Text>
      </Container>
    </Body>
  </Html>
)

export default SignupEmail

const main = { backgroundColor: '#ffffff', fontFamily: 'Lora, Georgia, serif' }
const container = { padding: '24px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 'bold' as const, color: '#0b2545', margin: '0 0 18px', fontFamily: 'Nunito, Arial, sans-serif' }
const text = { fontSize: '15px', color: '#444', lineHeight: '1.6', margin: '0 0 20px' }
const link = { color: '#8a5a00', textDecoration: 'underline' }
const button = { backgroundColor: '#d97706', color: '#ffffff', fontSize: '15px', fontWeight: 'bold' as const, borderRadius: '999px', padding: '14px 28px', textDecoration: 'none', fontFamily: 'Nunito, Arial, sans-serif' }
const footer = { fontSize: '13px', color: '#666', lineHeight: '1.5', margin: '30px 0 0' }
