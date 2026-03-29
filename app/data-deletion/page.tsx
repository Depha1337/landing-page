import { Metadata } from 'next'
import Link from 'next/link'
import { SUPPORT_EMAIL, PRIVACY_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Data Deletion',
  description: 'EmberForge Data Deletion - How to delete your account and request data removal.',
}

export default function DataDeletionPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Data Deletion
          </h1>
          <p className="text-muted-foreground text-lg">
            How to delete your account and personal data
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Delete Your Account</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can delete your EmberForge account at any time. Here&apos;s how:
            </p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li>Log in to your EmberForge account</li>
              <li>Go to Settings &gt; Account</li>
              <li>Scroll down to &quot;Delete Account&quot;</li>
              <li>Click &quot;Delete my account&quot;</li>
              <li>Confirm your decision</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">What Gets Deleted</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you delete your account, the following data will be permanently removed within 30 days:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Your profile information and account settings</li>
              <li>All scheduled and draft content</li>
              <li>Media files you&apos;ve uploaded</li>
              <li>Analytics and performance data</li>
              <li>Connected social media account tokens</li>
              <li>AI-generated content history</li>
              <li>Support tickets and communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Export</h2>
            <p className="text-muted-foreground leading-relaxed">
              Before deleting your account, you can request a copy of your data. Go to Settings &gt; Privacy &gt; Export Data. You&apos;ll receive a download link via email within 24 hours containing all your personal data in a machine-readable format.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">GDPR Data Requests</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you&apos;re in the European Union, you have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Access</strong> - Request a copy of all data we hold about you</li>
              <li><strong>Rectification</strong> - Request correction of inaccurate data</li>
              <li><strong>Erasure</strong> - Request deletion of your data (&quot;right to be forgotten&quot;)</li>
              <li><strong>Restriction</strong> - Request we limit how we use your data</li>
              <li><strong>Portability</strong> - Receive your data in a portable format</li>
              <li><strong>Objection</strong> - Object to certain processing of your data</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To submit a GDPR request, email{' '}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="text-primary hover:underline">
                {PRIVACY_EMAIL}
              </a>{' '}
              with the subject line &quot;GDPR Request&quot;. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention After Deletion</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some data may be retained for legal, compliance, or legitimate business purposes even after account deletion. This includes anonymized analytics data, transaction records required for tax purposes, and data necessary to resolve disputes or enforce our terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Deleting your EmberForge account does not delete data stored by connected social media platforms. To remove data from those platforms, you must contact them directly through their respective privacy settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Need Help?</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you&apos;re having trouble deleting your account or have questions about data deletion, please contact our support team at{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
                {SUPPORT_EMAIL}
              </a>. We&apos;re here to help.
            </p>
          </section>

          {/* Navigation */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground">
              See also:{' '}
              <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              {' | '}
              <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
