export const complaintFieldTitle = {
  unique_key: {title: "ID", order: 0},
  account: {title: "Member District", order: 1},
  council_dist: {title: "Complainant Dist.", order: 2},
  complaint_type: {title: "Type", order: 3},
  opendate: {title: "Opened On", order: 4},
  closedate: {title: "Closed On", order: 5},
  descriptor: {title: "Desc.", order: 6},
  zip: {title: "Zip", order: 7},
  borough: {title: "Borough", order: 8},
  city: {title: "City", order: 9},
  community_board: {title: "Comm. Board", order: 10}
}

export const csvHeaders = Object
.entries(complaintFieldTitle)
.sort((a, b) => ( a[1].order - b[1].order ))
.map(entry => ({label: entry[1].title, key: entry[0] }))


