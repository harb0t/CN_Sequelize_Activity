# Code Nation Sequelize Activity

## What is this?
This is an activity to build a command line interface (CLI) that allows users to add movies to a MySQL database.

## How do I install this?
Clone the repositry and run **'npm install'** to install needed dependancies. You will firstly need to link it to a database by creating a MySQL database, then add the following line to the **.env** file to the **src** folder:

MYSQL_URI = (*your SQL URI here*)

## How do I use it?
Commands can be entered into the terminal to affect the database. All commands begin with **node src/app.js** followed by the command.

    - To add a film (option to add an actor)
    --add --title ">Film name here<" *(optional: -- actor ">Actor name here<")*

    - To list all enteries
    --list

    - To alter an entry
    --update --title ">an exisiting title in database here<" --newtitle ">replacement title here<"  (optional: --newactor ">new actorname here<"

    - Remove an entry
    --delete --title ">an exisiting title in database here<"

