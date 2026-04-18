import * as React from 'npm:react@18.3.1'
import {
  Body,
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

interface NewSignupNotificationProps {
  source?: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  submittedAt?: string
}

const NewSignupNotificationEmail = ({
  source,
  firstName,
  lastName,
  email,
  phone,
  message,
  submittedAt,
}: NewSignupNotificationProps) => {
  const fullName = [firstName, lastName].filter(Boolean).join(' ').trim()
  const sourceLabel = source === 'subscribe' ? 'Newsletter Subscribe' : 'Contact Form'

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New {sourceLabel} submission{fullName ? ` from ${fullName}` : ''}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New {sourceLabel} Submission</Heading>
          <Text style={text}>
            A new {sourceLabel.toLowerCase()} submission has just come in
            through junektherapeutics.com. The details are summarized below
            so you can follow up directly with the driver.
          </Text>
          <Text style={text}>
            Please review the contact information and any message provided,
            then reach out using the driver's preferred method. Most
            professional drivers respond best to a quick phone call between
            loads, so a brief voicemail with a callback window often works
            well if they do not pick up on the first attempt.
          </Text>

          <Section style={card}>
            {fullName && (
              <Text style={row}>
                <span style={label}>Name:</span> {fullName}
              </Text>
            )}
            {email && (
              <Text style={row}>
                <span style={label}>Email:</span> {email}
              </Text>
            )}
            {phone && (
              <Text style={row}>
                <span style={label}>Phone:</span> {phone}
              </Text>
            )}
            {message && (
              <>
                <Hr style={divider} />
                <Text style={label}>Message:</Text>
                <Text style={messageText}>{message}</Text>
              </>
            )}
            {submittedAt && (
              <>
                <Hr style={divider} />
                <Text style={metaText}>Submitted at: {submittedAt}</Text>
              </>
            )}
          </Section>

          <Text style={footer}>
            — Notifications from {SITE_NAME}
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: NewSignupNotificationEmail,
  subject: (data: Record<string, any>) => {
    const src = data?.source === 'subscribe' ? 'Newsletter Subscribe' : 'Contact Form'
    const name = [data?.firstName, data?.lastName].filter(Boolean).join(' ').trim()
    return name ? `New ${src} submission from ${name}` : `New ${src} submission`
  },
  displayName: 'New signup notification',
  to: 'info@junektherapeutics.com',
  previewData: {
    source: 'contact',
    firstName: 'Jane',
    lastName: 'Driver',
    email: 'jane@example.com',
    phone: '+1 (555) 123-4567',
    message: 'I drive long-haul OTR and would like to schedule a consult.',
    submittedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Lora, Georgia, serif' }
const container = { padding: '24px', maxWidth: '560px', margin: '0 auto' }
const h1 = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#0b2545',
  margin: '0 0 16px',
  fontFamily: 'Nunito, Arial, sans-serif',
}
const text = { fontSize: '15px', color: '#444', lineHeight: '1.5', margin: '0 0 20px' }
const card = {
  backgroundColor: '#fff8ed',
  border: '1px solid #f1deb8',
  borderRadius: '12px',
  padding: '20px',
}
const row = { fontSize: '14px', color: '#222', margin: '6px 0' }
const label = {
  fontSize: '13px',
  color: '#8a5a00',
  fontWeight: 700,
  fontFamily: 'Nunito, Arial, sans-serif',
}
const messageText = {
  fontSize: '14px',
  color: '#222',
  margin: '6px 0 0',
  whiteSpace: 'pre-wrap' as const,
}
const divider = { borderColor: '#f1deb8', margin: '14px 0' }
const metaText = { fontSize: '12px', color: '#888', margin: '4px 0 0' }
const footer = { fontSize: '12px', color: '#999', marginTop: '24px', textAlign: 'center' as const }
