# Personal Web Page
http://kevinli.us **·** https://csLiKevin.github.io

##### Information
This is a project for to generating an online resume. Resume information is defined using the [JSON Resume Schema](https://jsonresume.org/schema/).

##### Files
- `base.json` - Contains any resume data you want to share on a public web page.
- `contact_info.json` - Contains personal contact information.
- `awards.json` - Contains information about rewards you have received.

##### Commands
- `npm run new_json` - Generates a new JSON Resume template file in the [input](input) folder.
- `npm run build_web` - Generates an index.html file using only the [base.json](input/base.json) file.
- `npm run build` - Generates an index.html file using the [base.json](input/base.json), contact_info.json, and awards.json files.

##### Instructions
1. Clone this repository.
2. Navigate to the root directory of this repository.
3. Install [NodeJS v4.2.4](https://nodejs.org/en/download/). On Ubuntu based systems you need to install node via the terminal with `sudo apt-get install nodejs-legacy`.
4. Run `npm install`.
5. Create a new JSON Resume template file in the [input](input) folder with `npm run new_json`.
6. Fill out the template file.
7. Generate an index.html file with `npm run build_web`. Before running this command you should ensure that you have filled out or deleted all the date fields. Failure to do so can result in the theme rendering incorrectly.
