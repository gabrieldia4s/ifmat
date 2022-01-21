<?php
session_start();
ob_start();
    
define('HOST', 'localhost');
define('USER', 'id17547366_ifmath');
define('PASS', 'IFRN.math2021');
define('DBNAME', 'id17547366_dbmath');

global $pdo;

try {
    $pdo = new PDO('mysql:host=' . HOST . ';charset=utf8;dbname=' . DBNAME . ';', USER, PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
}

