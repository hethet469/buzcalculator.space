import { Calculator } from "lucide-react"
import { BusinessCalculator } from "@/components/business-calculator"
import { InstallAppButton } from "@/components/install-app-button"

export default function Page() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-5 sm:px-6">
          <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Calculator className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h1 className="text-lg font-bold leading-none tracking-tight">Business Calculator</h1>
            <p className="mt-1 text-xs text-primary-foreground/70">
              A finance toolkit for margins, pricing, ROI and more
            </p>
          </div>
          <InstallAppButton />
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <BusinessCalculator />
        <footer className="mt-10 border-t border-border pt-6">
          <div className="text-center text-xs text-muted-foreground space-y-3">
            <p>Results are estimates for planning purposes only.</p>
            <p>
              This site uses{' '}
              <span className="font-medium">Google AdSense</span> to serve ads.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="/privacy"
                className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1"
              >
                Privacy Policy
              </a>
              <span className="text-border">•</span>
              <a
                href="/terms"
                className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
