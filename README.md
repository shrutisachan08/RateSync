## RateSync
RateSync is a web-based tool designed to convert CodeChef ratings to Codeforces ratings and vice versa. The project analyzes the relationship between ratings on these two platforms using data analysis techniques. The front end is built using HTML, CSS, and JavaScript, while the backend utilizes Python for data processing and visualization.

## Features
Rating Conversion: Converts CodeChef ratings to Codeforces ratings and vice versa. Correlation Analysis: Computes the correlation between CodeChef and Codeforces ratings. Data Visualization: Generates scatter plots and regression lines to visualize the relationship between the two ratings. Technologies Used

## Frontend
HTML: Structure and layout of the web application. CSS: Styling for a visually appealing user interface. JavaScript: Interactive elements and logic for handling user inputs.

## Backend
Python Libraries: Pandas: For reading and cleaning the dataset. NumPy: For statistical calculations and processing. Matplotlib: For generating scatter plots and visualizing the correlation. Seaborn: For drawing regression lines and enhanced data visualizations.

## How It Works
Data Processing: Load the CSV file using Pandas and drop rows with missing values. Calculate the correlation between CodeChef and Codeforces ratings using .corr(). Visualization: A scatter plot is created to display the relationship between CodeChef and Codeforces ratings. The correlation coefficient is displayed in the title of the scatter plot. A regression line is drawn on the scatter plot using Seaborn to represent the trend between the two ratings. Statistical Calculation: The code calculates the slope and intercept of the best-fit line using manual calculations via NumPy.

## Steps to Run the Project
Clone the repository. Ensure Python is installed. Replace the path in the pd.read_csv() line with your dataset's location. The front end is built using HTML, CSS, and JavaScript. You can host it on any web server or open the index.html file in your browser.

## Visual Outputs
Scatter Plot: Shows the relationship between CodeChef and Codeforces ratings with correlation coefficient. Regression Line Plot: Displays the regression line overlaying the scatter plot for better understanding of the trend.

