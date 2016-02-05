[![Build Status](https://travis-ci.org/mw222rs/ganmi.svg?branch=master)](https://travis-ci.org/mw222rs/ganmi)

# ganmi
A super simple watch tool written in node.

## Usage:

`$ ganmi <DIRECTORY> <REGEX MATCHING FILENAME> <COMMAND>`

So for example, let's say you are making you way through the [Ruby Koans][1] exercises and want to watch the current directory and on every change to a `.rb`-file run the `rake` command you would enter :

`$ ganmi . '\.rb' rake`

[1]: http://rubykoans.com/
