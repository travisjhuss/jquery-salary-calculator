# Project Name

Monthly Salary Counter or How I Learned to Stop Worrying and Use This App to Figure Out Which Employee I Should Fire to Make Budget.

## Description

This is my Salary Counter project for Week 7. This was a fun project to tie in everything we've learned thus far. The app runs pretty simply. There is a header with the title up top and then a single line set of inputs to upload employee data. I set it up so that each input field requires data or the app will not enter the new employee and give the user a missing data message. 

Once each input is filled, the user hits the Submit button which runs the enterEmployee function. That employee now appears on the DOM in a table of Employees. That table displays the data the user inputted but also displays their monthly salary based on their annual salary. A delete button also is added next to each correlating employee. The delete button will remove the employees related table row from the dom and update the total of all monthly salaries. 

At the bottom of the DOM the total of the monthly salaries of each employee is displayed. If that number goes over 20K then the background of that element turns red. 

There were a few issues that came up during this. I was able to get everything in base mode to function smoothly and then hit a wall when I realized even though I could delete the employee row, they still existed in the employee array I had created. I took the instructions advice and researched .text() and .data(). I had a hard time wrapping my head around .data so I played around with it in my JS and figured out how to at least hide data into the row I was creating in my renderToDom function. 

I was using a for..each loop and switched it to manual when I thought i could use the i variable to create a unique ID for each <tr>.I was able to give each <tr> an id of employee[i] which would correlate to its index in the array. Now that each had its own ID, I could use that id to call .data and push a key of Index in there and assign it the i variable. 

Now that I was able to hide data I had to think of the best way to get that data and use it. In my delete function I created a variable that would be the index key value, aka, its index in the array. I logged it to make sure it was right and no matter how many employees I had added or deleted it was correct each time. Then it was a simple matter of using that value to splice that object out of the array. 

From there I just worked on some styling which bootstrap made easier in regards to the table and buttons. Then I just found some complementary colors to the buttons I choose. Adjusted some margins on the elements to make it looks well spaced and called it for this one. 


