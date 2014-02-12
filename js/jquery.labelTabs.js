(function ($) {
    $.fn.labelTabs = function () {
        function lblFocus() {
            var $field = $(this);
            var $thislabel = $('label[for="' + $field.attr('id') + '"].labelTabs');
            $thislabel.addClass('value-set');
            $field.addClass('value-set');
            if ($field.is('textarea')) {
                $thislabel.animate({'margin-top': '15px'}, 500);
            }
        }
        function lblBlur() {
            var $field = $(this);
            var $thislabel = $('label[for="' + $field.attr('id') + '"].labelTabs');
            if ($field.val() === '') {
                $thislabel.removeClass('value-set');
                $field.removeClass('value-set');
            }
        }
        $('input, select, textarea').each(function () {
            var $field = $(this);
            var $thislabel = $('label[for="' + $field.attr('id') + '"].labelTabs');
            if ($field.is('textarea')) {
                $thislabel.animate({ 'margin-top': '15px' }, 500);
            }
            if ($field.val() !== '') {
                $thislabel.addClass('value-set');
                $field.addClass('value-set');
            } else {
                $thislabel.removeClass('value-set');
                $field.removeClass('value-set');
            }
        });
        $('input, select, textarea').focus(lblFocus).blur(lblBlur);
        return this;
    };
}(jQuery));
