/* 2014 Dan Richardson */

(function ($) {
    $.fn.labelTabs = function () {
        this.each(function () {
            var $thislabel = $(this);
            var lblForAttr = $thislabel.attr('for');
            var $field = $('#' + lblForAttr);
            if ($field.length === 0) { return; }
            var lblWidth = $field.width();
            var fldZindex = $field.css('zIndex');
            if ($field.is('select')) {
                $thislabel.addClass('selectLabel').css({ width: lblWidth - 5, 'z-index': fldZindex + 1 });
            } else if (!$field.is('textarea')) {
                $thislabel.css({ 'width': lblWidth, 'z-index': fldZindex + 1 });
            }
        });
        function lblFocus() {
            var $field = $(this);
            var $fieldId = $field.attr('id');
            var $thislabel = $('label[for="' + $fieldId + '"].labelTabs');
            $thislabel.addClass('focus');
        }
        function lblBlur() {
            var $field = $(this);
            var $fieldId = $field.attr('id');
            var $thislabel = $('label[for="' + $fieldId + '"].labelTabs');
            $thislabel.removeClass('focus');
            if ($field.val() !== '') {
                $thislabel.addClass('value-set');
            } else {
                $thislabel.removeClass('value-set');
            }
        }
        $('input, select').each(function () {
            var $field = $(this);
            var $fieldId = $field.attr('id');
            var $thislabel = $('label[for="' + $fieldId + '"].labelTabs');
            if ($field.val() !== '') {
                $thislabel.addClass('value-set');
            } else {
                $thislabel.removeClass('value-set');
            }
        });
        $('input, select, textarea').focus(lblFocus).blur(lblBlur);
        return this;
    };
}(jQuery));
