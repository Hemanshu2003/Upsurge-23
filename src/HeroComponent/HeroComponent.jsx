import './HeroComponent.css';

export default function HeroComponent() {
  return (
    <div className="hero">
      <div className="centered">
        <div className="neon">UPSURGE 2k23</div>
      </div>
      <svg>
        <defs>
          <filter id="stroke">
            <feMorphology
              operator="dilate"
              radius="1"
              in="SourceGraphic"
              result="outside"
            />
            <feMorphology
              operator="dilate"
              radius="2"
              in="outside"
              result="thickened"
            />
            <feComposite
              operator="out"
              in2="SourceGraphic"
              in="thickened"
              result="stroke"
            />
          </filter>

          <filter id="inner-glow">
            <feFlood flood-color="#e10b8d" />
            <feComposite in2="SourceAlpha" operator="out" />
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feComposite operator="atop" in2="SourceGraphic" />
          </filter>

          <filter id="outer-glow">
            <feMorphology
              operator="dilate"
              radius="2"
              in="SourceAlpha"
              result="thicken"
            />

            <feGaussianBlur in="thicken" stdDeviation="5" result="blurred" />

            <feFlood flood-color="#db0273" result="glowColor" />

            <feComposite
              in="glowColor"
              in2="blurred"
              operator="in"
              result="softGlow_colored"
            />

            <feMerge>
              <feMergeNode in="softGlow_colored" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="outer-glow1">
            <feMorphology
              operator="dilate"
              radius="20"
              in="SourceAlpha"
              result="thicken"
            />

            <feGaussianBlur in="thicken" stdDeviation="25" result="blurred" />

            <feFlood flood-color="#530139" result="glowColor" />

            <feComposite
              in="glowColor"
              in2="blurred"
              operator="in"
              result="softGlow_colored"
            />

            <feMerge>
              <feMergeNode in="softGlow_colored" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
