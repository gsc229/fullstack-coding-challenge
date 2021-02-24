/* 
Pie Data Dtructure: 
[
  {
    "id": "elixir",
    "label": "elixir",
    "value": 43,
    "color": "hsl(332, 70%, 50%)" <-- this is optional
  },
  ...
]

Fill Data Structure:
[
  {
      match: {
          id: 'javascript'
      },
      id: 'lines'
  },
  ...
]

*/

export const defs = [
  {
      id: 'dots',
      type: 'patternDots',
      background: 'inherit',
      color: 'rgba(255, 255, 255, 0.3)',
      size: 4,
      padding: 1,
      stagger: true
  },
  {
      id: 'lines',
      type: 'patternLines',
      background: 'inherit',
      color: 'rgba(255, 255, 255, 0.3)',
      rotation: -45,
      lineWidth: 6,
      spacing: 10
  }
]

export const fill=[]

export const pieConverter = (data, labelField, numberField) => {

  const pieData = data.map(datum => {
    const randomFill = Math.ceil(Math.random() * defs.length )

    if(defs[randomFill]){
      fill.push({
        match: {
            id: datum[labelField]
        },
        id: defs[randomFill].id
    })
    }

    return { id: datum[labelField], label: datum[labelField], value: datum[numberField] }
  })

  return pieData
}