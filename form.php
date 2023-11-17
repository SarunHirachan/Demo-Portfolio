<?php

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $fullName = $_POST['fullname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate the data (you may add more validation)
    if (empty($fullName) || empty($email) || empty($message)) {
        die('Please fill in all required fields.');
    }

    // Connect to MySQL database (update with your database credentials)
    $conn = new mysqli("localhost", "root", "", "portfoportfolio_db");

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert data into the table
    $sql = "INSERT INTO form_data (full_name, email, message) VALUES ('$fullName', '$email', '$message')";
    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
} else {
    // Redirect to the form page if accessed directly
    header("Location: your_form_page.html");
    exit();
}

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert data into the table
$sql = "INSERT INTO form_data (full_name, email, message) VALUES ('$fullName', '$email', '$message')";
if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();

error_reporting(E_ALL);
ini_set('display_errors', 1);


?>
