# Passgen-script
https://jlevbury.github.io/Passgen-script/ 

## Description
This weeks challenge was to complete supplied scripting , in order to make a functional password generator. This process would incorporate aspects of JavaScript such as function writing, for loops, Math functions and calling of functions based off of user inputs. The result of completing the prompts displayed would present the user with a concatenated password using the fields selected during the prompt process and exclude the items not desired.


## Learning Experience
During the process of completing this script, I found myself having several difficulties in creating the breadcrumb trail of local variables interacting with global variables and incorporation of an event listener. Overall it was a good exercise in getting to know the flexibility of the JavaScript language, even if frustrating at times figuring out the next step for the action to complete correctly. I had attempted implementing logical operators during the "function getPrompts()" but found that I have no fully grasped the effects fully of including these arguments, as when using a "!=" operator for the character selection types, I was getting results returned that included nothing but the items not selected, so it was edited out. 

Another aspect of this exercise was the idea of a more intuitive user interface, as the approach of using a prompt for each selection seemed out of place for me. By selecting "Cancel" the user is able to opt out of a character type, however as a user, I would expect that pressing cancel would bring the operation to a halt, rather than exclude that choice and move forward. So I began to draft up a style of the interface that uses checkboxes for the selection. This is still in revision as I plan to revisit the idea in the future and complete the tool using this method, if only for my own learning experience. So the code for this remains in the index.html and script.js , it has been commented out and serves as a reminder to myself of where I need to evaluate what is written and correct it.



## Installation
N/A

## Usage

![Screenshot (41)](https://user-images.githubusercontent.com/125767916/230437232-1efd59ee-182a-4b0f-8eff-795930f39968.png)
The prompt allowing the user to select the number of characters within the range of 8 to 128.
![Screenshot (40)](https://user-images.githubusercontent.com/125767916/230437214-c95015a6-4361-4b3b-8942-95eabc1713c0.png)
![Screenshot (39)](https://user-images.githubusercontent.com/125767916/230437203-08ab09f5-b422-4244-a883-3b321e91fb7e.png)
An input that falls outside of the range will prompt the user to enter a different value.
![Screenshot (35)](https://user-images.githubusercontent.com/125767916/230437117-52c4b7af-6034-4a89-b9b4-2e001df264be.png)
The prompt for the inclusion of numbers.
![Screenshot (36)](https://user-images.githubusercontent.com/125767916/230437159-9195d514-eba8-48d7-9f09-a14800dd98e5.png)
This prompts for the inclusion of special characters.
![Screenshot (37)](https://user-images.githubusercontent.com/125767916/230437179-0cd47993-cd28-43fe-824b-e093edc0e77d.png)
This prompts for the inclusion of uppercase letters.
![Screenshot (38)](https://user-images.githubusercontent.com/125767916/230437194-83ac95bb-fd9e-49de-b5af-9c5d6ad4660e.png)
This prompts for the inclusion of lowercase letters.
![Screenshot (34)](https://user-images.githubusercontent.com/125767916/230437302-7a1720f5-9c8f-4997-a16b-6f0a2fb5b8ee.png)
The password has been created and is displayed for the user.
## Credits
Source code provided via gitlab for use in coding bootcamp
additional guidance on script formulation researched in reading of "Javascript & JQuery:interactive front-end web development" by Jon Duckett, subject of Math function, Random, For Loops and IF/Else statements.

## License

Please refer to the LICENSE in the repo.



