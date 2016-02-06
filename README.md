[![Build Status](https://travis-ci.org/mw222rs/ganmi.svg?branch=master)](https://travis-ci.org/mw222rs/ganmi)

# ganmi
A super simple watch tool written in node that executes any given command when something changes.

## Usage:

`$ ganmi <DIRECTORY> <COMMAND> <OPTIONAL REGEX>`

The optional regular expression is used to match the name of the file that has changed, giving you the opportunity to only run the passed command when certain files has been changed. If no third parameter is passed in the regex defaults to `.*` which matches anything.

Example: let's say you are making you way through the [Ruby Koans][1] exercises and want to watch the current directory and on every change to a `.rb`-file run the `rake` command you would enter:

`$ ganmi . rake '\.rb'`

* `.` is used to watch the current directory
* `rake` is the command that we want to call
* `'\.rb'` is a regular expression matching any files ending with `.rb`.

## Things to be aware about

* If the command parameter is a single word, like `rake` in the example above, it can be passed in without quotes - if it contains of more than one word you will have to put quotes around it.
* The RegEx paramater always has to be put within quotes.

[1]: http://rubykoans.com/
