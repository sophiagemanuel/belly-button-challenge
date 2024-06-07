# belly-button-challenge
Module 14 Challenge

For this challenge, I was tasked with creating a website based on the Bellybutton Biodiversity with data from a given dataset (https://robdunnlab.com/projects/belly-button-biodiversity/).
With the given data I first created a metadata panel by getting the metadata, filtering the object with the desired sample number (using =>) and then using d3 to select the panel id and clear any existing metadata. I then created a loop to find the results and then take the key and value pairing to create a text that shows us the data (using Object.entries).

The next part of the challenge was building both charts using function and the d3.json. With this we got the sample's field and filtered it to find the object with the desired sample number (again using =>). From there we created both a bubble chart and a bar chart.
For the bubble chart, first we created otu_ids, otu_labels, and sample_values. Then created a trace and a layout with the title and axis names. Then used Plotly.newPlot to create the bubble chart. 
For the bar chart, we created the ytick, topSampleValues, and topOtuLabels. Then created the bar trace and layout, and again used Plotly.newPlot to plot the bar chart.

Lastly we created the function init inorder to initialize the dashboard. With this we got the names field, the dropdown, a loop to append a new option for each sample, get the first sample, and then build the metadata and charts. Finally I used the optionChanged function to change the chart and metapanel each time a new selection is chosen.

This is a photo of the first result shown on the dashboard.
![image](https://github.com/sophiagemanuel/belly-button-challenge/assets/157437098/86a86a05-6b58-4edd-889f-230fadcd8239)
