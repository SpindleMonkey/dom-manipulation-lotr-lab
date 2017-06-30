function forgeTheFellowship() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party


   // get the 2 lists of people
   // for each list
   //   add each member to new fellowship list

   var theFellowship = document.createElement("div");
   theFellowship.setAttribute("id", "the-fellowship");

   var fellowshipGroups = document.querySelectorAll("ul");
   for (var i = 0; i < fellowshipGroups.length; i++) {
      for (var j = 0; j < fellowshipGroups[i].length; j++) {
         
      }
   }
}