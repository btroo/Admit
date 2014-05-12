if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Expert, affordable college admissions advice";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });



  Accounts.config({
    forbidClientAccountCreation: true,
    sendVerificationEmail: true
  });
  
  
}