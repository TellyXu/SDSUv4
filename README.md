# AI for Health Equity Research Lab website
## React + Vite + TailwindCSS 



public/data.json is the file that contains all the context for the website, providing editability for the website without touching the code.

## How to edit the website

read the Edit_instructions.docx file for more information on how to edit the website

## How to deploy the website

for non-tech user, you can read AWS Deployment Instructions.docx file for more information on how to deploy the website on AWS Amplify, without using github.

for tech guys, you can follow the following steps to deploy the website:

to run the project:
1. `npm install`
2. `npm run dev`

to compile the project into static files:
1. `npm run build`
2. then all static files is in the `dist` folder
3. you can deploy the `dist` folder to any static hosting service freely, like Azure Static Web Apps, AWS Amplify, GCP Static website, etc.
