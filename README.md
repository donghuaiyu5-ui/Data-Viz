# What Does MoMA Collect?

A student data visualization project comparing artwork counts across MoMA classifications. Built with HTML, CSS, JavaScript, and Chart.js 4.4.8, with a white layout inspired by the MoMA website, a GIF banner, hover tooltips, and a full classification table.

## Run
Open this folder in VS Code and use Live Server on index.html, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000. Chart.js loads from jsDelivr and requires internet access. Publish the folder contents to a GitHub repository and enable GitHub Pages from the main branch root.

## Data
Original source: https://github.com/MuseumofModernArt/collection (CC0 metadata). The supplied Artworks.json has 160,700 records. JavaScript counts the Classification field, merges blank and `(not assigned)` values as Unknown, sorts counts, and charts the top 15 categories plus Other. All classifications remain in the table. These are dataset records, not currently displayed artworks. Original classification names are preserved, including archive categories. Dataset counts may differ from later MoMA releases.

## Resources and AI disclosure
Chart.js documentation: https://www.chartjs.org/docs/latest/charts/bar.html. Chart.js distribution: https://cdn.jsdelivr.net/npm/chart.js@4.4.8/dist/chart.umd.min.js.

OpenAI Codex helped brainstorm three chart ideas, draft design notes, and write the HTML, CSS, and JavaScript for data aggregation, chart configuration, tooltips, and responsive styling. Example prompts: “Compare the number of artworks in different MoMA classifications” and “Make the page look like an art exhibition poster, with an off-white background, a large heading, and a colorful horizontal bar chart.” Review and personalize this disclosure before submission if you make further changes.

Visual design reference: https://www.moma.org/. The GIF banner (1.gif) was supplied by the student; add its original source and creator here before submission.

## Smaller data file
The website loads data/classifications.json, derived from the original Artworks.json. It retains all 160,700 records but only the Classification field used by the chart. No records were sampled or removed. The large original file is kept locally and excluded from Git.
