import type { Project } from "@/content/site";

function Embedding() {
  const dots = Array.from({ length: 132 }, (_, i) => {
    const group = i % 3;
    const angle = i * 2.399963;
    const radius = 12 + Math.sqrt(i / 3) * 12;
    const cx =
      [210, 360, 415][group] +
      Math.cos(angle) * radius * [1.05, 0.85, 1.1][group];
    const cy = [210, 135, 255][group] + Math.sin(angle) * radius * 0.68;
    return (
      <circle
        key={i}
        cx={cx}
        cy={cy}
        r={i % 7 === 0 ? 3.3 : 2}
        fill={["#E18759", "#82BFC0", "#AAB6B9"][group]}
        opacity={0.35 + (i % 5) * 0.13}
      />
    );
  });
  return (
    <>
      <path d="M70 300h460M100 325V60" stroke="#526066" strokeWidth=".7" />
      <path
        d="M120 260C180 90 270 310 340 100S470 150 510 225"
        stroke="#8C9DA3"
        strokeWidth=".7"
        strokeDasharray="3 6"
        fill="none"
        opacity=".4"
      />
      <ellipse
        cx="210"
        cy="210"
        rx="103"
        ry="62"
        transform="rotate(-25 210 210)"
        className="contour"
      />
      <ellipse
        cx="360"
        cy="135"
        rx="91"
        ry="54"
        transform="rotate(25 360 135)"
        className="contour"
      />
      <ellipse
        cx="415"
        cy="255"
        rx="102"
        ry="55"
        transform="rotate(-15 415 255)"
        className="contour"
      />
      {dots}
      <circle
        cx="232"
        cy="192"
        r="10"
        fill="none"
        stroke="#E18759"
        strokeWidth=".7"
      />
      <path
        d="m242 192 45-30h25"
        stroke="#E18759"
        strokeWidth=".7"
        fill="none"
      />
      <text x="318" y="165" className="svg-small" fill="#E18759">
        z
      </text>
      <text x="508" y="321" className="svg-small">
        z₁ →
      </text>
      <text x="69" y="65" className="svg-small">
        z₂
      </text>
      <text x="34" y="35" className="svg-meta">
        REPRESENTATION SPACE
      </text>
      <text x="34" y="360" className="svg-meta">
        SYNTHETIC POINTS / NO FINANCIAL DATA
      </text>
      <text x="526" y="35" className="svg-meta">
        01
      </text>
    </>
  );
}
function Pipeline() {
  return (
    <>
      <text x="34" y="35" className="svg-meta">
        FROM RECORDS TO A USEFUL SYSTEM
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${60 + i * 10} ${108 + i * 16})`}>
          <rect
            width="124"
            height="147"
            rx="2"
            fill="#1E282B"
            stroke="#526066"
            strokeWidth=".7"
          />
          {Array.from({ length: 6 }, (_, j) => (
            <path
              key={j}
              d={`M15 ${23 + j * 19}h${j % 2 ? 69 : 88}`}
              stroke={i === 2 && j === 3 ? "#E18759" : "#657579"}
              strokeWidth="2"
              opacity=".65"
            />
          ))}
        </g>
      ))}
      <path
        d="M214 205h52m-8-5 8 5-8 5M366 205h43m-8-5 8 5-8 5"
        stroke="#E18759"
        fill="none"
      />
      <rect
        x="267"
        y="155"
        width="100"
        height="100"
        rx="2"
        fill="#253033"
        stroke="#E18759"
        strokeWidth=".8"
      />
      <path
        d="M317 175v17m-30 20v-20h60v20m-60 0v18m60-18v18M278 230h18m42 0h18"
        stroke="#E18759"
        fill="none"
      />
      <circle cx="317" cy="175" r="4" fill="#E18759" />
      <circle cx="287" cy="212" r="4" fill="#E18759" />
      <circle cx="347" cy="212" r="4" fill="#E18759" />
      <rect
        x="410"
        y="137"
        width="130"
        height="137"
        fill="#1E282B"
        stroke="#657579"
        strokeWidth=".7"
      />
      <path d="M425 160h67" stroke="#AAB6B9" />
      {[37, 61, 47, 78].map((height, i) => (
        <rect
          key={i}
          x={429 + 25 * i}
          y={249 - height}
          width="12"
          height={height}
          fill={i === 3 ? "#E18759" : "#758A8D"}
          opacity=".85"
        />
      ))}
      <text x="88" y="318" className="svg-small">
        PREPARE
      </text>
      <text x="289" y="318" className="svg-small">
        MODEL
      </text>
      <text x="446" y="318" className="svg-small">
        DELIVER
      </text>
      <text x="34" y="360" className="svg-meta">
        ILLUSTRATIVE WORKFLOW / NO CLIENT DATA
      </text>
    </>
  );
}
function Orbit() {
  return (
    <>
      <text x="34" y="35" className="svg-meta">
        MISSION / GROUND / TELEMETRY
      </text>
      <circle
        cx="300"
        cy="198"
        r="92"
        fill="#233033"
        stroke="#60797C"
        strokeWidth=".8"
      />
      {[0.3, 0.65, 1].map((n) => (
        <ellipse
          key={n}
          cx="300"
          cy="198"
          rx={92 * n}
          ry="92"
          stroke="#82BFC0"
          strokeWidth=".5"
          fill="none"
          opacity=".35"
        />
      ))}
      {[-50, -25, 0, 25, 50].map((y) => (
        <ellipse
          key={y}
          cx="300"
          cy={198 + y}
          rx={Math.sqrt(92 * 92 - y * y)}
          ry="15"
          stroke="#82BFC0"
          strokeWidth=".5"
          fill="none"
          opacity=".3"
        />
      ))}
      <ellipse
        cx="300"
        cy="198"
        rx="223"
        ry="79"
        transform="rotate(-28 300 198)"
        stroke="#82BFC0"
        strokeWidth="1"
        fill="none"
      />
      <ellipse
        cx="300"
        cy="198"
        rx="210"
        ry="115"
        transform="rotate(35 300 198)"
        stroke="#8C9DA3"
        strokeWidth=".6"
        strokeDasharray="3 7"
        fill="none"
        opacity=".7"
      />
      <path
        d="m442 114-75 127m75-127h57m-57 0v-55"
        stroke="#E18759"
        strokeWidth=".8"
        strokeDasharray="4 4"
      />
      <g transform="translate(442 114) rotate(-28)">
        <rect x="-11" y="-12" width="22" height="24" fill="#E18759" />
        <rect
          x="-46"
          y="-8"
          width="29"
          height="16"
          fill="#1B292D"
          stroke="#E18759"
        />
        <rect
          x="17"
          y="-8"
          width="29"
          height="16"
          fill="#1B292D"
          stroke="#E18759"
        />
        <path d="M-17 0h6m22 0h6" stroke="#E18759" />
      </g>
      <circle cx="367" cy="241" r="4" fill="#82BFC0" />
      <path d="M367 250v48h80" fill="none" stroke="#82BFC0" strokeWidth=".7" />
      <text x="453" y="302" className="svg-small">
        GROUND
      </text>
      <text x="34" y="360" className="svg-meta">
        CONCEPTUAL GEOMETRY / NOT MISSION DATA
      </text>
    </>
  );
}
// RK4 integration of θ'' + 0.5θ' + sin(θ) = 1.2 cos(2t/3).
// Fixed synthetic parameters; this is not a reconstruction of the academic experiment.
function pendulumPath() {
  let theta = 0.2,
    velocity = 0,
    time = 0;
  const dt = 0.035;
  const acceleration = (x: number, v: number, t: number) =>
    -0.5 * v - Math.sin(x) + 1.2 * Math.cos((2 * t) / 3);
  const paths: string[] = [];
  let priorX: number | undefined;
  for (let i = 0; i < 6500; i++) {
    const a = acceleration(theta, velocity, time);
    const b = acceleration(
      theta + (velocity * dt) / 2,
      velocity + (a * dt) / 2,
      time + dt / 2,
    );
    const c = acceleration(
      theta + ((velocity + (a * dt) / 2) * dt) / 2,
      velocity + (b * dt) / 2,
      time + dt / 2,
    );
    const d = acceleration(
      theta + (velocity + (b * dt) / 2) * dt,
      velocity + c * dt,
      time + dt,
    );
    theta +=
      (dt *
        (velocity +
          2 * (velocity + (a * dt) / 2) +
          2 * (velocity + (b * dt) / 2) +
          velocity +
          c * dt)) /
      6;
    velocity += (dt * (a + 2 * b + 2 * c + d)) / 6;
    time += dt;
    if (i < 900) continue;
    const wrapped =
      ((((theta + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) -
      Math.PI;
    const x = 300 + wrapped * 68,
      y = 195 - velocity * 57;
    paths.push(
      `${priorX === undefined || Math.abs(x - priorX) > 100 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`,
    );
    priorX = x;
  }
  return paths.join("");
}
const phasePath = pendulumPath();
function Chaos() {
  return (
    <>
      <text x="34" y="35" className="svg-meta">
        DRIVEN PENDULUM / PHASE SPACE
      </text>
      <path d="M65 195h470M300 65v260" stroke="#657579" strokeWidth=".6" />
      {[100, 200, 400, 500].map((x) => (
        <path
          key={x}
          d={`M${x} 65v260`}
          stroke="#526066"
          strokeWidth=".5"
          strokeDasharray="2 7"
          opacity=".4"
        />
      ))}
      <path
        d={phasePath}
        fill="none"
        stroke="#E18759"
        strokeWidth=".65"
        opacity=".55"
        strokeLinejoin="round"
      />
      <text x="527" y="218" className="svg-small">
        θ
      </text>
      <text x="315" y="72" className="svg-small">
        ω
      </text>
      <text x="34" y="360" className="svg-meta">
        SYNTHETIC PARAMETERS / ILLUSTRATIVE
      </text>
      <text x="480" y="35" className="svg-meta">
        θ̈ + δθ̇ + sin θ
      </text>
    </>
  );
}
export function ProjectVisual({
  kind,
  className = "",
}: {
  kind: Project["visual"];
  className?: string;
}) {
  return (
    <div
      className={`project-visual visual-${kind} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 600 390" fill="none">
        {kind === "embedding" ? (
          <Embedding />
        ) : kind === "pipeline" ? (
          <Pipeline />
        ) : kind === "orbit" ? (
          <Orbit />
        ) : (
          <Chaos />
        )}
      </svg>
    </div>
  );
}
