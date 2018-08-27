#Plant Identification Project
I have always wanted to know more about plants... what their names are, whether they are native or come from other places, whether they are edible or medicinal or decorative or provide ecosystem services. Today, after coming back from a camping trip, I downloaded a free, publicly available [plant dataset]('https://www.plants.usda.gov/java/downloadData?fileName=plantlst.txt&static=true') from the US Department of Agriculture's website. I'd like to make an app that helps me organize all this information, so I can look back at it later.

##Data Sources
The USDA data set provides data on 90,909 plants. It has 6 columns: 
* "Symbol"
* "Synonym Symbol"
* "Scientific Name with Author"
* "Common Name"
* "Family"

I would also like to be able to incorporate researched information, like:
* Habitat
* Uses
* Photo

And potentially even:
* Personal/memorable encounters with said plant

But I'd like to avoid getting too ambitious too early.

##Aproach
###Phase I
1. Create a MySql database, and write a script to parse the raw data and write it to the database. Also add columns to the database for other optional fields.
2. Create a simple API using Sinatra, that allows you to read from the database. At this stage, let it be READ only. One endpoint returns the list view of the plants in the db (should be paginated, probably as a list of key:value pairs in the format common_name: symbol). The other endpoint allows the usesr to get all the data on one plant, given the symbol. As symbols are a unique alphanumeric string, it makes sense to me to use them as page slugs as well.
3. Create a basic React app for both of these views. Use [create-react-app]('https://github.com/facebook/create-react-app'). It should be kinda fun so I'll want to use it and keep working on it.

###Phase II
Create an EDIT page, where you can add additional data about the plant. Don't let the user update "scientific" fields. Don't bother with image uploading yet, just have a place to enter an image_url. Update the detail page to display this data.

### Beyond (?)
Optimism is good, but let's not get carried away here.