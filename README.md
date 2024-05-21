# JavaScript
JavaScript code files for various projects.

### Check in command window if Node.js is installed
node -v

### Run JavaScript code in RStudio using package V8
install.packages("V8")
### Create in R prompt a new V8 context
ctxt <- V8::v8()
### Launch interactive V8 JavaScript console
ctxt$console()
