$(document).ready(() => {
    
    let name = "TON3L"


    $(".sendRequest").click(() => {
        $.post(
            "http://ton3l.com/php/mail.php",
            {
                name: name
            },
            (data, status, error) => {
                alert(data);
            }
        );
    });
});
