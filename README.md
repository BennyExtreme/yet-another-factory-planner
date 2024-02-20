# Satisfactory Planner
Made with ♥ by [LydianLights](https://github.com/lydianlights/) - [BennyExtreme](https://github.com/BennyExtreme/) fork

# Index
* [Info](#info)
* [Site](#site)
* [Features](#features)
* [Use](#use)
* [Contributing](#contributing)

# Info

This is a tool for designing production chains in [Satisfactory](https://www.satisfactorygame.com/). You can choose what and how many items you want to produce, and what items and recipes are available to you, and the calculator will calculate the entire production chain for those items. This particular tool was built with designing mega-bases with ridiculous production needs in mind, so the solver is fast regardless of the complexity of the production goals.

Powered by [satisfactory-docs-parser](https://github.com/lydianlights/satisfactory-docs-parser).

# Site

https://bennyextreme.github.io/yet-another-factory-planner/

# Features

-   Choose production goals, available resources, and allowed recipes, and the solver will find the best production chain.
-   Every factory is stored as a sharable link for easy saving and collaboration.
-   All calculations are done in-browser... meaning no server communication to slow down site responsiveness. It's FAST!
-   When choosing production goals you can choose either a target item/min rate, a target number of copies of a recipe, or you can maximize the production given the available resources.
-   You can also choose AWESOME Sink Points as a production goal :D
-   Recipes involving Nuclear Power Plants can be used, unlike other current production planners.
-   All weights that the solver uses when determining the best production chain are made transparent and customizable by the user. Want to reduce how much you value Crude Oil and increase how much you value Copper Ore? Well now you can!
-   Hand-gathered materials can optionally be included as inputs.
-   Detailed Reporting section that calculates some interesting statistics including points produced, estimated power usage (or production), and minimum build area.
-   Detailed breakdown of materials needed to construct the factory (which is SUPER helpful for huge factories). This includes a rough estimate on the minimal number of foundations required, and a list of all buildings required and their total build costs.

# Use
> **Note**
> This guide is for Windows

Setup your personal repository for changes:
* [Fork](https://github.com/BennyExtreme/yet-another-factory-planner/fork) this repository
* Go in `Settings` > `Pages`
* In the `Branch` section select `None` and set it to `gh-pages`
* If you have a custom domain set it under the `Custom domain` field

Setup the database for the application:
* Create an account on [Back4app](https://www.back4app.com/)
* Go on [My Apps](https://dashboard.back4app.com/apps) page
* Click on [Build new app](https://dashboard.back4app.com/apps/new)
* Click on `Skip`
* Click on `Backend as a Service`
* Insert a name for your app (like `yet-another-factory-planner`)
* Tick `NoSQL Database` if not already done
* Click on `Create`
* Go in `App Settings`
* In `General` section write down in a notepad or something the `Parse API Address` value
* In `Security & Keys` section write down in a notepad or something the `Application ID` value and the `Master key` value (click on the `Show Master Key` button to reveal)

Setup the API for the application:
* Go on [My Apps](https://dashboard.back4app.com/apps) page
* Click on [Build new app](https://dashboard.back4app.com/apps/new)
* Click on `Skip`
* Click on `Containers as a Service`
* Connect your GitHub account and select your forked repository
* Insert a name for your app (like `yet-another-factory-planner`)
* In the `Build and Deploy` section set the `Root Directory` to `./api/`
* In the `Enviroment Variables` section add the followings variables
  * **Name**: `PORT`

    **Value**: `8000`
  * **Name**: `CLIENT_APP_URL`

    **Value**: `https://<username>.github.io` (If you have set a custom domain in the `Pages` settings of your repository then use that)
  * **Name**: `LOG_LEVEL`

    **Value**: `verbose`
  * **Name**: `PARSE_APP_ID`

    **Value**: Insert the value that you wrote down previously (in the `Application ID` field)
  * **Name**: `PARSE_MASTER_KEY`

    **Value**: Insert the value that you wrote down previously (in the `Master key` field)
  * **Name**: `PARSE_SERVER_URL`

    **Value**: Insert the value that you wrote down previously (in the `Parse API Address` field)
* Click on `Create App`
* On the top left you can find the link of the container (your API link), write it down in a notepad or something

Link your client (frontend) to your API (backend):
* Install [NodeJS](https://nodejs.org/it/download)
* Install [Git](https://git-scm.com/downloads)
* Open the terminal `cmd`
* Clone the repository in your PC `git clone https://github.com/<username>/yet-another-factory-planner.git`
* Open the repository folder `cd yet-another-factory-planner`
* Open the client folder `cd client`
* Install all the requirements using `npm i`
* Open `package.json` and modify the `homepage` value (`https://bennyextreme.github.io/yet-another-factory-planner/`) to `https://<username>.github.io/yet-another-factory-planner/` (If you have set a custom domain in the `Pages` settings of your repository then use that)
* If you have a custom domain set the `predeploy` value to `npm run build && echo <yourDomain> > ./build/CNAME` (e.g. `npm run build && echo satisfactory.example.com > ./build/CNAME`)
* Copy the file `.env.example` to `.env`
* Open it and modify the `REACT_APP_API_BASE_URL` value to the API link you wrote down previously from the Back4app application
* Re-open your terminal in the client folder and execute `npm run deploy`

# Contributing
This site uses React and Typescript, and *requires* Node v16.x.x. The repo is split into two separate apps, client and api.

PR's are always welcome! If you have any trouble getting the project running locally, feel free to ask me any questions!
