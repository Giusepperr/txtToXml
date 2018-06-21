
# txt To xml nodejs script
this is a super simple stupid txt to xml.
the input is a txt file which defines the tags and the parent-child relationship with tabs
the tag needs to be wrote only one time and all the child need to have at most 1 tabulation per child level.

here an example:
```
hotelArray
	hotel1
		roomArray
			room1
			room2
	hotel2
		roomArray
			room1
			room2
	hotel3
		roomArray
			room1
			room2

```
```xml
<hotelArray>
    <hotel1>
        <roomArray>
            <room1>
            </room1>
            <room2>
            </room2>
        </roomArray>
    </hotel1>
    <hotel2>
        <roomArray>
            <room1>
            </room1>
            <room2>
            </room2>
        </roomArray>
    </hotel2>
    <hotel3>
        <roomArray>
            <room1>
            </room1>
            <room2>
            </room2>
        </roomArray>
    </hotel3>
</hotelArray>
```
## How to install
you would need node and npm
- clone the repo
- run ```npm install```
- enjoy
## How it works
just run node txtToXml.js and insert the path + the input file name (without .txt)
## Motivation
At work there was an old api to test, the doc were in a word document and no xml schema/example was provided. I immediately thought that was a great opportunity to try out stuff in node writing a fast script which would make me create the xml easier and without mistaking
## License

This project is licensed under the MIT License
