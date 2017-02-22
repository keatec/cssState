# cssState


Libary to Manage States (like "LogedIn", "Public") of SinglePage HTML Sites using automated generated CSS classes.


## Installation

    bower install cssState

## Usage

Use the following Sample Code to Include Libary

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link href="css/cssState.css" rel="stylesheet">
    </head>
    <body class="cssStateMain">

        <div class="cssStateController">
        </div>
        <script src="js/jquery.min.js"></script>
        <script src="js/cssState.js"></script>
        <script>
            cssState.addState('login',['on','off']);
            cssState.addStaet('user',)
        </script>
    </body>
    </html>

## Classes

    cssStateMain

Defines scope for cssState (body as default)

    cssStateShowWhen {statename}_is_{state}

Show the element, if the state `{statename}`  has the specific  value `{state}`

    cssStateController

defines a place where the libary creates a debug control to change all states interactiv