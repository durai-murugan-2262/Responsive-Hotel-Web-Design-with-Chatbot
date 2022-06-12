function getBotResponse(input) {
  let chats = {
    hello: "Hello there",
    goodbye: "Goodbye",
    "how many luxury rooms does the hotel have ?":
      " we are having 10 luxury rooms on the top floor of our hotel.",
    "what is the price of an luxury room?":
      "The price of the luxury room is $1000 per day.",
  };
  if (input in chats) {
    return chats[input];
  } else {
    return "Try asking something else!";
  }
}
