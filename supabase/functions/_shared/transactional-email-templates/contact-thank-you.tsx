import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Junek Therapeutics'

interface ContactThankYouProps {
  firstName?: string
}

const ContactThankYouEmail = ({ firstName }: ContactThankYouProps) => {
  const greeting = firstName ? `Thanks, ${firstName}!` : 'Thanks for reaching out!'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>We received your message — we'll be in touch soon</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>{greeting} 🚛</Heading>
          <Text style={text}>
            We've received your message and a member of our care team will reach out
            soon — on your schedule, not ours.
          </Text>

          <Section style={card}>
            <Text style={cardHeading}>Wellness Behind the Wheel</Text>
            <Text style={cardText}>
              At {SITE_NAME}, we specialize in telehealth care for truck drivers —
              built around long routes, irregular hours, and life on the road.
            </Text>
          </Section>

          <Text style={text}>
            If you need us sooner, you can reach us directly:
          </Text>
          <Text style={contactLine}>📞 +1 (312) 544-9897</Text>
          <Text style={contactLine}>✉️ info@junektherapeutics.com</Text>

          <Text style={footer}>
            Drive safe out there,<br />
            The {SITE_NAME} Team
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: ContactThankYouEmail,
  subject: 'Thanks for reaching out to Junek Therapeutics',
  displayName: 'Contact form thank-you',
  previewData: { firstName: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Lora, Georgia, serif' }
const container = { padding: '24px', maxWidth: '560px', margin: '0 auto' }
const h1 = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#0b2545',
  margin: '0 0 18px',
  fontFamily: 'Nunito, Arial, sans-serif',
}
const text = { fontSize: '15px', color: '#444', lineHeight: '1.6', margin: '0 0 18px' }
const card = {
  backgroundColor: '#fff8ed',
  border: '1px solid #f1deb8',
  borderRadius: '12px',
  padding: '20px',
  margin: '0 0 22px',
}
const cardHeading = {
  fontSize: '15px',
  fontWeight: 700,
  color: '#8a5a00',
  margin: '0 0 8px',
  fontFamily: 'Nunito, Arial, sans-serif',
}
const cardText = { fontSize: '14px', color: '#333', lineHeight: '1.5', margin: 0 }
const contactLine = { fontSize: '14px', color: '#222', margin: '4px 0' }
const footer = {
  fontSize: '13px',
  color: '#666',
  marginTop: '28px',
  lineHeight: '1.5',
}
