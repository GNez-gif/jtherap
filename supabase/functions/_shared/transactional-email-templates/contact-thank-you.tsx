import * as React from 'npm:react@18.3.1'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Junek Therapeutics'
const BOOKING_URL = 'https://junektherapeutics.com/booking'

interface ContactThankYouProps {
  firstName?: string
}

const ContactThankYouEmail = ({ firstName }: ContactThankYouProps) => {
  const greeting = firstName ? `Thank you, ${firstName}` : 'Thank you for reaching out'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>We received your message and will be in touch shortly</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>{greeting}</Heading>

          <Text style={text}>
            We have received your message at {SITE_NAME} and a member of our care
            team will follow up with you personally. Our goal is to make it easy
            for professional drivers to access quality healthcare without
            disrupting your route or your rest time.
          </Text>

          <Text style={text}>
            Most inquiries receive a response within one business day. If your
            message was sent outside of regular hours, we will reach out as soon
            as the next clinical session begins.
          </Text>

          <Section style={card}>
            <Text style={cardHeading}>Wellness Behind the Wheel</Text>
            <Text style={cardText}>
              {SITE_NAME} provides telehealth care designed around the realities
              of life on the road. We support truck drivers with diabetes
              management, blood pressure monitoring, sleep concerns, mental
              health support, and routine care that fits between loads.
            </Text>
            <Text style={cardText}>
              All visits happen by phone or video, so you can connect from the
              cab, a truck stop, or home. We work with your schedule, not the
              other way around.
            </Text>
          </Section>

          <Section style={ctaSection}>
            <Text style={ctaIntro}>
              Ready to schedule a visit? You can book a consultation directly:
            </Text>
            <Button href={BOOKING_URL} style={button}>
              Book a Consultation
            </Button>
          </Section>

          <Hr style={divider} />

          <Text style={contactHeading}>Prefer to reach us directly?</Text>
          <Text style={contactLine}>Phone: +1 (312) 544-9897</Text>
          <Text style={contactLine}>Email: info@junektherapeutics.com</Text>
          <Text style={contactLine}>Web: junektherapeutics.com</Text>

          <Text style={footer}>
            Drive safe out there.
            <br />
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

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Lora, Georgia, serif',
}
const container = {
  padding: '32px 24px',
  maxWidth: '560px',
  margin: '0 auto',
}
const h1 = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#0b2545',
  margin: '0 0 20px',
  fontFamily: 'Nunito, Arial, sans-serif',
}
const text = {
  fontSize: '15px',
  color: '#333333',
  lineHeight: '1.6',
  margin: '0 0 16px',
}
const card = {
  backgroundColor: '#fff8ed',
  border: '1px solid #f1deb8',
  borderRadius: '12px',
  padding: '20px',
  margin: '24px 0',
}
const cardHeading = {
  fontSize: '15px',
  fontWeight: 700,
  color: '#8a5a00',
  margin: '0 0 10px',
  fontFamily: 'Nunito, Arial, sans-serif',
}
const cardText = {
  fontSize: '14px',
  color: '#333333',
  lineHeight: '1.6',
  margin: '0 0 10px',
}
const ctaSection = {
  textAlign: 'center' as const,
  margin: '28px 0 24px',
}
const ctaIntro = {
  fontSize: '15px',
  color: '#333333',
  lineHeight: '1.6',
  margin: '0 0 16px',
}
const button = {
  backgroundColor: '#0b2545',
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: 700,
  fontFamily: 'Nunito, Arial, sans-serif',
  padding: '12px 28px',
  borderRadius: '999px',
  textDecoration: 'none',
  display: 'inline-block',
}
const divider = {
  borderColor: '#e5e7eb',
  margin: '24px 0 20px',
}
const contactHeading = {
  fontSize: '14px',
  fontWeight: 700,
  color: '#0b2545',
  margin: '0 0 8px',
  fontFamily: 'Nunito, Arial, sans-serif',
}
const contactLine = {
  fontSize: '14px',
  color: '#222222',
  margin: '4px 0',
}
const footer = {
  fontSize: '13px',
  color: '#666666',
  marginTop: '24px',
  lineHeight: '1.6',
}
