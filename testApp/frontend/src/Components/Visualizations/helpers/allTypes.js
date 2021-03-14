export const typeLabels = ["Aging","Civil Service and Labor","Consumer Affairs","Cultural Affairs","Economy/Jobs","Education","Environment","Finance","General Welfare","Governmental Operations","Health","Housing and Buildings","Human and Civil Rights","Immigration","Land Use and Zoning","Legal Services","Parks","Public Safety","Quality of Life","Recovery and Resiliency","Sanitation","Select One","Transportation","Utilities","Veterans Affairs","Youth Services"]



const colors = [
"hsl(44, 70%, 50%)",
"hsl(195, 70%, 50%)",
"hsl(267, 70%, 50%)",
"hsl(358, 70%, 50%)",
"hsl(74, 70%, 50%)",
"hsl(69, 70%, 50%)",
"hsl(10, 70%, 50%)",
"hsl(71, 70%, 50%)",
"hsl(147, 70%, 50%)",
"hsl(84, 70%, 50%)",
"hsl(251, 70%, 50%)",
"hsl(44, 70%, 50%)",
"hsl(195, 70%, 50%)",
"hsl(267, 70%, 50%)",
"hsl(358, 70%, 50%)",
"hsl(74, 70%, 50%)",
"hsl(69, 70%, 50%)",
"hsl(10, 70%, 50%)",
"hsl(71, 70%, 50%)",
"hsl(147, 70%, 50%)",
"hsl(84, 70%, 50%)",
"hsl(251, 70%, 50%)",
"hsl(44, 70%, 50%)",
"hsl(195, 70%, 50%)",
"hsl(267, 70%, 50%)",
"hsl(358, 70%, 50%)",
"hsl(74, 70%, 50%)",
"hsl(69, 70%, 50%)",
"hsl(10, 70%, 50%)",
"hsl(71, 70%, 50%)",
"hsl(147, 70%, 50%)",
"hsl(84, 70%, 50%)",
"hsl(251, 70%, 50%)"
]


export const labelColorKey = {}

export const typeLabelsColors = typeLabels.forEach((label, idx) => {
  labelColorKey[label] = {
    label,
    [`${label}Color`]: colors[idx]
  }
})

