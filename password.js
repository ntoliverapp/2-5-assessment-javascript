function welcome(newUser) {
  console.log(`Welcome, ${newUser}!`)
  console.log('Please enter a password that is 10 characters long (with uppercase and special characters,): ') 
}
function createPassWord(passWord) {
  let passWordSplit = passWord.split('')
  console.log(passWordSplit)

  let passWordSpecial = ['@', '#', '%', '$', '%', '^', '&', '&', '*', '(', ')']

  for (let i = 0; i < passWordSpecial.length; i++) {
  
  if(passWordSplit.length >= 10 === true && passWordSpecial.includes(passWordSpecial[i]) === true) {
    console.log(`Your password is good to go!`)
    break
  } else if(passWordSplit.length >= 10 === true && passWordSpecial.includes(passWordSpecial[i]) !== true) {
    console.log('Sorry, please include special characters in your password')
    break
   } else if(passWordSplit.length >= 10 !== true && passWordSpecial.includes(passWordSpecial[i]) === true) {
    console.log(`Sorry please type a password that is 10 characters long`)
    break
  //console.log(`Your password is good to go!`)
  }
}
}
let website = welcome('Niq')
let passwordAuthenticator = createPassWord("Wh$gggdkgj")

