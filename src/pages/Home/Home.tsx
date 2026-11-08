import { useState, type FormEvent } from 'react'
import {
  Accordion,
  Button,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap'
import Outcomes from '../../components/Outcomes/Outcomes'
import heroPhoto from '../../assets/pic-optimized.jpg'
import therapistPhoto from '../../assets/photo1-optimized.jpg'
import processPhoto from '../../assets/bg1-optimized.jpg'
import './Home.css'

const regions = [
  {
    name: 'United States',
    timezone: 'EST / PST',
    count: '100+',
    label: 'USA Counseling Done',
    description:
      'Helping professionals, students, and expats navigate high-pressure careers and anxiety.',
  },
  {
    name: 'India',
    timezone: 'IST Slots',
    count: '140+',
    label: 'India Counseling Done',
    description:
      'Culturally attuned therapy for family expectations, relationship shifts, and emotional burnout.',
  },
  {
    name: 'Australia',
    timezone: 'AEST / AEDT',
    count: '160+',
    label: 'Australia Counseling Done',
    description:
      'Dedicated counseling for individuals, immigrants, and couples building resilience abroad.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Free 15-Min Discovery Call',
    description:
      'We start with a relaxed, no-pressure video or phone chat. Share what brings you here, ask questions about my style, and see if we feel like a natural fit.',
  },
  {
    number: '02',
    title: 'Your First Deep-Dive Session',
    description:
      "In our first 50-minute session, we gently map out your story, current stressors, and what 'feeling better' looks like for you—at a pace that feels safe.",
  },
  {
    number: '03',
    title: 'Personalized Rhythm & Tools',
    description:
      'We meet weekly or bi-weekly via secure video across USA, India, or Australia time zones. Together, we blend reflection with practical coping strategies.',
  },
  {
    number: '04',
    title: 'Lasting Clarity & Independence',
    description:
      "As you build emotional resilience and healthier boundaries, we celebrate your growth and taper sessions when you're ready.",
  },
]

const faqs = [
  {
    question:
      'How do sessions work across USA, India, and Australia time zones?',
    answer:
      'Sessions are conducted via secure video telehealth. Dedicated morning and evening blocks help accommodate clients in North America (EST/PST), India (IST), and Australia (AEST/AEDT). Availability is confirmed during the discovery call.',
  },
  {
    question:
      "What if I've never been to therapy before and don't know what to say?",
    answer:
      'That is completely normal. You do not need a prepared script. I will gently guide our first conversation with thoughtful questions so you never feel put on the spot.',
  },
  {
    question: 'How long is each session and how often do we meet?',
    answer:
      'Standard individual sessions are 50 minutes. Many clients begin weekly to build momentum and trust, then move to bi-weekly or monthly check-ins as they feel more grounded. We will decide together what feels right for you.',
  },
]

export default function Home() {
  const [formNotice, setFormNotice] = useState('')
  const [copyNotice, setCopyNotice] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormNotice(
      'This form preview does not send or store your information. Secure form delivery must be connected before launch.',
    )
  }

  async function copyContactText() {
    const contactText =
      'BEGIN YOUR JOURNEY\\nTake the first gentle step toward feeling lighter.\\nGlobal timezone availability:\\nUSA (100+ done): EST / CST / PST\\nIndia (140+ done): IST daytime and evening\\nAustralia (160+ done): AEST / AEDT'

    try {
      await navigator.clipboard.writeText(contactText)
      setCopyNotice('Availability details copied.')
    } catch {
      setCopyNotice('Copy is unavailable in this browser. Please copy the details above.')
    }
  }

  return (
    <>
      <section className="home-hero bg-dark-blue-2 text-white" id="home">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6} className="home-hero__copy">
              <p className="home-hero__eyebrow text-dusty-blue-2">
                Thoughtful online counseling
              </p>
              <h1 className="home-hero__title">
                You don&apos;t have to figure it all out alone.
              </h1>
              <p className="home-hero__description">
                A warm, culturally aware space to work through anxiety,
                relationships, burnout, and life&apos;s transitions—at a pace
                that feels right for you.
              </p>
              <Button
                as="a"
                href="#contact"
                variant="primary"
                size="lg"
                className="rounded-0"
              >
                SCHEDULE NOW
              </Button>
              <p className="home-hero__note">
                Confidential online sessions · USA, India &amp; Australia
              </p>
            </Col>
            <Col lg={6}>
              <img
                className="home-hero__photo rounded-0"
                src={heroPhoto}
                alt="Counselor welcoming clients in a calm, comfortable setting"
                width="1200"
                height="1800"
                fetchPriority="high"
                decoding="async"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="impact-section py-section" aria-labelledby="impact-title">
        <Container>
          <div className="section-heading text-center">
            <p className="section-eyebrow">Across three continents</p>
            <h2 id="impact-title">A little support can make a lasting impact.</h2>
          </div>
          <Row className="g-0 impact-grid">
            <Col md={6} xl={3}>
              <article className="impact-card impact-card--total">
                <p className="impact-card__kicker">Total impact</p>
                <span className="impact-card__check" aria-hidden="true">✓</span>
                <p className="impact-card__number">400+</p>
                <h3>Counseling Sessions Done</h3>
                <p>
                  Compassionate individual and cross-cultural counseling
                  across three continents.
                </p>
              </article>
            </Col>
            {regions.map((region) => (
              <Col md={6} xl={3} key={region.name}>
                <article className="impact-card">
                  <p className="impact-card__kicker">{region.name}</p>
                  <span className="impact-card__timezone">{region.timezone}</span>
                  <p className="impact-card__number">{region.count}</p>
                  <h3>{region.label}</h3>
                  <p>{region.description}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Outcomes />

      <section className="about-section py-section" id="about">
        <Container>
          <Row className="align-items-center gy-5 gx-lg-5">
            <Col lg={5}>
              <img
                className="about-section__photo"
                src={therapistPhoto}
                alt="Runita Sahay, counselor"
                width="1600"
                height="1067"
                loading="lazy"
                decoding="async"
              />
            </Col>
            <Col lg={7}>
              <p className="section-eyebrow">Show empathy · About her</p>
              <h2 className="about-section__title">
                Hi, I&apos;m Runita Sahay. I understand how hard it is to ask
                for support when you&apos;re used to being the strong one.
              </h2>
              <p>
                For the past several years, I have guided more than 400
                individuals across the United States, India, and Australia
                through anxiety, burnout, family dynamics, and major life
                transitions. My approach isn&apos;t cold, clinical, or rigid.
                I believe meaningful change happens when evidence-based
                psychology meets genuine human warmth.
              </p>
              <p>
                In our sessions, we work collaboratively to understand your
                patterns and explore practical tools for everyday life. Having
                worked across Western and South Asian cultural contexts, I
                bring cultural nuance—so you don&apos;t have to spend your
                time explaining your family values or background.
              </p>
              <div className="about-section__topics" aria-label="Areas of support">
                <span>Anxiety &amp; overthinking</span>
                <span>Burnout &amp; career stress</span>
                <span>Cross-cultural identity</span>
                <span>Relationships &amp; attachment</span>
                <span>Self-esteem</span>
                <span>Life transitions &amp; grief</span>
              </div>
              <blockquote className="about-section__quote">
                “You don&apos;t have to wait until things fall apart to ask
                for support. Therapy is where we slow down the noise so you can
                hear your own voice again.”
              </blockquote>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="process-section py-section" id="how-it-works">
        <Container>
          <Row className="align-items-center gy-5 gx-lg-5">
            <Col lg={5}>
              <div className="process-section__image-wrap">
                <img
                  className="process-section__photo"
                  src={processPhoto}
                  alt="A peaceful landscape representing space for reflection"
                  width="1600"
                  height="1066"
                  loading="lazy"
                  decoding="async"
                />
                <div className="process-section__image-caption">
                  <span>One step at a time</span>
                  <strong>Your pace. Your path.</strong>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <p className="section-eyebrow">How it works</p>
              <h2 className="process-section__title">
                Therapy, step by step.
              </h2>
              <p className="process-section__intro">
                Starting therapy shouldn&apos;t feel intimidating. Here is the
                step-by-step path from our first hello to greater emotional
                clarity.
              </p>
              <div className="process-steps">
                {steps.map((step) => (
                  <article className="process-step" key={step.number}>
                    <span className="process-step__number">{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>
              <Button
                as="a"
                href="#contact"
                variant="primary"
                className="rounded-0 mt-4"
              >
                SCHEDULE NOW
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="faq-section py-section" id="faq">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <div className="section-heading text-center">
                <p className="section-eyebrow">A few things you may wonder</p>
                <h2>Frequently Asked Questions</h2>
                <p>Click a question to expand the answer.</p>
              </div>
              <Accordion className="faq-accordion">
                {faqs.map((faq, index) => (
                  <Accordion.Item eventKey={String(index)} key={faq.question}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-section py-section" id="contact">
        <Container>
          <Row className="gy-5 gx-lg-5">
            <Col lg={5}>
              <p className="section-eyebrow">Begin your journey</p>
              <h2 className="contact-section__title">
                Take the first gentle step toward feeling lighter.
              </h2>
              <p className="contact-section__intro">
                Whether you&apos;re ready to book a first session or simply
                want to ask a few questions, you deserve a warm and thoughtful
                response.
              </p>
              <Button
                variant="outline-primary"
                className="rounded-0 mb-4"
                onClick={copyContactText}
                type="button"
              >
                Copy Contact Text
              </Button>
              <p className="contact-copy-status" role="status" aria-live="polite">
                {copyNotice}
              </p>
              <div className="timezone-card">
                <h3>Global timezone availability</h3>
                <p><span aria-hidden="true">🇺🇸</span> USA · EST / CST / PST</p>
                <p><span aria-hidden="true">🇮🇳</span> India · IST daytime &amp; evening</p>
                <p><span aria-hidden="true">🇦🇺</span> Australia · AEST / AEDT</p>
              </div>
              <p className="contact-section__response">
                Inquiries are typically answered within 24–48 business hours.
              </p>
            </Col>
            <Col lg={7}>
              <div className="contact-form-card">
                <p className="section-eyebrow">100% confidential</p>
                <h3>Schedule your free 15-minute consultation</h3>
                <p className="contact-form-card__subtitle">
                  USA, India &amp; Australia-friendly hours
                </p>
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="contactName">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control
                          autoComplete="name"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="contactEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          autoComplete="email"
                          name="email"
                          placeholder="you@example.com"
                          required
                          type="email"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="contactTimezone">
                        <Form.Label>Your location / time zone</Form.Label>
                        <Form.Select defaultValue="" name="timezone" required>
                          <option disabled value="">Choose your location</option>
                          <option>United States (EST / CST / PST)</option>
                          <option>India (IST)</option>
                          <option>Australia (AEST / AEDT)</option>
                          <option>Other location</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="sessionType">
                        <Form.Label>Session type</Form.Label>
                        <Form.Select defaultValue="discovery" name="sessionType">
                          <option value="discovery">Free 15-Min Discovery Call</option>
                          <option value="individual">Individual Therapy (50 Min)</option>
                          <option value="couples">Couples / Relationship Session</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="contactMessage">
                        <Form.Label>How can I support you? (Optional)</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          placeholder="Share only what feels comfortable."
                          rows={4}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Button
                        className="w-100 rounded-0"
                        type="submit"
                        variant="primary"
                      >
                        Send Confidential Inquiry
                      </Button>
                    </Col>
                  </Row>
                  <p
                    className="contact-form-card__notice"
                    role="status"
                    aria-live="polite"
                  >
                    {formNotice ||
                      'Form preview only: secure submission is not connected yet. Please do not include sensitive health information.'}
                  </p>
                  <p className="contact-form-card__privacy" id="privacy">
                    Privacy: this page does not store form entries. Secure
                    delivery must be connected before the form is used for
                    inquiries.
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
