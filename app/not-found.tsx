import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 md:py-32">
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#f97316]/10 rounded-full blur-[100px] -z-10" />

        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[180px] font-bold leading-none gradient-text mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Page not found
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="shimmer-button text-primary-foreground font-semibold px-6" asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button variant="outline" className="shiny-outline" asChild>
            <Link href="/pricing">View pricing</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
