# cssState


## Description
Libary to Manage States (like "LogedIn", "Public") of SinglePage HTML Sites using automated generated CSS classes.


## Installation

    bower install cssState

You need to reference the css and js inside HTML site
```html
<link href="css/cssState.css" rel="stylesheet">
<script src="js/cssState.js"></script>
```
During page `onload` you  
* define states
* set start states
* Activate Libary
```Javascript
cssState.add('login',['on','off']);
cssState.add('user',['public','admin','expert']);
cssState.login('off');
cssState.user('public');
cssState.init();
```
## Requirements

JQuery is required

## Classes

    cssStateMain

Defines scope for cssState (body as default)

    cssStateShowWhen {statename}_is_{value}

Show the element, if the state `{statename}`  has the specific  value `{value}`

    cssStateController

defines a place where the libary creates a debug control to change all states interactiv

## Javascript Object

    cssState.add({statename},[{value1},{value2},...]);

Add a state {statename} with possible values 

    cssState.init();

Definition is finished, compile states and add the result as local css style.

    cssState.{statename}({value});

Activate a value {value} for state {statename}.   
Can also be used to define start values for states before cssState.init()


## Sample (--> sample.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link href="css/cssState.css" rel="stylesheet">
</head>
<body class="cssStateMain">
    <div class="cssStateShowWhen login_is_off">
        User is Loged out <button type="button" onclick="cssState.login('on')">Login...</button>
    </div>
    <div class="cssStateShowWhen login_is_on">
        User is Loged in<button type="button" onclick="cssState.login('off')">Logout...</button>
    </div>
    <div class="cssStateShowWhen user_is_admin" >I'm visible for Admins</div>
    <div class="cssStateHideWhen user_is_public" >Not Visible to Public</div>
    <div class="cssStateController">
        <!-- 
            a HTML Form to select the different state interactively is
            created inside this TAG
        -->
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>    
    <script src="js/cssState.js"></script>
    <script>
        /* Config states on Startup*/

        cssState.add('login',['on','off']);
        cssState.add('user',['public','admin','expert']);

        /* Set States on Startup */

        cssState.login('off');
        cssState.user('public');

        /* Startup using states currently set (compile CSS and add to Header Section) */
        cssState.init();

        /* 
            Form This point you can set the States using
             cssState.{statename}({state});
        */
    </script>
</body>
</html>

```

