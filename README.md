# lets-endorse-backend

## Problem Statement :-

## Create an express POST API that takes in a JSON object as the request body and returns the response with a flattened JSON object with the data type of each child field.

Example:

Sample Request body:

{
"\_id" : 456,
"basic" : {
"address" : {
"line2" : "37, Vrindavan Colony",
"city" : "Sonbhadra",
"district" : "Sonbhadra",
"state" : "Uttar Pradesh",
"line1" : "Sector 6A Sonbhadra",
"country" : "India"
},
"employer" : "",
"altMobileNumber" : "",
"identityType" : [
"Aadhaar"
],
"source" : "Agent",
"dob" : "1986-03-03T07:52:43.767Z",
"gender" : "Male",
"educationalQualification" : "Post-graduate",
"specializationOfEducation" : "Commerce",
"religion" : "Hinduism",
"category" : "General",
"pwd" : "",
"employmentStatus" : "Unemployed",
"currentAnnualIncome" : "Under INR 25000",
"experience" : "9 yrs",
"mobileNumber" : "894xx508xx",
"name" : "Abhijeet Roy",
"phase" : "Start-up",
"pincode" : 231219
}
}

Sample response body:

{
"\_id" : ‘Number’,
"basic.address.line2" : “String”,
"basic.address.city" : “String”,
"basic.address.district" : “String”,
"basic.address.state" : “String”,
"basic.address.line1" : “String”,
"basic.address.country" : “String”,
“basic.employer”: “String”,
“basic.altMobileNumber”: “String”,
.
.
.
}

# In the project directory, you can run:

### `npm start`

### Deployed Link - https://lets-endorse.herokuapp.com/user