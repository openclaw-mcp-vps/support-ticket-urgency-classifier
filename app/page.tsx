export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          AI-Powered Triage
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Stop Drowning in{' '}
          <span className="text-[#58a6ff]">Support Tickets</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          TriageAI automatically classifies incoming tickets by urgency and business impact, routing critical issues to senior staff before they escalate — in seconds, not hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial — $45/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[['< 2s', 'Classification time'], ['99%', 'Routing accuracy'], ['4h', 'Avg time saved/day']].map(([stat, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            ['🔥', 'Urgency Scoring', 'AI assigns P0–P4 priority scores based on sentiment, keywords, and customer tier.'],
            ['⚡', 'Instant Routing', 'Critical tickets go straight to senior staff via Slack, email, or your helpdesk.'],
            ['📊', 'Live Dashboard', 'Monitor ticket flow, team load, and SLA compliance in real time.']
          ].map(([icon, title, desc]) => (
            <div key={title} className="p-4">
              <div className="text-3xl mb-3">{icon}</div>
              <div className="font-semibold text-white mb-2">{title}</div>
              <div className="text-sm text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple, Flat Pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included. Cancel anytime.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 shadow-lg shadow-[#58a6ff]/5">
          <div className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-4">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$45</div>
          <div className="text-[#8b949e] mb-8">/month per workspace</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited ticket classification',
              'Webhook & API integrations',
              'Slack + email routing',
              'Real-time analytics dashboard',
              'Custom urgency rules',
              'Priority support'
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-center transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            [
              'How does the AI classify tickets?',
              'TriageAI analyzes ticket text using large language models, considering sentiment, urgency keywords, customer tier, and historical patterns to assign a P0–P4 priority score with a confidence rating.'
            ],
            [
              'Which support platforms do you integrate with?',
              'We support Zendesk, Intercom, Freshdesk, and any platform that accepts webhooks. You can also use our REST API to push tickets from custom systems.'
            ],
            [
              'What happens during the free trial?',
              'You get full access to all Pro features for 14 days with no credit card required. At the end of the trial you can subscribe or your account pauses — no surprise charges.'
            ]
          ].map(([q, a]) => (
            <div key={q} className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} TriageAI · AI-powered support ticket triage
      </footer>
    </main>
  )
}
