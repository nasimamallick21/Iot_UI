<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Information</title>
    <link rel="stylesheet" href="display.css">
</head>
<body>
    <div class="container">
        <h1>Submitted Information</h1>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $temperature = isset($_POST["temperature"]) ? $_POST["temperature"] : '';
            $humidity = isset($_POST["humidity"]) ? $_POST["humidity"] : '';
            $soilMoisture = isset($_POST["soilMoisture"]) ? $_POST["soilMoisture"] : '';
            $selectedOption = isset($_POST["selectedOption"]) ? $_POST["selectedOption"] : '';
            // $machineName = isset($_POST["machineName"]) ? $_POST["machineName"] : '';

            echo "<p><strong>Temperature:</strong> $temperature</p>";
            echo "<p><strong>Humidity:</strong> $humidity</p>";
            echo "<p><strong>Soil Moisture:</strong> $soilMoisture</p>";
            echo "<p><strong>Selected Option:</strong> $selectedOption</p>";
            // echo "<p><strong>Machine Name:</strong> $machineName</p>";
        }
        ?>
    </div>
</body>
</html>
