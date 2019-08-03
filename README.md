# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we click on https://www.techtonic.com/ our web browser and computer work together to prepare a packet of information. In this packet is the address for www.techtonic.com's web server. Our computer takes this packet and sends it through our internet cables to the nearest router, a device that directs traffic. If the router doesn't recognize the address it will send the packet to the nearest Domain Name Server, which is like a phone book of web addresses. The DNS will look up the address from our packet and send it to Techtonic's server. A connection is made between our computer and Techtonic's server to send information back and forth very quickly.

## From start to finish, how does data reach you to be rendered in the browser?

Once a request of a webserver is made and a TCP handshake is established with the client, information is sent in the form of datagrams or packets. These datagrams carry all the necessary files (HTML, CSS, JS) for a website. If there are a lot of files, there will be multiple datagrams to reduce the size of the data being transported. When that data is received by our computer, it will check to ensure the information is complete before it is passed along to the web browser to be rendered.

## What code is rendered in the browser?

HTML, CSS, and JavaScript are rendered in the web browser. HTML is the skeletal structure of the web page, CSS is the coloring and style of the web page, and JavaScript is the functionality of the web page.

## What is the server-side code’s main function?

The function of server-side code is to manage requests made by the client. Rendering new web pages, or processing user input, or limiting client side access to protect source code data.

## What is the client-side code’s main function?

The client-side's main function is to give the client something to interact with. By layering HTML, CSS, and JavaScript we give the users text to read, colors and styles to look at, and functionality to interact with.

## What is runtime?

Runtime is basically how long an application has been running for when you turned it on.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Storage limits are dynamic in that there are a few limiting factors. The global limit is half of your hard drives free disk space. There is a Group Limit as well, which is 20% of the global limit. If these are exceeded, they have protocols for deleting the least used data.

## How many instances of the server-side code are available at any given time?

This question has me a little stumped, and my research hasn't turned up much on the topic. However, in the IT Support Specialist I took, we covered server instances that could manage multiple web services on the same webserver based on how much of the servers resources you needed. In some instances the server itself can create or remove instances based on need.

## How many instances of the databases connected to the server application are created?

I believe the instances of the databases are created based on need or request. Only being limited by the resources of the server associated with the database.
