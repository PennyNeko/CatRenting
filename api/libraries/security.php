<?php
/**
 * Created by PhpStorm.
 * User: Dimitris
 * Date: 6/8/2017
 * Time: 8:55 PM
 */
function isLoggedIn()
{
    return $_SESSION['loggediIn'] ;
}

function mustBeLoggedin(){
    if(!$_SESSION['loggediIn']){
        session_abort();
        session_destroy();
        exit();
    }
}
function login ($username, $password){
    $conn = conn();
    $results = $conn->select('Users','*',['Username'=>$username,'Password'=>$password]);
    if(count($results) == 1){
        $_SESSION['userID']  = $results[0]['id'];
        $_SESSION['username'] = $username;
        $_SESSION['loggediIn'] = true;
    }else{
        $_SESSION['loggediIn'] = false;

    }
}