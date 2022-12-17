/* 4. Use long, descriptive names

A function name should be a verb or a verb phrase, and it needs to communicate its intent,
 as well as the order and intent of the arguments.

A long descriptive name is way better than a short, enigmatic name or a long descriptive comment.
*/

//BAD

/**
 * Invite a new user with its email address
 * @param {String} user email address
 */
function inv(user) { /* implementation */ }



//GOOD


function inviteUser(emailAddress) { /* implementation */ }