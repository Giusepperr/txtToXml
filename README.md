
# txt To xml nodejs script
this is a super simple stupid txt to xml. 
the txt file needs to be formatted with tabs for each parent - child tag as the following:
root
```
childfirstlevel  // 0 tab
		secondlevel  //1 tab
		secondlevel
			thirdlevel //2 tabs
	childfistlevel
```
```xml
<root>
    <childfirstlevel>
        <secondlevel>
        </secondlevel>
        <secondlevel>
            <thirdlevel>
            </thirdlevel>
        </secondlevel>
    </childfirstlevel>
    <childfistlevel>
    </childfistlevel>
</root>
```
## How it works
just run node txtToXml.js and insert the path + the input file name (without .txt)
## Motivation
At work there was a docu in word for an api that I needed to check out with Postman, all good so far but no xml schema/example was provided. I immediately thought that was a great opportunity to try out stuff in node writing a fast script.
## License

This project is licensed under the MIT License 

