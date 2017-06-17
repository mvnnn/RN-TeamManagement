const member = [
  { first_name: 'Adien', last_name:'Olczak(admin)', email:'adrien@instawork.com', mobile_no:"415-310-1619", role:0 },
  { first_name: 'Adien2', last_name:'Olczak(admin)', email:'adrien@instawork.com', mobile_no:"415-310-1619", role:1 },
  { first_name: 'Adien3', last_name:'Olczak(admin)', email:'adrien@instawork.com', mobile_no:"415-310-1619",role:0 }
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(member)
    }, 3000)
  })
}
