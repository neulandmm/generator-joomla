@ECHO OFF
WHERE curl
IF %ERRORLEVEL% NEQ 0 (
ECHO curl not found - Windows Environment expected
Powershell.exe -Command "(new-object net.webclient).DownloadFile('https://github.com/joomla/joomla-cms/releases/download/3.5.0/Joomla_3.5.0-Stable-Full_Package.zip', 'joomla.zip')"
ECHO File successfully download - Starting unzip Process...
unzip -qq joomla.zip -d ../htdocs
ECHO Deleting .zip archive now...
del joomla.zip
) ELSE (
curl -sSL https://github.com/joomla/joomla-cms/releases/download/3.5.0/Joomla_3.5.0-Stable-Full_Package.zip --output joomla.zip
ECHO File successfully download - Starting unzip Process
unzip -qq joomla.zip -d ../htdocs
ECHO Deleting .zip archive now
rm -f joomla.zip
)
echo Joomla installation completed!
PAUSE