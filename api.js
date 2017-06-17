const member = [
  { first_name: 'Adien', last_name:'Olczak(admin)', email:'adrien@instawork.com', mobile_no:"415-310-1619", role:1 },
  { first_name: 'Charlene', last_name:'Pham', email:'charlene@instawork.com', mobile_no:"415-310-1619", role:0 },
  { first_name: 'Benson', last_name:'Mach', email:'benson@instawork.com', mobile_no:"415-310-1619",role:0 },
  { first_name: 'Dan', last_name:'Petrie', email:'dan@instawork.com', mobile_no:"415-310-1619",role:0 }
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(member)
    }, 3000)
  })
}
