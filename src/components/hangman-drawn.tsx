const bodyParts = [
  // Head
  <circle key="head" cx="100" cy="50" r="25" stroke="black" strokeWidth="3" fill="none" />,
  // Body
  <line key="body" x1="100" y1="75" x2="100" y2="150" stroke="black" strokeWidth="3" />,
  // Left Arm
  <line key="left-arm" x1="100" y1="90" x2="60" y2="120" stroke="black" strokeWidth="3" />,
  // Right Arm
  <line key="right-arm" x1="100" y1="90" x2="140" y2="120" stroke="black" strokeWidth="3" />,
  // Left Leg
  <line key="left-leg" x1="100" y1="150" x2="60" y2="190" stroke="black" strokeWidth="3" />,
  // Right Leg
  <line key="right-leg" x1="100" y1="150" x2="140" y2="190" stroke="black" strokeWidth="3" />,
];


export const HangmanDrawn = ({ errors }: { errors: number }) => {
  return (
    <svg height="250" width="200">
      {/* Base of the gallows */}
      <line x1="10" y1="240" x2="190" y2="240" stroke="black" strokeWidth="4" />
      {/* Foot of the gallows */}
      <line x1="60" y1="240" x2="60" y2="10" stroke="black" strokeWidth="4" />
      {/* Horizontal arm of the gallows */}
      <line x1="60" y1="10" x2="100" y2="10" stroke="black" strokeWidth="4" />
      {/* Rope */}
      <line x1="100" y1="10" x2="100" y2="25" stroke="black" strokeWidth="3" />

      {bodyParts.slice(0, errors)}
    </svg>
  );
};