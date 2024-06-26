//.toLocaleString() = returns a string witha language
//                    sensitive representation of a number

// Intl.NumberOfFormat()

//number.toLocaleString("local",{options});

// 'locale' = specify the language (undefined = default set in browser)
//'option' = object with formatting option

let number = 123456.789;

//number = number.toLocaleString("de-DE") //GERMANY
//number = number.toLocaleString("hi-IN")   //India
// number = number.toLocaleString("en-Us") // UNITED STATE
// number = number.toLocaleString(undefined);
//number = number.toLocaleString("en-US",{style: "currency",currency:"USD"});
number = number.toLocaleString("de-DE")


console.log(number);