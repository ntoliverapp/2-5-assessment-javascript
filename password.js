function welcome(newUser) {
  console.log(`Welcome, ${newUser}!`)
  console.log('Please enter a password that is 10 charaters long (with uppercase and special characters,): ') 
}
function createPassWord(passWord) {
  let passWordSplit = passWord.split('')
  console.log(passWordSplit)

  let passWordSpecial = ['@', '#', '%']
  for (let i = 0; i < passWordSpecial.length; i++){
    if(passWordSpecial[i].includes !== true) {
      console.log('Sorry, please include special characters in your password')
      break
    }
  }
  
  if(passWordSplit.length >= 10 !== true) {
    console.log(`Sorry please type a password that is 10 characters long`)
  //} else if(passWordSplit.includes('@') !== true) {
    //console.log('Sorry, please include special characters in your password')
  //} else {
  //    console.log(`Your password is good to go!`)
  }
}
let website = welcome('Niq')
let passwordAuthenticator = createPassWord("Whngg dkgj")

