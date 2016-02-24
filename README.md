Zendesk Notification Banner v2
==============================

Have you ever wanted an easy way to notify your end users of System Outages, Important Announcements, or Releases.  If so, then the Notification Banner v2 is exaclty what you are looking for.  In my previous versions we had to add a word like "Issue" in the title of your article in order for the notification to show.  With v2 we are going to leverage the Zendesk API and use the Article labels to display our alerts.


[LIVE DEMO](https://mw-notification.zendesk.com/hc/en-us)


A fair amount of time and effort went into this solution.  If you use it then show your love.

<a href='http://ko-fi.com?i=8d141fc13e992fb' target='_blank'><img style='border:0px' src='http://ko-fi.com/img/button-4.png' border='0' alt='Buy Me A Coffee :) @ ko-fi.com' /></a>

Updates
-------
* 02/08/16 - Initial Commit


Todays Menu
-----------
* Article labels
* API
* CSS
* HTML
* JS/JQuery
* Entypo font icons or FontAwesome (default uses Entypo)

How to Install
--------------

Select your theme and add the following.  

HTML
* Open up the HTML tab in Zendesk and select the "Header".
* Copy the code from the Header.html file above. Paste it into Zendesk.
* The code should be the very top line of your Header file.

CSS
* Open up the CSS tab in Zendesk.
* Copy the code from the zendesk.css file above.  Paste it into Zendesk.
* I recommend to paste the css code to the very bottom of your CSS tab.

JS
* Open up the JS folder tab in Zendesk
* Copy the code from the zendesk.js file above.  Paste it into Zendesk.
* On the first line change "yourdomain" to your zendesk sub-domain.

Article Labels
* Go edit one of your articles and add a label called "alert" all lowercase.

Customizations
--------------
### How do I change the background color of the box?

Edit the background in this statement (near the top of the css)
.ns-box {
    background: rgba(192, 57, 43,0.85);
}

### How do I change the font color of the text?

Edit the color in this statement (near the top of the css)

.ns-box {
    color: rgba(250,251,255,0.95);
}

### How do I define the article label which controls the popup?

Change names=alert on the line below to anything you would like.

> $.get( "https://yourdomain.zendesk.com/api/v2/help_center/articles.json?label_names=alert" ).done(function( data ) {

### How do I remove the article title or article body?

You can edit the line below (to remove the body remove the +item.body+)

<a href="'+ item.html_url + '">' + item.title + '</a>' + item.body + '</p>

### How do I use a different icon?

Zendesk uses Entypo icons by default

In the CSS - change the content. A list of codes can be found here:

Wayback Machine Version of [entypo.com/characters](http://web.archive.org/web/20140912210715/http://entypo.com/characters/)

.megaphone:before { 
  content:'\1F4E3';
}

### Can I use FontAwesome Icons?

You sure can.  I love to use Font Awesome icons in my designs

Edit the CSS and JS
CSS (adjust color and font size for the Font Awesome icon)
.ns-box-inner i {
    color: #fff;
    font-size: 3.8em;
}
JS 
Replace

<span class="megaphone"></span>
With
<i class="fa fa-bullhorn"></i>
