
$(function () {
    $('#countryId').on('change', function () {
        var id = $(this).val();
        if (id != "") {
            $.ajax({
                type: 'GET',
                url: 'AjaxCall',
                data: { 'cid': id },
                datatype: 'json',
                success: function (data) {
                    var items = "";
                    $.each(data, function (i, state) {
                        items += '<option value="' + state.Value + '">' + state.Text + '</option>';
                    });
                    $('#stateId').html(items);
                }
            });
        }
    });
});
