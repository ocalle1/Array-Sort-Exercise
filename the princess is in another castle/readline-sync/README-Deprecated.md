readlineSync
Deprecated Methods and Options
The readlineSync current version is fully compatible with older version.
The following methods and options are deprecated.

setPrint method
Use the print option.
For the Default Options, use:

readlineSync.setDefaultOptions({print: value});
instead of:

readlineSync.setPrint(value);
setPrompt method
Use the prompt option.
For the Default Options, use:

readlineSync.setDefaultOptions({prompt: value});
instead of:

readlineSync.setPrompt(value);
setEncoding method
Use the encoding option.
For the Default Options, use:

readlineSync.setDefaultOptions({encoding: value});
instead of:

readlineSync.setEncoding(value);
setMask method
Use the mask option.
For the Default Options, use:

readlineSync.setDefaultOptions({mask: value});
instead of:

readlineSync.setMask(value);
setBufferSize method
Use the bufferSize option.
For the Default Options, use:

readlineSync.setDefaultOptions({bufferSize: value});
instead of:

readlineSync.setBufferSize(value);
noEchoBack option
Use hideEchoBack option instead of it.

noTrim option
Use keepWhitespace option instead of it.
