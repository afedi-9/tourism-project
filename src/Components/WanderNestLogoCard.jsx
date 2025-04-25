import React from 'react'

const WanderNestLogoCard = ({className = "h-6 w-6" }) => {
  return (
    <div>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g className="text-teal-500" fill="currentColor" stroke="none">
        {/* Nest */}
        <path d="M44 28c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 1.69.35 3.3.979 4.76A8 8 0 0132 44a8 8 0 0111.021-11.24c.629-1.46.979-3.07.979-4.76z" />

        {/* Small bird */}
        <circle cx="38" cy="22" r="3" />
      </g>

      {/* Flight path */}
      <path
        d="M12 32c6-10 12-16 20-16M52 32c-6-10-12-16-20-16"
        className="text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeDasharray="2 2"
      />

      {/* Compass points */}
      <path
        d="M32 8V4M32 60v-4M56 32h4M4 32h4"
        className="text-slate-300"
        fill="none"
        stroke="currentColor"
      />

      {/* Compass circle */}
      <circle
        cx="32"
        cy="32"
        r="28"
        className="text-slate-200"
        fill="none"
        stroke="currentColor"
        strokeDasharray="2 4"
      />
    </svg>
    </div>
  )
}

export default WanderNestLogoCard