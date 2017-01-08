# Personal Web Page
http://kevinli.us **·** https://csLiKevin.github.io

##### Information
This is a project for generating an online resume. Resume information is defined using the [JSON Resume Schema](https://jsonresume.org/schema/).

##### Files
- `resume.json` - Contains resume data you want to share on a public web page.

##### Commands
- `npm run build` - Generate an index.html file using the data in [resume.json](input/resume.json).
- `npm run start` - Create a new JSON Resume template file in the [input](input) folder.
- `npm run validate` - Check [resume.json](input/resume.json) for schema errors.

##### Instructions
1. Clone this repository.
2. Navigate to the root directory of this repository.
3. Install [NodeJS v6.9.4](https://nodejs.org/en/download/). On Ubuntu based systems you need to install node via the terminal with `sudo apt-get install nodejs-legacy`.
4. Run `npm install`.
5. Create a new JSON Resume template file in the [input](input) folder with `npm run start`.
6. Fill out the template file.
7. Generate an index.html file with `npm run build`. Before running this command you should ensure that you have filled out or deleted all the date fields. The theme may not render correctly with invalid dates.
