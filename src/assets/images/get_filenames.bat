@echo off
setlocal enabledelayedexpansion

rem Set the output file name
set "outputFile=ImageFileNames.js"

rem Clear existing contents of the output file
echo const ImageFileNames = [ > %outputFile%

rem Iterate through all .png files and add their names to the JavaScript array
set "delimiter="
for %%F in (*.png) do (
    set "filename=%%~nF"
    echo !delimiter!'!filename!'>> %outputFile%
    set "delimiter=,"
)

rem Close the array in the output file
echo ]; >> %outputFile%

rem Add export default at the end of the output file
echo export default ImageFileNames; >> %outputFile%

echo File names have been saved to %outputFile%.
pause
