cd %CD%/_internal

:: Start HTTP server with python
RunHiddenConsole.exe python -m SimpleHTTPServer 12345

RunHiddenConsole.exe __start_ssh.cmd