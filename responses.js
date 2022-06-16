function getBotResponse(input) {
  let chats = {
    hello: "Hello there",
    goodbye: "Goodbye",
    "how many luxury rooms does the hotel have ?":
      " we are having 10 luxury rooms on the top floor of our hotel.",
    "what is the price of an luxury room?":
      "The price of the luxury room is $1000 per day.",
    "what is the price of an luxury room":
      "The price of the luxury room is $1000 per day.",
    "is there any budget friendly rooms available":
      "Yes ,we are having budget friendly rooms and the rooms are starting from $300 per day",
    "what are the services that are available in the hotel":
      "We are providing all type of room services including serving food at your room,maintaing cleanliness of the room and providing all your essential needs",
    "what is the cost of the medium range rooms":
      "It cost starts from $500-$700",
    "what are the emergency services that are provided here":
      "At emergency situation immediately the Ambulance will be called and the person will also accompany with staff to take care .Also first aid kit is available and all the necessary precautions has been already done in our hotel",
    "what are the additional services in your hotel":
      "We can arrange a small party for birthday and other celebrations.We can also decorate the rooms for all the special occasions and special food will be provided",
    "what is the best food in the hotel":
      "The signature food of our hotel is the Arabian Chicken Grill.",
    "what is the expensive food in the hotel":
      "The continental food named Lindeth Howe Pudding Desert",
    "what is cost of your food ranges from":
      "Our menu starts at the cost of $10 - $1000",
    "can i get your hotel number": "+044-9087358921,+044-9087357211",
    "can i get your hotel manager number": "+044-9087358921,+044-9087357211",
    "timming of the hotel": "24/7 openning ",
    "how to reserve a rooms":
      "we have a separate reservation page link , its avaliable in our websites",
    "do you have vegetarian,vegan,gluten free option":
      "yes it's upto your order",
    "do you have a kids menu": "yeah! we have a separate menu for kids",
    "is there parking nearby": "yeah its downfloor",
    "is there any discount for bulk rooms":
      "yeah, it's up to the count of members",
    "is there swimming pool":
      "yes, we have a swimming pool , for some rooms have a private swimming pool, its a full pack ",
    "is it safe for family":
      "yes of course , it is fully secured and the hotel are certificated",
    "is there any place for conducting party":
      "yeah we have special space for that and once the halls are booked with rooms we have a special discounts",
  };
  if (input in chats) {
    return chats[input];
  } else {
    return "Try asking something else!";
  }
}
