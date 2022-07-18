# how to change text
Hi to change text you need to go according to the file for example if you want to change header text goto header.jsx inside components folder

for example you want to change main first section goto the main component inside component folder and then you can see text from there you can change text

# How to change imaegs
to change any image first you need to add image inside src/assets/img folder

and then search for image tag image tag means

you can see import statement on the top of the file and src attribute inside the image tag

import list3 from "../assets/img/list3.png";


<img src={list3} />

now if you want to change this image you can change like this so for example you image name is window.svg



import windowsImage from "../assets/img/window.png";

<img src={windowsImage} />



like this



# how to change links

To change links you need to search to things

Link tag
<Link to="/"></Link>
or a tag
<a href="/"></a>


now you can change the link and add the link inside href or inside too attribute

# how to run this on local server
first the thing you need is code file
then you need to install modules
you can install node modules using npm install command
after installing you can see the extra folder name nodemodules
then the last thing is use npm start command
in this way you can run this on local server
