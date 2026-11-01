const questions = [
  { question: 'How do you choose between automation platforms?', answer: 'The choice depends on the workflow, integrations, operating requirements, cost, and who will maintain it. I start with the problem and constraints before recommending a platform.' },
  { question: 'How do you handle unreliable AI output?', answer: 'I treat model output as untrusted input. Depending on the workflow, schema validation, deterministic rules, authorization, and human review can prevent an AI recommendation from becoming an unchecked action.' },
  { question: 'Can you work with tools that have no built-in integration?', answer: 'Where a service provides a suitable API or webhook, a custom integration may be possible. Authentication, permissions, rate limits, and error handling need to be assessed first.' },
  { question: 'What happens during a workflow review?', answer: 'We discuss the current process, the tools involved, bottlenecks, and the outcome you want. That helps identify practical next steps and constraints.' },
];

export function FAQ() {
  return <section id="faq" className="tech-band mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><p className="eyebrow">Common questions</p><h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A few practical answers.</h2><div className="mt-7 divide-y divide-white/10 rounded-xl border border-cyan-100/15 bg-[#08141d]/80">{questions.map((item) => <details key={item.question} className="faq-item"><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>;
}
