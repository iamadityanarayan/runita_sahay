import { Col, Container, Row } from 'react-bootstrap'
import './Outcomes.css'

const outcomes = [
  {
    icon: 'calm',
    title: 'Manage anxiety & stress',
    description:
      'Understand your stress responses and build practical tools for calmer days.',
  },
  {
    icon: 'heart',
    title: 'Build healthier relationships',
    description:
      'Create more secure connections with clearer communication and boundaries.',
  },
  {
    icon: 'growth',
    title: 'Improve confidence',
    description:
      'Quiet your inner critic and reconnect with your strengths and values.',
  },
  {
    icon: 'path',
    title: 'Navigate life transitions',
    description:
      'Find steadiness and direction through change, loss, and new beginnings.',
  },
] as const

type OutcomeIconName = (typeof outcomes)[number]['icon']

function OutcomeIcon({ name }: { name: OutcomeIconName }) {
  const paths: Record<OutcomeIconName, string> = {
    calm: 'M3 12c2.2-5.5 4.4 5.5 6.7 0s4.4 5.5 6.6 0 4.5 5.5 6.7 0',
    heart:
      'M20.8 8.8c0 5.1-8.8 10-8.8 10s-8.8-4.9-8.8-10A4.8 4.8 0 0 1 12 6.5a4.8 4.8 0 0 1 8.8 2.3Z',
    growth:
      'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7.5 8a7.5 7.5 0 0 1 15 0M18 5h4m-2-2v4',
    path: 'M4 19c4.5 0 5-10 10-10h5m-4-4 4 4-4 4M4 5h3',
  }

  return (
    <svg
      aria-hidden="true"
      className="outcome-card__icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d={paths[name]}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  )
}

export default function Outcomes() {
  return (
    <section
      className="outcomes-section py-section"
      id="services"
      aria-labelledby="outcomes-title"
    >
      <Container className="outcomes-section__content">
        <div className="section-heading text-center">
          <p className="section-eyebrow">Desirable outcomes</p>
          <h2 id="outcomes-title">Make room for a different way forward.</h2>
          <p>
            Therapy offers a supportive place to understand yourself and
            practice changes that matter in everyday life.
          </p>
        </div>
        <Row className="g-4">
          {outcomes.map((outcome, index) => (
            <Col sm={6} xl={3} key={outcome.title}>
              <article className="outcome-card h-100">
                <span className="outcome-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="outcome-card__icon-wrap">
                  <OutcomeIcon name={outcome.icon} />
                </div>
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
