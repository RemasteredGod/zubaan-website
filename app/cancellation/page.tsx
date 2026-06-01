import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy — Zubaan',
  description: 'Cancellation and refund terms for Zubaan.',
}

const Z = {
  bg: '#14102A',
  border: '#2A1F4A',
  text: '#F5F0EB',
  dim: '#8A84A8',
  gold: '#F4B942',
} as const

export default function CancellationPage() {
  return (
    <div style={{ backgroundColor: Z.bg, minHeight: '100vh', color: Z.text }}>
      <nav
        style={{
          borderBottom: `1px solid ${Z.border}`,
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/" style={{ fontFamily: 'var(--font-fraunces)', fontStyle: 'italic', fontSize: 22, color: Z.gold, textDecoration: 'none' }}>
          Zubaan
        </Link>
        <Link href="/" style={{ fontFamily: 'var(--font-inter)', fontSize: 13, color: Z.dim, textDecoration: 'none' }}>
          ← Back to home
        </Link>
      </nav>

      <main style={{ maxWidth: 740, margin: '0 auto', padding: '64px 24px 100px' }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: 10, letterSpacing: 4, color: Z.gold, textTransform: 'uppercase', marginBottom: 16 }}>
          Legal
        </p>
        <h1 style={{ fontFamily: 'var(--font-fraunces)', fontStyle: 'italic', fontSize: 'clamp(32px, 5vw, 52px)', color: Z.text, letterSpacing: '-1px', marginBottom: 8, lineHeight: 1.1 }}>
          Cancellation & Refund Policy
        </h1>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: 13, color: Z.dim, marginBottom: 48 }}>
          Last updated: April 19, 2026
        </p>

        <div style={{ height: 1, backgroundColor: Z.border, marginBottom: 48 }} />

        <Section title="Overview">
          This policy explains how cancellations and refunds are handled for purchases made
          in Zubaan. The specific refund rights may vary depending on whether the purchase
          was made through the App Store, Google Play, or directly via a web flow.
        </Section>

        <Section title="Cancellation">
          Subscription cancellations must be performed through the platform where you
          purchased the subscription (Apple App Store or Google Play). For purchases made
          via those platforms, please follow their cancellation steps — we cannot cancel
          platform-billed subscriptions on your behalf.
        </Section>

        <Section title="Refunds">
          Refunds are handled on a case-by-case basis. For platform (App Store / Google Play)
          purchases, billing disputes and refund requests should be submitted to the
          respective platform. For direct web purchases, email us with your order details
          and we will review the request.
        </Section>

        <Section title="Partial Periods & Prorations">
          When a subscription is cancelled, access will continue until the end of the
          current billing period. We do not generally issue refunds for unused time, but
          exceptional cases may be considered.
        </Section>

        <Section title="Contact">
          Questions about cancellations or refunds? Email{' '}
          <a href="mailto:zubaan.live@gmail.com" style={{ color: Z.gold, textDecoration: 'none', fontWeight: 600 }}>
            zubaan.live@gmail.com
          </a>
        </Section>
      </main>

      <footer style={{ borderTop: `1px solid ${Z.border}`, padding: '32px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: 12, color: Z.dim }}>
          © 2026 Zubaan · <Link href="/privacy" style={{ color: Z.dim, textDecoration: 'none' }}>Privacy</Link>
          {' · '}
          <Link href="/terms" style={{ color: Z.dim, textDecoration: 'none' }}>Terms</Link>
          {' · '}
          <Link href="/delete-account" style={{ color: Z.dim, textDecoration: 'none' }}>Delete account</Link>
          {' · '}
          <Link href="/contact" style={{ color: Z.dim, textDecoration: 'none' }}>Contact</Link>
        </p>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: 16, color: '#F5F0EB', marginBottom: 12 }}>
        {title}
      </h2>
      <div style={{ fontFamily: 'var(--font-inter)', fontSize: 15, lineHeight: 1.75, color: '#8A84A8' }}>
        {children}
      </div>
    </div>
  )
}

