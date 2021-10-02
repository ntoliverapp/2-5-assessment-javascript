//Directions

// Create a new file called password.js. Write a program that does the following:

// Welcome the user to the password validator tool
// Prompt the user for a password to validate
// Check if the user’s password meets the following constraint:
// At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user
// If the user’s password fails the constraint, show a failure message to the user

const readline = require('readline')
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


user.question('Welcome! Please enter a password that is 10 characters long: ',passWord => {
  let passWordSplit = passWord.split('')
  console.log(passWordSplit)

  


  if(passWordSplit.length >= 10 === true){
    console.log(`Your password is good to go!`)
    user.close()
  
    } 
    else if (passWordSplit.length >= 10 !== true )  
    {
          console.log(`Sorry your password was not 10 characters long.`)
          user.question ("Please re-enter your password with at least 10 characters: ", 
          passWord => {
            let passWordSplit = passWord.split('')
            console.log(passWordSplit)
        
            {
              if(passWordSplit.length >= 10 === true ) 
              {
                console.log(`Your password is good to go!`)
              user.close()
          } else {
            console.log('sorry, please refresh the page and try again')
            user.close()
          }
        }
      })
    }})
    


////WORK IN PROGRESS BELOW (ADDING SPECIAL CHARACTER CHECK)
// const readline = require('readline')
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


// reader.question('Welcome! Please enter a password that is 10 characters long (include special characters): ',passWord => {
//   let passWordSplit = passWord.split('')
//   console.log(passWordSplit)

//   let passWordSpecial = ['@', '#', '%', '$', '%', '^', '&', '&', '*', '(', ')']

//   for (let i = 0; i < passWordSplit.length; i++){


//   if(passWordSplit.length >= 10 === true && passWordSplit.includes(passWordSpecial[i]) === true){
//     console.log(`Your password is good to go!`)
//     reader.close()
//     break
  
//     } 
//     else if (passWordSplit.length >= 10 !== true && passWordSplit.includes(passWordSpecial[i]) === true) 
//     break 
//     {
//           console.log(`Sorry your password was not 10 characters long.`)
//           reader.question ("Please re-enter your password with at least 10 characters (remember to include special characters too): ", 
//           passWord => {
//             let passWordSplit = passWord.split('')
//             console.log(passWordSplit)
          
//             let passWordSpecial = ['@', '#', '%', '$', '%', '^', '&', '&', '*', '(', ')']
          
//             for (let i = 0; i < passWordSpecial.length; i++) 
//             {
//               if(passWordSplit.length >= 10 === true && passWordSpecial.includes(passWordSpecial[i]) === true) 
//               {
//                 console.log(`Your password is good to go!`)
//               reader.close()
//           }
//         }
//       })
//     } 
//     if (passWordSplit.length >= 10 === true && passWordSplit.includes(passWordSpecial[i]) !== true)
//     {
//     console.log(`Sorry you forgot a special character`)
//     reader.question ("Please re-enter your password: ", 
//     passWord => {
//       let passWordSplit = passWord.split('')
//       console.log(passWordSplit)
    
//       let passWordSpecial = ['@', '#', '%', '$', '%', '^', '&', '&', '*', '(', ')']
    
//       for (let i = 0; i < passWordSplit.length; i++) {
//         if(passWordSplit.length >= 10 === true && passWordSplit.includes(passWordSpecial[i]) === true) {
//           console.log(`Your password is good to go!`)
//         reader.close()
//   break

// }}})
//     }}})