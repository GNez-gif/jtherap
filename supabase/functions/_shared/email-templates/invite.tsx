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

interface InviteEmailProps {
  siteName: string
  siteUrl: string
  confirmationUrl: string
}

export const InviteEmail = ({ siteName, siteUrl, confirmationUrl }: InviteEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>You've been invited to join {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>You're invited 🚛</Heading>
        <Text style={text}>
          You've been invited to join{' '}
          <Link href={siteUrl} style={link}><strong>{siteName}</strong></Link>.
          Tap the button below to accept and create your account.
        </Text>
        <Button style={button} href={confirmationUrl}>Accept Invitation</Button>
        <Text style={footer}>
          If you weren't expecting this invitation, you can safely ignore this
          email.
          <br />Drive safe out there — The {siteName} Team
        </Text>
      </Container>
    </Body>
  </Html>
)

export default InviteEmail

const main = { backgroundColor: '#ffffff', fontFamily: 'Lora, Georgia, serif' }
const container = { padding: '24px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 'bold' as const, color: '#0b2545', margin: '0 0 18px', fontFamily: 'Nunito, Arial, sans-serif' }
const text = { fontSize: '15px', color: '#444', lineHeight: '1.6', margin: '0 0 20px' }
const link = { color: '#8a5a00', textDecoration: 'underline' }
const button = { backgroundColor: '#d97706', color: '#ffffff', fontSize: '15px', fontWeight: 'bold' as const, borderRadius: '999px', padding: '14px 28px', textDecoration: 'none', fontFamily: 'Nunito, Arial, sans-serif' }
const footer = { fontSize: '13px', color: '#666', lineHeight: '1.5', margin: '30px 0 0' }
