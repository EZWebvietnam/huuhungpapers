<script type="text/javascript">
    $(document).ready(function() {
        $("input").each(function() {
            $("input.readonly").css('background-color', '#f2f2f2');
        });
    });
</script>
<script src="<?php echo base_url()?>js_upload/ajaxfileupload.js"></script>
<div class="h-pop">
    <div class="h-icon"></div>
    <h3><?php echo $message[0]['title']?></h3>
</div>
<div class="m-pop">
    <script type="text/javascript" src="<?php echo base_url(); ?>template/ezwebvietnam/admin_cp/js/core/price_format.js"></script>
    <form action="<?php echo base_url(); ?>admin/messageadmin/add_all" enctype="multipart/form-data" method="post" accept-charset="utf-8" id="adminform">
        <table class="form" style="width: 550px;">

            <tr>
                <td class="label">Tiêu đề</td>
                <td colspan="3">
                    <?php echo $message[0]['title']?>
                </td>
            </tr>
            
            <tr>
                <td class="label">Nội dung</td>
                <td colspan="3">
                   <?php echo $message[0]['content']?>
                </td>
            </tr>
           
            <td></td>

            </tr>

        </table>
    </form>
</div>
<script type="text/javascript">
    $(document).ready(function() {
        $('#cost_').priceFormat();
        $("#adminform").validate({
            rules: {
                title: "required",
                content: "required"
               
            },
            messages: {
                title: "Vui lòng nhập tiêu đề",
               
                content: "Vui lòng nhập nội dung"
                

            }
            , submitHandler: function(form) {
                var page = 1;
                dataString = $("#adminform").serialize();
                $.ajax({
                    type: "POST",
                    url: $("#adminform").attr('action'),
                    data: dataString,
                    mimeType: "multipart/form-data",
                    dataType: "json",
                    success: function(data) {
                        $.fancybox.close();
                        reload_callback("<?php echo base_url(); ?>admin/messageadmin/list_message", page, 'message_content');
                        show_msg(data.msg);
                    }
                });
            }
        });
    });
</script>
<script type="text/javascript">
    $(document).ready(function() {
        $("a.grouped_elements").fancybox({
            'padding': 0,
            'titleShow': false,
            'autoScale': false,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'hideOnOverlayClick': false,
            'hideOnContentClick': false,
            'overlayShow': true,
            'type': 'ajax'
        });
    });
</script>