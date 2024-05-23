# JavaScript files for various projects

// Check in the command window if Node.js is installed  
node -v

// Install the R package V8, for running JavaScript code in RStudio  
install.packages("V8")

// Create a new V8 context in the R prompt  
ctxt <- V8::v8()

// Launch interactive V8 JavaScript console  
ctxt$console()
