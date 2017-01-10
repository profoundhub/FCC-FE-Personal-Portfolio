 $(document).ready(function() {
   $('a').attr('target', '_blank');
   $('#contact_form').bootstrapValidator({
       feedbackIcons: {
         valid: 'glyphicon glyphicon-ok',
         invalid: 'glyphicon glyphicon-remove',
         validating: 'glyphicon glyphicon-refresh'
       },
       fields: {
         first_name: {
           validators: {
             stringLength: {
               min: 2,
             },
             notEmpty: {
               message: 'Please enter your first name'
             }
           }
         },
         last_name: {
           validators: {
             stringLength: {
               min: 2,
             },
             notEmpty: {
               message: 'Please enter your last name'
             }
           }
         },
         email: {
           validators: {
             notEmpty: {
               message: 'Please enter your email address'
             },
             emailAddress: {
               message: 'Please enter a valid email address'
             }
           }
         },
         phone: {
           validators: {
             notEmpty: {
               message: 'Please enter your phone number'
             },
             phone: {
               country: 'US',
               message: 'Please enter a vaild phone number with area code'
             }
           }
         },
         comment: {
           validators: {
             stringLength: {
               min: 10,
               max: 200,
               message: 'Please enter at least 10 characters and no more than 200'
             },
             notEmpty: {
               message: 'Please enter some comments'
             }
           }
         }
       }
     })
     .on('success.form.bv', function(e) {
       $('#success_message').slideDown({
           opacity: "show"
         }, "slow") // Do something ...
       $('#contact_form').data('bootstrapValidator').resetForm();

       // Prevent form submission
       e.preventDefault();

       // Get the form instance
       var $form = $(e.target);

       // Get the BootstrapValidator instance
       var bv = $form.data('bootstrapValidator');

       // Use Ajax to submit form data
       $.post($form.attr('action'), $form.serialize(), function(result) {
         console.log(result);
       }, 'json');
     });
 });
 $('#collapseOne').collapse("hide");
 $('.closeall').click(function() {
   $('.panel-collapse.in')
     .collapse('hide');
 });
 $('.openall').click(function() {
   $('.panel-collapse:not(".in")')
     .collapse('show');
 });