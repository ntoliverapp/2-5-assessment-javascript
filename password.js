function welcome(newUser) {
  console.log(`Welcome, ${newUser}!`)
  console.log('Please enter a password: ') 

  function createPassWord(passWord) {
    passWordSplit = passWord.split('')
    console.log(passWordSplit)
    if(passWordSplit.length > 10) {
      console.log(`Your password is good to go ${newUser}`)
    } else {
      console.log(`Sorry ${newUser} please type a password that is 10 characters long`)
    }
  }
}

welcome('Niq')
createPassWord("Whdhforn fldkgj")

