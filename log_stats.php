<?php
// Version 1.4 - Added version number for tracking
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $type = preg_replace('/[^a-zA-Z0-9_-]/', '', $_POST['type'] ?? 'unknown');
    $value = preg_replace('/[^a-zA-Z0-9_.-]/', '', $_POST['value'] ?? 'unknown');
    $time = $_POST['time'] ?? date('Y-m-d H:i:s');
    $ip = hash('sha256', $_SERVER['REMOTE_ADDR']); // Anonymized
    $query = preg_replace('/[^a-f0-9]/', '', $_POST['query'] ?? ''); // Only allow hex from hash
    
    $file = 'stats.csv';
    $data = [$time, $type, $value, $ip, $query];
    
    $fp = fopen($file, 'a');
    if (!$fp) {
        file_put_contents('errors.log', date('Y-m-d H:i:s') . " - Failed to open $file\n", FILE_APPEND);
        http_response_code(500);
        echo json_encode(['error' => 'Failed to log stats']);
        exit;
    }
    
    if (flock($fp, LOCK_EX)) {
        if (filesize($file) == 0) {
            fputcsv($fp, ['Time', 'Type', 'Value', 'IP', 'Query']);
        }
        fputcsv($fp, $data);
        flock($fp, LOCK_UN);
    } else {
        file_put_contents('errors.log', date('Y-m-d H:i:s') . " - Failed to lock $file\n", FILE_APPEND);
        http_response_code(500);
        echo json_encode(['error' => 'Failed to log stats']);
        exit;
    }
    fclose($fp);
    
    http_response_code(200);
    echo json_encode(['status' => 'logged']);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>