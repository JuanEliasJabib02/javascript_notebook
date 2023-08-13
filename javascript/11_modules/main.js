/* 
  The main idea behind modules is along us to import and export differents section of code
  from different files into other files wich allow break a part the code into most smaller
  grained files wich makes your code easier to understand and re-facter him after
 */
/* The good practice is that all import files has to stay in the top of the file */

/* We have to indicate to the browser that javascript is using modules */

/**
 * Import the module
 * 
 * Once you've exported some features out of your module, you need to import them
 * to your script to be able to use them, The simplest ways to do this is as follows
 *  */

import { User, Pet } from "./user";

/**
 * You use the import statement, followed by a comma-separated list of the features
 * you want to import wrapped in curly braces,ollowed by the keyword from,
 * followed by the path to the module file — a path relative to the site root
 * 
 * we are using the dot (.) syntax to mean "the current location", 
 * followed by the path beyond that to the file we are trying to find
 */

consosle.log(User,Pet,Car)

/**
 * Renaming import and export 
 * 
 * Once in a while, an imported name happens to collide with some other name that you
 *  also need to use. So ES6 lets you rename things when you import them:
 */

import { Car as Auto } from "./user";






/**
 * 
 * What does import actually do?
 * 
 * Roughly speaking, when you tell the JS engine to run a module, 
 * it has to behave as though these four steps are happening:
 * 
 * 1.Parsing: The implementation reads the source code of the module and checks for syntax errors
 * 2.Loading: The implementation loads all imported modules (recursively). 
 * This is the part that isn’t standardized yet.
 * 3.Linking: For each newly loaded module, the implementation creates a
 * module scope and fills it with all the bindings declared in that module, 
 * including things imported from other modules.
 * 4.Run time: Finally, the implementation runs the statements in the body of each newly-loaded module. 
 * By this time, import processing is already finished, so when execution reaches a
 *  line of code where there’s an import declaration…
 */