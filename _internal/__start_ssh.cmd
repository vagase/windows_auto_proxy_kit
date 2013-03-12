::===============================

set username=XXX
set passwd=XXX
set host=XXX

::===============================

:relink

¡¡¡¡plink.exe -C -N -D 127.0.0.1:10000 %username%@%host% -pw %passwd% -P 22

goto :relink