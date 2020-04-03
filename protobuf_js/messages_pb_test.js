var messages = require('./messages_pb');

var message = new messages.MyMessage();

message.setName("John Doe");
message.setAge(25);
message.setPhoneNumbersList(["800-555-1212", "800-555-0000"]);

console.log(message);

// Serializes to a UInt8Array.
var bytes = message.serializeBinary();

var message2 = messages.MyMessage.deserializeBinary(bytes);

console.log(bytes);
console.log(message2);
