<?php
/**
 * Created by PhpStorm.
 * User: Dimitris
 * Date: 6/8/2017
 * Time: 8:46 PM
 */
require_once 'config.php';
header('Access-Control-Allow-Origin: *');
$type = $_GET['type'];

if($_SERVER['REQUEST_METHOD'] === 'GET'){
    switch ($type){
        case'check-username':
            $conn = conn();
            $username = $_GET['Username'];
            if(count($conn->select('users','Username',['Username'=> $username]))==0){
                echo json_encode(['success'=>true]);
            }else{
                echo json_encode(['success'=>false]);
            };
            break;
        case 'getUsername':
            $conn = conn();
            $id = $_GET['id'];
            $results = $conn->select('users',['username'],['ID'=> $id]);
                echo json_encode($results[0]);

            break;
        case 'user':
            $conn = conn();
            $id = $_GET['id'];
            $results = $conn->select('users',
                [
                    'Address',
                    'Age',
                    'Email',
                    'Experience',
                    'FirstName',
                    'Lastname',
                    'Other',
                    'Phonenumber',
                    'Username',
                    'Type'
                ],
                ['id'=>$id]
            );

            echo json_encode($results[0]);
            break;
        case 'cars':
            $conn = conn();
            $id = $_GET['UserID'];
            $results = $conn->select('cars',['ID'],['UserID'=>$id]);
            echo json_encode($results);
            break;
        case 'car':
            $conn  = conn();
            $id = $_GET['id'];
            $results = $conn->select('cars',"*",['ID'=>$id]);
            echo json_encode($results[0]);

    }




}

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    switch ($type){
        case 'register-user':
            $conn = conn();
            if(   $conn->insert('users',[
                'FirstName'=>$_POST['FirstName'],
                'LastName' => $_POST['LastName'],
                'Username' => $_POST['Username'],
                'Email' => $_POST['Email'],
                'Age' => $_POST['Age'],
                'Phonenumber' => $_POST['Phonenumber'],
                'Address' => $_POST['Address'],
                'Gender' => $_POST['Gender'],
                'Password' => $_POST['Password'],
                'Type' => $_POST['Type'],
                'Experience' => $_POST['Experience'],
            ])){
                echo json_encode(['success'=>true]);
            }else{
                echo $conn->error();
            }
            break;
        case 'login':
            $results = [];
            $conn =  conn();
            $password = $_POST['password'];
            $username = $_POST['username'];
            $results = $conn->select('Users',['ID','Type'],['Username'=> $username, 'Password' => $password]);
            if(count($results) == 1 and $results != false){
               $results = ['success'=>true, 'id'=> $results[0]['ID'],'type'=>$results[0]['Type']];
            }else{
                $results =  ['success'=>false];
            }
            echo json_encode($results);
            break;
        case 'addCar':
            $results = [];
            $conn= conn();
            if($conn->insert('cars',[
                'Brand'=> $_POST['Brand'],
                'Price' => $_POST['Price'],
                'Cubemtr'=> $_POST['Cubemtr'],
                'Other'=> $_POST['Other'],
                'Lat' => $_POST['Lat'],
                'Long' => $_POST['Long'],
                'Model' => $_POST['Model'],
                'UserID' => $_POST['UserID']
            ])){
                 $results=['success',true];
            }else{
                 $results = ['success',false];
            }
            echo json_encode($results);
    }




}
