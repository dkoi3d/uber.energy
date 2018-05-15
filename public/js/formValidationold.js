/**
 * Created by srfit on 8/7/2017.
 */

$('.ui.form')
    .form({
        fields : validationRules,
        inline : true,
        on     : 'blur'
    })
;

$('#submitButton').on('click', function(e){
    e.preventDefault();
    $('.ui.form').form('validate form');
});



$('.ui.form')
    .form({
        on: 'blur',
        inline: true,
        fields: {
            name: {
                identifier: 'firstName',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter your name'
                    }
                ]
            },
            address: {
                identifier: 'homeAddress',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter your address'
                    }
                ]
            },
            gender: {
                identifier: 'gender',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please select a gender'
                    }
                ]
            },
            username: {
                identifier: 'username',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter a username'
                    }
                ]
            },
            password: {
                identifier: 'password',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter a password'
                    },
                    {
                        type   : 'minLength[6]',
                        prompt : 'Your password must be at least {ruleValue} characters'
                    }
                ]
            },
            terms: {
                identifier: 'terms',
                rules: [
                    {
                        type   : 'checked',
                        prompt : 'You must agree to the terms and conditions'
                    }
                ]
            }
        },
        onSuccess: function(event, fields){
            console.log("on success");
            submitInfo();
            event.preventDefault();

        },
        onFailure: function(event, fields){
            $('#info').html("on failure");
            console.log("on failure");

            event.preventDefault();
        }
    })
;

