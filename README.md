labelTabs
=========

Turns form labels into a tab that matches the field.  It is meant to look like the label is inside the field, but adjusts when focused or complete.

To use:
   Include a copy of the css, a copy of jQuery and the labelTabs.js plugin in the <head> of your page.

      Example:
         <link href="css/style.css" rel="stylesheet" type="text/css" />
	       <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
         <script src="js/jquery.labelTabs.js" type="text/javascript"></script>
   
   In your form, add the class "labelTabs" to your <label>
   
      Example:
         <label for="textField" class="labelTabs">Text Field</label><br />
         <input type="text" id="textField" />
         
That's it. You can adjust colors and border-radius as you feel necessary in the css file.
