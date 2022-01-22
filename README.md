# BillTracker Chrome Extension 

I've built this as a modification of a Scrimba course project. Find more information on Scrimba at www.scrimba.com

This was a very fun project where I turned the Scrimba project: "lead tracker" into a bill tracker. The lead tracker captured the current url and added it to a list that was displayed and stored in local storage. I chose to modify this so that I could use it to keep track of all the bills I pay monthly, that are not on autopay. After storing all the links to the bills in the extension, I began thinking of what features would be helpful. 

The first thing I changed was I removed the ability to input a URL and instead moved everything over to saving the current tab. This worked much better for the idea of keeping a list of bills to be paid monthly. 

Then I added the ability to delete each individual item. This was a challenging feature to add and took me awhile to figure out. The biggest piece that I learned here was that I could dynamically create delete buttons when the links were rendered such that each button had a unique class name that could then be targeted when the delete button was clicked.

The final two features I added were the ability to search through the bills and only display ones that matched the search query, and an open all button which is the most useful part of this extension. When you click open all it creates new tabs in your chrome window for each of the different bills you have saved. The idea is that each month you can click one button to open all of the bills that need to be paid, and you don't have to try to remember each one. 


