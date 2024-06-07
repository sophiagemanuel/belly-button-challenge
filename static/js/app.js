// Build the metadata panel
function buildMetadata(sampleID) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let sampleMetaData = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let resultArray = sampleMetaData.filter(sample => sample.id == sampleID);
    let result = resultArray[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let metaPanel = d3.select('#sample-metadata');

    // Use `.html("") to clear any existing metadata
    metaPanel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    //Creating the Object entries to find the result and for each result take the key and value and turn into a text that says the key and value
    Object.entries(result).forEach(([key, value])=> {
      metaPanel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let sampleArray = data.samples;
    //console.log the samples array
    //console.log(sampleArray);

    // Filter the samples for the object with the desired sample number
    //console.log the sample
    let filteredSampleArray = sampleArray.filter(sampleObj => sampleObj.id == sample);
    

    let filteredSample = filteredSampleArray[0]
    //console.log(filteredSample);

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = filteredSample.otu_ids;
    let otu_labels = filteredSample.otu_labels;
    let sample_values = filteredSample.sample_values;
    // Build a Bubble Chart
    //First creating the bubbleTrace
    //Using https://plotly.com/javascript/colorscales/ to find the 'Earth' colorscale
    let bubbleTrace = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth'
      }
    };

    //Then creating the bubbleLayout
    let bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: {title: 'Number of Bacteria' },
      yaxis: {title: 'OTU ID' },
    };

    // Render the Bubble Chart
    //Putting bubbleTrace into [] in order for it to initialize
    let bubbleData = [bubbleTrace];
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    //Getting top 10 results in descending order
    // Don't forget to slice and reverse the input data appropriately
    let ytick = otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();
    let topSampleValues = sample_values.slice(0, 10).reverse();
    let topOtuLabels = otu_labels.slice(0, 10).reverse();
    // Build a Bar Chart
    //Creating barTrace with our x, y, text, type
    let barTrace = {
      x: topSampleValues,
      y: ytick,
      text: topOtuLabels,
      type: 'bar',
      orientation: 'h'
    };
    //Creating our barLayout with main title and axis titles
    let barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      xaxis: {title: "Number of Bacteria" }
    }

    let barData = [barTrace];

    // Render the Bar Chart
    Plotly.newPlot('bar', barData, barLayout);

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let sampleNames = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select('#selDataset');

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    sampleNames.forEach((sample)=>{
      dropdown.append("option").text(sample).property("value", sample);
    });

    // Get the first sample from the list
    let firstSample = sampleNames[0];

    // Build charts and metadata panel with the first sample
    buildMetadata(firstSample);
    buildCharts(firstSample);
  });
}

// Function for event listener
//Using the function OptionChange to change the chart and metadata panel each time a newsample is changed
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();
