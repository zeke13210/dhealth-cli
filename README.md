# Getting started

`npm install -g .`

1. after installing the package it gives access to the "dhealth" cmd
2. type `dhealth --help` to confirm the help command comes up

# commands

name flags description

1. get -n (name) Return value for a given name
2. delete -n name Remove record with a given name
3. count -v value show count total appearance of given value
4. set -n name -v value add new name & value to db

# sample commands

1. `dhealth get -n Zach` : returns value for Zach
2. `dhealth set -n Zach -v Farley`: adds new name: "Zach" and value: "Farley"
3. `dhealth count -n Farley` : returns count for total times the value: "Farley" appears
4. `dhealth delete -n Zach` : removes field with name "Zach"
