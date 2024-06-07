# belly-button-challenge
Module 14 Challenge

For this challenge, I was tasked with creating a website based on the Bellybutton Biodiversity with data from the BellyButton Biodiversity project (https://robdunnlab.com/projects/belly-button-biodiversity/). This website utilizes the dataset to provide interactive visualizations. 

First, the metadata panel was constructed by preforming the following steps:
1. Metadata was retrieved using the d3.json method.
2. The dataset was then filtered to find the object corresponding to the desired sample number.
3. The panel ID was selected using d3 and any existing metadata was cleared using .html("").
4. A loop was created to iterate through the key and value pairs of the filtered metadata and then were used to create text displaying the data with Object.entries.

Second, two charts were constructed using functions and d3.json:
Bubble Chart:
1. Extracted the 'otu_id', 'otu_labels', and 'sample_values' fields from the filtered data sample.
2. Created a trace and layout with appropriate titles and axis names.
3. Used Plotly.newPlot to create the bubble chart.
Bar Chart:
1. Extracted 'ytick', 'topSampleValues', and 'topOtuLabels' to hold the data for the chart.
2. Created a trace and layout with appropriate title and axis names.
3. Used Plotly.newPlot to create the bar chart.

Lastly, to initialize the dashboard the init function was implemented:
1. The names field was retrieved from the dataset.
2. A dropdown menu was created with a new option being appended for each sample.
3. First sample was selected and the metadata and charts were built accordingly.
4. 'optionChanged' function was used to update the charts and metadata panel whenever a new selection was chosen.

By following these steps, an interactive dashboard was created to visualize the Belly Button Biodiversity data.
![image](https://github.com/sophiagemanuel/belly-button-challenge/assets/157437098/86a86a05-6b58-4edd-889f-230fadcd8239)
