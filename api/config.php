<?php
/**
 * Created by PhpStorm.
 * User: Dimitris
 * Date: 6/8/2017
 * Time: 8:45 PM
 */
session_start();
require_once 'libraries/Medoo.php';

function conn(){
    return new Medoo\Medoo( [
    'database_type' => 'mysql',
    'database_name' => 'carenting',
    'server' => 'localhost',
    'username' => 'root',
    'password' => ''
    ]);
}

 require_once 'libraries/security.php';
