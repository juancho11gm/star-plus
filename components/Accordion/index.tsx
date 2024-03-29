import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { theme } from '@styles/theme';

interface AccordionProps {
  summary: string;
  description: string;
}

interface accordionAnimationProps {
  node: HTMLElement | null;
  isOpen: boolean;
}

function accordionAnimation({ node, isOpen }: accordionAnimationProps) {
  gsap.to(node, {
    duration: 0.25,
    height: isOpen ? '0' : 'auto',
  });
}

const Accordion = ({ summary, description }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionContentRef = React.useRef<HTMLDivElement>(null);
  const accordionIcon = isOpen ? `-` : `+`;

  return (
    <div
      className="accordion-container"
      onClick={() => {
        accordionAnimation({ node: accordionContentRef.current, isOpen });
        setIsOpen(!isOpen);
      }}
    >
      <summary className="accordion-container__summary">{summary}</summary>

      <div className={`accordion-container__content`} ref={accordionContentRef}>
        <p
          className="accordion-container__description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <i className="accordion-container__icon">{accordionIcon}</i>

      <style jsx>
        {`
          .accordion-container {
            background-color: ${theme.colors.backgroundTertiary};
            margin-top: 16px;
            text-align: left;
            position: relative;

            &__content {
              color: ${theme.colors.textSecondary};
              height: 0;
              font-size: 16px;
              line-height: 26px;
              overflow: hidden;
              padding: 0 24px;
              transform-origin: top;
            }

            &__description {
              padding-bottom: 24px;
            }

            &__summary {
              align-items: center;
              cursor: pointer;
              display: flex;
              font-size: 15px;
              font-size: 18px;
              justify-content: space-between;
              line-height: 28px;
              list-style: none;
              padding: 24px;
            }

            &__icon {
              cursor: pointer;
              font-size: 50px;
              font-style: normal;
              line-height: 0.8;
              position: absolute;
              right: 20px;
              top: 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Accordion;
