<?php
// Version 1.8 - Enhanced sanitization, error logging, POST validation
session_start();

$recaptchaSecret = '6Leji-YqAAAAAA_wYyB3sw8_0_Assu_7-113q5gg';
if (!isset($_POST['g-recaptcha-response'])) {
    http_response_code(400);
    echo json_encode(['error' => 'reCAPTCHA missing']);
    exit;
}
$recaptchaResponse = $_POST['g-recaptcha-response'];
$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaResponse");
$recaptchaResult = json_decode($verify);
if (!$recaptchaResult->success) {
    http_response_code(403);
    echo json_encode(['error' => 'reCAPTCHA verification failed']);
    exit;
}

$timestamps = isset($_SESSION['submission_timestamps']) ? $_SESSION['submission_timestamps'] : [];
$type = $_POST['type'] ?? '';
$timestamps[$type] = isset($timestamps[$type]) ? $timestamps[$type] : [];
$now = time();
$limit = 5;
$timeWindow = 24 * 60 * 60;
$timestamps[$type] = array_filter($timestamps[$type], fn($ts) => $now - $ts < $timeWindow);

if (!isset($_POST[$type === 'add-site' ? 'url' : 'message']) || empty(trim($_POST[$type === 'add-site' ? 'url' : 'message']))) {
    http_response_code(400);
    echo json_encode(['error' => 'Message or URL is required']);
    exit;
}

$input = $_POST[$type === 'add-site' ? 'url' : 'message'];
$message = $type === 'add-site' ? filter_var($input, FILTER_SANITIZE_URL) : htmlspecialchars(strip_tags($input));
$timestamps[$type][] = $now;
$_SESSION['submission_timestamps'] = $timestamps;

if (count($timestamps[$type]) > $limit) {
    http_response_code(429);
    echo json_encode(['error' => 'Submission limit reached (5 per 24h)']);
    exit;
}

$to = 'fede@barberan.com.ar';
$subject = ucfirst($type) . ' Submission from Search Site';
$body = "Type: $type\nMessage: $message\nTime: " . date('Y-m-d H:i:s');
$headers = 'From: noreply@search.barberan.com.ar' . "\r\n" .
           'Reply-To: noreply@search.barberan.com.ar' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => 'Submitted', 'remaining' => $limit - count($timestamps[$type])]);
} else {
    error_log("Mail failed: Type=$type, Message=$message, Time=" . date('Y-m-d H:i:s'), 3, 'mail_errors.log');
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>