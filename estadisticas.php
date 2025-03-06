<?php
// Version 1.2 - Adjusted for hashed queries
session_start();

$password = 'your_secret_password'; // Change this!
if (!isset($_SESSION['logged_in']) && (!isset($_POST['password']) || $_POST['password'] !== $password)) {
    echo '<form method="POST"><input type="password" name="password"><button type="submit">Login</button></form>';
    exit;
}
if (isset($_POST['password']) && $_POST['password'] === $password) {
    $_SESSION['logged_in'] = true;
}

$file = 'stats.csv';
if (!file_exists($file)) {
    echo "No stats available yet.";
    exit;
}

$stats = [];
$unique_ips = [];
$queries = [];
$fp = fopen($file, 'r');
$headers = fgetcsv($fp); // Skip headers
while (($row = fgetcsv($fp)) !== false) {
    [$time, $type, $value, $ip, $query] = $row;
    $stats[$type][$value] = ($stats[$type][$value] ?? 0) + 1;
    $unique_ips[$ip] = true;
    if ($type === 'click' && $query) {
        $queries[] = ['time' => $time, 'platform' => $value, 'query_hash' => $query, 'ip' => $ip];
    }
}
fclose($fp);

$total_users = count($unique_ips);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Search Stats</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { border-collapse: collapse; width: 100%; max-width: 800px; margin-bottom: 20px; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
        th { background: #f5f5f5; }
    </style>
</head>
<body>
    <h1>Search Stats</h1>
    <p>Total Unique Users: <?php echo $total_users; ?></p>
    <?php foreach ($stats as $type => $values): ?>
        <h2><?php echo ucfirst($type); ?></h2>
        <table>
            <tr><th>Value</th><th>Count</th></tr>
            <?php foreach ($values as $value => $count): ?>
                <tr><td><?php echo htmlspecialchars($value); ?></td><td><?php echo $count; ?></td></tr>
            <?php endforeach; ?>
        </table>
    <?php endforeach; ?>
    <h2>Search Query Hashes</h2>
    <?php if (empty($queries)): ?>
        <p>No queries logged yet.</p>
    <?php else: ?>
        <table>
            <tr><th>Time</th><th>Platform</th><th>Query Hash</th><th>IP (Anonymized)</th></tr>
            <?php foreach ($queries as $entry): ?>
                <tr>
                    <td><?php echo htmlspecialchars($entry['time']); ?></td>
                    <td><?php echo htmlspecialchars($entry['platform']); ?></td>
                    <td><?php echo htmlspecialchars($entry['query_hash']); ?></td>
                    <td><?php echo htmlspecialchars($entry['ip']); ?></td>
                </tr>
            <?php endforeach; ?>
        </table>
    <?php endif; ?>
</body>
</html>