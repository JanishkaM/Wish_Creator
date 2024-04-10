@echo off
setlocal enabledelayedexpansion
set "prefix=wish_bg_"
set "counter=1"
for %%F in (*.png) do (
    ren "%%F" "!prefix!!counter!.png"
    set /a counter+=1
)
