<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
$url = "https://api.spacexdata.com/v3/capsules";


$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case "POST":
        $entityBody = file_get_contents('php://input');
        $obj = json_decode( $entityBody );
        $updatedUrl = $url.'?status='.$obj->status.'&original_launch='.$obj->launch.'&type='.$obj->type;
    
        $response = file_get_contents($updatedUrl);

        if($response != false){
            echo json_encode($response);
        }
        break;
    case "GET":
        $response = file_get_contents($url);

        if($response != false){
            echo json_encode($response);
        }
        break;
}
?>