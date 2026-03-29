import { Metadata } from 'next'
import Link from 'next/link'
import { SUPPORT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'EmberForge Terms of Service - Rules and guidelines for using our platform.',
}

export default function TermsPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: March 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using EmberForge (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              EmberForge is a social media automation platform that allows users to plan, create, schedule, and analyze content across multiple social media platforms. We provide AI-powered content generation, scheduling tools, and analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To use our Service, you must:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Be at least 18 years old or have parental consent</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Distribute spam, malware, or harmful content</li>
              <li>Harass, abuse, or harm others</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Subscriptions and Payments</h2>
            <p className="text-muted-foreground leading-relaxed">
              Paid subscriptions are billed in advance on a monthly or annual basis. You can start with a 14-day free trial on any plan with no credit card required. Prices are subject to change with 30 days notice. Refunds are handled on a case-by-case basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Content Ownership</h2>
            <p className="text-muted-foreground leading-relaxed">
              You retain ownership of all content you create and upload to our Service. By using our Service, you grant us a limited license to store, display, and distribute your content as necessary to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. AI-Generated Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our AI tools generate content suggestions based on your inputs. You are responsible for reviewing and editing AI-generated content before publishing. We do not guarantee the accuracy, appropriateness, or originality of AI-generated content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              EmberForge is provided &quot;as is&quot; without warranties of any kind. We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability is limited to the amount you paid us in the past 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may suspend or terminate your access to the Service at any time for violations of these terms. You may cancel your account at any time through your account settings. Upon termination, your right to use the Service ceases immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may modify these terms at any time. We will notify you of material changes by email or through the Service. Your continued use after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us at{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
                {SUPPORT_EMAIL}
              </a>.
            </p>
          </section>

          {/* Navigation */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground">
              See also:{' '}
              <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              {' | '}
              <Link href="/data-deletion" className="text-primary hover:underline">Data Deletion</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
