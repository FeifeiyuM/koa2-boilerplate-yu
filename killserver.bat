@echo off

echo node server killer 
set /p port=input server port: %port%
echo server port: %port%

for /F "usebackq tokens=2,5" %%i in (`"netstat -ano | findstr %port%"`) do ( 
  	echo pid=%%j
  	set "pid=%%j"
) 
echo pid: %pid%

tskill %pid%

echo press any key to exit...
rem pause>nul