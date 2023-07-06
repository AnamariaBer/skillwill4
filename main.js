const users =  [
    {name: 'Temo', age: 25},
{name: 'Lasha', age: 21}, 
{name: 'Ana', age: 28}
]

function findYoungestName(users) {
    let youngestAge = 28;
    let youngestName = "";
    
    for(let i = 0; i < users.length; i++) {
        if (users[i].age < youngestAge) {
             youngestAge = users[i].age;
             youngestName = users[i].name;
        }
        
    }
    return youngestName;
    
}
const youngestName = findYoungestName(users);
 console.log("The youngest person is:", youngestName);


 const user = {
    name: "Anamaria",
    age: 15,
    email: "anamariaber2008@gmail.com"
}

function cloneUser(user) {
    const clonedUser = {};
  for (const key in user) {
    clonedUser[key] = user[key];
  }
  return clonedUser;
}
const clonedUser = cloneUser(user);
console.log(clonedUser);

function rollDice(a, b) {
    let aAttempts = 0;
    let bAttempts = 0;
    let winner = '';
  
    while (true) {
      const aRoll = Math.floor(Math.random() * 6) + 1;
      const bRoll = Math.floor(Math.random() * 6) + 1;
  
      if (aRoll === 3) {
        winner = 'a';
      break;  } else if (bRoll === 3) {
        winner = 'b';
        break;
      }

    }
   
    if (aAttempts < bAttempts) {
        return 'a';
      } else if (bAttempts < aAttempts) {
        return 'b';
      } else {
        return 'tie';
      }
    }

    console.log(rollDice("a", "b"));