<?php

    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        header(http_response_code(400));
    }

$name = $_POST["name"];
echo $name;
?>
