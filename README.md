What Does MoMA Collect?

In this project, I chose MoMA's collection data to display the number of works in different art categories through a horizontal bar chart. I want to see what types of works MoMA has collected besides paintings, and what are the differences in their quantity.

Project Function
The webpage is created using HTML, CSS, JavaScript, and Chart.exe. The bar chart displays the top 15 categories in terms of quantity, while the remaining categories are merged into 'Other'. When the mouse moves over the column, you can see the number of works and their percentage in the total. At the bottom of the page, you can also expand to view data tables for all categories.

Data source
Data from [MoMA Collection Data]（ https://github.com/MuseumofModernArt/collection ）The original file is' Artworks. json ', containing 160700 work records.
Due to the large size of the original file, I created a simplified version of 'data/classifications. json', retaining only the 'Classification' field required for the charts, while keeping all work records. Records without classification or marked as' not assigned 'are uniformly classified as Unknown.

Operation method
Open the project folder in VS Code and use Live Server to open 'index. html'. The webpage loads Chart.exe through the internet, so it needs to be connected to the internet.

The resources and AI tools used
-Data: [MoMA Collection Data]（ https://github.com/MuseumofModernArt/collection ）.
-Chart tool: [Chart.js]（ https://www.chartjs.org/docs/latest/ ）.
-Page design reference: [MoMA official website]（ https://www.moma.org/ ）The layout mainly refers to the white background, headline, and image area.
-GIF source: Pinterest.
-I used OpenAI Codex to help discuss charts and debugging, as well as adjust page styles and streamline data.
