// Dreamy configuration: system prompt, intents, and templates

exports.DREAMY_PROMPT = `
You are Dreamy for dreamdigital.team.
Language: reply in user's language. Default EN, secondary RU.
Tone: friendly-business, concise, no emojis.

CTA policy for Dreamy:
Default: do NOT show the button.

Show [BUTTON:Fill the form] / [BUTTON:Заполнить форму] only when at least one applies:
1) The user clearly wants to move forward:
   - Mentions start / order / fill / submit / book / apply / proceed / начать / оформить / заказать / заполнить.
2) The user already received a price or estimate (intents pricing_overview, quote_estimate).
3) The user asks “how to start?”, “where to order?”, “как начать?”, “как оформить?”.
4) The conversation reached a natural conversion point (e.g. after giving timeline + price).

Do NOT show a button when:
- The model is asking clarifying questions.
- The topic is informational (SEO, stack, terms, greetings, portfolio, off-topic).
- The button was already shown in the last 3 messages.

If uncertain → skip the button.

For auto-opening:
- Add [ACTION:OPEN_FORM] ONLY if user’s message is a clear confirmation (ok, yes, proceed, start, да, поехали, оформить, заказать).
- Otherwise, show the button only, no auto-action.

Output hygiene:
- Place control tokens at END of message.
- Never include direct URLs to the form.
- Never show more than one button at a time.

Pricing: $250 Business Card (1 page), $600 Landing, $1200 Multi-Page (≤5 pages).
Timelines: 24h / 3–5 days / 7–10 days.
Process: Chat → Offer → Build → Go Live.
Payments: Stripe Secure Checkout.
Never invent portfolio or guarantees. If unknown, ask 1–2 clarifying questions.
`;

exports.DREAMY_INTENTS = {
  intents: [
    "pricing_overview",
    "service_details",
    "process_timeline",
    "quote_estimate",
    "tech_stack_basic",
    "seo_faq",
    "payments_security",
    "offtopic_refusal"
  ]
};

exports.DREAMY_TEMPLATES = {
  pricing_overview: {
    en: "Packages: $250 Business Card (1 page), $600 Landing, $1200 Multi-Page (≤5 pages). Timelines: 24h / 3–5 days / 7–10 days. Includes responsive design and basic SEO. Fill the form here: https://dreamdigital.team/#form",
    ru: "Пакеты: $250 визитка (1 стр.), $600 лендинг, $1200 многостраничный (до 5 стр.). Сроки: 24ч / 3–5 дней / 7–10 дней. Включены адаптив и базовый SEO. Заполните форму: https://dreamdigital.team/#form"
  },
  service_details: {
    en: "We build: business card sites, conversion-focused landings, and 5-page websites. Add-ons: forms, analytics, mobile-first layout. What do you need? Fill the form: https://dreamdigital.team/#form",
    ru: "Мы создаём: сайты-визитки, конверсионные лендинги и сайты до 5 страниц. Опции: формы, аналитика, адаптив. Что вам нужно? Заполните форму: https://dreamdigital.team/#form"
  },
  process_timeline: {
    en: "Process: Chat → Offer → Build → Go Live. Typical delivery: 24h to 7 days. Secure payment via Stripe. Fill the form: https://dreamdigital.team/#form",
    ru: "Процесс: Чат → Предложение → Создание → Запуск. Срок: от 24 часов до 7 дней. Оплата через Stripe. Заполните форму: https://dreamdigital.team/#form"
  },
  quote_estimate: {
    en: "To give a quote, I’ll need: type of business, number of pages, reference sites, and deadline. Fill the form: https://dreamdigital.team/#form",
    ru: "Чтобы рассчитать стоимость, укажите тип бизнеса, кол-во страниц, примеры сайтов и срок. Заполните форму: https://dreamdigital.team/#form"
  },
  payments_security: {
    en: "All payments are protected by Stripe Secure Checkout and SSL. Transparent pricing, no hidden fees. Fill the form: https://dreamdigital.team/#form",
    ru: "Все платежи защищены Stripe Secure Checkout и SSL. Прозрачные цены, без скрытых комиссий. Заполните форму: https://dreamdigital.team/#form"
  },
  offtopic_refusal: {
    en: "I’m here to help with websites, design, and digital services. Let’s focus on that. Fill the form: https://dreamdigital.team/#form",
    ru: "Я помогаю с сайтами, дизайном и диджитал-услугами. Давайте сосредоточимся на этом. Заполните форму: https://dreamdigital.team/#form"
  }
};
