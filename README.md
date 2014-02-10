labelTabs
=========

Turns form labels into a tab that matches the field.  It is meant to look like the label is inside the field, but adjusts when focused or complete.

<b>To use:</b>
   Include a copy of the css, a copy of jQuery and the labelTabs.js plugin in the &#60;head&#62; of your page.

      <b>Example:</b>
         <link href="css/style.css" rel="stylesheet" type="text/css" />
         <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
         <script src="js/jquery.labelTabs.js" type="text/javascript"></script>
   
   In your form, add the class "labelTabs" to your <label>
   
      <b>Example:</b>
         <label for="textField" class="labelTabs">Text Field</label><br />
         <input type="text" id="textField" />
         
You can adjust colors and border-radius as you feel necessary in the css file.
