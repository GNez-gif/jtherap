/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface RecoveryEmailProps {
  siteName: string
  confirmationUrl: string
}

export const RecoveryEmail = ({ siteName, confirmationUrl }: RecoveryEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Reset your password for {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Reset your password 🔐</Heading>
        <Text style={text}>
          We received a request to reset your password for {siteName}. Tap the
          button below to choose a new one — on your schedule, not ours.
        </Text>
        <Button style={button} href={confirmationUrl}>Reset Password</Button>
        <Text style={footer}>
          If you didn't request a password reset, you can safely ignore this
          email — your password won't change.
          <br />Drive safe out there — The {siteName} Team
        </Text>
      </Container>
    </Body>
  </Html>
)

export default RecoveryEmail

const main = { backgroundColor: '#ffffff', fontFamily: 'Lora, Georgia, serif' }
const container = { padding: '24px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 'bold' as const, color: '#0b2545', margin: '0 0 18px', fontFamily: 'Nunito, Arial, sans-serif' }
const text = { fontSize: '15px', color: '#444', lineHeight: '1.6', margin: '0 0 20px' }
const button = { backgroundColor: '#d97706', color: '#ffffff', fontSize: '15px', fontWeight: 'bold' as const, borderRadius: '999px', padding: '14px 28px', textDecoration: 'none', fontFamily: 'Nunito, Arial, sans-serif' }
const footer = { fontSize: '13px', color: '#666', lineHeight: '1.5', margin: '30px 0 0' }
