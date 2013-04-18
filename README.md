# Workinit
A few hacks for Work.com

* select tags with many options become [select2](http://ivaynberg.github.com/select2/).

## Installation instructions 
* Steps to load extension in Chrome
* Clone the repo somewhere local on your machine (git clone https://github.com/micahyoung/workinit/)
* Open Chrome and go to Settings > Extensions
* Enable [Developer mode] checkbox
* Click [Load unpacked extension...]
* Navigate to the root Workinit directory you cloned and click [Select]
* Now go to the [Work.com loops](https://app.work.com/#loops), create a new one, and on mouseover see the select box magically enhance

## Current limitations
* Annoying installation process
* Select2 boxes initialize on mouseover since Select2 needs all option elements to be loaded before it can wrap them. Work.com loads the select content with AJAX so we have to load at the last minute.

## License
MIT
