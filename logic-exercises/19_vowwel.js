// given a string return how many vowel have


const vowels =  (string) => {

  const regex = /["a","e","i","o","u"]/g
  const found = string.match(regex).length

  return console.log(found)
  
}


vowels("juaneliasjabib")